import React from "react";
import { motion } from "framer-motion";
import academicData from "../constants/academic_background.json";
import {
  FaGraduationCap,
  FaAward,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";

const ProjectEntry = ({ item }) => {
  const stack = Array.isArray(item.stack) ? item.stack : [];
  const codeLink = String(item.code_link || "").trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group relative bg-white p-8 rounded-2xl border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-blue-100"
    >
      <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-transparent group-hover:bg-blue-600 transition-all duration-500" />

      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {item.title}
          </h3>

          {stack.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.map((s, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-blue-50 border border-blue-100 text-[10px] font-bold text-blue-700 uppercase rounded"
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mt-4">
            {item.text}
          </p>
        </div>

        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors"
          >
            <FaCode /> Code{" "}
            <FaExternalLinkAlt className="text-[10px] opacity-60" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const AcademicBackground = () => {
  const education = academicData
    .filter((item) => item.type === "Education")
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const projects = academicData
    .filter((item) => item.type === "Project")
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const tests = academicData
    .filter((item) => item.type === "Standardized Exam")
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const awards = academicData
    .filter((item) => item.type === "Award")
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const skillsEntry = academicData.find((item) => item.type === "Skills");
  const skills =
    skillsEntry?.skills && typeof skillsEntry.skills === "object"
      ? skillsEntry.skills
      : null;

  return (
    <section className="bg-white py-24 px-6 text-[15px]">
      <div className="max-w-5xl mx-auto">
        {/* Section 1: Education */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-sm font-black tracking-[0.3em] text-blue-600 uppercase mb-4">
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

        {awards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-32">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-sm font-black tracking-[0.3em] text-amber-600 uppercase mb-4">
                  Awards
                </h2>
                <div className="h-1 w-8 bg-amber-500 rounded-full" />
              </div>
            </div>

            <div className="md:col-span-3 space-y-8">
              {awards.map((item) => (
                <AcademicEntry key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-32">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-sm font-black tracking-[0.3em] text-blue-600 uppercase mb-4">
                  Research & Technical Projects
                </h2>
                <div className="h-1 w-8 bg-blue-600 rounded-full" />
              </div>
            </div>

            <div className="md:col-span-3 space-y-8">
              {projects.map((item) => (
                <ProjectEntry key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {skills && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-32">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-sm font-black tracking-[0.3em] text-gray-900 uppercase mb-4">
                  Technical Skills
                </h2>
                <div className="h-1 w-8 bg-gray-900 rounded-full" />
              </div>
            </div>

            <div className="md:col-span-3 space-y-6">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group}>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-3">
                    {group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(Array.isArray(items) ? items : []).map((value, i) => (
                      <span
                        key={`${group}-${i}`}
                        className="px-2 py-1 bg-gray-50 border border-gray-100 text-[10px] font-bold text-gray-600 uppercase rounded"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section: Standardized Exams */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-32">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-sm font-black tracking-[0.3em] text-gray-400 uppercase mb-4">
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
  const isExam = item.type === "Standardized Exam";
  const isAward = item.type === "Award";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={`group relative bg-white p-8 rounded-2xl border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-blue-100 ${isExam ? "bg-gradient-to-br from-white to-blue-50/20" : ""}`}
    >
      {/* Subtle Vertical Accent Line */}
      <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-transparent group-hover:bg-blue-600 transition-all duration-500" />

      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3
              className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 ${isExam ? "text-3xl" : "text-2xl"}`}
            >
              {item.title}
            </h3>
            {item.result && (
              <span
                className={`px-2 py-0.5 rounded font-bold uppercase tracking-tighter ${isExam ? "text-base bg-blue-600 text-white" : "text-xs bg-blue-50 text-blue-700"}`}
              >
                {item.result}
              </span>
            )}
          </div>

          {item.institution && (
            <p className="text-blue-500 font-semibold text-base mb-4 flex items-center gap-2">
              {isAward ? (
                <FaAward className="text-gray-300" />
              ) : (
                <FaGraduationCap className="text-gray-300" />
              )}
              {item.institution}
            </p>
          )}

          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-4">
            {item.text.split(/(Summa Cum Laude)/i).map((part, i) =>
              part.toLowerCase() === "summa cum laude" ? (
                <span
                  key={i}
                  className="text-blue-600 font-bold bg-blue-50 px-1 rounded"
                >
                  {part}
                </span>
              ) : (
                part
              ),
            )}
          </p>

          {item.modules && item.modules.length > 0 && (
            <div className="mt-4">
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                Courses Taken
              </p>
              <div className="flex flex-wrap gap-2">
                {item.modules.map((module, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-50 border border-gray-100 text-[10px] font-bold text-gray-500 uppercase rounded"
                  >
                    {module}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4 text-gray-300 group-hover:text-blue-200 transition-colors">
          <FaAward className="text-3xl" />
        </div>
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <FaExternalLinkAlt className="text-gray-200 text-sm" />
      </div>
    </motion.div>
  );
};

export default AcademicBackground;
