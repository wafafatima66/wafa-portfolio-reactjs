import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black/80 text-gray-300 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-2">
            <p className="text-[10px] font-mono text-fuchsia-500 uppercase tracking-[0.35em]">
              For business inquiries:
            </p>
            <a
              href="https://codecraftspace.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm sm:text-base text-white underline decoration-fuchsia-500/30 underline-offset-4 hover:text-fuchsia-300 transition-colors break-all"
            >
              codecraftspace.com
            </a>
          </div>

          <div className="flex items-center gap-5 text-xl text-gray-400">
            <a
              href="https://www.instagram.com/fatima_amir_dev/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fuchsia-300 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/fatimaamir99/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fuchsia-300 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/FatimaCraftSpac"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fuchsia-300 transition-colors"
              aria-label="X"
            >
              <FaSquareXTwitter />
            </a>
            <a
              href="https://github.com/wafafatima66/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fuchsia-300 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-purple-900 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Fatima Amir. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
