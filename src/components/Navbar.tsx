import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card"
    >
      <div className="max-container flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">Py</span>
          </div>
          <span className="text-sm font-semibold text-foreground">Learn Python</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
          <a href="#overview" className="hover:text-foreground transition-colors">Overview</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#curriculum" className="hover:text-foreground transition-colors">Curriculum</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </div>
        <button className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90">
          Enroll Now
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
