import {motion} from "framer-motion";
import { useActiveSection } from "../hooks/useActiveSection";

const links = [
  "About",
  "Experience",
  "Projects",
  "Testimonials",
  "Contact"
];

export default function Navbar() {
  const activeSection = useActiveSection();

  const scrollToLink = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const goToHeader = () => {
    document
      .getElementById("header")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full border-b backdrop-blur-md bg-black/40 border-white/10"
    >
      <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
        <div className="font-mono text-lg text-cyan-400" onClick={goToHeader} style={{cursor: 'pointer'}}>
          &gt; ~/resume
        </div>

        <div className="hidden gap-8 font-mono text-sm text-gray-400 md:flex">
          {links.map((link) => (
            <a
              key={link}
              onClick={() => scrollToLink(link)}
              className={`transition cursor-pointer hover:text-cyan-400 ${activeSection === link.toLowerCase() ? 'text-cyan-400' : ''}`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
