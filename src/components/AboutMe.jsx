import React from "react";
import { motion } from "framer-motion";
import { usePortfolioData } from "../supabase/usePortfolioData";
import { FaUser, FaEnvelope, FaServicestack, FaChartLine, FaStar, FaCode, FaLightbulb, FaRocket } from "react-icons/fa";
import { getPublicImageUrl } from "../utils/supabaseImages";

const AboutMe = () => {
  const { data, loading, error } = usePortfolioData();

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
    </div>
  );
  
  if (error) return (
    <div className="text-center mt-20 text-red-400 min-h-screen flex items-center justify-center">
      <p>Error loading about me data.</p>
    </div>
  );

  const { biography, contact: CONTACT, services, stats: STATS } = data.aboutMe;

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
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            style={{
              background: "linear-gradient(45deg, #8b5cf6, #ec4899, #f59e0b, #10b981)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto rounded-full mb-6"
          />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate developer creating innovative digital solutions with creativity and precision
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Left Side - Profile & Bio */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Image */}
            <motion.div 
              variants={cardVariants}
              className="relative flex justify-center lg:justify-start"
            >
              <div className="relative group">
                {/* Animated Border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full p-1 blur-sm"
                />
                
                {/* Image Container */}
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-full p-2">
                  <img
                    src={getPublicImageUrl("profile/profile-4.png", { width: 400, quality: 70, format: "webp" })}
                    alt="Profile"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (!img.dataset.fallback1) {
                        img.dataset.fallback1 = "true";
                        img.src = getPublicImageUrl("profile/profile-4.png");
                        return;
                      }
                      img.onerror = null;
                      img.src = "/profile-4.png";
                    }}
                    className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Floating Skills Icons */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <FaCode className="absolute top-8 left-8 text-purple-400 text-2xl opacity-80" />
                  <FaRocket className="absolute top-8 right-8 text-orange-400 text-2xl opacity-80" />
                  <FaLightbulb className="absolute bottom-8 left-8 text-yellow-400 text-2xl opacity-80" />
                  <FaStar className="absolute bottom-8 right-8 text-pink-400 text-2xl opacity-80" />
                </motion.div>
              </div>
            </motion.div>

            {/* Biography Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
              className="relative p-8 bg-gray-900/40 backdrop-blur-md rounded-3xl border border-purple-500/20 shadow-2xl group overflow-hidden"
            >
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-4">
                    <FaUser className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">My Story</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-base whitespace-pre-line">
                  {biography}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Services & Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Services Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)" }}
              className="relative p-8 bg-gray-900/40 backdrop-blur-md rounded-3xl border border-pink-500/20 shadow-2xl group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl mr-4">
                    <FaServicestack className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">What I Do</h3>
                </div>
                <div className="space-y-4">
                  {services.split("*").map(
                    (service, index) =>
                      service.trim() && (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start group/item"
                        >
                          <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mr-4 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                          <span className="text-gray-300 group-hover/item:text-white transition-colors">
                            {service.trim()}
                          </span>
                        </motion.div>
                      )
                  )}
                </div>
              </div>
            </motion.div>

            {/* Contact & Stats Combined Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
              className="relative p-8 bg-gray-900/40 backdrop-blur-md rounded-3xl border border-green-500/20 shadow-2xl group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 space-y-8">
                {/* Contact Section */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mr-4">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
                  </div>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-green-300 hover:text-green-200 transition-colors text-lg underline decoration-green-500/50 hover:decoration-green-300 break-all"
                  >
                    {CONTACT.email}
                  </a>
                </div>

                {/* Stats Section */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4">
                      <FaChartLine className="text-white text-xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Key Numbers</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {STATS.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-4 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all"
                      >
                        <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                          {stat.value}
                        </p>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">
                          {stat.heading}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full shadow-2xl mb-4"
          >
            <FaRocket className="text-white text-2xl" />
          </motion.div>
          <p className="text-gray-300 text-lg">
            Ready to bring your ideas to life? Let's collaborate!
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default AboutMe;
