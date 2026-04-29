import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const env = globalThis.process?.env || {};
const resend = new Resend(env.RESEND_API_KEY);

// Initialize Supabase client
const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseKey = env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, from, subject, message } = req.body;

  if (!name || !from || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // We'll execute both operations in parallel and catch their errors independently
  const results = await Promise.allSettled([
    // 1. Send Email via Resend
    resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["fatima.amir.dev@gmail.com"],
      subject: subject || `New inquiry from ${name}`,
      reply_to: from,
      text: `Name: ${name}\nEmail: ${from}\nMessage: ${message}`,
    }),
    // 2. Save to Supabase
    supabase.from("contact_messages").insert([
      {
        name,
        email: from,
        subject: subject || "No Subject",
        message,
        created_at: new Date().toISOString(),
      },
    ]),
  ]);

  const [emailResult, dbResult] = results;

  // Check Email Result
  let emailSuccess = false;
  if (emailResult.status === "fulfilled" && !emailResult.value.error) {
    emailSuccess = true;
  } else {
    console.error(
      "Email Sending Failed:",
      emailResult.reason || emailResult.value?.error,
    );
  }

  // Check DB Result
  let dbSuccess = false;
  if (dbResult.status === "fulfilled") {
    const { error } = dbResult.value;
    if (!error) {
      dbSuccess = true;
    } else {
      console.error("Supabase Save Failed:", error);
    }
  } else {
    console.error("Supabase Unexpected Error:", dbResult.reason);
  }

  // If BOTH failed, return error
  if (!emailSuccess && !dbSuccess) {
    return res.status(500).json({
      error: "Failed to send email and save to database.",
      details: {
        emailError: emailResult.reason || emailResult.value?.error,
        dbError: dbResult.reason || dbResult.value?.error,
      },
    });
  }

  // If AT LEAST ONE succeeded, return 200 OK (so user sees success)
  return res.status(200).json({
    success: true,
    emailSent: emailSuccess,
    dbSaved: dbSuccess,
  });
}
