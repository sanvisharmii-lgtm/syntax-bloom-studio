import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";
import sampleCertificate from "@/assets/sample-certificate.png";

const Certificate = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificate" className="section-padding" ref={ref}>
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-6">
            <Award className="h-3.5 w-3.5" />
            Recognized Certificate
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-white">
            Earn your certificate.
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Complete the course and receive a professional certificate to showcase your Python skills to employers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-3 md:p-4 glow-gold">
            <img
              src={sampleCertificate}
              alt="Sample certificate of completion for Learn Python by Doing course from Serplora Academy"
              className="w-full rounded-2xl"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto">
            {[
              { value: "1", label: "Course Certificate" },
              { value: "5", label: "Project Certificates" },
              { value: "∞", label: "Lifetime Access" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl font-bold text-primary">{item.value}</div>
                <div className="text-xs text-text-tertiary mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificate;
