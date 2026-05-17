'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.95)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#programs", label: "Programs" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-lg border-b border-brand-offwhite/10' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6 flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-xl md:text-2xl text-brand-offwhite hover:text-brand-red transition-colors duration-300 relative z-50"
          >
            BEYOND THE SKILL
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-brand-offwhite/80 hover:text-brand-red text-sm uppercase tracking-widest transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 border border-brand-red/50 text-brand-red text-xs uppercase tracking-widest hover:bg-brand-red hover:text-brand-offwhite transition-all duration-300"
            >
              Apply Now
            </a>
          </motion.div>

          {/* Mobile Burger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-brand-offwhite transition-all duration-300 origin-center"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-brand-offwhite transition-all duration-300"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-brand-offwhite transition-all duration-300 origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-brand-black border-l border-brand-red/30 z-40 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full pt-24 px-8">
                {/* Mobile Nav Links */}
                <div className="flex flex-col gap-8 mb-12">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      onClick={handleLinkClick}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="text-brand-offwhite hover:text-brand-red text-2xl font-display tracking-wide transition-colors duration-300"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile CTA Button */}
                <motion.a
                  href="#contact"
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="w-full px-8 py-4 bg-brand-red text-brand-offwhite text-center font-display text-lg uppercase tracking-widest hover:bg-brand-red/90 transition-all duration-300"
                >
                  Apply Now
                </motion.a>

                {/* Decorative Element */}
                <div className="mt-auto pb-8">
                  <div className="h-px bg-gradient-to-r from-brand-red to-transparent mb-4" />
                  <p className="text-brand-gray text-xs uppercase tracking-widest">
                    Olympic Refinement System
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
