import React from "react";
import { motion } from "framer-motion";
import academicData from "../constants/academic_background.json";
import { FaGraduationCap, FaAward, FaExternalLinkAlt } from "react-icons/fa";

const AcademicBackground = () => {
  const education = academicData
    .filter((item) => item.type === "Education")
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
  const tests = academicData
    .filter((item) => item.type === "Standardized Exam")
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section 1: Education */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-xs font-black tracking-[0.3em] text-blue-600 uppercase mb-4">
                Academic Path
              </h2>
              <div className="h-1 w-8 bg-blue-600 rounded-full" />
            </div>
          </div>

          <div className="md:col-span-3 space-y-8">
            {education.map((item) => (
              <AcademicEntry key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Section 2: Standardized Exams */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-xs font-black tracking-[0.3em] text-gray-400 uppercase mb-4">
                Certifications
              </h2>
              <div className="h-1 w-8 bg-gray-200 rounded-full" />
            </div>
          </div>

          <div className="md:col-span-3 space-y-8">
            {tests.map((item) => (
              <AcademicEntry key={item.id} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const AcademicEntry = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group relative bg-white p-8 rounded-2xl border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-blue-100"
    >
      {/* Subtle Vertical Accent Line */}
      <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-transparent group-hover:bg-blue-600 transition-all duration-500" />
      
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {item.title}
            </h3>
            {item.result && (
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 uppercase tracking-tighter">
                {item.result}
              </span>
            )}
          </div>
          
          <p className="text-blue-500 font-semibold text-sm mb-4 flex items-center gap-2">
            <FaGraduationCap className="text-gray-300" />
            {item.institution}
          </p>
          
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
            {item.text}
          </p>
        </div>

        <div className="flex items-center gap-4 text-gray-300 group-hover:text-blue-200 transition-colors">
          <FaAward className="text-2xl" />
        </div>
      </div>
      
      {/* Decorative Corner Element */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <FaExternalLinkAlt className="text-gray-200 text-xs" />
      </div>
    </motion.div>
  );
};

export default AcademicBackground;