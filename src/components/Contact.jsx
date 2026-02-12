import { motion } from "framer-motion";
import { Mail, Github, Phone, Linkedin, Locate, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <section
      id="contact"
      className="bg-[#0b0f14] text-white px-6 py-28 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md mx-auto mb-6"
      >
        <p className="mb-1 font-mono text-cyan-400">// CONTACT</p>
        <h2 className="mb-4 text-5xl font-bold">
          Let's{" "}
          <span className="text-transparent bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text">
            Connect
          </span>
        </h2>
          <p className="mb-8 leading-relaxed text-gray-400">
            I'm always open to discussing new opportunities, interesting projects, or learning new things about tech.
            </p>
      </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid items-center max-w-4xl grid-cols-1 gap-6 mx-auto md:grid-cols-2"
        >
          <InfoCard icon={<Mail size={18} />} title="Email" subtitle="monique.geldenhuys@gmail.com" color="text-cyan-400" />
          <InfoCard icon={<Github size={18} />} title="Github" subtitle="@nickiiegee" color="text-purple-500" link="https://github.com/nickiiegee" />
          <InfoCard icon={<Phone size={18} />} title="Phone" subtitle="+27 73 746 2696" color="text-cyan-400" />
          <InfoCard icon={<Linkedin size={18} />} title="LinkedIn" subtitle="monique-fick" color="text-purple-500" link="https://www.linkedin.com/in/monique-fick-geldenhuys-2b67741b3/" />
          <InfoCard icon={<Locate size={18} />} title="Location" subtitle="Cape Town, South Africa" color="text-cyan-400" />
        </motion.div>
    </section>
  );
}

function InfoCard({ icon, title, subtitle, color, link }) {
  const getBackgroundFromColor = (textColor) => {
    if (textColor.includes('cyan')) return 'bg-cyan-400/10';
    if (textColor.includes('purple')) return 'bg-purple-500/10';
    return 'bg-gray-400/20';
  };

  const getBorderFromColor = (textColor) => {
    if (textColor.includes('cyan')) return 'hover:border-cyan-400';
    if (textColor.includes('purple')) return 'hover:border-purple-500';
    return 'hover:border-gray-400';
  };

  return (
    <div
      className={`h-full p-6 border rounded-2xl bg-white/5 border-white/10 hover:border ${getBorderFromColor(color)} hover:cursor-pointer transition duration-300 ease-in-out backdrop-blur-md`}
    >
      <div className="flex items-start">
        <div className={`mr-4 ${color} shrink-0 p-3 rounded ${getBackgroundFromColor(color)} `}>{icon}</div>
        <div>
          <h3 className="font-mono text-xs text-left text-gray-400">{title}</h3>
          <p className="text-sm">{subtitle}</p>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute my-auto text-gray-400 transition duration-300 ease-in-out right-4 hover:text-purple-500"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
}
