import { motion } from "framer-motion";
import { Folder, Github, ExternalLink } from "lucide-react";
import { ProjectList } from "../constants/ProjectsList";

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
          <p className="mt-2 text-xs leading-relaxed text-gray-400">
            Please note: these are sample projects created to demonstrate some
            my skills and are not actual products as I can not share details of
            my work projects.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ProjectList.map((project, i) => (
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
              <Github size={18} className="transition hover:text-purple-400" />
            </a>
          )}

          {project.demo && (
            <a href={project.demo} target="_blank">
              <ExternalLink
                size={18}
                className="transition hover:text-purple-400"
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
