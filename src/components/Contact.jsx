import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePortfolioData } from "../supabase/usePortfolioData";
import { FaTerminal, FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const { data } = usePortfolioData();

  const CONTACT = data?.aboutMe?.contact || {
    address: "Location Data Not Found",
    phoneNo: "-- -- -- --",
    email: "fatima.amir@example.com",
  };

  const [status, setStatus] = useState({ ok: false, error: null });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ok: false, error: null });
    setSending(true);
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: formData.get("subject") || "New inquiry from portfolio",
          name: formData.get("name"),
          from: formData.get("email"),
          message: formData.get("message")
        })
      });
      
      if (res.ok) {
        setStatus({ ok: true, error: null });
        formEl?.reset();
      } else {
        setStatus({ ok: false, error: 'Transmission failed.' });
      }
    } catch (err) {
      setStatus({ ok: false, error: 'Uplink unstable.' });
    } finally {
      setSending(false);
    }
  };

  return (
    /* Changed to h-screen and added flex-col to center the content perfectly */
    <section id="contact" className="relative h-screen w-full flex flex-col justify-center bg-black text-white overflow-hidden p-6 md:p-12">
      
      {/* HUD Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Decorative Frame for Full Screen feel */}
      <div className="absolute inset-6 border border-white/5 pointer-events-none">
        <div className="absolute top-0 left-0 w-8 h-[1px] bg-fuchsia-500" />
        <div className="absolute top-0 left-0 w-[1px] h-8 bg-fuchsia-500" />
        <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-fuchsia-500" />
        <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-fuchsia-500" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 border-l-4 border-fuchsia-600 pl-6">
          <div className="flex items-center gap-3 mb-2">
            <FaTerminal className="text-fuchsia-500 animate-pulse text-xs" />
            <span className="text-fuchsia-500 font-mono text-[10px] font-black uppercase tracking-[0.5em]">
              Establish_Contact // Secure_Uplink
            </span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
            GET_IN_<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-white NOT-italic">TOUCH.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="group border border-white/10 bg-white/[0.02] p-10 relative">
              <div className="absolute -top-px -left-px w-4 h-4 border-t border-l border-fuchsia-500" />
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-fuchsia-500/50 transition-colors">
                    <FaMapMarkerAlt className="text-fuchsia-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-fuchsia-500 uppercase tracking-widest mb-1">Location_Point</p>
                    <p className="font-mono text-sm tracking-tight text-gray-300 uppercase italic">{CONTACT.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-fuchsia-500/50 transition-colors">
                    <FaPhoneAlt className="text-fuchsia-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-fuchsia-500 uppercase tracking-widest mb-1">Voice_Line</p>
                    <p className="font-mono text-sm tracking-tight text-gray-300 italic">{CONTACT.phoneNo}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-fuchsia-500/50 transition-colors">
                    <FaEnvelope className="text-fuchsia-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-fuchsia-500 uppercase tracking-widest mb-1">Data_Email</p>
                    <a href={`mailto:${CONTACT.email}`} className="font-mono text-sm text-fuchsia-400 hover:text-white transition-colors break-all underline decoration-fuchsia-500/30 underline-offset-4">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 bg-white/[0.01] border border-white/5 p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-mono text-gray-500 ml-1">USER_ID</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-black border border-white/10 rounded-none px-4 py-3 font-mono text-xs focus:border-fuchsia-500 focus:outline-none transition-colors placeholder:opacity-20"
                    placeholder="NAME_REQUIRED"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-mono text-gray-500 ml-1">RETURN_PATH</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-black border border-white/10 rounded-none px-4 py-3 font-mono text-xs focus:border-fuchsia-500 focus:outline-none transition-colors placeholder:opacity-20"
                    placeholder="EMAIL_REQUIRED"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-mono text-gray-500 ml-1">PACKET_SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  className="w-full bg-black border border-white/10 rounded-none px-4 py-3 font-mono text-xs focus:border-fuchsia-500 focus:outline-none transition-colors placeholder:opacity-20"
                  placeholder="SUBJECT_LOG"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-mono text-gray-500 ml-1">MESSAGE_PAYLOAD</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-black border border-white/10 rounded-none px-4 py-3 font-mono text-xs focus:border-fuchsia-500 focus:outline-none transition-colors resize-none placeholder:opacity-20"
                  placeholder="START_TYPING..."
                />
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  type="submit"
                  disabled={sending}
                  className="relative group bg-fuchsia-600 text-black px-10 py-4 font-black uppercase text-xs tracking-[0.2em] flex items-center gap-3 hover:bg-white transition-all active:scale-95 disabled:opacity-50"
                >
                  {sending ? 'UPLOADING...' : 'SEND_MESSAGE'}
                  <FaPaperPlane className={sending ? 'animate-bounce' : 'group-hover:translate-x-1 transition-transform'} />
                </button>
              </div>

              {status.ok && (
                <p className="text-green-400 font-mono text-[10px] animate-pulse">&gt; UPLINK_SUCCESSful. TERMINAL_CLEAR.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Scanning Line (Full Screen Detail) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-fuchsia-500/20 shadow-[0_0_15px_#d946ef] animate-scan" />
    </section>
  );
};

export default Contact;

 // import { CONTACT } from "../constants";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { usePortfolioData } from "../supabase/usePortfolioData";

// const Contact = () => {
//   const { data, loading, error } = usePortfolioData();

//   // Fallbacks in case portfolio data is unavailable
//   const CONTACT = data?.aboutMe?.contact || {
//     address: "",
//     phoneNo: "",
//     email: "fatima.amir@example.com",
//   };

//   const [status, setStatus] = useState({ ok: false, error: null });
//   const [sending, setSending] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ ok: false, error: null });
//     setSending(true);
//     const formEl = e.currentTarget;
//     const formData = new FormData(formEl);
//     const subject = formData.get("subject") || "New inquiry from portfolio";
//     const name = formData.get("name") || "";
//     const email = formData.get("email") || "";
//     const message = formData.get("message") || "";

//     try {
//       const res = await fetch('/api/send-email', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ subject, name, from: email, message })
//       });
//       let json = null;
//       try {
//         json = await res.json();
//       } catch (_) {
//         // If response is not JSON, continue based on status code
//       }
//       if (res.ok) {
//         setStatus({ ok: true, error: null });
//         formEl?.reset();
//       } else {
//         const msg = (json && (json.error || json.message)) || 'Could not send email.';
//         setStatus({ ok: false, error: msg });
//       }
//     } catch (err) {
//       setStatus({ ok: false, error: err.message || 'Could not send email. Please try again or email directly.' });
//     } finally {
//       setSending(false);
//     }
//   };

//   return (
//     <div id="contact" className="min-h-screen border-t border-stone-900 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className="my-6 sm:my-8 lg:my-10 text-center text-2xl sm:text-3xl lg:text-4xl font-bold"
//       >
//         Get in Touch
//       </motion.h2>
//       <div className="text-center tracking-tighter max-w-2xl mx-auto">
//         <motion.p
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: -100 }}
//           transition={{ duration: 1 }}
//           className="my-3 sm:my-4 text-sm sm:text-base lg:text-lg text-gray-300"
//         >
//           {CONTACT.address}
//         </motion.p>
//         <motion.p
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: 100 }}
//           transition={{ duration: 1 }}
//           className="my-3 sm:my-4 text-sm sm:text-base lg:text-lg text-gray-300"
//         >
//           {CONTACT.phoneNo}
//         </motion.p>
//         <motion.a
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: 20 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           href={`mailto:${CONTACT.email}`}
//           className="inline-block border-b border-purple-400 text-purple-400 hover:text-purple-300 hover:border-purple-300 transition-colors duration-300 text-sm sm:text-base lg:text-lg break-all"
//         >
//           {CONTACT.email}
//         </motion.a>
//       </div>

//       {/* Contact Form */}
//       <div className="mt-10 max-w-2xl mx-auto">
//         <motion.form
//           onSubmit={handleSubmit}
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: 30 }}
//           transition={{ duration: 0.6 }}
//           className="grid grid-cols-1 gap-4 bg-gray-900/40 backdrop-blur-md rounded-2xl border border-purple-500/20 p-6"
//         >
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               required
//               className="w-full rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 px-4 py-3"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               required
//               className="w-full rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 px-4 py-3"
//             />
//           </div>
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             className="w-full rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 px-4 py-3"
//           />
//           <textarea
//             name="message"
//             placeholder="Tell me about your project or issue..."
//             required
//             rows={5}
//             className="w-full rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 px-4 py-3"
//           />
//           {/* This form uses mailto: to open the user's email client */}

//           <div className="flex flex-wrap gap-3">
//             <button
//               type="submit"
//               disabled={sending}
//               className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium px-6 py-3 rounded-md transition-colors ${sending ? 'opacity-70 cursor-not-allowed' : 'hover:brightness-110'}`}
//             >
//               {sending ? 'Sending...' : 'Chat About Your Issue'}
//             </button>
//             <a href={`mailto:${CONTACT.email}`} className="bg-white text-black font-medium px-6 py-3 rounded-md border border-purple-800 hover:brightness-110 transition-colors">
//               Or Email Directly
//             </a>
//           </div>

//           {status.ok && (
//             <p className="mt-3 text-green-400">Your message has been sent. I’ll get back to you soon.</p>
//           )}
//           {status.error && (
//             <p className="mt-3 text-red-400">{status.error}</p>
//           )}
//         </motion.form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
