'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`
        fixed top-0 left-0 right-0 z-50 px-6 py-6
        transition-all duration-500
        ${scrolled ? 'bg-brand-black/95 backdrop-blur-md border-b border-brand-gray/20' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-red flex items-center justify-center">
            <span className="text-white font-display text-xl">B</span>
          </div>
          <div className="hidden md:block">
            <div className="font-display text-xl leading-none group-hover:text-brand-red transition-colors">
              BEYOND THE SKILL
            </div>
            <div className="text-brand-gray text-xs tracking-wider">Olympic Refinement</div>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <a
            href="#programs"
            className="text-sm tracking-wider uppercase text-brand-white/80 hover:text-brand-red transition-colors"
          >
            Programs
          </a>
          <a
            href="#contact"
            className="text-sm tracking-wider uppercase text-brand-white/80 hover:text-brand-red transition-colors"
          >
            Contact
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-brand-red hover:bg-brand-red/90
              text-white px-6 py-3
              font-display tracking-wider
              transition-all hover:scale-105
            "
          >
            Book Session
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-brand-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  )
}
