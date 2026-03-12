import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need any prior programming experience?",
    a: "No! This course starts from absolute zero. If you can use a web browser, you can learn Python with this course.",
  },
  {
    q: "How long does it take to complete?",
    a: "The course is 30+ hours of content. Most students complete it in 4–6 weeks studying a few hours per week.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. The built-in Python IDE runs in your browser. You can learn on any device — laptop, tablet, or phone.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes. You'll earn a certificate upon completing the course, plus individual project certificates for each guided project.",
  },
  {
    q: "What if I get stuck?",
    a: "You have access to the Serpy AI assistant, trained on this course. Ask it anything and get help in seconds.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding" ref={ref}>
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-white">
            Questions? Answered.
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full glass-card rounded-2xl p-5 text-left hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium text-foreground text-sm">{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-text-tertiary transition-transform flex-shrink-0 ${openIdx === i ? "rotate-180" : ""}`}
                  />
                </div>
                {openIdx === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-text-secondary text-sm mt-3 leading-relaxed"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
