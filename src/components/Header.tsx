import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import logoWhite from "@/assets/ccv-white.png";

const Header = () => {
  const { t, lang, toggle } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t.navAbout, href: "#about" },
    { label: t.navGaneshUtsav, href: "#ganesh-utsav" },
    { label: t.navSabhasad, href: "#karyakarta" },
    { label: t.navContact, href: "#contact" },
    { label: t.navDonation, href: "#donation" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src={logoWhite}
              alt="Chakala Cha Vighneshwar"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-foreground/80 hover:text-secondary transition-colors duration-300 font-medium text-sm uppercase tracking-wider"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={toggle}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-secondary/40 bg-secondary/10 hover:bg-secondary/20 text-secondary transition-all duration-300 text-sm font-medium"
                aria-label="Toggle language"
              >
                <Languages className="w-4 h-4" />
                {lang === "en" ? "मराठी" : "ENG"}
              </button>
            </li>
          </ul>

          {/* Mobile: Language + Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggle}
              className="p-2 rounded-lg border border-secondary/40 bg-secondary/10 text-secondary text-xs font-medium"
              aria-label="Toggle language"
            >
              {lang === "en" ? "मराठी" : "ENG"}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-lg border-b border-border"
          >
            <ul className="section-container py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-foreground/80 hover:text-secondary transition-colors font-medium uppercase tracking-wider"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
