import React from "react";
import { motion } from "framer-motion";
import aboutData from "../constants/about_me.json";
import { 
  FaUser, 
  FaServicestack, 
  FaCode, 
  FaFingerprint, 
  FaArrowUpRightFromSquare,
  FaTerminal,
  FaMicrochip
} from "react-icons/fa6";

const AboutMe = () => {
  const { biography, contact, services, stats } = aboutData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Cyber Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/5 pb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-fuchsia-500 shadow-[0_0_10px_#d946ef]"></span>
              <span className="text-fuchsia-500 font-mono text-xs uppercase tracking-[0.4em] font-black">
                Subject Profile // 001
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-fuchsia-400 italic">Me.</span>
            </h2>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-right font-mono"
          >
            <div className="inline-block px-4 py-2 bg-fuchsia-500/5 border border-fuchsia-500/20 rounded-md">
                <p className="text-fuchsia-400 text-[10px] uppercase tracking-widest leading-tight">
                LOC_DATA: {contact.location} <br />
                NET_STATUS: ONLINE_ENCRYPTED
                </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Main Biography Card - Industrial Style */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-8 group relative overflow-hidden bg-white/[0.02] border border-white/10 p-8 md:p-12 hover:border-fuchsia-500/30 transition-all duration-500"
          >
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-fuchsia-500/50" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-fuchsia-500/50" />
            
            <FaFingerprint className="absolute -right-8 -top-8 text-[15rem] text-fuchsia-500/[0.03] group-hover:text-fuchsia-500/[0.06] transition-colors duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-1 bg-fuchsia-500 w-12" />
                <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] flex items-center gap-3">
                  <FaTerminal className="text-fuchsia-500" /> Executive_Summary.log
                </h3>
              </div>
              
              <div className="space-y-6 max-w-3xl">
                <p className="text-gray-300 text-xl md:text-2xl leading-relaxed font-light border-l-4 border-fuchsia-500/20 pl-6">
                  {biography}
                </p>
              </div>

              {/* Data Grid */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/5">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col relative group/stat">
                    <span className="text-4xl font-black text-white tracking-tighter group-hover/stat:text-fuchsia-500 transition-colors">
                        {stat.value}
                    </span>
                    <span className="text-[10px] uppercase tracking-tighter text-gray-500 font-bold font-mono">
                        // {stat.heading}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Expertise Card - HUD Style */}
            <motion.div 
              variants={itemVariants}
              className="flex-1 p-8 bg-black/40 border border-purple-500/20 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <FaMicrochip className="text-5xl text-fuchsia-500" />
              </div>

              <div className="relative z-10">
                <h3 className="text-xs font-black text-fuchsia-500 uppercase tracking-[0.4em] mb-8 flex items-center gap-2">
                   <FaServicestack /> Core_Expertise
                </h3>
                <div className="space-y-4">
                  {services.map((service, i) => (
                    <div key={i} className="flex flex-col group/line cursor-default">
                      <div className="flex justify-between items-center mb-1">
                         <span className="text-gray-400 group-hover/line:text-white transition-colors text-sm font-mono uppercase tracking-tighter">
                            {service}
                         </span>
                         <span className="text-[10px] text-fuchsia-600 font-bold">READY</span>
                      </div>
                      <div className="h-[2px] w-full bg-white/5 group-hover/line:bg-fuchsia-500/50 transition-all duration-300 overflow-hidden">
                        <motion.div 
                            initial={{ x: "-100%" }}
                            whileInView={{ x: "0%" }}
                            className="h-full w-full bg-fuchsia-500" 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Direct Contact - Industrial CTA */}
            <motion.div 
              variants={itemVariants}
              className="p-8 bg-fuchsia-500/5 border border-fuchsia-500/20 group hover:bg-fuchsia-500/10 transition-all"
            >
              <p className="text-fuchsia-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-fuchsia-500 animate-pulse rounded-full" /> 
                Secure_Contact_Line
              </p>
              <a 
                href={`mailto:${contact.email}`}
                className="flex items-center justify-between group/link"
              >
                <span className="text-lg font-mono text-white group-hover/link:text-fuchsia-400 transition-colors break-all underline decoration-fuchsia-500/20 underline-offset-8">
                  {contact.email}
                </span>
                <div className="ml-4 p-2 bg-fuchsia-500 text-black group-hover/link:scale-110 transition-all">
                  <FaArrowUpRightFromSquare className="text-sm" />
                </div>
              </a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;


// import React from "react";
// import { motion } from "framer-motion";
// // Import the JSON data directly
// import aboutData from "../constants/about_me.json";
// import { FaUser, FaEnvelope, FaServicestack, FaChartLine, FaStar, FaCode, FaLightbulb, FaRocket } from "react-icons/fa";
// import { getPublicImageUrl } from "../utils/supabaseImages";

// const AboutMe = () => {
//   // Destructure from the imported JSON
//   const { 
//     biography, 
//     contact: CONTACT, 
//     services, 
//     stats: STATS, 
//     profile_image 
//   } = aboutData;

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
//       {/* Floating Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           animate={{ 
//             x: [0, 100, 0],
//             y: [0, -50, 0],
//             rotate: [0, 180, 360]
//           }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
//         />
//         <motion.div
//           animate={{ 
//             x: [0, -80, 0],
//             y: [0, 60, 0],
//             rotate: [360, 180, 0]
//           }}
//           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//           className="absolute bottom-32 right-20 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl"
//         />
//         <motion.div
//           animate={{ 
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.6, 0.3]
//           }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* Hero Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-center mb-16"
//         >
//           <motion.h2 
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
//             initial={{ backgroundPosition: "0% 50%" }}
//             animate={{ backgroundPosition: "100% 50%" }}
//             transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
//             style={{
//               background: "linear-gradient(45deg, #8b5cf6, #ec4899, #f59e0b, #10b981)",
//               backgroundSize: "300% 300%",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text"
//             }}
//           >
//             About Me
//           </motion.h2>
//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: "100px" }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto rounded-full mb-6"
//           />
//           <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
//             Passionate developer creating innovative digital solutions with creativity and precision
//           </p>
//         </motion.div>

//         {/* Main Content Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
//         >
//           {/* Left Side - Profile & Bio */}
//           <motion.div variants={itemVariants} className="space-y-8">
//             {/* Profile Image */}
//             <motion.div 
//               variants={cardVariants}
//               className="relative flex justify-center lg:justify-start"
//             >
//               <div className="relative group">
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//                   className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full p-1 blur-sm"
//                 />
                
//                 <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-full p-2">
//                   <img
//                     src={profile_image}
//                     alt="Profile"
//                     className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>

//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//                   className="absolute inset-0"
//                 >
//                   <FaCode className="absolute top-8 left-8 text-purple-400 text-2xl opacity-80" />
//                   <FaRocket className="absolute top-8 right-8 text-orange-400 text-2xl opacity-80" />
//                   <FaLightbulb className="absolute bottom-8 left-8 text-yellow-400 text-2xl opacity-80" />
//                   <FaStar className="absolute bottom-8 right-8 text-pink-400 text-2xl opacity-80" />
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* Biography Card */}
//             <motion.div 
//               variants={cardVariants}
//               whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
//               className="relative p-8 bg-gray-900/40 backdrop-blur-md rounded-3xl border border-purple-500/20 shadow-2xl group overflow-hidden"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
//               <div className="relative z-10">
//                 <div className="flex items-center mb-6">
//                   <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-4">
//                     <FaUser className="text-white text-xl" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white">My Story</h3>
//                 </div>
//                 <p className="text-gray-300 leading-relaxed text-base whitespace-pre-line">
//                   {biography}
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Side - Services & Info */}
//           <motion.div variants={itemVariants} className="space-y-8">
//             {/* Services Card */}
//             <motion.div 
//               variants={cardVariants}
//               whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)" }}
//               className="relative p-8 bg-gray-900/40 backdrop-blur-md rounded-3xl border border-pink-500/20 shadow-2xl group overflow-hidden"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
//               <div className="relative z-10">
//                 <div className="flex items-center mb-6">
//                   <div className="p-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl mr-4">
//                     <FaServicestack className="text-white text-xl" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white">What I Do</h3>
//                 </div>
//                 <div className="space-y-4">
//                   {/* Updated mapping to handle array directly */}
//                   {services.map((service, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       className="flex items-start group/item"
//                     >
//                       <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mr-4 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
//                       <span className="text-gray-300 group-hover/item:text-white transition-colors">
//                         {service}
//                       </span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Contact & Stats Combined Card */}
//             <motion.div 
//               variants={cardVariants}
//               whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
//               className="relative p-8 bg-gray-900/40 backdrop-blur-md rounded-3xl border border-green-500/20 shadow-2xl group overflow-hidden"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
//               <div className="relative z-10 space-y-8">
//                 {/* Contact Section */}
//                 <div>
//                   <div className="flex items-center mb-4">
//                     <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mr-4">
//                       <FaEnvelope className="text-white text-xl" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
//                   </div>
//                   <a
//                     href={`mailto:${CONTACT.email}`}
//                     className="text-green-300 hover:text-green-200 transition-colors text-lg underline decoration-green-500/50 hover:decoration-green-300 break-all"
//                   >
//                     {CONTACT.email}
//                   </a>
//                 </div>

//                 {/* Stats Section */}
//                 <div>
//                   <div className="flex items-center mb-4">
//                     <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4">
//                       <FaChartLine className="text-white text-xl" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white">Key Numbers</h3>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     {STATS.map((stat, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.5, delay: index * 0.1 }}
//                         whileHover={{ scale: 1.05 }}
//                         className="text-center p-4 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all"
//                       >
//                         <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
//                           {stat.value}
//                         </p>
//                         <p className="text-xs text-gray-400 uppercase tracking-wide">
//                           {stat.heading}
//                         </p>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;