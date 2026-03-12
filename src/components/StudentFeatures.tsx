import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, BarChart3, Play } from "lucide-react";

const StudentFeatures = () => {
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
            Built to keep you going.
          </h2>
          <p className="text-lg text-text-secondary">Features that turn learning into a habit.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Streak */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-8"
          >
            <Flame className="h-8 w-8 text-primary mb-6" />
            <h3 className="text-xl font-bold text-foreground mb-3">Daily Streak</h3>
            <p className="text-text-secondary text-sm mb-6">Track consecutive study days. Rewards at 7, 14, and 30 days.</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((d) => (
                <div
                  key={d}
                  className={`flex-1 h-10 rounded-lg flex items-center justify-center text-xs font-semibold ${
                    d <= 3 ? "bg-primary/20 text-primary border border-primary/30" : "bg-secondary text-text-tertiary"
                  }`}
                >
                  Day {d}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Micro Progress */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8"
          >
            <BarChart3 className="h-8 w-8 text-primary mb-6" />
            <h3 className="text-xl font-bold text-foreground mb-3">Micro Progress</h3>
            <p className="text-text-secondary text-sm mb-6">See granular progress for each lesson — video, exercise, quiz.</p>
            <div className="space-y-3">
              {[
                { label: "Video", pct: 100 },
                { label: "Exercise", pct: 80 },
                { label: "Quiz", pct: 50 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-text-secondary">{item.label}</span>
                    <span className="text-text-tertiary">{item.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Resume */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-8"
          >
            <Play className="h-8 w-8 text-primary mb-6" />
            <h3 className="text-xl font-bold text-foreground mb-3">Resume Instantly</h3>
            <p className="text-text-secondary text-sm mb-6">Pick up exactly where you left off. Zero friction.</p>
            <div className="glass-card rounded-xl p-4 border border-primary/20">
              <div className="text-xs text-primary font-medium mb-1">Continue Learning</div>
              <div className="text-sm font-semibold text-foreground">Lesson 7: Python Loops</div>
              <div className="text-xs text-text-tertiary mt-1">Resume at 08:14 in the video</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudentFeatures;
