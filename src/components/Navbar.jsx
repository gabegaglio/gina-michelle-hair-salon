import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setVisible(y > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#our-work" },
    { name: "Team", href: "#team" },
    { name: "Pricing", href: "#pricing" },
    { name: "Reviews", href: "#reviews" },
    { name: "Hours", href: "#hours" },
    { name: "Contact", href: "#contact-details" },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-300 ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl shadow-md border-b border-[#1e3a5f]/10"
              : "bg-white/70 backdrop-blur-md"
          }`}
        >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 sm:gap-2.5 md:gap-3 text-[#1e3a5f] cursor-pointer min-w-0"
          >
            <Logo className="h-[clamp(1.5rem,4.5vw,2.75rem)] w-auto max-h-11 shrink-0" />
            <span
              className="text-[clamp(1.125rem,3.8vw,1.875rem)] md:text-3xl font-normal leading-none truncate"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Gina Michele
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-sm font-light text-[#1e3a5f] hover:text-[#0a1f3d] transition-colors relative group tracking-wide uppercase"
                style={{
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1e3a5f] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#1e3a5f] hover:text-[#0a1f3d] transition-colors p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden pb-4 border-t border-[#1e3a5f]/10 mt-2 pt-4 bg-white/95 backdrop-blur-md rounded-b-lg"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2.5 px-4 text-[#1e3a5f] hover:text-[#0a1f3d] hover:bg-[#1e3a5f]/5 transition-colors font-light rounded-lg mx-2"
                style={{
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
