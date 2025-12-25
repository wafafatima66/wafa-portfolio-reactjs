import React from "react";
import { motion } from "framer-motion";
import { 
  FaArrowRight, 
  FaLocationDot, 
  FaTerminal, 
  FaClockRotateLeft, 
  FaCodeBranch 
} from "react-icons/fa6";
import workExperienceData from "../constants/work_experience.json";

const WorkExperience = () => {
  const timelineData = [...workExperienceData].sort((a, b) => b.sequence_order - a.sequence_order);

  return (
    <section className="relative py-24 bg-black text-white min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* LEFT SIDE: Sticky Header (Scaled Down) */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 lg:h-fit">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaClockRotateLeft className="text-fuchsia-500 animate-pulse text-sm" />
                <span className="text-fuchsia-500 font-mono text-[10px] font-black uppercase tracking-[0.4em]">
                  Timeline_Sync // V.04
                </span>
              </div>
              
              {/* Reduced from 8xl/7xl to 5xl/6xl */}
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6 uppercase">
                WORK<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-white italic">
                  HISTORY.
                </span>
              </h2>
              
              <div className="w-16 h-1.5 bg-fuchsia-600 mb-6 shadow-[0_0_10px_#d946ef]"></div>
              
              <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em] leading-relaxed max-w-xs">
                Analyzing professional nodes and technical milestone deployments.
              </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Tactical Industrial List */}
          <div className="lg:w-2/3 space-y-12">
            {timelineData.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Visual Connector Line */}
                <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-black border border-fuchsia-500 shadow-[0_0_8px_#d946ef]"></div>
                </div>

                <div className="md:pl-4">
                  {/* Top Metadata HUD */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <FaCodeBranch className="text-fuchsia-500/40 text-xs" />
                      <span className="font-mono text-fuchsia-400 text-sm font-black tracking-tighter">
                        [{event.date}]
                      </span>
                    </div>
                    <span className="flex items-center text-gray-500 text-[9px] font-black uppercase tracking-[0.2em] border border-white/10 px-2 py-0.5">
                      <FaLocationDot className="mr-1.5 text-fuchsia-500 text-[10px]" />
                      {event.location}
                    </span>
                  </div>

                  {/* Main Industrial Container */}
                  <div className="relative p-8 bg-white/[0.02] border border-white/5 group-hover:border-fuchsia-500/40 transition-all duration-500 overflow-hidden">
                    
                    {/* Scanning Line Animation */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-fuchsia-500/50 -translate-y-full group-hover:animate-[scan_2.5s_linear_infinite] z-20 pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex items-start gap-3 mb-4">
                        <FaTerminal className="text-fuchsia-500 mt-1.5 text-sm opacity-40" />
                        {/* Reduced from 5xl/4xl to 3xl */}
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight group-hover:text-fuchsia-400 transition-colors leading-tight">
                          {event.title}
                        </h3>
                      </div>
                      
                      {/* Body font reduced for better readability */}
                      <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base font-medium border-l-2 border-fuchsia-500/10 pl-6 group-hover:border-fuchsia-500/30 transition-all">
                        {event.description}
                      </p>

                      {event.link && event.link !== "#" && (
                        <motion.a
                          href={event.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-5 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-fuchsia-500 hover:text-black hover:border-fuchsia-500 transition-all duration-300"
                        >
                          OPEN_FILE <FaArrowRight />
                        </motion.a>
                      )}
                    </div>

                    {/* Industrial Index Reference */}
                    <div className="absolute bottom-3 right-5 font-mono text-[9px] text-white/5 group-hover:text-fuchsia-500/20 transition-colors">
                      REF_ID:00{event.id}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;


// TIMELINE STYLE






// import React from "react";
// import { motion } from "framer-motion";
// import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
// // Import the local JSON
// import workExperienceData from "../constants/work_experience.json";

// const WorkExperience = () => {
//   // Sort by sequence_order descending (latest first)
//   const timelineData = [...workExperienceData].sort((a, b) => b.sequence_order - a.sequence_order);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.3 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     }
//   };

//   return (
//     <section className="min-h-screen relative overflow-hidden bg-black py-24 px-4 sm:px-6 lg:px-8">
      
//       {/* Background Glows matching other sections */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
//           transition={{ duration: 10, repeat: Infinity }}
//           className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"
//         />
//         <motion.div 
//           animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
//           transition={{ duration: 12, repeat: Infinity }}
//           className="absolute bottom-1/4 right-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[120px]"
//         />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <motion.div 
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
//           >
//             <FaBriefcase className="text-purple-400 text-sm" />
//             <span className="text-purple-400 text-xs font-bold uppercase tracking-[0.2em]">Career Path</span>
//           </motion.div>
//           <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
//             Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Experience</span>
//           </h2>
//         </div>

//         <div className="relative">
//           {/* Central Timeline Line - Premium Gradient */}
//           <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gradient-to-b from-purple-500 via-fuchsia-500 to-transparent h-full rounded-full opacity-30 shadow-[0_0_15px_rgba(168,85,247,0.3)]"></div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             {timelineData.map((event, index) => {
//               const isLeft = index % 2 === 0;
              
//               // Get year for the badge
//               let eventYear = event.date.split("-")[1]?.trim();
//               if (eventYear?.toLowerCase() === "present") {
//                 eventYear = new Date().getFullYear();
//               }

//               return (
//                 <motion.div
//                   key={event.id}
//                   variants={itemVariants}
//                   className={`relative mb-16 lg:mb-24 flex flex-col lg:flex-row items-center ${
//                     isLeft ? "lg:justify-start" : "lg:justify-end"
//                   }`}
//                 >
//                   {/* Timeline Dot (Desktop) */}
//                   <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-20">
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       whileInView={{ scale: 1 }}
//                       className="w-5 h-5 bg-black border-2 border-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.6)]"
//                     >
//                         <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-20"></div>
//                     </motion.div>
//                   </div>

//                   {/* Experience Card */}
//                   <motion.div
//                     whileHover={{ y: -5 }}
//                     className={`w-full lg:w-[45%] relative group`}
//                   >
//                     <div className="relative p-8 bg-gradient-to-b from-gray-900/40 to-black backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl group-hover:border-purple-500/40 transition-all duration-500">
                      
//                       {/* Year Badge */}
//                       <div className="absolute -top-4 left-8 px-4 py-1 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-full shadow-lg z-20">
//                         <span className="text-white font-bold text-xs">{eventYear}</span>
//                       </div>

//                       {/* Content */}
//                       <div className="relative z-10">
//                         <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors tracking-tight">
//                           {event.title}
//                         </h3>

//                         <div className="flex flex-col gap-2 mb-6">
//                           <div className="flex items-center text-gray-400 text-xs font-bold uppercase tracking-widest">
//                             <FaMapMarkerAlt className="mr-2 text-purple-500" />
//                             {event.location}
//                           </div>
//                           <div className="flex items-center text-gray-500 text-[11px] font-mono">
//                             <FaCalendarAlt className="mr-2 text-fuchsia-500" />
//                             {event.date}
//                           </div>
//                         </div>

//                         <p className="text-gray-400 leading-relaxed text-sm sm:text-base border-l-2 border-purple-500/20 pl-4 mb-6">
//                           {event.description}
//                         </p>

//                         {event.link && event.link !== "#" && (
//                           <div className="pt-4">
//                             <a 
//                               href={event.link} 
//                               target="_blank" 
//                               rel="noreferrer"
//                               className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-purple-400 hover:text-fuchsia-400 transition-colors"
//                             >
//                               View Project Source →
//                             </a>
//                           </div>
//                         )}
//                       </div>

//                       {/* Inner Card Decorative Glows */}
//                       <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkExperience;