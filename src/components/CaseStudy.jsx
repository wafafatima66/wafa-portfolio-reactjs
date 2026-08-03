import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { FaGithub, FaArrowLeft, FaRocket, FaCheckCircle } from "react-icons/fa";
// Import local JSON
import projectsData from "../constants/work_projects.json";

const CaseStudy = () => {
  const { id } = useParams();

  // Find project from local JSON
  const project = projectsData.find((p) => p.id === Number(id));
  
  // Fallback theme color if none provided in JSON
  const themeColor = project?.theme || "#a855f7"; 

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <Link to="/projects" className="text-purple-400 hover:underline">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white antialiased pb-20">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] opacity-20 blur-[120px]"
          style={{ background: `radial-gradient(circle, ${themeColor} 0%, transparent 70%)` }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32">
        {/* Navigation */}
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Back to Projects</span>
        </Link>

        {/* Hero Image */}
        {project.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl mb-16"
          >
            <img
              src={`/projects/${project.image}`}
              alt={project.company}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        )}

        {/* Content Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter"
            >
              {project.company}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed"
            >
              <ReactMarkdown>
                {project.long_description || project.description}
              </ReactMarkdown>
            </motion.div>
          </div>

          {/* Sidebar Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md h-fit"
          >
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-3">Role</h4>
              <p className="text-white font-medium">{project.role}</p>
            </div>

            {project.basic_info && (
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-3">Project Info</h4>
                <div className="text-gray-300 text-sm leading-loose">
                  <ReactMarkdown>{project.basic_info}</ReactMarkdown>
                </div>
              </div>
            )}

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-3">Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {(project.live_url || project.link) && (
              <a
                href={project.live_url || project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black rounded-2xl font-bold text-sm hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                {project.live_url ? <FaRocket /> : <FaGithub />}
                {project.live_url ? "View Live Demo" : "View Source Code"}
              </a>
            )}
          </motion.div>
        </div>

        {/* Story: alternating short text + full image, section by section */}
        {project.story_sections && project.story_sections.length > 0 ? (
          <div className="mt-24 space-y-24">
            {project.story_sections.map((section, i) => (
              <div key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="max-w-2xl mx-auto text-center mb-10"
                >
                  {section.heading && (
                    <h3 className="text-3xl font-bold mb-5 tracking-tight">
                      {section.heading}
                    </h3>
                  )}
                  {section.text && (
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {section.text}
                    </p>
                  )}
                </motion.div>

                {section.image && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
                  >
                    <img
                      src={`/projects/${section.image}`}
                      alt={section.heading || project.company}
                      className="w-full h-auto"
                    />
                  </motion.div>
                )}

                {section.code && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] max-w-3xl mx-auto"
                  >
                    <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-white/[0.03]">
                      <span className="w-3 h-3 rounded-full bg-red-500/70" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <span className="w-3 h-3 rounded-full bg-green-500/70" />
                    </div>
                    <pre className="p-6 text-sm leading-relaxed text-gray-300 font-mono overflow-x-auto whitespace-pre">
                      {section.code}
                    </pre>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Challenge */}
            {project.challenge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-24"
              >
                <h3 className="text-3xl font-bold mb-6">
                  The <span className="text-purple-500">Challenge</span>
                </h3>
                <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                  <ReactMarkdown>{project.challenge}</ReactMarkdown>
                </div>
              </motion.div>
            )}

            {/* Key Features / What Was Built */}
            {project.key_features && project.key_features.length > 0 && (
              <div className="mt-24">
                <h3 className="text-3xl font-bold mb-10">
                  What Was <span className="text-purple-500">Built</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.key_features.map((feat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex gap-5 bg-white/5 border border-white/10 rounded-2xl p-6"
                    >
                      <span
                        className="text-2xl font-black flex-shrink-0"
                        style={{ color: themeColor }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-gray-300 leading-relaxed">{feat}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Impact & Value */}
            {project.impact && project.impact.length > 0 && (
              <div className="mt-24">
                <h3 className="text-3xl font-bold mb-10">
                  Impact &amp; <span className="text-purple-500">Value</span>
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {project.impact.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-2xl p-6"
                    >
                      <FaCheckCircle
                        className="mt-1 flex-shrink-0"
                        style={{ color: themeColor }}
                      />
                      <p className="text-gray-300 leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Project Gallery */}
            {project.casestudy_images && project.casestudy_images.length > 0 && (
              <div className="mt-24 space-y-12">
                <h3 className="text-3xl font-bold text-center mb-12">Project <span className="text-purple-500">Snapshots</span></h3>
                <div className="grid grid-cols-1 gap-12">
                  {project.casestudy_images.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl"
                    >
                      <img
                        src={`/projects/${img}`}
                        alt={`${project.company} Gallery ${i + 1}`}
                        className="w-full h-auto"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CaseStudy;
