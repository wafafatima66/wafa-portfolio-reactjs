// import { CONTACT } from "../constants";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePortfolioData } from "../supabase/usePortfolioData";

const Contact = () => {
  const { data, loading, error } = usePortfolioData();

  // Fallbacks in case portfolio data is unavailable
  const CONTACT = data?.aboutMe?.contact || {
    address: "",
    phoneNo: "",
    email: "fatima.amir@example.com",
  };

  const [status, setStatus] = useState({ ok: false, error: null });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ok: false, error: null });
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const subject = formData.get("subject") || "New inquiry from portfolio";
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const message = formData.get("message") || "";

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, name, from: email, message })
      });
      const contentType = res.headers.get('content-type') || '';
      let data = null;
      if (contentType.includes('application/json')) {
        data = await res.json();
      } else {
        // Handle non-JSON responses (e.g., dev server returns HTML)
        const text = await res.text();
        if (!res.ok) throw new Error('Failed to send');
        // If OK but no JSON, still treat as success
      }
      if (!res.ok) throw new Error(data?.error || 'Failed to send');
      setStatus({ ok: true, error: null });
      e.currentTarget.reset();
    } catch (err) {
      // Fallback for local dev: open mail client if API is unavailable
      try {
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const mailto = `mailto:f\n\nFatima.amir.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
        setStatus({ ok: true, error: null });
      } catch (fallbackErr) {
        setStatus({ ok: false, error: err.message || 'Could not send email.' });
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <div id="contact" className="min-h-screen border-t border-stone-900 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-6 sm:my-8 lg:my-10 text-center text-2xl sm:text-3xl lg:text-4xl font-bold"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter max-w-2xl mx-auto">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-3 sm:my-4 text-sm sm:text-base lg:text-lg text-gray-300"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-3 sm:my-4 text-sm sm:text-base lg:text-lg text-gray-300"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.5 }}
          href={`mailto:${CONTACT.email}`}
          className="inline-block border-b border-purple-400 text-purple-400 hover:text-purple-300 hover:border-purple-300 transition-colors duration-300 text-sm sm:text-base lg:text-lg break-all"
        >
          {CONTACT.email}
        </motion.a>
      </div>

      {/* Contact Form */}
      <div className="mt-10 max-w-2xl mx-auto">
        <motion.form
          onSubmit={handleSubmit}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-4 bg-gray-900/40 backdrop-blur-md rounded-2xl border border-purple-500/20 p-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 px-4 py-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 px-4 py-3"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 px-4 py-3"
          />
          <textarea
            name="message"
            placeholder="Tell me about your project or issue..."
            required
            rows={5}
            className="w-full rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 px-4 py-3"
          />
          {/* This form uses mailto: to open the user's email client */}

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={sending}
              className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium px-6 py-3 rounded-md transition-colors ${sending ? 'opacity-70 cursor-not-allowed' : 'hover:brightness-110'}`}
            >
              {sending ? 'Sending...' : 'Chat About Your Issue'}
            </button>
            <a href={`mailto:${CONTACT.email}`} className="bg-white text-black font-medium px-6 py-3 rounded-md border border-purple-800 hover:brightness-110 transition-colors">
              Or Email Directly
            </a>
          </div>

          {status.ok && (
            <p className="mt-3 text-green-400">Your message has been sent. I’ll get back to you soon.</p>
          )}
          {status.error && (
            <p className="mt-3 text-red-400">{status.error}</p>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
