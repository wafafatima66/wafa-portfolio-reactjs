import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import coursesData from "../constants/courses.json";
import { FaGraduationCap, FaChevronLeft, FaChevronRight, FaAward, FaCertificate, FaTerminal } from "react-icons/fa";

const Courses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const courses = coursesData || [];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % courses.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);

  const cardVariants = {
    hidden: { opacity: 0, x: 20, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      x: -20, 
      filter: "blur(10px)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-black py-24 px-6">
      {/* Background HUD Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* INDUSTRIAL HEADER */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-4">
            <FaTerminal className="text-fuchsia-500 animate-pulse text-xs" />
            <span className="text-fuchsia-500 font-mono text-[10px] font-black uppercase tracking-[0.5em]">
              Knowledge_Base // Cert_Archive
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none italic">
            ACADEMIC_<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-white NOT-italic">CREDENTIALS.</span>
          </h2>
          <div className="w-24 h-1 bg-fuchsia-600 mt-6 shadow-[0_0_15px_#d946ef]" />
        </div>

        {/* SLIDER HUD */}
        <div className="relative flex items-center justify-center max-w-5xl mx-auto">
          
          {/* NAV TRIGGER: LEFT */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute -left-16 z-20 p-4 border border-white/10 text-white hover:border-fuchsia-500 hover:text-fuchsia-500 transition-all bg-black/50 backdrop-blur-md group"
          >
            <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          </button>

          <div className="w-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative bg-white/[0.02] border border-white/10 p-8 md:p-16 backdrop-blur-sm overflow-hidden"
              >
                {/* Tactical Corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-fuchsia-600" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-fuchsia-600" />
                
                {/* Faded Background Icon */}
                <div className="absolute -top-10 -right-10 opacity-[0.03] pointer-events-none">
                  <FaGraduationCap size={300} />
                </div>

                <div className="relative z-10 grid md:grid-cols-12 gap-10 items-start">
                  
                  {/* LEFT COLUMN: IDENTIFIER */}
                  <div className="md:col-span-4 flex flex-col gap-6">
                    <div className="relative inline-block w-20 h-20">
                       <div className="absolute inset-0 border border-fuchsia-500/30 rotate-45 animate-[spin_10s_linear_infinite]" />
                       <div className="absolute inset-0 bg-fuchsia-600/10 flex items-center justify-center border border-fuchsia-500">
                         <FaAward className="text-fuchsia-400 text-3xl" />
                       </div>
                    </div>
                    
                    <div>
                      <span className="font-mono text-[10px] text-fuchsia-500 font-bold uppercase tracking-widest block mb-2">
                        Institutional_Node
                      </span>
                      <h4 className="text-xl font-black uppercase text-white leading-tight tracking-tighter">
                        {courses[currentIndex]?.institution}
                      </h4>
                      <p className="font-mono text-xs text-gray-500 mt-2 uppercase">
                        Verified_Status: [COMPLETED]
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-3">
                       <span className="px-4 py-1.5 border border-white/10 bg-white/5 font-mono text-[10px] text-fuchsia-300">
                          CLASS_OF_{courses[currentIndex]?.year}
                       </span>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: DATA READOUT */}
                  <div className="md:col-span-8 space-y-8">
                    <div>
                      <h3 className="text-3xl md:text-5xl font-black uppercase italic text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-600 tracking-tighter leading-none mb-6">
                        {courses[currentIndex]?.name}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed border-l border-fuchsia-500/50 pl-6 italic">
                        {courses[currentIndex]?.description}
                      </p>
                    </div>

                    {/* COMPETENCIES BIT-ARRAY */}
                    {courses[currentIndex]?.skills && (
                      <div className="pt-4">
                        <div className="flex items-center gap-2 mb-4">
                           <div className="w-2 h-2 bg-fuchsia-600 rotate-45" />
                           <p className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-[0.3em]">Mastered_Competencies</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {(Array.isArray(courses[currentIndex].skills) 
                            ? courses[currentIndex].skills 
                            : courses[currentIndex].skills.split(",")
                          ).map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/5 border border-white/10 text-white font-mono text-[9px] uppercase hover:border-fuchsia-500/50 transition-colors"
                            >
                              {skill.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* NAV TRIGGER: RIGHT */}
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute -right-16 z-20 p-4 border border-white/10 text-white hover:border-fuchsia-500 hover:text-fuchsia-500 transition-all bg-black/50 backdrop-blur-md group"
          >
            <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* PAGINATION: BIT-ARRAY STYLE */}
        <div className="flex justify-center gap-3 mt-16">
          {courses.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 transition-all duration-500 border ${
                i === currentIndex 
                ? "w-10 bg-fuchsia-600 border-fuchsia-400 shadow-[0_0_10px_#d946ef]" 
                : "w-4 bg-white/5 border-white/10 hover:bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import coursesData from "../constants/courses.json";
// import { FaGraduationCap, FaChevronLeft, FaChevronRight, FaAward, FaCertificate } from "react-icons/fa";

// const Courses = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const courses = coursesData || [];

//   const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % courses.length);
//   const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);

//   // Animation variants
//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.95, x: 50 },
//     visible: { 
//       opacity: 1, 
//       scale: 1, 
//       x: 0,
//       transition: { duration: 0.5, ease: "easeOut" }
//     },
//     exit: { 
//       opacity: 0, 
//       scale: 0.95, 
//       x: -50,
//       transition: { duration: 0.3 }
//     }
//   };

//   return (
//     <section className="min-h-screen relative overflow-hidden bg-black py-24 px-4">
//       {/* Dark Theme Background Effects - Shifted to Purple/Fuchsia */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
//           transition={{ duration: 8, repeat: Infinity }}
//           className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"
//         />
//         <motion.div 
//           animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.2, 0.15] }}
//           transition={{ duration: 10, repeat: Infinity }}
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[120px]"
//         />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <motion.div 
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
//           >
//             <FaCertificate className="text-purple-400 text-sm" />
//             <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">Learning Path</span>
//           </motion.div>
//           <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
//             Courses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Certifications</span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Professional development and specialized technical training.
//           </p>
//         </div>

//         {/* Slider Container */}
//         <div className="relative flex items-center justify-center max-w-4xl mx-auto">
//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute -left-4 md:-left-20 z-20 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-purple-600 hover:border-purple-400 transition-all shadow-2xl backdrop-blur-md"
//           >
//             <FaChevronLeft />
//           </button>

//           <div className="w-full">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentIndex}
//                 variants={cardVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 className="relative bg-gradient-to-b from-gray-900/40 to-black border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl"
//               >
//                 {/* Visual Accent */}
//                 <div className="absolute top-0 right-0 p-8 opacity-5">
//                   <FaGraduationCap className="text-8xl text-white" />
//                 </div>

//                 <div className="relative z-10">
//                   <div className="flex flex-col gap-6">
//                     <div className="flex items-center gap-4">
//                       {/* Icon Box - Purple/Fuchsia Gradient */}
//                       <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
//                         <FaAward className="text-white text-2xl" />
//                       </div>
//                       <div>
//                         <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-1">
//                           {courses[currentIndex]?.institution}
//                         </p>
//                         <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
//                           {courses[currentIndex]?.name}
//                         </h3>
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-purple-300 text-sm font-mono">
//                         Class of {courses[currentIndex]?.year}
//                       </span>
//                     </div>

//                     <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-purple-500/30 pl-6 my-4">
//                       {courses[currentIndex]?.description}
//                     </p>

//                     {/* Skills Grid - Handling both Array and String formats from JSON */}
//                     {courses[currentIndex]?.skills && (
//                       <div className="pt-6">
//                         <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Mastered Competencies</p>
//                         <div className="flex flex-wrap gap-2">
//                           {(Array.isArray(courses[currentIndex].skills) 
//                             ? courses[currentIndex].skills 
//                             : courses[currentIndex].skills.split(",")
//                           ).map((skill, i) => (
//                             <span
//                               key={i}
//                               className="px-3 py-1.5 bg-purple-500/5 border border-purple-500/20 text-purple-200 text-[11px] font-medium rounded-lg hover:bg-purple-500/20 transition-colors"
//                             >
//                               {skill.trim()}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           <button
//             onClick={nextSlide}
//             className="absolute -right-4 md:-right-20 z-20 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-purple-600 hover:border-purple-400 transition-all shadow-2xl backdrop-blur-md"
//           >
//             <FaChevronRight />
//           </button>
//         </div>

//         {/* Pagination Dots */}
//         <div className="flex justify-center gap-4 mt-12">
//           {courses.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentIndex(i)}
//               className={`h-1 rounded-full transition-all duration-500 ${
//                 i === currentIndex 
//                 ? "w-12 bg-gradient-to-r from-purple-500 to-fuchsia-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" 
//                 : "w-3 bg-white/20 hover:bg-white/40"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Courses;