const Footer = () => (
  <footer className="border-t border-border px-6 py-12">
    <div className="max-container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-xs font-bold text-primary-foreground">Py</span>
        </div>
        <span className="text-sm font-semibold text-foreground">Learn Python by Doing</span>
      </div>
      <p className="text-xs text-text-tertiary">© 2026 All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
