import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { usePortfolioData } from "../supabase/usePortfolioData";
import ReactMarkdown from "react-markdown";
import Loading from "./Loading";
import { getProjectImageUrl } from "../utils/supabaseImages";


const CaseStudy = () => {
  const { id } = useParams();
  const { data, loading, error } = usePortfolioData();

if (loading) return <Loading />;
  if (error) return <p className="text-center mt-20 text-red-500">Error loading data.</p>;

  const projects = data?.projects || [];
  const project = projects.find((p) => p.id === Number(id));
  const themeColor = project?.theme || "#7c3aed";
  if (!project) return <p className="text-center mt-20 text-gray-400">Project not found</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-slate-950 px-4 md:px-12 py-12 text-white antialiased">

      {/* Hero Image */}
      {project.image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={getProjectImageUrl(project.image, { width: 1600, quality: 75, format: "webp" })}
            alt={project.company}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const img = e.currentTarget;
              if (!img.dataset.fallback1) {
                img.dataset.fallback1 = "true";
                img.src = getProjectImageUrl(project.image);
                return;
              }
              img.onerror = null;
              img.src = `/images/projects/${project.image}`;
            }}
            className="w-full object-cover rounded-xl shadow-lg"
          />
        </motion.div>
      )}

      <div className="w-full max-w-6xl mx-auto mt-12 space-y-8">

        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold"
          style={{ color: themeColor }}
        >
          {project.company}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 font-semibold"
        >
            <ReactMarkdown>{project.basicInfo}</ReactMarkdown>
        </motion.p>

        {/* Description */}
        {project.longDescription && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-200 leading-relaxed"
          >
            <ReactMarkdown>{project.longDescription}</ReactMarkdown>
          </motion.p>
        )}

        {/* Technologies */}
        {project.technologies?.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 mt-4"
          >
            {project.technologies.map((tech, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="bg-fuchsia-800 font-semibold text-white px-3 py-1 rounded-md shadow-md text-sm"
                style={{ backgroundColor: themeColor}}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        )}

        {/* GitHub Link */}
        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block mt-4  font-semibold hover:underline"
            style={{ color: themeColor }}
          >
            Github →
          </motion.a>
        )}

        {/* Gallery Images */}
        {project.casestudyimages?.length > 0 && (
          <div className="mt-8 space-y-6">
            {project.casestudyimages.map((img, i) => (
              <motion.img
                key={i}
                src={`/images/projects/${img}`}
                alt={`${project.company}-gallery-${i}`}
                className="w-full rounded-xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudy;
