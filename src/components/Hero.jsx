import { motion } from "framer-motion";
import { getPublicImageUrl } from "../utils/supabaseImages";


const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  // Resolve CV from Supabase Storage with local fallback
  const cvHref = getPublicImageUrl("cv/CV.pdf") || "/CV.pdf";

  return (
    <div className="pb-2 lg:mb-10">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/* <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              width={650}
              height={650}
              src={profilePic}
              alt="Ravi Kumar"
              className="border border-stone-900 rounded-3xl"
            />

          </div>
        </div> */}
        <div className="w-full min-h-screen flex justify-start items-center px-4 sm:px-6 md:px-12 lg:px-24">
          <motion.div
            className="flex flex-col items-start mt-2 max-w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl tracking-tighter text-left leading-tight"
            >
              Hi, I'm <span className="text-stone-400">Fatima Amir!</span> I'm a{" "}
              <span className="text-purple-800">Project Manager </span> &{" "}
              <span className="text-fuchsia-800">Software Developer</span>
            </motion.h2>

            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight text-transparent pt-2 text-left max-w-full"
            >
              Building the Future, One Line of Code at a Time
            </motion.span>

<div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
  <a href={cvHref} target="_blank" rel="noopener noreferrer">
    <button className="bg-white text-black border border-purple-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group text-sm sm:text-base">
      <span className="bg-purple-800 shadow-purple-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
      View Resume
    </button>
  </a>
  <a href="/contact">
    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border border-pink-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:brightness-110 hover:border-t-4 hover:border-b active:opacity-90 outline-none duration-300 group text-sm sm:text-base">
      <span className="bg-pink-800 shadow-pink-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
      Hire Me
    </button>
  </a>
</div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
