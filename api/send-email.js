import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const env = globalThis.process?.env || {};
  const resendKey = String(env.RESEND_API_KEY || "").trim();
  const supabaseUrl = String(env.VITE_SUPABASE_URL || "").trim();
  const supabaseKey = String(env.VITE_SUPABASE_ANON_KEY || "").trim();

  const resend = resendKey ? new Resend(resendKey) : null;
  const supabase =
    supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

  const { name, from, subject, message } = req.body;

  if (!name || !from || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const emailPromise = resend
    ? resend.emails.send({
        from: "fatima-portfolio <onboarding@resend.dev>",
        to: ["fatima.amir.dev@gmail.com"],
        subject: subject || `New inquiry from ${name}`,
        reply_to: from,
        text: `Name: ${name}\nEmail: ${from}\nMessage: ${message}`,
      })
    : Promise.resolve({
        error: { message: "RESEND_API_KEY is not set" },
        skipped: true,
      });

  const dbPromise = supabase
    ? supabase.from("contact_messages").insert([
        {
          name,
          email: from,
          subject: subject || "No Subject",
          message,
          created_at: new Date().toISOString(),
        },
      ])
    : Promise.resolve({
        error: { message: "Supabase is not configured" },
        skipped: true,
      });

  // We'll execute both operations in parallel and catch their errors independently
  const results = await Promise.allSettled([emailPromise, dbPromise]);

  const [emailResult, dbResult] = results;

  // Check Email Result
  let emailSuccess = false;
  if (emailResult.status === "fulfilled" && !emailResult.value.error) {
    emailSuccess = true;
  } else {
    console.error("Email Sending Failed:", emailResult.reason || "unknown");
  }

  // Check DB Result
  let dbSuccess = false;
  if (dbResult.status === "fulfilled") {
    const { error } = dbResult.value;
    if (!error) {
      dbSuccess = true;
    } else {
      console.error("Supabase Save Failed:", error?.message || "unknown");
    }
  } else {
    console.error("Supabase Unexpected Error:", dbResult.reason || "unknown");
  }

  // If BOTH failed, return error
  if (!emailSuccess && !dbSuccess) {
    return res.status(500).json({
      error: "Failed to send email and save to database.",
      details: {
        emailError:
          emailResult.status === "fulfilled"
            ? emailResult.value?.error?.message || null
            : emailResult.reason?.message || String(emailResult.reason || ""),
        dbError:
          dbResult.status === "fulfilled"
            ? dbResult.value?.error?.message || null
            : dbResult.reason?.message || String(dbResult.reason || ""),
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
