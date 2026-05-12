import { motion } from "framer-motion";
import academicProjectsData from "../constants/academic_projects.json";
import {
  FaExternalLinkAlt,
  FaFileAlt,
  FaMicroscope,
  FaCheckCircle,
  FaHourglassHalf,
  FaCode,
} from "react-icons/fa";

const AcademicProjects = () => {
  const activeProjects = academicProjectsData
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
      if (aPub === bPub) return b.id - a.id;
      return aPub ? -1 : 1;
    });

  const conferenceProjects = activeProjects.filter((p) =>
    (p.publication?.type || "").toLowerCase().includes("conference"),
  );

  const journalProjects = activeProjects.filter((p) => {
    const type = (p.publication?.type || "").toLowerCase();
    return type.includes("journal") || !!p.publication?.journal;
  });

  const archiveProjects = academicProjectsData
    .filter((p) => {
      const s = (p.status || "").toLowerCase();
      return s === "archive" || s === "archieve" || s === "archived";
    })
    .sort((a, b) => b.id - a.id);

  const truncateAbstract = (text, limit = 200) => {
    if (!text) return "";
    if (text.length <= limit) return text;
    return text.substring(0, limit).trim() + "...";
  };

  const ProjectItem = ({ project }) => {
    const status = (project.status || "").toLowerCase();
    const pubStatus = (project.publication?.status || "").toLowerCase();
    const authors = Array.isArray(project.authors) ? project.authors : [];
    const venue =
      project.publication?.journal ||
      project.publication?.conference ||
      project.publication?.publisher ||
      "";
    const year = project.publication?.year
      ? ` (${project.publication.year})`
      : "";

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
          {project.title}
        </h3>

        <div className="text-sm mb-2 leading-relaxed">
          {authors.map((author, idx) => {
            const isMainAuthor = author.includes("Fatima Amir");
            return (
              <span key={idx}>
                <span
                  className={
                    isMainAuthor ? "text-blue-600 font-bold" : "text-gray-600"
                  }
                >
                  {author}
                </span>
                {idx < authors.length - 1 ? ", " : ""}
              </span>
            );
          })}
        </div>

        <div className="text-sm text-gray-500 italic mb-3">
          {venue}
          {year}
        </div>

        <div className="text-sm text-gray-600 leading-relaxed mb-4 max-w-3xl">
          {truncateAbstract(project.description)}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            {pubStatus === "under review" && (
              <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                Under Review
              </span>
            )}
            {status === "in progress" && (
              <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                In Progress
              </span>
            )}
            {project.published && (
              <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
                Published
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest"
              >
                <FaFileAlt className="text-xs" /> Publication
              </a>
            )}
            {project.code_link && (
              <a
                href={project.code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest"
              >
                <FaCode className="text-xs" /> Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative  px-6 bg-white overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-serif text-gray-900 mb-6">
            Publications
          </h1>
          <p className="text-gray-500 text-lg font-light">
            Conference proceedings, journal articles, and works under review.
          </p>
        </div>

        {/* Conference Proceedings Section */}
        {conferenceProjects.length > 0 && (
          <div className="mb-20">
            <div className="border-b border-gray-100 pb-2 mb-10 relative">
              <h2 className="text-2xl font-serif text-gray-800 inline-block">
                Conference Proceedings
              </h2>
              <div className="absolute bottom-0 left-0 h-[2px] w-24 bg-blue-600" />
            </div>

            <div className="space-y-12">
              {conferenceProjects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Journal Proceedings Section */}
        {journalProjects.length > 0 && (
          <div className="mb-20">
            <div className="border-b border-gray-100 pb-2 mb-10 relative">
              <h2 className="text-2xl font-serif text-gray-800 inline-block">
                Journal Proceedings
              </h2>
              <div className="absolute bottom-0 left-0 h-[2px] w-24 bg-blue-600" />
            </div>

            <div className="space-y-12">
              {journalProjects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {archiveProjects.length > 0 && (
          <div className="mt-20">
            <div className="border-b border-gray-100 pb-2 mb-8 relative">
              <h2 className="text-xl font-serif text-gray-500 inline-block">
                Archive
              </h2>
            </div>
            <div className="space-y-8">
              {archiveProjects.map((project) => (
                <div key={project.id} className="text-sm">
                  <p className="text-gray-800 font-medium leading-snug mb-2">
                    {project.title}
                  </p>
                  <div className="flex items-center gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest"
                      >
                        <FaFileAlt className="text-xs" /> Publication
                      </a>
                    )}
                    {project.code_link && (
                      <a
                        href={project.code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest"
                      >
                        <FaCode className="text-xs" /> Code
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AcademicProjects;
