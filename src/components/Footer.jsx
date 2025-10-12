import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const accent = "#a855f7"; // Purple accent

  return (
    <footer className="bg-black/80 text-gray-300 border-t border-gray-900">


      {/* Bottom bar */}
      <div className="border-t border-purple-900 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Fatima Amir. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
