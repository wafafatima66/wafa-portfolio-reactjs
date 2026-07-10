import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFolderOpen, FaArrowRight } from "react-icons/fa6";
import projectsData from "../constants/work_projects.json";

const TABS = [
  "All",
  "ReactJS",
  "JavaScript",
  "Node.js",
  "Python",
  "PHP",
  "Laravel",
  "Tailwind",
  "Wordpress",
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((proj) =>
          proj.technologies?.some((tech) =>
            tech.toLowerCase().includes(activeTab.toLowerCase()),
          ),
        );

  return (
    <section className="relative min-h-screen bg-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Glows matching Identity design */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
          >
            <FaFolderOpen className="text-purple-400 text-sm" />
            <span className="text-purple-400 text-xs font-bold uppercase tracking-[0.2em]">
              Portfolio
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
              Works
            </span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white border-transparent shadow-lg shadow-purple-500/30"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-purple-500/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-gradient-to-b from-gray-900/40 to-black border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-xl hover:border-purple-500/50 transition-all duration-500"
              >
                <Link to={`/casestudy/${proj.id}`}>
                  {/* Image Container with updated path */}
                  <div className="relative h-56 overflow-hidden">
                    {proj.image ? (
                      <img
                        src={`/projects/${proj.image}`}
                        alt={proj.company}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0"
                      />
                    ) : (
                      <div
                        className="w-full h-full relative overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${proj.theme || "#9333ea"}33 0%, #111 60%, #000 100%)`,
                        }}
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:30px_30px]" />
                        <div
                          className="absolute -top-10 -right-6 w-36 h-36 rounded-full blur-3xl opacity-60"
                          style={{ backgroundColor: proj.theme || "#9333ea" }}
                        />
                        <div className="relative z-10 h-full flex flex-col justify-end p-6">
                          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-2">
                            Creative Experiment
                          </p>
                          <h4 className="text-2xl font-black uppercase tracking-tight text-white">
                            {proj.title || proj.company}
                          </h4>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                    {/* View Details Floating Label */}
                    <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
                        View Project{" "}
                        <FaArrowRight className="text-purple-400" />
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold text-purple-400 uppercase tracking-[0.15em] bg-purple-400/10 px-3 py-1 rounded-lg">
                        {proj.role}
                      </span>
                      {proj.live_url && (
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-300">
                          Live Demo
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-purple-300 transition-colors">
                      {proj.company}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 font-medium">
                      {proj.description}
                    </p>

                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-2">
                      {proj.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] text-gray-500 font-bold uppercase tracking-tighter bg-white/5 border border-white/5 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 italic font-medium">
              No projects found in the {activeTab} category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
