import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import CustomCursor from "./components/CustomCursor";
import { motion } from "framer-motion";
import AboutMe from "./components/AboutMe";
import Testimonial from "./components/Testimonial";
import AcademicBackground from "./components/AcademicBackground";
import WorkExperience from "./components/WorkExperience";
// import AcademicProjects from "./components/academicProjects";
import CaseStudy from "./components/CaseStudy";
import AcademicMain from "./components/AcademicMain";
import FeaturedProject from "./components/FeaturedProject";
import Footer from "./components/Footer";
import Courses from "./components/Courses";
import OngoingTasks from "./components/OngoingTasks";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased bg-gradient-to-b from-[#0a0014] via-black to-black overflow-hidden">
      <Navbar />

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <div className="">
              <CustomCursor />
              <Hero />
              <AboutMe />
              <OngoingTasks />
              <WorkExperience />
              {/* <AcademicBackground /> */}
              <Technologies />
              <FeaturedProject />
              <Courses />
              {/* <Projects /> */}
              <Testimonial />
              {/* <Experience /> */}
              {/* Contact section removed from home; now a dedicated page */}
            </div>
          }
        />

        <Route path="/projects" element={<Projects />} />
        <Route path="/academic" element={<AcademicMain />} />
        {/* CaseStudy Page */}
        {/* <Route path="/casestudy" element={<CaseStudy />} /> */}
        <Route path="/casestudy/:id" element={<CaseStudy />} />
        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
