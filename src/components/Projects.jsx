import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePortfolioData } from "../supabase/usePortfolioData";
import Loading from "./Loading";
import { getProjectImageUrl } from "../utils/supabaseImages";

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
  const { data, loading, error } = usePortfolioData();
  const [activeTab, setActiveTab] = useState("All");

  const projects = data?.projects || [];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((proj) => proj.technologies?.includes(activeTab));

 if (loading) return <Loading />;

  if (error)
    return <p className="text-center mt-20 text-red-500">Error loading data.</p>;

  return (
    <div className="relative min-h-screen text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl w-full">
        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-500 to-purple-400 bg-clip-text text-transparent pb-8 sm:pb-12 lg:pb-16"
        >
          Projects
        </motion.h1>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center mb-8 sm:mb-10 lg:mb-12 px-2"
        >
          {TABS.map((tab, index) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              transition={{ type: "spring", stiffness: 300 }}
              className={`
                relative px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-fuchsia-500 via-purple-600 to-purple-700 text-white shadow-lg"
                    : "bg-gray-800/60 text-gray-300 hover:bg-gray-700 hover:text-white"
                }
              `}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-y-auto max-h-[500px] sm:max-h-[600px] lg:max-h-[700px] scroll-theme p-2 sm:p-4"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((proj, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg border border-purple-700/40 p-3 sm:p-4 cursor-pointer hover:shadow-purple-900/40 w-full"
              >
                {proj.image && (
                  <motion.img
                    src={getProjectImageUrl(proj.image)}
                    alt={proj.company}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `/images/projects/${proj.image}`;
                    }}
                    className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-lg shadow-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
                <h2 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white line-clamp-2">
                  {proj.company}
                </h2>
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-2">
                  {proj.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="bg-gray-800/50 text-gray-200 px-2 py-1 rounded-md text-xs shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center text-sm sm:text-base">
              No projects found for {activeTab}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
