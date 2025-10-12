import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaRocket, FaProjectDiagram, FaExternalLinkAlt, FaClock } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";
import { usePortfolioData } from "../supabase/usePortfolioData";

const ICON_MAP = {
  github: FaGithub,
  openai: SiOpenai,
  rocket: FaRocket,
  project: FaProjectDiagram,
  external: FaExternalLinkAlt,
};

const OngoingTasks = () => {
  const { data, loading, error } = usePortfolioData();
  const ongoingTasks = data?.ongoingTasks || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <section className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      {loading && (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-purple-500"></div>
        </div>
      )}
      {error && (
        <p className="text-center text-red-400 mb-6">Error loading ongoing tasks.</p>
      )}
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 lg:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
          Current Endeavors
        </h2>
        <p className="text-lg sm:text-xl text-stone-400 max-w-3xl mx-auto">
          Exploring new frontiers in technology and innovation through ongoing projects and collaborations
        </p>
      </motion.div>

      {/* Tasks Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {ongoingTasks.map((task) => {
          const IconComponent = ICON_MAP[task.icon] || FaProjectDiagram;
          
          return (
            <motion.div
              key={task.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-stone-900/50 to-stone-800/30 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-6 h-full overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${task.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    {task.status}
                  </span>
                  <span className="text-xs text-stone-500 bg-stone-800/50 px-2 py-1 rounded-lg">
                    {task.category}
                  </span>
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${task.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                    {task.title}
                  </h3>
                  
                  <p className="text-stone-400 text-sm leading-relaxed mb-4">
                    {task.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-stone-500">Progress</span>
                      <span className="text-xs text-stone-400 font-medium">{task.progress}%</span>
                    </div>
                    <div className="w-full bg-stone-700/50 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${task.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${task.color}`}
                      ></motion.div>
                    </div>
                  </div>

                  {/* Start Date */}
                  <div className="flex items-center text-xs text-stone-500 mb-4">
                    <FaClock className="w-3 h-3 mr-2" />
                    Started {task.startDate ? formatDate(task.startDate) : "Unknown"}
                  </div>

                  {/* Action Button */}
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${task.color} text-white py-2 px-4 rounded-lg font-medium text-sm flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 opacity-80 hover:opacity-100`}
                  >
                    <span>Learn More</span>
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </motion.button> */}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/3 to-transparent rounded-full translate-y-8 -translate-x-8"></div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-12 lg:mt-16"
      >
        <p className="text-stone-400 mb-6">
          Interested in collaborating or learning more about these projects?
        </p>
        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
        >
          <span>Get In Touch</span>
          <FaRocket className="ml-2 w-4 h-4" />
        </motion.button> */}
      </motion.div>
    </section>
  );
};

export default OngoingTasks;