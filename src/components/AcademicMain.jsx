import React from "react";
import AcademicBackground from "./AcademicBackground";
import AcademicProjects from "./AcademicProjects";
import { Link } from "react-router-dom";

const AcademicMain = () => {
  return (
    // Clean white background, no distractions
    <div className="bg-white min-h-screen">
      {/* Minimalist "Back" Navigation */}
      <nav className="max-w-7xl mx-auto px-8 pt-8">
        <Link
          to="/"
          className="text-gray-400 hover:text-blue-600 text-sm font-medium transition-colors"
        >
          ← Back to Portfolio
        </Link>
      </nav>

      <main>
        {/* Research Interests Summary Section */}
        <section className="max-w-5xl mx-auto pt-24">
          <div className="mb-16">
            <h1 className="text-5xl font-serif text-gray-900 mb-6">
              Research Overview
            </h1>
            <p className="text-gray-600 text-lg font-light leading-relaxed max-w-4xl">
              My research trajectory is centered at the intersection of{" "}
              <span className="text-blue-600 font-medium">
                Decentralized Intelligence
              </span>
              ,{" "}
              <span className="text-blue-600 font-medium">
                Privacy-Preserving Machine Learning
              </span>
              , and{" "}
              <span className="text-blue-600 font-medium">Cybersecurity</span>,
              with a primary focus on advancing{" "}
              <span className="text-blue-600 font-medium">
                Federated Learning
              </span>{" "}
              frameworks for secure, edge-based environments. By integrating{" "}
              <span className="text-blue-600 font-medium">
                Explainable AI (XAI)
              </span>{" "}
              techniques, I aim to bridge the gap between complex algorithmic
              performance and human-interpretable decision-making, particularly
              in critical domains such as intrusion detection and disaster
              prediction. Beyond technical optimization, my work extends to{" "}
              <span className="text-blue-600 font-medium">
                Human-Computer Interaction (HCI)
              </span>
              , evaluating and redesigning digital platforms to improve
              accessibility for marginalized users.
            </p>
          </div>
        </section>

        <AcademicProjects />

        {/* Simple Divider */}
        <div className="max-w-4xl mx-auto border-t border-gray-100" />
        <AcademicBackground />
      </main>

      <footer className="py-12 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} — Academic Portfolio
      </footer>
    </div>
  );
};

export default AcademicMain;

// import React from 'react'
// import AcademicBackground from './AcademicBackground'
// import AcademicProjects from './AcademicProjects'

// const AcademicMain = () => {
//   return (
//     <div className="bg-gray-50 text-gray-900 min-h-screen">
//       <AcademicProjects />
//       <AcademicBackground />
//     </div>
//   )
// }

// export default AcademicMain
