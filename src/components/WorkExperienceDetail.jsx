import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaLocationDot,
  FaClockRotateLeft,
  FaArrowUpRightFromSquare,
  FaFolderOpen,
  FaPlay,
} from "react-icons/fa6";
import workExperienceData from "../constants/work_experience.json";

const WorkExperienceDetail = () => {
  const { id } = useParams();
  const experience = workExperienceData.find((e) => e.id === Number(id));
  const storySections = Array.isArray(experience?.story_sections)
    ? experience.story_sections
    : [];
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    setIsVideoPlaying(false);
  }, [id]);

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

              {experience.related_case_study && (
                <Link
                  to={`/casestudy/${experience.related_case_study}`}
                  className="w-full inline-flex items-center justify-center gap-3 border border-fuchsia-500/50 text-fuchsia-300 px-6 py-4 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-fuchsia-500 hover:text-black hover:border-fuchsia-500 transition-all"
                >
                  <FaFolderOpen /> View_The_Platform
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Video walkthrough — click-to-play */}
        {experience.video && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div
              className="relative w-full aspect-video border border-white/10 shadow-2xl overflow-hidden bg-black group cursor-pointer"
              onClick={() => !isVideoPlaying && setIsVideoPlaying(true)}
            >
              {isVideoPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${experience.video}?autoplay=1`}
                  title={`${experience.title} — video walkthrough`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src={`https://img.youtube.com/vi/${experience.video}/maxresdefault.jpg`}
                    alt={`${experience.title} — video walkthrough`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-fuchsia-600 flex items-center justify-center shadow-[0_0_30px_#d946ef] group-hover:scale-110 transition-transform duration-300">
                      <FaPlay className="text-black text-2xl ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-4 left-4 text-fuchsia-400 font-mono text-[10px] font-black uppercase tracking-[0.3em]">
                    Watch_The_Walkthrough
                  </span>
                </>
              )}
            </div>
          </motion.div>
        )}

        {/* Story: alternating short text + full image, mirroring the project case studies */}
        {storySections.length > 0 && (
          <div className="mt-24 space-y-24 max-w-6xl mx-auto">
            {storySections.map((section, i) => (
              <div key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="max-w-2xl mx-auto text-center mb-10"
                >
                  {section.heading && (
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-5">
                      {section.heading}
                    </h3>
                  )}
                  {section.text && (
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {section.text}
                    </p>
                  )}
                  {section.tags && section.tags.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      {section.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/[0.03] border border-white/10 text-gray-300 font-mono text-[11px] uppercase tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>

                {section.image && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="border border-white/10 shadow-2xl overflow-hidden"
                  >
                    <img
                      src={`/projects/${section.image}`}
                      alt={section.heading || experience.title}
                      className="w-full h-auto"
                    />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkExperienceDetail;
