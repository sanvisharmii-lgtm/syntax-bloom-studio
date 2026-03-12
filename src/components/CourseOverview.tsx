import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CourseOverview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="overview" className="section-padding" ref={ref}>
      <div className="max-container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-white">
            Everything you need to master Python.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            From variables and loops to OOP, RegEx, and real-world projects — build the skills employers actually want.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Python Fundamentals",
              desc: "Variables, operators, data structures, loops, conditionals — the building blocks of every Python program.",
              icon: "⚡",
            },
            {
              title: "Object-Oriented Programming",
              desc: "Classes, inheritance, polymorphism — design modular, reusable code like a professional developer.",
              icon: "🧱",
            },
            {
              title: "Regular Expressions",
              desc: "Master Python's RegEx module for advanced text processing and pattern matching.",
              icon: "🔍",
            },
            {
              title: "Exception Handling",
              desc: "Handle errors gracefully and build robust applications that don't break.",
              icon: "🛡️",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="glass-card rounded-2xl p-8 group hover:border-primary/30 transition-colors"
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
