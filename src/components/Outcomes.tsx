import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const outcomes = [
  "Write clean, efficient Python programs from scratch.",
  "Debug errors and fix broken code confidently.",
  "Solve programming problems using logical thinking.",
  "Read and understand code written by others.",
];

const Outcomes = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-container">
        <div className="glass-card rounded-3xl p-10 md:p-16 glow-gold">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-gold">
              By the end of this course, you will be able to:
            </h2>
          </motion.div>

          <div className="max-w-lg mx-auto space-y-5">
            {outcomes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                  <Check className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
                <p className="text-foreground text-base">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-text-tertiary mb-6">No prior programming experience required.</p>
            <button className="rounded-full bg-primary px-10 py-4 text-base font-semibold text-primary-foreground hover:opacity-90 transition-all">
              Start Learning Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
