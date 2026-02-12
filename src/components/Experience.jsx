import { AnimatePresence, motion } from "framer-motion";
import {ITExperience, otherExperience, certificates} from '../constants/ExperienceList';
import { Briefcase, Code2, ChevronDown, ChevronUp, ShieldCheck } from "lucide-react";
import { useState } from "react";



const Experience = () => {
  const [tab, setTab] = useState("engineering");

  const jobs = tab === "engineering" ? ITExperience : tab === "other" ? otherExperience : certificates;

    return (
    <section
      id="experience"
      className="min-h-screen bg-[#0b0f14] text-white px-4 py-20 sm:px-6 sm:py-24 lg:py-28"
    >
      <div className="grid items-center max-w-4xl mx-auto md:max-w-6xl">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-1 font-mono text-cyan-400">// EXPERIENCE</p>

          <h2 className="mb-6 text-5xl font-bold">
            Where I've{" "}
            <span className="text-transparent bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text">
                Worked
            </span>
          </h2>
                  <div className="flex flex-wrap gap-2 mb-8 sm:gap-3 sm:mb-16">
          <TabBtn
            active={tab === "engineering"}
            onClick={() => setTab("engineering")}
            icon={<Code2 size={16} />}
          >
            Software Engineering
          </TabBtn>

          <TabBtn
            active={tab === "other"}
            onClick={() => setTab("other")}
            icon={<Briefcase size={16} />}
          >
            Other Experience
          </TabBtn>

          <TabBtn
            active={tab === "certificates"}
            onClick={() => setTab("certificates")}
            icon={<ShieldCheck size={16} />}
          >
            Certificates
          </TabBtn>
        </div><div className="relative">

          {/* vertical line */}
          <div className="absolute left-1.5 sm:left-3 top-0 bottom-0 w-0.5 bg-cyan-500/30" />

        <div className="relative min-h-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="space-y-8 sm:space-y-14"
            >
              {jobs.map((job, i) => (
                <TimelineItem key={i} job={job} isOtherExperience={tab === "other"} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        </div>
        </motion.div>
        </div>
    </section>
    );
};

function TabBtn({ children, active, icon, ...props }) {
  return (
    <button
      {...props}
      className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 rounded-xl border transition cursor-pointer text-xs sm:text-sm
        ${
          active
            ? "bg-cyan-500/10 border-cyan-400 text-cyan-300"
            : "bg-white/5 border-white/10 text-gray-400 hover:text-white"
        }`}
    >
      {icon}
      {children}
    </button>
  );
}

function TimelineItem({ job, isOtherExperience = false }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Handle different data structures
  const getRoleTitle = () => {
    if (isOtherExperience) {
      return job.title.split(' - ')[0]; // Extract role from "Role - Company (Period)"
    }
    return job.role;
  };
  
  const getCompany = () => {
    if (isOtherExperience) {
      return job.title.split(' - ')[1]?.split(' (')[0] || ''; // Extract company
    }
    return job.company;
  };
  
  const getPeriod = () => {
    if (isOtherExperience) {
      const match = job.title.match(/\(([^)]+)\)/);
      return match ? match[1] : '';
    }
    return job.period;
  };
  
  const getDescriptions = () => {
    if (isOtherExperience) {
      return job.duty || [];
    }
    return job.description || [];
  };
  
  const descriptions = getDescriptions();
  const hasMultipleDescriptions = descriptions.length > 1;
  const displayDescriptions = isExpanded ? descriptions : descriptions.slice(0, 1);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-6 sm:pl-8 md:pl-12"
    >
      {/* vertical line */}
      <div className="absolute left-1.5 sm:left-3 top-0 bottom-0 w-0.5 bg-cyan-500/20" />

      {/* dot */}
      <div className="absolute left-0 sm:left-0 top-5 w-4 sm:w-6 h-4 sm:h-6 rounded-full border-2 border-cyan-400 bg-[#0b0f14] shadow-[0_0_10px_#22d3ee]" />

      {/* card */}
      <motion.div
        whileHover={{ y: -4 }}
        className="p-4 border sm:p-6 rounded-2xl bg-white/5 border-white/10 backdrop-blur-md"
      >
        <div className="flex flex-col mb-3 sm:flex-row sm:justify-between sm:items-start sm:mb-2">
          <div>
            <h3 className="text-lg font-semibold sm:text-xl">{getRoleTitle()}</h3>
            <p className="text-sm text-cyan-400 sm:text-base">{getCompany()}</p>
          </div>
          <span className="mt-1 text-sm text-gray-400 sm:mt-0">{getPeriod()}</span>
        </div>

        <div className="mb-3 sm:mb-4">
          {displayDescriptions.map((desc, index) => (
            <li key={index} className="mb-2 ml-3 text-sm text-gray-400 sm:ml-4 sm:text-base last:mb-0">
              {desc}
            </li>
          ))}
        </div>

        {hasMultipleDescriptions && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 px-2 py-2 mb-3 text-xs transition-colors cursor-pointer sm:mb-4 sm:text-sm text-cyan-400 hover:text-cyan-300 min-h-11"
          >
            {isExpanded ? (
              <>
                Show less
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                Read more ({descriptions.length - 1} more)
                <ChevronDown size={16} />
              </>
            )}
          </button>
        )}

        {job.stack && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {job.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs text-purple-300 border rounded-md bg-purple-500/10 border-purple-400/30"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Experience;