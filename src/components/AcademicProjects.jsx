import { motion } from "framer-motion";
import academicProjectsData from "../constants/academic_projects.json";
import {
  FaExternalLinkAlt,
  FaFileAlt,
  FaMicroscope,
  FaCheckCircle,
  FaHourglassHalf,
} from "react-icons/fa";

const AcademicProjects = () => {
  const projects = academicProjectsData
    .filter((p) => {
      const status = (p.status || "").toLowerCase();
      return (
        status === "active" ||
        status === "in progress" ||
        status === "in-progress"
      );
    })
    .sort((a, b) => {
      const aPub = String(a.published ?? a.Published).toLowerCase() === "true";
      const bPub = String(b.published ?? b.Published).toLowerCase() === "true";
      if (aPub === bPub) return new Date(b.createdAt) - new Date(a.createdAt);
      return aPub ? -1 : 1;
    });

  const archiveProjects = academicProjectsData
    .filter((p) => {
      const s = (p.status || "").toLowerCase();
      return s === "archive" || s === "archieve" || s === "archived";
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm font-black tracking-[0.25em] text-blue-600 uppercase mb-3">
            Research & Publications
          </h2>
          <h3 className="text-4xl md:text-5xl font-light text-gray-900">
            Academic <span className="italic font-serif">Contributions</span>
          </h3>
          <div className="h-px w-24 bg-blue-600 mt-6" />
        </div>

        <div className="grid grid-cols-1  gap-8 items-start">
          {projects.map((project) => {
            const isPublished =
              String(project.published ?? project.Published).toLowerCase() ===
              "true";
            const status = (project.status || "").toLowerCase();
            const isInProgress =
              status === "in progress" || status === "in-progress";
            const publication = project.publication || null;
            const authors = Array.isArray(project.authors)
              ? project.authors
              : [];
            const keywords = Array.isArray(project.keywords)
              ? project.keywords
              : [];

            return (
              <motion.div
                key={project.id}
                layout
                className={`group relative flex flex-col rounded-2xl p-8 transition-all duration-500 
                  ${
                    isPublished
                      ? "bg-gradient-to-br from-white to-blue-50/40 border-2 border-blue-400 shadow-[0_20px_50px_rgba(37,99,235,0.15)]"
                      : "bg-white border border-gray-100 shadow-sm"
                  }`}
              >
                {isPublished && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-widest rounded-full flex items-center gap-2">
                    <FaCheckCircle /> Published Research
                  </div>
                )}
                {isInProgress && (
                  <div className="absolute -top-3 right-6 px-3 py-1 bg-amber-500 text-black text-[9px] font-bold uppercase tracking-widest rounded-full flex items-center gap-2">
                    <FaHourglassHalf /> In Progress
                  </div>
                )}

                <div className="flex items-center gap-2 text-blue-600 mb-6">
                  <div
                    className={`p-2 rounded-lg ${isPublished ? "bg-blue-600 text-white" : "bg-blue-50"}`}
                  >
                    <FaMicroscope className="text-sm" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    {project.role}
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-tight mb-4 text-gray-900">
                  {project.title}
                </h3>

                <div className="space-y-4">
                  {publication && (
                    <div className="rounded-xl border border-gray-100 bg-white/70 p-4">
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                        Publication
                      </p>
                      <div className="space-y-1 text-xs text-gray-600">
                        {publication.type && (
                          <p>
                            <span className="font-bold text-gray-700">
                              Type:
                            </span>{" "}
                            {publication.type}
                          </p>
                        )}
                        {publication.publisher && (
                          <p>
                            <span className="font-bold text-gray-700">
                              Publisher:
                            </span>{" "}
                            {publication.publisher}
                          </p>
                        )}
                        {publication.conference && (
                          <p>
                            <span className="font-bold text-gray-700">
                              Conference:
                            </span>{" "}
                            {publication.conference}
                          </p>
                        )}
                        {publication.year && (
                          <p>
                            <span className="font-bold text-gray-700">
                              Year:
                            </span>{" "}
                            {publication.year}
                          </p>
                        )}
                        {publication.paperId && (
                          <p>
                            <span className="font-bold text-gray-700">
                              Paper ID:
                            </span>{" "}
                            {publication.paperId}
                          </p>
                        )}
                        {publication.status && (
                          <p>
                            <span className="font-bold text-gray-700">
                              Status:
                            </span>{" "}
                            {publication.status}
                          </p>
                        )}
                        {project.location && (
                          <p>
                            <span className="font-bold text-gray-700">
                              Location:
                            </span>{" "}
                            {project.location}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {authors.length > 0 && (
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                        Authors
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {authors.slice(0, 4).join(", ")}
                        {authors.length > 4
                          ? ` +${authors.length - 4} more`
                          : ""}
                      </p>
                    </div>
                  )}

                  {keywords.length > 0 && (
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                        Keywords
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {keywords.map((k, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-blue-50 border border-blue-100 text-[9px] font-bold text-blue-600 uppercase rounded"
                          >
                            {k}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="gap-2 my-6">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-50 border border-gray-100 text-[9px] font-bold text-gray-400 uppercase rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
                    <FaFileAlt /> {isPublished ? "Full Publication" : "Details"}{" "}
                    <FaExternalLinkAlt className="text-[10px] opacity-40" />
                  </motion.a>
                )}
              </motion.div>
            );
          })}
        </div>

        {archiveProjects.length > 0 && (
          <div className="mt-20">
            <h4 className="text-xs font-black tracking-[0.25em] text-gray-500 uppercase mb-6">
              Archive
            </h4>
            <div className="border border-gray-100 rounded-2xl bg-white p-6">
              <ul className="space-y-4">
                {archiveProjects.map((project) => (
                  <li
                    key={project.id}
                    className="flex items-start justify-between gap-6"
                  >
                    <div className="min-w-0">
                      <p className="text-gray-900 font-semibold leading-snug">
                        {project.title}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        {project.role}
                      </p>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-blue-600 text-xs font-bold uppercase tracking-widest hover:underline"
                      >
                        View{" "}
                        <FaExternalLinkAlt className="inline-block ml-1 text-[10px] opacity-60" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AcademicProjects;
