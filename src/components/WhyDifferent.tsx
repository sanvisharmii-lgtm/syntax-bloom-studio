import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, Zap, Clock, StickyNote, Bot } from "lucide-react";

const features = [
  {
    icon: Terminal,
    title: "Built-in Python IDE",
    desc: "Write and run Python code directly in your browser. No setup, no switching apps. Works on any device.",
  },
  {
    icon: Zap,
    title: "Instant AI Feedback",
    desc: "Get AI-powered code reviews immediately after submitting. Suggestions for improvements and best practices.",
  },
  {
    icon: Clock,
    title: "Respects Your Time",
    desc: "15 hours of focused learning. No noise, no fluff — just the skills you need.",
  },
  {
    icon: StickyNote,
    title: "Smart Notes",
    desc: "Write notes during lessons. Each note automatically includes the video timestamp for easy reference.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    desc: "Stuck? Ask the Serpy AI assistant — trained on this course and core Python concepts.",
  },
];

const WhyDifferent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="section-padding" ref={ref}>
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-white">
            Why this course is different.
          </h2>
          <p className="text-lg text-text-secondary">Tools built for learning, not just watching.</p>
        </motion.div>

        <div className="space-y-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 md:p-8 flex items-start gap-6 group hover:border-primary/30 transition-colors"
            >
              <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
