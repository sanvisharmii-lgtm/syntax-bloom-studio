import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, BookOpen, Code } from "lucide-react";

const formats = [
  {
    icon: Play,
    title: "Watch",
    desc: "Video lessons explaining each concept in rich detail with real examples.",
    accent: "from-primary/20 to-transparent",
  },
  {
    icon: BookOpen,
    title: "Read",
    desc: "Interactive text versions of every lesson, perfect for quick review or deep study.",
    accent: "from-blue-500/20 to-transparent",
  },
  {
    icon: Code,
    title: "Do",
    desc: "Quizzes and hands-on coding exercises that cement what you just learned.",
    accent: "from-emerald-500/20 to-transparent",
  },
];

const LearningFormat = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-white">
            Learn your way.
          </h2>
          <p className="text-lg text-text-secondary">The 3-in-1 format that adapts to you.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {formats.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative glass-card rounded-2xl p-8 text-center group overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary">
                  <item.icon className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningFormat;
