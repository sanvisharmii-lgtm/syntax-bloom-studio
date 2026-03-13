import { motion } from "framer-motion";
import heroVisual from "@/assets/hero-visual.png";

const stats = [
  { value: "30+", label: "Hours" },
  { value: "70", label: "Exercises" },
  { value: "10", label: "Quizzes" },
  { value: "5", label: "Projects" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-container w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-8"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Certificate Included
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-6">
              <span className="text-gradient-white">Learn Python</span>
              <br />
              <span className="text-gradient-gold">by Doing.</span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary max-w-lg leading-relaxed mb-10">
              A 15-hour interactive Python course where you learn, practice, and run code directly in your browser.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
              <button className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 glow-gold whitespace-nowrap">
                Enroll for Free
              </button>
              <button className="rounded-full border border-border px-8 py-3.5 text-base font-medium text-foreground transition-all hover:bg-secondary whitespace-nowrap">
                View Curriculum
              </button>
            </div>

            <p className="text-sm text-text-secondary mb-4">
              Course fee: <span className="font-semibold text-foreground">$99</span> · First 30 minutes free · No credit card required
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm mb-16">
              <span className="text-primary font-semibold">🎓 Students get $10 off!</span>
              <a href="#verify-student" className="text-primary underline underline-offset-2 hover:opacity-80 text-xs font-medium">
                Verify now →
              </a>
            </div>

            <div className="grid grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-text-tertiary mt-1 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <img
                src={heroVisual}
                alt="Python programming concept visualization"
                className="w-full rounded-3xl"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Floating code card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-12 -left-8 glass-card rounded-2xl p-4 max-w-[220px]"
            >
              <code className="text-xs text-primary">
                <span className="text-text-tertiary">{'>>>'}</span> print(<span className="text-foreground">"Hello, World!"</span>)
              </code>
              <div className="text-xs text-text-secondary mt-1">Hello, World!</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
