import { motion } from "framer-motion";
import { Code, Cpu, Zap, Layers } from "lucide-react";

export default function About() {
    const languagesList = [
        "JavaScript",
        "TailwindCSS",
        "TypeScript",
        "Vue",
        "React",
        "Redux",
        "Node.js",
        "NextJS",
        "Vite",
        "Python",
        "Docker",
        "SQL | NoSQL",
        "PHP Laravel",
        "Inertia",
        "AWS",
        "Azure",
    ];
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0b0f14] text-white px-6 py-28"
    >
      {/* HEADING - SPANS FULL WIDTH */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto mb-6"
      >
        <p className="mb-1 font-mono text-cyan-400">// ABOUT ME</p>
        <h2 className="mb-6 text-5xl font-bold">
          Crafting Digital{" "}
          <span className="text-transparent bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text">
            Experiences
          </span>
        </h2>
      </motion.div>

      <div className="grid max-w-6xl mx-auto md:grid-cols-2 gap-14">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <p className="mb-8 leading-relaxed text-gray-400">
            As a self-taught Software Engineer, I am results-driven with expertise in both front-end and back-end technologies. Proficient in building and optimizing web applications using modern frameworks such as React, TypeScript and Nextjs. Experienced with both MySQL and NoSQL databases as well as implementing RESTful API's and integrating third-party services. Strong problem-solving skills, attention to detail, and a passion for creating seamless, user-centric solutions. Able to work in fast-paced environments and collaborate effectively with cross-functional teams to deliver high-quality software.
          </p>

          {/* tech tags */}
          <p className="font-mono text-gray-400">tech_stack = [</p>
          <div className="flex flex-wrap gap-3 ml-4">
            {languagesList.map((t) => (
              <span
                key={t}
                className="px-4 py-2 text-sm transition duration-300 ease-in-out border rounded-lg bg-white/5 border-white/10 text-cyan-400 hover:border hover:border-cyan-300"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="font-mono text-gray-400">]</p>
        </motion.div>

        {/* RIGHT CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-6"
        >
          <InfoCard icon={<Code />} title="5+ Years" subtitle="Building production software" />
          <InfoCard icon={<Layers />} title="Full Stack" subtitle="Frontend to infrastructure" />
          <InfoCard icon={<Cpu />} title="System Design" subtitle="Scalable architectures" />
          <InfoCard icon={<Zap />} title="Performance" subtitle="Optimization & best practices" />
        </motion.div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, subtitle }) {
  return (
    <div
      className="h-full p-6 transition duration-300 ease-in-out border min-h-32 rounded-2xl bg-white/5 border-white/10 hover:border hover:border-cyan-300 backdrop-blur-md"
    >
      <div className="mb-4 text-cyan-400">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-400">{subtitle}</p>
    </div>
  );
}
