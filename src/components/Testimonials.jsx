import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonialObjects } from "../constants/TestimonialsList";

/* ---------------- PAGE ---------------- */

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="min-h-screen bg-[#0b0f14] text-white px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-3 font-mono text-cyan-400">// TESTIMONIALS</p>

          <h2 className="text-5xl font-bold">
            What People{" "}
            <span className="text-transparent bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text">
              Say
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialObjects.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
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
      {/* Quote icon */}
      <Quote className="mb-5 text-cyan-400/70" size={28} />

      {/* Text */}
      <p className="mb-6 text-sm italic leading-relaxed text-gray-300">
        “{testimonial.quote}”
      </p>

      {/* Divider */}
      <div className="h-px mb-5 bg-white/10" />

      {/* Author */}
      <div className="flex items-center gap-4">
        <div
          className="flex items-center justify-center w-10 h-10 text-sm font-semibold border rounded-full  bg-linear-to-br from-cyan-500/20 to-purple-500/20 border-white/10"
        >
          {testimonial.initials}
        </div>

        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-xs text-gray-400">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
