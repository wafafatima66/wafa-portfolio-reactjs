import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePortfolioData } from "../supabase/usePortfolioData";
import Loading from "./Loading";
import { FaGraduationCap, FaCertificate, FaClipboardCheck, FaStar, FaTrophy, FaAward } from "react-icons/fa";

const AcademicBackground = () => {
  const { data, loading, error } = usePortfolioData();
  const [filter, setFilter] = useState("Education"); // default filter

  if (loading) return <Loading />;
  if (error) return <p className="text-center mt-20">Error loading data.</p>;

  const academicBackground = data.academicBackground;

  // Filtered categories
  const education = academicBackground
    .filter((item) => item.type === "Education")
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // latest created first  
  const tests = academicBackground
    .filter((item) => item.type === "Standardized Exam")
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // latest created first

  const getFilteredItems = () => {
    if (filter === "Education") return education;
    if (filter === "Standardized Exam") return tests;
    return [];
  };

  // Icon map
  const iconMap = {
    Education: <FaGraduationCap className="text-2xl text-blue-400" />,
    "Standardized Exam": <FaClipboardCheck className="text-2xl text-blue-400" />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 right-20 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
        />
        
        {/* Floating Academic Icons */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-32 opacity-20"
        >
          <FaTrophy className="text-6xl text-yellow-400" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-32 opacity-20"
        >
          <FaAward className="text-5xl text-purple-400" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            Academic Background
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-blue-500 mx-auto rounded-full mb-6"
          />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Educational qualifications, certifications, and academic achievements
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {["Education", "Standardized Exam"].map((type) => (
            <motion.button
              key={type}
              onClick={() => setFilter(type)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative px-6 py-3 rounded-lg font-medium flex items-center gap-3 transition-all duration-300 border ${
                filter === type
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                  : "bg-gray-800/50 text-gray-300 border-gray-600 hover:bg-gray-700/50 hover:text-white hover:border-gray-500"
              }`}
            >
              <div className="flex items-center gap-3">
                {iconMap[type]} 
                <span>{type}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Items Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {getFilteredItems().map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.15)",
                scale: 1.01
              }}
              className="relative p-8 bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700 shadow-lg group overflow-hidden"
            >
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg"
                  >
                    {iconMap[filter]}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-lg text-purple-300 font-semibold">{item.institution}</p>
                  </div>
                </div>
                
                {item.date && (
                  <div className="flex items-center gap-2 mb-4">
                    <FaStar className="text-yellow-400 text-sm" />
                    <p className="text-sm text-gray-400 font-medium">{item.date}</p>
                  </div>
                )}
                
                <p className="text-gray-300 leading-relaxed mb-4">{item.text}</p>
                
                {item.result && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-lg mt-4"
                  >
                    <p className="text-blue-300 font-medium">{item.result}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicBackground;
