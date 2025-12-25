import React from "react";
import { motion } from "framer-motion";
import { 
  FaPython, FaWordpress, FaGitAlt, FaPhp, FaDatabase 
} from "react-icons/fa";
import { 
  SiTensorflow, SiJavascript, SiLaravel, SiTailwindcss, 
  SiMysql, SiNextdotjs, SiFirebase 
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import technologies from "../constants/technologies.json";

const iconMap = {
  Python: { icon: <FaPython />, color: "#facd3b" },
  TensorFlow: { icon: <SiTensorflow />, color: "#ff6f00" },
  JavaScript: { icon: <SiJavascript />, color: "#f7df1e" },
  Laravel: { icon: <SiLaravel />, color: "#ff2d20" },
  React: { icon: <RiReactjsLine />, color: "#61dafb" },
  "Next.js": { icon: <SiNextdotjs />, color: "#ffffff" },
  WordPress: { icon: <FaWordpress />, color: "#21759b" },
  Git: { icon: <FaGitAlt />, color: "#f05032" },
  "Tailwind CSS": { icon: <SiTailwindcss />, color: "#38bdf8" },
  MySQL: { icon: <SiMysql />, color: "#4479a1" },
  PHP: { icon: <FaPhp />, color: "#777bb4" },
  Firebase: { icon: <SiFirebase />, color: "#ffca28" },
  Database: { icon: <FaDatabase />, color: "#a0aec0" },
};

const Technologies = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-6xl font-black italic tracking-tighter uppercase"
          >
            CORE_<span className="text-fuchsia-500 NOT-italic">ENGINE.</span>
          </motion.h2>
          <p className="font-mono text-[10px] tracking-[0.5em] text-gray-500 mt-4 uppercase">
            Neural Skill Mapping // Active Logic
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-y-16 gap-x-12">
          {technologies.map((tech, index) => {
            const techData = iconMap[tech.name] || { icon: <FaDatabase />, color: "#ffffff" };
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative group"
                style={{ '--brand-color': techData.color }}
              >
                <div className="relative flex flex-col items-center">
                  
                  {/* THE NODE CONTAINER */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                    className="w-20 h-20 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-3xl transition-all duration-500 relative z-10 backdrop-blur-sm group-hover:border-[var(--brand-color)]/30 group-hover:bg-[var(--brand-color)]/5"
                  >
                    
                    {/* THE ICON: Transitions from gray to Brand Color + Glow */}
                    <div 
                      className="text-white/20 transition-all duration-500 group-hover:text-[var(--brand-color)] flex items-center justify-center"
                      style={{ 
                        filter: 'drop-shadow(0 0 0px transparent)' 
                      }}
                    >
                      <div className="group-hover:[filter:drop-shadow(0_0_10px_var(--brand-color))] transition-all duration-500">
                        {techData.icon}
                      </div>
                    </div>

                    {/* SUBTLE NODE GLOW */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 pointer-events-none bg-[var(--brand-color)]" />
                  </motion.div>

                  {/* LABEL & SKILL DOTS */}
                  <div className="mt-4 text-center">
                    <h3 className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-white transition-colors">
                      {tech.name}
                    </h3>
                    
                    <div className="flex justify-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                            i < Math.round(tech.experience / 20) 
                            ? "bg-fuchsia-500/20 group-hover:bg-[var(--brand-color)] group-hover:shadow-[0_0_8px_var(--brand-color)]" 
                            : "bg-white/5"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* BOTTOM CONNECTOR */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-gradient-to-b from-white/10 group-hover:from-[var(--brand-color)]/40 to-transparent transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;

// import React from "react";
// import { motion } from "framer-motion";
// import { FaPython, FaWordpress, FaGitAlt, FaPhp, FaDatabase } from "react-icons/fa";
// import { SiTensorflow, SiJavascript, SiLaravel, SiTailwindcss, SiMysql, SiNextdotjs, SiFirebase } from "react-icons/si";
// import { RiReactjsLine } from "react-icons/ri";
// // Import local JSON
// import technologies from "../constants/technologies.json";

// const iconMap = {
//   Python: <FaPython className="text-5xl text-yellow-400" />,
//   TensorFlow: <SiTensorflow className="text-5xl text-orange-500" />,
//   JavaScript: <SiJavascript className="text-5xl text-yellow-300" />,
//   Laravel: <SiLaravel className="text-5xl text-red-500" />,
//   React: <RiReactjsLine className="text-5xl text-cyan-400" />,
//   "Next.js": <SiNextdotjs className="text-5xl text-white" />,
//   WordPress: <FaWordpress className="text-5xl text-blue-600" />,
//   Git: <FaGitAlt className="text-5xl text-red-600" />,
//   "Tailwind CSS": <SiTailwindcss className="text-5xl text-sky-400" />,
//   MySQL: <SiMysql className="text-5xl text-blue-500" />,
//   PHP: <FaPhp className="text-5xl text-indigo-500" />,
//   Firebase: <SiFirebase className="text-5xl text-yellow-500" />,
//   Database: <FaDatabase className="text-5xl text-gray-400" />,
// };

// // Icon bounce variant
// const iconVariants = (duration) => ({
//   initial: { y: -10 },
//   animate: {
//     y: [10, -10],
//     transition: {
//       duration: duration || 3,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
// });

// // Progress bar animation variant
// const barVariants = {
//   initial: { width: 0 },
//   animate: (width) => ({
//     width: `${width}%`,
//     transition: { duration: 1.2, ease: "easeInOut" },
//   }),
// };

// const Technologies = () => {
//   return (
//     <div className="pb-24 bg-black text-white">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className="my-20 text-center text-4xl font-bold tracking-tight"
//       >
//         Tech Stack & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Experience</span>
//       </motion.h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 max-w-5xl mx-auto px-6">
//         {technologies.map((tech, index) => (
//           <motion.div
//             key={index}
//             whileInView={{ opacity: 1, x: 0 }}
//             initial={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//           >
//             <div className="flex items-center gap-4 mb-4">
//               <motion.div
//                 variants={iconVariants(tech.duration)}
//                 initial="initial"
//                 animate="animate"
//               >
//                 {iconMap[tech.name] || <FaDatabase className="text-5xl text-gray-400" />}
//               </motion.div>
//               <h3 className="text-lg font-semibold tracking-wide">{tech.name}</h3>
//             </div>

//             {/* Progress Bar Container */}
//             <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden border border-white/5">
//               <motion.div
//                 className="h-full bg-gradient-to-r from-fuchsia-400 to-purple-700 rounded-full shadow-[0_0_10px_rgba(192,38,211,0.5)]"
//                 variants={barVariants}
//                 initial="initial"
//                 whileInView="animate"
//                 custom={tech.experience}
//               />
//             </div>
            
//             <p className="text-right text-sm text-purple-300 mt-2 font-mono">
//               {tech.experience}%
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Technologies;