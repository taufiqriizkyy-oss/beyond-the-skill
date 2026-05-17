'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
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

          {/* Mobile Burger Button - ENHANCED VISIBILITY */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 w-12 h-12 flex flex-col items-center justify-center gap-2 bg-brand-red/10 border border-brand-red/30"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-7 h-0.5 bg-brand-offwhite transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}
            />
            <span
              className={`block w-7 h-0.5 bg-brand-offwhite transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-7 h-0.5 bg-brand-offwhite transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-brand-black border-l-2 border-brand-red z-40 md:hidden overflow-y-auto">
            <div className="flex flex-col h-full pt-24 px-8">
              {/* Mobile Nav Links */}
              <div className="flex flex-col gap-8 mb-12">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-brand-offwhite hover:text-brand-red text-3xl font-display tracking-wide transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full px-8 py-5 bg-brand-red text-brand-offwhite text-center font-display text-xl uppercase tracking-widest hover:bg-brand-red/90 transition-all duration-300"
              >
                Apply Now
              </a>

              {/* Decorative Element */}
              <div className="mt-auto pb-8">
                <div className="h-px bg-gradient-to-r from-brand-red to-transparent mb-4" />
                <p className="text-brand-gray text-xs uppercase tracking-widest">
                  Olympic Refinement System
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}