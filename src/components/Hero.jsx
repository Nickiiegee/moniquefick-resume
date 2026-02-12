
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { ReactTyped } from "react-typed";

export default function Hero() {
  const typedList = [
    "Software Engineer",
    "AI Enthusiast",
    "Code Sourcerer",
    "Bug Killer",
    "Aspiring DevOps Engineer",
    "Button Pressing Expert",
    "Coffee Addict",
    "Professional Stack Overflow Researcher",
    "Code Monkey",
  ];
  const scrollToAbout = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="header" className="relative flex items-center justify-center flex-1">

      {/* grid background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.25
            }
          }
        }}
        className="z-10 text-center"
      >
        <FadeItem>
          <p className="font-mono tracking-widest text-cyan-400">
            {"< HELLO WORLD />"}
          </p>
        </FadeItem>

        <FadeItem>
          <h1 className="mt-3 text-6xl font-bold md:text-8xl">
            I'm<br/>
            <span className="text-transparent bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text">
              Monique Fick
            </span>
          </h1>
        </FadeItem>

        <FadeItem>
          <p className="mt-4 font-mono text-xl text-gray-400">
            <ReactTyped
            strings={typedList}
            typeSpeed={100}
            backSpeed={50}
            loop
            />
          </p>
        </FadeItem>

        <FadeItem>
          <div className="flex justify-center gap-6 mt-8">
            <IconBtn href="https://github.com/nickiiegee"><Github size={20} /></IconBtn>
            <IconBtn href="https://www.linkedin.com/in/monique-fick-geldenhuys-2b67741b3/"><Linkedin size={20} /></IconBtn>
            <IconBtn href="mailto:monique.geldenhuys@gmail.com"><Mail size={20} /></IconBtn>
          </div>
        </FadeItem>
      </motion.div>
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute flex flex-col items-center text-gray-400 cursor-pointer bottom-10 hover:text-white"
      >
        <span className="mb-2 text-xs tracking-widest">SCROLL</span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.4
          }}
          className="text-2xl"
        >
          ↓
        </motion.div>
      </motion.button>
    </section>
  );
}

function FadeItem({ children }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}

function IconBtn({ children, href }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block p-3 transition border cursor-pointer rounded-xl bg-white/5 border-white/10 hover:bg-white/10"
    >
      {children}
    </a>
  );
}
