import React from "react";
import { motion } from "framer-motion";
import { usePortfolioData } from "../supabase/usePortfolioData";
import Loading from "./Loading";
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaEye, FaRocket, FaLightbulb, FaCog } from "react-icons/fa";
import { getProjectImageUrl } from "../utils/supabaseImages";

const AcademicProjects = () => {
  const { data, loading, error } = usePortfolioData();

  if (loading) return <Loading />;
  if (error)
    return (
      <p className="text-center mt-20 text-red-500 text-lg">
        Error loading data.
      </p>
    );

  const projects = data.academicProjects || [];

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
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-20 w-48 h-48 bg-gray-500/5 rounded-full blur-2xl"
        />
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
            Research & Academic Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-blue-500 mx-auto rounded-full mb-6"
          />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Research projects and academic contributions demonstrating technical expertise and innovation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {projects.map((project, index) => (
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
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left Content */}
                  <div className="flex-1">
                    {/* Project Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg shadow-lg flex-shrink-0"
                      >
                        <FaCode className="text-2xl text-blue-400" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2 leading-tight">{project.company}</h3>
                        {project.year && (
                          <div className="flex items-center gap-2 mb-3">
                            <FaStar className="text-blue-400 text-sm" />
                            <p className="text-blue-300 font-medium">{project.year}</p>
                          </div>
                        )}
                        <p className="text-gray-300 text-base leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Technologies */}
                    {project.technologies?.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-blue-300 mb-3 flex items-center gap-2">
                          <FaCog className="text-xs" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <motion.span
                              key={i}
                              whileHover={{ scale: 1.02 }}
                              className="px-3 py-1 bg-gray-800/60 border border-gray-600 rounded-lg text-xs font-medium text-gray-300 shadow-sm"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Links */}
                    {project.link && (
                      <motion.div className="mb-6">
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-400/30 rounded-lg text-blue-300 font-medium hover:text-white hover:bg-blue-500/20 transition-all duration-300"
                        >
                          <FaGithub className="text-lg" />
                          View Repository
                          <FaExternalLinkAlt className="text-xs" />
                        </motion.a>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Content - Images */}
                  {((project.casestudyImages && project.casestudyImages.length > 0) || (project.casestudyimages && project.casestudyimages.length > 0)) && (
                    <div className="lg:w-80 flex-shrink-0">
                      <h4 className="text-sm font-semibold text-purple-300 flex items-center gap-2 mb-4">
                        <FaEye className="text-xs" />
                        Project Gallery
                      </h4>
                      <div className="space-y-4">
                        {(project.casestudyImages || project.casestudyimages || []).map((img, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.03 }}
                            className="relative overflow-hidden rounded-2xl shadow-lg group"
                          >
                            <img
                              src={getProjectImageUrl(img)}
                              alt={`${project.company}-gallery-${i}`}
                              loading="lazy"
                              decoding="async"
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = `/images/projects/${img}`;
                              }}
                              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicProjects;
