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
        <div className="hidden sm:block">
          <p className="text-sm font-medium text-foreground">Learn Python by Doing</p>
          <p className="text-xs text-text-tertiary">30+ hours · 70 exercises · Certificate</p>
        </div>
        <button className="w-full sm:w-auto rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-gold">
          Enroll Now
        </button>
      </div>
    </motion.div>
  );
};

export default StickyEnrollBar;
