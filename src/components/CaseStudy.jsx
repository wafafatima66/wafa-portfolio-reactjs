import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { FaGithub, FaArrowLeft, FaRocket } from "react-icons/fa";
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

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black rounded-2xl font-bold text-sm hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                <FaGithub /> View Source Code
              </a>
            )}
          </motion.div>
        </div>

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
      </div>
    </div>
  );
};

export default CaseStudy;