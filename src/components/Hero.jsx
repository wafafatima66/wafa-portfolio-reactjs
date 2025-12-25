import { motion } from "framer-motion";
// import { getPublicImageUrl } from "../utils/supabaseImages";
import { FaTerminal, FaFileDownload, FaBolt } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } 
  },
};

const Hero = () => {
  // const cvHref = getPublicImageUrl("cv/CV.pdf") || "/CV.pdf";
  const cvHref = "CV.pdf";

  return (
    <div className="relative min-h-screen w-full flex items-center overflow-hidden bg-black">
      {/* Background HUD Grid */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
       */}

    
      {/* HUD GRID LAYER */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent" />
        <div className="w-full h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24">
        <motion.div
          className="max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top Tagline */}
          <motion.div 
            variants={childVariants}
            className="flex items-center gap-3 mb-6"
          >
            <FaTerminal className="text-fuchsia-500 text-xs animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.4em] text-fuchsia-500 uppercase font-black">
              System_Status: Operational // Fatima_Amir_v2.0
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={childVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] italic text-white"
          >
            Hi, I'm <span className="text-stone-500">Fatima Amir.</span><br />
            A <span className="text-fuchsia-500 NOT-italic">Researcher</span>, 
            <span className="text-purple-600 NOT-italic"> Manager</span> & 
            <span className="text-white NOT-italic"> Developer.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={childVariants}
            className="mt-8 max-w-xl text-stone-400 font-mono text-sm sm:text-lg tracking-tight leading-relaxed border-l-2 border-fuchsia-500/30 pl-6"
          >
            // Building the Future, One Line of Code at a Time. 
            Designing intelligent systems and managing high-impact technical infrastructures.
          </motion.p>

          {/* Tactical Buttons */}
          <motion.div 
            variants={childVariants}
            className="flex flex-wrap gap-4 mt-12"
          >
            {/* View Resume Button */}
            <a href={cvHref} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden">
              <button className="relative px-8 py-4 bg-white text-black font-black uppercase text-xs sm:text-sm tracking-widest flex items-center gap-3 transition-transform active:scale-95">
                <FaFileDownload />
                View_Resume
                {/* Tactical Corner Overlays */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-black/10 group-hover:bg-fuchsia-500 transition-colors" />
              </button>
            </a>

            {/* Hire Me Button */}
            <a href="/contact" className="group relative overflow-hidden">
              <button className="relative px-8 py-4 bg-transparent border border-fuchsia-500 text-fuchsia-500 font-black uppercase text-xs sm:text-sm tracking-widest flex items-center gap-3 transition-all group-hover:bg-fuchsia-500 group-hover:text-black active:scale-95">
                <FaBolt className="animate-bounce" />
                Initiate_Contact
                {/* Decorative scanner line */}
                <div className="absolute inset-0 w-full h-[1px] bg-fuchsia-400/30 -translate-y-full group-hover:translate-y-[40px] transition-transform duration-700" />
              </button>
            </a>
          </motion.div>

          {/* Bottom HUD Detail */}
          <motion.div 
            variants={childVariants}
            className="mt-16 flex gap-10 opacity-30"
          >
            <div className="flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-widest">Lat_Long</span>
              <span className="font-mono text-[10px] font-bold">33.6844° N, 73.0479° E</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-widest">Stack_Type</span>
              <span className="font-mono text-[10px] font-bold">Hybrid_Neural</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

// import { motion } from "framer-motion";
// import { getPublicImageUrl } from "../utils/supabaseImages";


// const containerVariants = {
//   hidden: { opacity: 0, x: -100 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.5,
//       staggerChildren: 0.5,
//     },
//   },
// };

// const childVariants = {
//   hidden: { opacity: 0, x: -100 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
// };

// const Hero = () => {
//   // Resolve CV from Supabase Storage with local fallback
//   const cvHref = getPublicImageUrl("cv/CV.pdf") || "/CV.pdf";

//   return (
//     <div className="pb-2 lg:mb-10">
//       <div className="flex flex-wrap lg:flex-row-reverse">
//         {/* <div className="w-full lg:w-1/2">
//           <div className="flex justify-center lg:p-8">
//             <motion.img
//               initial={{ x: 100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1, delay: 1.5 }}
//               width={650}
//               height={650}
//               src={profilePic}
//               alt="Ravi Kumar"
//               className="border border-stone-900 rounded-3xl"
//             />

//           </div>
//         </div> */}
//         <div className="w-full min-h-screen flex justify-start items-center px-4 sm:px-6 md:px-12 lg:px-24">
//           <motion.div
//             className="flex flex-col items-start mt-2 max-w-full"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.h2
//               variants={childVariants}
//               className="pb-2 text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl tracking-tighter text-left leading-tight"
//             >
//               Hi, I'm <span className="text-stone-400">Fatima Amir!</span> I'm a{" "}
//                <span className="text-purple-500">Researcher </span> ,{" "}
//               <span className="text-purple-800">Project Manager </span> &{" "}
//               <span className="text-fuchsia-500">Software Developer</span>
//             </motion.h2>

//             <motion.span
//               variants={childVariants}
//               className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight text-transparent pt-2 text-left max-w-full"
//             >
//               Building the Future, One Line of Code at a Time
//             </motion.span>

// <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
//   <a href={cvHref} target="_blank" rel="noopener noreferrer">
//     <button className="bg-white text-black border border-purple-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group text-sm sm:text-base">
//       <span className="bg-purple-800 shadow-purple-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
//       View Resume
//     </button>
//   </a>
//   <a href="/contact">
//     <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border border-pink-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:brightness-110 hover:border-t-4 hover:border-b active:opacity-90 outline-none duration-300 group text-sm sm:text-base">
//       <span className="bg-pink-800 shadow-pink-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
//       Hire Me
//     </button>
//   </a>
// </div>

//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
