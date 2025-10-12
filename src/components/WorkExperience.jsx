import React from "react";
import { motion } from "framer-motion";
import { usePortfolioData } from "../supabase/usePortfolioData";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const WorkExperience = () => {
  const { data, loading, error } = usePortfolioData();

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
    </div>
  );
  
  if (error) return (
    <div className="text-center mt-20 text-red-400">
      <p>Error loading work experience data.</p>
    </div>
  );

  const timelineData = data.timelineData
    .slice()
    .sort((a, b) => b.sequence - a.sequence);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
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

  return (
    <section className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16 lg:mb-20"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
          Work Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
          My professional journey and key achievements
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        {/* Timeline Line - Hidden on mobile, visible on larger screens */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 h-full rounded-full shadow-lg"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {timelineData.map((event, index) => {
            const isLeft = index % 2 === 0;
            
            let eventYear = event.date.split("-")[1]?.trim();
            if (eventYear?.toLowerCase() === "present") {
              eventYear = new Date().getFullYear();
            }

            // Mock skills data - replace with actual data if available
            const mockSkills = [
              "React", "JavaScript", "Node.js", "MongoDB", "Express.js"
            ].slice(0, Math.floor(Math.random() * 3) + 2);

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-8 sm:mb-12 lg:mb-16 ${
                  isLeft 
                    ? "lg:pr-8 lg:text-right lg:flex lg:justify-end" 
                    : "lg:pl-8 lg:text-left lg:flex lg:justify-start"
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 shadow-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-20"></div>
                  </motion.div>
                </div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)"
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-full lg:w-5/12 ${
                    isLeft ? "lg:mr-auto" : "lg:ml-auto"
                  }`}
                >
                  <div className="relative p-6 sm:p-8 bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl border border-purple-500/20 shadow-2xl hover:border-purple-500/40 transition-all duration-300 group">
                    {/* Card Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Year Badge */}
                    <div className="absolute -top-4 left-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
                      <span className="text-white font-bold text-sm">{eventYear}</span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 mt-4">
                      {/* Job Title */}
                      <div className="flex items-center mb-3">
                        <FaBriefcase className="text-purple-400 mr-3 text-lg" />
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {event.title}
                        </h3>
                      </div>

                      {/* Location */}
                      <div className="flex items-center mb-2 text-purple-300">
                        <FaMapMarkerAlt className="mr-2 text-sm" />
                        <span className="font-medium text-sm sm:text-base">{event.location}</span>
                      </div>

                      {/* Date */}
                      <div className="flex items-center mb-4 text-gray-400">
                        <FaCalendarAlt className="mr-2 text-sm" />
                        <span className="text-sm">{event.date}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                        {event.description}
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2">
                        {mockSkills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                            className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-xs font-medium text-purple-300 hover:from-purple-600/30 hover:to-pink-600/30 transition-all cursor-default"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-full blur-xl"></div>
                  </div>
                </motion.div>

                {/* Mobile Timeline Connector */}
                <div className="lg:hidden w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
              </motion.div>
            );
          })}
        </motion.div>


      </div>
    </section>
  );
};

export default WorkExperience;
