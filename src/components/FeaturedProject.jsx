import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePortfolioData } from "../supabase/usePortfolioData";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaEye } from "react-icons/fa";
import { getProjectImageUrl } from "../utils/supabaseImages";

const FeaturedProject = () => {
  const { data, loading, error } = usePortfolioData();
  const [selectedProject, setSelectedProject] = useState(null);

  // safely extract projects
  const projects = data?.projects || [];

  // only show featured projects
  const featuredProjects = projects.filter((proj) => proj.featured);

  // auto-select first project on load
  useEffect(() => {
    if (featuredProjects.length > 0 && !selectedProject) {
      setSelectedProject(featuredProjects[0]);
    }
  }, [featuredProjects, selectedProject]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="text-center mt-20 text-red-400 min-h-screen flex items-center justify-center">
        <p>Error loading featured projects.</p>
      </div>
    );

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

  const previewVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating Background Elements - matching About Me */}
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
        {/* Hero Section - matching About Me style */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6"
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
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto rounded-full mb-6"
          />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore my most impactful projects that showcase innovation, creativity, and technical excellence
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          {/* Left: Project List */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 space-y-8"
          >
            <div className="relative">
              {/* Section Header - removed bold styling */}
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-4">
                  <FaCode className="text-white text-xl" />
                </div>
                <h3 className="text-xl text-white">Select to View the Project</h3>
              </div>

              {/* Projects List - improved scrolling */}
              <div className="max-h-[500px] overflow-y-auto pr-4 pb-4 custom-scrollbar">
                {featuredProjects.length > 0 ? (
                  <div className="space-y-6 px-2 py-2">
                    {featuredProjects.map((proj, index) => (
                      <motion.div
                        key={proj.id}
                        variants={cardVariants}
                        onClick={() => setSelectedProject(proj)}
                        whileHover={{ 
                          y: -5, 
                          boxShadow: selectedProject?.id === proj.id 
                            ? "0 20px 40px rgba(139, 92, 246, 0.3)" 
                            : "0 15px 30px rgba(236, 72, 153, 0.3)" 
                        }}
                        className={`cursor-pointer p-6 rounded-3xl border transition-all duration-300 group relative overflow-hidden ${
                          selectedProject?.id === proj.id
                            ? "border-purple-500/60 bg-gradient-to-br from-purple-500/20 via-gray-900/60 to-pink-500/20 backdrop-blur-md shadow-2xl transform scale-[1.02]"
                            : "border-pink-500/20 hover:border-purple-500/40 bg-gray-900/30 backdrop-blur-sm hover:bg-gray-900/50 hover:scale-[1.01]"
                        }`}
                      >

                      {/* Card Background Effect - matching About Me */}
                      <div className={`absolute inset-0 transition-opacity duration-500 ${
                        selectedProject?.id === proj.id
                          ? "bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-100"
                          : "bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100"
                      }`} />
                      
                      {/* Selection Indicator - Enhanced */}
                      {selectedProject?.id === proj.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-4 right-4 w-3 h-3 bg-purple-500 rounded-full shadow-lg"
                        >
                          <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-75"></div>
                        </motion.div>
                      )}

                      <div className="relative z-10">
                        {/* Project Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h2 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                              {proj.company}
                            </h2>
                            <p className="text-sm text-gray-400 mt-1">{proj.role}</p>
                          </div>
                          <FaStar className={`text-lg transition-colors ${
                            selectedProject?.id === proj.id ? "text-purple-400" : "text-gray-500 group-hover:text-pink-400"
                          }`} />
                        </div>

                        {/* Selected Project Badge */}
                        {selectedProject?.id === proj.id && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-4"
                          >
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-3 py-1">
                              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                              <span className="text-xs font-medium text-purple-300">Currently Viewing</span>
                            </div>
                          </motion.div>
                        )}

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {proj.technologies?.slice(0, 4).map((tech, idx) => (
                            <motion.span
                              key={idx}
                              whileHover={{ scale: 1.05 }}
                              className="bg-gray-800/60 text-gray-200 px-3 py-1 rounded-full text-xs font-medium border border-gray-700/50 hover:border-purple-500/50 transition-all"
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {proj.technologies?.length > 4 && (
                            <span className="text-gray-400 text-xs px-2 py-1">
                              +{proj.technologies.length - 4} more
                            </span>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                          {proj.description}
                        </p>

                        {/* Action Links */}
                        <div className="flex items-center space-x-4">
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors group/link"
                          >
                            <FaGithub className="mr-2 group-hover/link:scale-110 transition-transform" />
                            Code
                          </a>
                          <Link
                            to={`/casestudy/${proj.id}`}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center text-pink-400 hover:text-pink-300 font-medium text-sm transition-colors group/link"
                          >
                            <FaEye className="mr-2 group-hover/link:scale-110 transition-transform" />
                            Case Study
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <FaCode className="text-4xl text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">No featured projects found</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right: Project Preview */}
          <motion.div
            variants={previewVariants}
            className="lg:col-span-8 space-y-8"
          >
            <div className="sticky top-8">
              <div className="relative p-8 bg-gray-900/40 backdrop-blur-md rounded-3xl border border-purple-500/20 shadow-2xl overflow-hidden min-h-[600px]">
                {/* Preview Background Effect - matching About Me */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5" />
                
                {selectedProject ? (
                  <motion.div
                    key={selectedProject.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 h-full flex flex-col"
                  >
                    {/* Preview Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.company}</h3>
                        <p className="text-purple-300 font-medium">{selectedProject.role}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl hover:scale-105 transition-transform shadow-lg group"
                        >
                          <FaGithub className="text-white text-lg group-hover:rotate-12 transition-transform" />
                        </a>
                        <Link
                          to={`/casestudy/${selectedProject.id}`}
                          className="p-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl hover:scale-105 transition-transform shadow-lg group"
                        >
                          <FaExternalLinkAlt className="text-white text-lg group-hover:rotate-12 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    {/* Project Image */}
                    <div className="relative flex-1 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                      <div className="relative bg-gray-800/50 rounded-2xl p-4 h-full min-h-[400px]">
                        {selectedProject.image ? (
                          <img
                            src={getProjectImageUrl(selectedProject.image)}
                            alt={selectedProject.company}
                            loading="lazy"
                            decoding="async"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = `/images/projects/${selectedProject.image}`;
                            }}
                            className="w-full h-full object-cover rounded-xl shadow-2xl"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                            <div className="text-center">
                              <FaCode className="text-4xl text-gray-400 mx-auto mb-4" />
                              <p className="text-gray-400">Project Preview</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Project Details - removed duplicate technologies */}
                    {/* <div className="space-y-4">
                      <p className="text-gray-300 leading-relaxed text-base">
                        {selectedProject.description}
                      </p>
                    </div> */}
                  </motion.div>
                ) : (
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <FaCode className="text-white text-2xl" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white mb-2">Select a Project</h3>
                      <p className="text-gray-400">Choose a featured project to see detailed preview</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl font-bold text-white shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            <FaEye className="mr-3 group-hover:scale-110 transition-transform" />
            Explore All Projects
            <FaExternalLinkAlt className="ml-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Custom Scrollbar Styles - matching About Me */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #d946ef, #a855f7);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #e879f9, #c084fc);
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProject;
