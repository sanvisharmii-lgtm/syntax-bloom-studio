import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, PlayCircle, Code, Award } from "lucide-react";

const modules = [
  {
    title: "Python Fundamentals",
    details: "35 Videos · 19 Coding Exercises",
    icon: "🐍",
  },
  {
    title: "Python OOPs",
    details: "22 Videos · 19 Coding Exercises",
    icon: "🧱",
  },
  {
    title: "Python RegEx",
    details: "10 Videos",
    icon: "🔍",
  },
  {
    title: "Python Exception Handling",
    details: "12 Videos · 9 Coding Exercises",
    icon: "🛡️",
  },
  {
    title: "Project: Virtual Banking Application",
    details: "Guided Project · Certificate",
    icon: "🏦",
    isProject: true,
  },
  {
    title: "Project: Virtual Pet",
    details: "Guided Project · Certificate",
    icon: "🐾",
    isProject: true,
  },
  {
    title: "Project: Wikipedia Extractor",
    details: "Guided Project · Certificate",
    icon: "📚",
    isProject: true,
  },
  {
    title: "Python Developer — Mock Interview",
    details: "1 Mock Interview",
    icon: "🎤",
  },
];

const Curriculum = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="curriculum" className="section-padding" ref={ref}>
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-white">
            Course curriculum.
          </h2>
          <p className="text-lg text-text-secondary">8 modules. Zero to job-ready.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-primary/30 transition-colors text-left"
              >
                <span className="text-2xl flex-shrink-0">{mod.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-foreground text-sm md:text-base">{mod.title}</div>
                  <div className="text-xs text-text-tertiary mt-0.5">{mod.details}</div>
                </div>
                {mod.isProject && (
                  <Award className="h-4 w-4 text-primary flex-shrink-0" />
                )}
                <ChevronDown
                  className={`h-4 w-4 text-text-tertiary transition-transform flex-shrink-0 ${openIdx === i ? "rotate-180" : ""}`}
                />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
