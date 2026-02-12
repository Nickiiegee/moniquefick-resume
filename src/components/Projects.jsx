import { motion } from "framer-motion";
import { Folder, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "CloudScale",
    description:
      "Auto-scaling infrastructure platform that dynamically adjusts cloud resources based on traffic patterns. Reduced hosting costs by 40%.",
    tech: ["Go", "Kubernetes", "AWS", "Terraform"],
    github: "#",
    demo: "#"
  },
  {
    name: "DevFlow",
    description:
      "Developer productivity dashboard aggregating metrics from GitHub, Jira, and CI/CD pipelines.",
    tech: ["React", "Node.js", "GraphQL", "D3.js"],
    github: "#",
    demo: "#"
  },
  {
    name: "NeuralChat",
    description:
      "Real-time AI-powered chat app with sentiment analysis, smart replies and summarization.",
    tech: ["Python", "FastAPI", "WebSocket", "OpenAI"],
    github: "#",
    demo: "#"
  },
  {
    name: "PacketSniffer",
    description:
      "Network analysis tool for debugging HTTP/WebSocket traffic during development.",
    tech: ["Rust", "TCP/IP", "CLI"],
    github: "#"
  },
  {
    name: "GitViz",
    description:
      "Interactive visualization of repository history and contributor activity.",
    tech: ["TypeScript", "Three.js", "Git API"],
    github: "#"
  },
  {
    name: "CryptoTracker",
    description:
      "Real-time crypto portfolio tracker with alerts, P&L analytics and tax reporting.",
    tech: ["React Native", "Firebase", "REST APIs"],
    github: "#"
  }
];

/* ---------------- PAGE ---------------- */

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0b0f14] text-white px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-3 font-mono text-cyan-400">// PROJECTS</p>

          <h2 className="text-5xl font-bold">
            Things I've{" "}
            <span className="text-transparent bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text">
              Built
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="
        group p-7 rounded-2xl
        bg-white/5 border border-white/10
        backdrop-blur-md
        transition
        hover:border-cyan-400/40
        hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
      "
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-6">

        <Folder className="text-cyan-400" size={28} />

        <div className="flex gap-4 text-gray-400">
          {project.github && (
            <a href={project.github} target="_blank">
              <Github
                size={18}
                className="transition hover:text-white"
              />
            </a>
          )}

          {project.demo && (
            <a href={project.demo} target="_blank">
              <ExternalLink
                size={18}
                className="transition hover:text-white"
              />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="mb-3 text-lg font-semibold transition group-hover:text-cyan-300">
        {project.name}
      </h3>

      {/* Description */}
      <p className="mb-6 text-sm leading-relaxed text-gray-400">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 text-xs text-gray-300 border rounded-md bg-white/5 border-white/10"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
