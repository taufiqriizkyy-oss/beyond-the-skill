'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden grain">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Olympic Gymnastics Arena"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-20 right-20 w-96 h-96 bg-brand-red rounded-full blur-[120px]"
      />

      <div className="relative h-full flex flex-col items-center justify-center px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-red text-sm md:text-base tracking-[0.3em] uppercase mb-8"
          >
            Olympic Refinement System
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-7xl md:text-9xl lg:text-[180px] font-display leading-none mb-6"
          >
            BEYOND<br />THE SKILL
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-4xl font-display text-brand-gray tracking-wider mb-8"
          >
            Beyond Skill, Beyond Limits
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-brand-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Precision refinement for gymnasts who want more than just skills.
            Focused on execution quality, artistry, movement efficiency, technical precision,
            and advanced athlete development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="bg-brand-red hover:bg-brand-red/90 text-white px-10 py-5 font-display text-xl tracking-wider transition-all hover:scale-105 hover:glow-red"
            >
              Book Private Session
            </a>
            <a
              href="#programs"
              className="border-2 border-brand-white hover:border-brand-red hover:text-brand-red text-white px-10 py-5 font-display text-xl tracking-wider transition-all hover:scale-105"
            >
              Explore Programs
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-brand-white/60 text-xs tracking-[0.2em] uppercase">Scroll</span>
            <svg
              className="w-6 h-6 text-brand-red"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}