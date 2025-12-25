import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import academicProjectsData from "../constants/academic_projects.json";
import { FaExternalLinkAlt, FaFileAlt, FaMicroscope, FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

const AcademicProjects = () => {
  // Track which project IDs are expanded
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const projects = academicProjectsData
    .filter((p) => (p.status || "").toLowerCase() === "active")
    .sort((a, b) => {
      const aPub = String(a.Published).toLowerCase() === "true";
      const bPub = String(b.Published).toLowerCase() === "true";
      if (aPub === bPub) return new Date(b.createdAt) - new Date(a.createdAt);
      return aPub ? -1 : 1;
    });

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm font-black tracking-[0.25em] text-blue-600 uppercase mb-3">Research & Publications</h2>
          <h3 className="text-4xl md:text-5xl font-light text-gray-900">Academic <span className="italic font-serif">Contributions</span></h3>
          <div className="h-px w-24 bg-blue-600 mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projects.map((project, idx) => {
            const isPublished = String(project.Published).toLowerCase() === "true";
            const isExpanded = expandedId === project.id;

            return (
              <motion.div
                key={project.id}
                layout // This makes the card growth smooth
                className={`group relative flex flex-col rounded-2xl p-8 transition-all duration-500 
                  ${isPublished 
                    ? "bg-gradient-to-br from-white to-blue-50/40 border-2 border-blue-400 shadow-[0_20px_50px_rgba(37,99,235,0.15)]" 
                    : "bg-white border border-gray-100 shadow-sm"
                  }`}
              >
                {isPublished && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-widest rounded-full flex items-center gap-2">
                    <FaCheckCircle /> Published Research
                  </div>
                )}

                <div className="flex items-center gap-2 text-blue-600 mb-6">
                  <div className={`p-2 rounded-lg ${isPublished ? "bg-blue-600 text-white" : "bg-blue-50"}`}>
                    <FaMicroscope className="text-sm" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">{project.role}</span>
                </div>

                <h3 className="text-xl font-bold leading-tight mb-4 text-gray-900">{project.title}</h3>

                {/* Description Logic */}
<div className="relative">
  <motion.div
    layout
    initial={false}
    animate={{ 
      height: isExpanded ? "auto" : "4.5rem", // 4.5rem is roughly 3 lines
    }}
    transition={{ 
      duration: 0.5, 
      ease: [0.04, 0.62, 0.23, 0.98] // Professional "snappy" curve
    }}
    className="overflow-hidden relative"
  >
    <p className="text-gray-500 text-xs leading-relaxed text-justify">
      {project.description}
    </p>
    
    {/* Fades the text out when collapsed to look cleaner */}
    {!isExpanded && (
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    )}
  </motion.div>
  
  <button 
    onClick={() => toggleExpand(project.id)}
    className="mt-2 text-blue-600 text-[11px] font-bold uppercase tracking-tighter flex items-center gap-1 hover:underline relative z-10"
  >
    {isExpanded ? (
      <><FaChevronUp size={10} /> View Less</>
    ) : (
      <><FaChevronDown size={10} /> Read Full Abstract</>
    )}
  </button>
</div>

                <div className="flex flex-wrap gap-2 my-6">
                  {project.technologies?.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-50 border border-gray-100 text-[9px] font-bold text-gray-400 uppercase rounded">{tech}</span>
                  ))}
                </div>

                {project.link && (
                  <motion.a
                    layout
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all
                      ${isPublished ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-900 text-white hover:bg-blue-600"}`}
                  >
                    <FaFileAlt /> {isPublished ? "Full Publication" : "Details"} <FaExternalLinkAlt className="text-[10px] opacity-40" />
                  </motion.a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AcademicProjects;