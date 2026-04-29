import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaLocationDot,
  FaClockRotateLeft,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import workExperienceData from "../constants/work_experience.json";

const WorkExperienceDetail = () => {
  const { id } = useParams();
  const experience = workExperienceData.find((e) => e.id === Number(id));
  const details = experience?.details || {};
  const responsibilities = Array.isArray(details.responsibilities)
    ? details.responsibilities
    : [];
  const technicalContributions = Array.isArray(details.technical_contributions)
    ? details.technical_contributions
    : [];
  const toolsAndTechnologies = Array.isArray(details.tools_and_technologies)
    ? details.tools_and_technologies
    : [];
  const impact = Array.isArray(details.impact) ? details.impact : [];
  const keyStrengths = Array.isArray(details.key_strengths)
    ? details.key_strengths
    : [];

  if (!experience) {
    return (
      <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-xl border border-white/10 bg-white/[0.02] p-10 relative">
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-fuchsia-500" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-fuchsia-500" />
          <div className="flex items-center gap-3 mb-4">
            <FaClockRotateLeft className="text-fuchsia-500 animate-pulse text-sm" />
            <span className="text-fuchsia-500 font-mono text-[10px] font-black uppercase tracking-[0.4em]">
              Node_Lookup // Failed
            </span>
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight">
            Work Experience Not Found
          </h2>
          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-fuchsia-400 hover:text-white transition-colors"
          >
            <FaArrowLeft className="text-xs" />
            Back_To_Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-fuchsia-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-purple-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.02] px-5 py-3 text-[10px] font-black uppercase tracking-[0.3em] hover:border-fuchsia-500/50 hover:text-fuchsia-400 transition-all"
          >
            <FaArrowLeft className="text-xs" />
            Back_To_Home
          </Link>

          <div className="flex items-center gap-3">
            <FaClockRotateLeft className="text-fuchsia-500 animate-pulse text-xs" />
            <span className="text-fuchsia-500 font-mono text-[10px] font-black uppercase tracking-[0.4em]">
              Timeline_Node // REF_ID:00{experience.id}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <div className="relative p-1 bg-white/5 border border-white/10 shadow-2xl">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-fuchsia-500 z-20" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-fuchsia-500 z-20" />

              <div className="relative bg-black p-8">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/[0.02] font-mono text-[10px] uppercase tracking-widest text-fuchsia-300">
                    <FaClockRotateLeft className="text-fuchsia-500 text-xs" />
                    {experience.date}
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/[0.02] font-mono text-[10px] uppercase tracking-widest text-gray-300">
                    <FaLocationDot className="text-fuchsia-500 text-xs" />
                    {experience.location}
                  </span>
                </div>

                <motion.h1
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase"
                >
                  {experience.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.12 }}
                  className="mt-6 text-gray-400 text-lg leading-relaxed font-medium border-l border-fuchsia-500/40 pl-6"
                >
                  {experience.description}
                </motion.p>

                {(responsibilities.length > 0 ||
                  technicalContributions.length > 0 ||
                  toolsAndTechnologies.length > 0 ||
                  impact.length > 0 ||
                  keyStrengths.length > 0) && (
                  <div className="mt-10 grid grid-cols-1 gap-6">
                    {responsibilities.length > 0 && (
                      <div className="relative border border-white/10 bg-white/[0.02] p-6 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-fuchsia-500/30" />
                        <p className="text-fuchsia-400 font-mono text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                          Responsibilities
                        </p>
                        <ul className="space-y-2 text-gray-300 text-lg">
                          {responsibilities.map((item, idx) => (
                            <li key={idx} className="flex gap-3">
                              <span className="text-fuchsia-400 mt-1">▸</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {technicalContributions.length > 0 && (
                      <div className="relative border border-white/10 bg-white/[0.02] p-6 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-fuchsia-500/30" />
                        <p className="text-fuchsia-400 font-mono text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                          Technical_Contributions
                        </p>
                        <ul className="space-y-2 text-lg text-gray-300">
                          {technicalContributions.map((item, idx) => (
                            <li key={idx} className="flex gap-3">
                              <span className="text-fuchsia-400 mt-1">▸</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {toolsAndTechnologies.length > 0 && (
                      <div className="relative border border-white/10 bg-white/[0.02] p-6 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-fuchsia-500/30" />
                        <p className="text-fuchsia-400 font-mono text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                          Tools_And_Technologies
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {toolsAndTechnologies.map((tool, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-black/60 border border-white/10 text-white font-mono text-[11px] uppercase hover:border-fuchsia-500/50 transition-colors"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {impact.length > 0 && (
                      <div className="relative border border-white/10 bg-white/[0.02] p-6 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-fuchsia-500/30" />
                        <p className="text-fuchsia-400 font-mono text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                          Impact
                        </p>
                        <ul className="space-y-2 text-lg text-gray-300">
                          {impact.map((item, idx) => (
                            <li key={idx} className="flex gap-3">
                              <span className="text-fuchsia-400 mt-1">▸</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {keyStrengths.length > 0 && (
                      <div className="relative border border-white/10 bg-white/[0.02] p-6 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-fuchsia-500/30" />
                        <p className="text-fuchsia-400 font-mono text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                          Key_Strengths
                        </p>
                        <ul className="space-y-2 text-lg text-gray-300">
                          {keyStrengths.map((item, idx) => (
                            <li key={idx} className="flex gap-3">
                              <span className="text-fuchsia-400 mt-1">▸</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-12 space-y-6">
              <div className="relative border border-white/10 bg-white/[0.02] p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-fuchsia-500" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-fuchsia-500" />
                <p className="text-fuchsia-400 font-mono text-[10px] font-black uppercase tracking-[0.3em] mb-3">
                  Reference
                </p>
                <p className="font-mono text-xs text-gray-300 uppercase tracking-widest">
                  REF_ID:00{experience.id}
                </p>
              </div>

              {experience.link && experience.link !== "#" && (
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 bg-fuchsia-600 text-black px-6 py-4 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white transition-all"
                >
                  Open_Company_Link <FaArrowUpRightFromSquare />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceDetail;
