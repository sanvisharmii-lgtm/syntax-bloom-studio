import { motion } from "framer-motion";

const StickyEnrollBar = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-border"
    >
      <div className="max-container flex items-center justify-between px-6 py-3">
        <div className="hidden sm:flex items-center gap-6">
          <div>
            <p className="text-sm font-medium text-foreground">Learn Python by Doing</p>
            <p className="text-xs text-text-tertiary">30+ hours · 70 exercises · Certificate</p>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">$99</span>
            <span className="text-xs text-text-tertiary">one-time</span>
            <span className="text-xs text-primary font-medium">· $10 off for students</span>
          </div>
        </div>
        <button className="w-full sm:w-auto rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-gold">
          Enroll for Free
        </button>
      </div>
    </motion.div>
  );
};

export default StickyEnrollBar;
