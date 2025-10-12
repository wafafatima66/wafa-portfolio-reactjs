import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa"; // you can choose any FA icon
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const accent = "#a855f7"; // 🔥 Purple accent
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 backdrop-blur-lg border-b border-purple-900 bg-black/30"
    >
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <a
          href="/"
          aria-label="Home"
          className="flex items-center justify-center"
        >
          <span className="font-[Montserrat] text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-widest">
            F.A
          </span>
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center gap-4 lg:gap-6 text-base lg:text-lg font-medium text-gray-200">
        <motion.a
          key=""
          href={`/`}
          whileHover={{ scale: 1.1, color: accent }}
          className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full"
        >
          Home
        </motion.a>

        {["Academic", "Projects", "Contact"].map((item) => (
          <motion.a
            key={item}
            href={`/${item.toLowerCase()}`}
            whileHover={{ scale: 1.1, color: accent }}
            className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full"
          >
            {item}
          </motion.a>
        ))}

        {/* Desktop Socials */}
        <div className="flex gap-3 lg:gap-5 text-xl lg:text-2xl text-gray-400 ml-4">
          <motion.a
            href="https://www.linkedin.com/in/fatimaamir99/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: accent }}
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://github.com/wafafatima66/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: accent }}
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-purple-900 md:hidden"
        >
          <div className="flex flex-col items-center py-6 space-y-4">
            <motion.a
              href="/"
              onClick={toggleMenu}
              whileHover={{ scale: 1.1, color: accent }}
              className="text-gray-200 text-lg font-medium relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </motion.a>

            {["Academic", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={toggleMenu}
                whileHover={{ scale: 1.1, color: accent }}
                className="text-gray-200 text-lg font-medium relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </motion.a>
            ))}

            {/* Mobile Socials */}
            <div className="flex gap-6 text-2xl text-gray-400 pt-4">
              <motion.a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: accent }}
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                href="https://github.com/your-github-profile"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: accent }}
              >
                <FaGithub />
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
