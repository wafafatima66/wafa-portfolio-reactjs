import { motion } from "framer-motion";

const Loading = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center">
    <motion.div
      className="w-16 h-16 border-4 border-t-fuchsia-500 border-b-purple-600 border-gray-700 rounded-full mb-4"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.8 }}
      className="text-gray-400 text-lg font-medium"
    >
      Loading, please wait...
    </motion.p>
  </div>
);

export default Loading;
