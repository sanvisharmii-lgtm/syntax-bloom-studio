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
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-white">
            Everything you need to master Python.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            From variables and loops to OOP, RegEx, and real-world projects — build the skills employers actually want.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto space-y-8 text-text-secondary leading-relaxed"
        >
          <p>
            In this Python Programming course, you'll learn the skills to build real-world applications. You'll master Python fundamentals such as variables, operators, data structures (lists, dictionaries), and control structures (loops, conditionals). You'll gain the ability to design modular, reusable code using Object-Oriented Programming (OOP) with classes, inheritance, and polymorphism. The course also enables you to perform advanced text processing with Python's regular expression (RegEx) module and handle errors effectively with exception management.
          </p>

          <p>
            By completing this Python course, you'll be able to build practical applications like a banking system or a virtual pet game, applying OOP, error handling, and data management. Hands-on projects will also help you build tools like a Wikipedia extractor, giving you the skills to work with web scraping, data extraction, and user interaction.
          </p>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">By the end of this course, you will be able to:</h3>
            <ul className="space-y-2">
              {[
                "Write clean, efficient Python programs from scratch",
                "Debug errors and fix broken code confidently",
                "Solve programming problems using logical thinking",
                "Read and understand code written by others",
                "Build real-world applications using OOP and data management",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-text-tertiary italic">
            No prior programming experience required. This course starts from zero.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseOverview;
