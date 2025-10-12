import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioData } from "../supabase/usePortfolioData";
import Loading from "./Loading";
import { FaGraduationCap, FaCertificate, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Courses = () => {
  const { data, loading, error } = usePortfolioData();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (loading) return <Loading />;
  if (error) return <p className="text-center mt-20">Error loading data.</p>;

  const courses = data?.courses || [];

  if (courses.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center">
        <div className="text-center p-8 bg-gray-900/40 backdrop-blur-md rounded-3xl border border-purple-500/20">
          <FaGraduationCap className="text-6xl text-purple-400 mx-auto mb-4" />
          <p className="text-xl text-gray-300">No courses or certifications available.</p>
        </div>
      </div>
    );
  }

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % courses.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9, 
      rotateY: -10,
      z: -50 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      z: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    },
    hover: {
      scale: 1.02,
      rotateY: 2,
      z: 50,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        />
        
        {/* Central Gradient Orb */}
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, -60, -20],
              x: [0, 30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className={`absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mr-4">
                <FaGraduationCap className="text-white text-3xl" />
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Courses & Certifications
              </h2>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Continuous learning and professional development through specialized courses and certifications
            </p>
          </motion.div>

          {/* Slider Container */}
          <motion.div variants={itemVariants} className="relative flex items-center justify-center">
            {/* Prev Button */}
            <motion.button
              onClick={prevSlide}
              whileHover={{ 
                scale: 1.15, 
                backgroundColor: "rgba(139, 92, 246, 0.4)",
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-2 md:left-0 z-20 p-4 rounded-full bg-gray-900/60 backdrop-blur-md
                         border border-purple-500/30 text-purple-300 text-xl md:text-2xl 
                         shadow-2xl transition-all duration-300 hover:border-purple-400/50
                         hover:shadow-purple-500/25"
            >
              <motion.div
                whileHover={{ x: -2 }}
                transition={{ duration: 0.2 }}
              >
                <FaChevronLeft />
              </motion.div>
            </motion.button>

            {/* Carousel */}
            <div className="overflow-hidden w-full max-w-4xl px-4 md:px-16">
              <AnimatePresence initial={false} mode="wait">
                {courses.slice(currentIndex, currentIndex + 1).map((course, idx) => (
                  <motion.div
                    key={course.name + idx}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    whileHover="hover"
                    className="relative p-8 md:p-12 rounded-3xl bg-gray-900/40 backdrop-blur-md 
                               border border-purple-500/20 shadow-2xl overflow-hidden cursor-pointer
                               hover:border-purple-400/40 transition-all duration-500"
                    style={{ perspective: "1000px" }}
                  >
                    {/* Enhanced Card Background Effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5"
                      whileHover={{
                        background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, transparent 50%, rgba(236, 72, 153, 0.1) 100%)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Animated Decorative Elements */}
                    <motion.div 
                      className="absolute top-4 right-4"
                      variants={floatingVariants}
                      animate="animate"
                    >
                      <FaCertificate className="text-3xl text-purple-400/30" />
                    </motion.div>
                    
                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0"
                      whileHover={{ 
                        opacity: 1,
                        boxShadow: "inset 0 0 60px rgba(139, 92, 246, 0.1)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative z-10">
                      {/* Course Header */}
                      <div className="text-center mb-8">
                        <motion.h3 
                          className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                          whileHover={{ 
                            scale: 1.02,
                            textShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {course.name}
                        </motion.h3>
                        {course.instituation && (
                          <motion.div 
                            className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-4"
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "rgba(139, 92, 246, 0.3)",
                              borderColor: "rgba(139, 92, 246, 0.5)"
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <FaGraduationCap className="text-purple-400" />
                            </motion.div>
                            <span className="text-purple-300 font-medium">{course.instituation}</span>
                          </motion.div>
                        )}
                        {course.year && (
                          <motion.p 
                            className="text-pink-400 font-semibold text-lg"
                            whileHover={{ 
                              scale: 1.05,
                              color: "#f472b6"
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {course.year}
                          </motion.p>
                        )}
                      </div>

                      {/* Course Description */}
                      <div className="mb-8">
                        <motion.p 
                          className="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto"
                          whileHover={{ 
                            color: "#d1d5db",
                            scale: 1.01
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {course.description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextSlide}
              whileHover={{ 
                scale: 1.15, 
                backgroundColor: "rgba(139, 92, 246, 0.4)",
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-2 md:right-0 z-20 p-4 rounded-full bg-gray-900/60 backdrop-blur-md
                         border border-purple-500/30 text-purple-300 text-xl md:text-2xl 
                         shadow-2xl transition-all duration-300 hover:border-purple-400/50
                         hover:shadow-purple-500/25"
            >
              <motion.div
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <FaChevronRight />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Enhanced Pagination Dots */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4 mt-12">
            {courses.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentIndex(i)}
                whileHover={{ 
                  scale: 1.4,
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)"
                }}
                whileTap={{ scale: 0.8 }}
                animate={{
                  scale: i === currentIndex ? 1.2 : 1,
                  boxShadow: i === currentIndex 
                    ? "0 0 25px rgba(139, 92, 246, 0.8)" 
                    : "0 0 0px rgba(139, 92, 246, 0)"
                }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeOut"
                }}
                className={`relative w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-gradient-to-r from-purple-400 to-pink-500"
                    : "bg-gray-600/50 hover:bg-gray-500/70 border border-gray-500/30"
                }`}
              >
                {/* Active dot pulse effect */}
                {i === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 0.3, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
                
                {/* Hover ripple effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-purple-400/30 opacity-0"
                  whileHover={{
                    scale: [1, 2],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            ))}
          </motion.div>

          {/* Additional Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`float-${i}`}
                className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.sin(i) * 50, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 6 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8,
                }}
                style={{
                  left: `${10 + i * 10}%`,
                  bottom: `${20 + (i % 3) * 20}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
