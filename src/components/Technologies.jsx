import { motion } from "framer-motion";
import { FaPython, FaWordpress, FaGitAlt, FaPhp, FaDatabase } from "react-icons/fa";
import { SiTensorflow, SiJavascript, SiLaravel, SiTailwindcss, SiMysql, SiNextdotjs } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { usePortfolioData } from "../supabase/usePortfolioData";

const iconMap = {
  Python: <FaPython className="text-5xl text-yellow-400" />,
  TensorFlow: <SiTensorflow className="text-5xl text-orange-500" />,
  JavaScript: <SiJavascript className="text-5xl text-yellow-300" />,
  Laravel: <SiLaravel className="text-5xl text-red-500" />,
  React: <RiReactjsLine className="text-5xl text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-5xl text-black" />,
  WordPress: <FaWordpress className="text-5xl text-blue-600" />,
  Git: <FaGitAlt className="text-5xl text-red-600" />,
  "Tailwind CSS": <SiTailwindcss className="text-5xl text-sky-400" />,
  MySQL: <SiMysql className="text-5xl text-blue-500" />,
  PHP: <FaPhp className="text-5xl text-indigo-500" />,
  Database: <FaDatabase className="text-5xl text-gray-400" />,
};

// Icon bounce variant
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

// Progress bar animation variant
const barVariants = {
  initial: { width: 0 },
  animate: (width) => ({
    width: `${width}%`,
    transition: { duration: 1.2, ease: "easeInOut" },
  }),
};


const Technologies = () => {
  const { data, loading, error } = usePortfolioData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;
  const technologies = data.technologies;

  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tech Stack & Experience
      </motion.h2>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-10 max-w-4xl mx-auto px-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className=""
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4 ">
              <motion.div
                variants={iconVariants(tech.duration)}
                initial="initial"
                animate="animate"
              >
                {iconMap[tech.name]}
              </motion.div>
              <h3 className="text-md-lg text-sm font-semibold">{tech.name}</h3>
            </div>
            <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-fuchsia-300 to-purple-700   rounded-full border border-purple-500"
                variants={barVariants}
                initial="initial"
                whileInView="animate"
                custom={tech.experience}
              />

              {/* bg-gradient-to-r from-fuchsia-400 to-indigo-500 */}
            </div>
            <p className="text-right text-md text-purple-300 mt-1">
              {tech.experience}%
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
