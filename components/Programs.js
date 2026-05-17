'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function Programs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const programs = [
    {
      title: "BEYOND ELEMENTS",
      description: "A refinement training program focused on improving technical execution quality to make movements more efficient, precise, safe, consistent, and valuable in scoring execution.",
      focus: [
        "Technical Correction",
        "Precision",
        "Body Alignment",
        "Execution Quality",
        "Movement Efficiency"
      ],
      theme: "technical",
      accentColor: "text-brand-red",
      borderColor: "border-brand-red",
      link: "/beyond-elements"
    },
    {
      title: "BEYOND ARTISTRY",
      description: "A refinement training program focused on artistry, expression, elegance, harmony, musicality, and performance identity to make routines feel more alive and refined.",
      focus: [
        "Artistry",
        "Elegance",
        "Expression",
        "Musicality",
        "Harmony",
        "Performance Identity"
      ],
      theme: "artistic",
      accentColor: "text-brand-gray",
      borderColor: "border-brand-gray",
      link: "/beyond-artistry"
    }
  ]

  return (
    <section id="programs" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[200px]" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-red text-sm tracking-[0.3em] uppercase mb-6"
          >
            Refinement Programs
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-display leading-none"
          >
            TRAIN WITH<br />PURPOSE
          </motion.h2>
        </motion.div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
              className="group relative"
            >
              <div className={`
                relative border-2 ${program.borderColor} bg-brand-black/40 backdrop-blur-sm
                p-10 transition-all duration-500
                hover:bg-brand-black/60 hover:scale-[1.02]
                hover:shadow-2xl
              `}>
                {/* Card Number */}
                <div className="text-8xl font-display text-brand-white/5 absolute top-6 right-6">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Card Content */}
                <div className="relative z-10">
                  <h3 className={`text-4xl md:text-5xl font-display mb-6 ${program.accentColor}`}>
                    {program.title}
                  </h3>

                  <p className="text-brand-white/80 text-lg leading-relaxed mb-8">
                    {program.description}
                  </p>

                  {/* Focus Areas */}
                  <div className="space-y-3">
                    <p className="text-sm text-brand-gray tracking-wider uppercase mb-4">Focus Areas</p>
                    <div className="grid grid-cols-2 gap-3">
                      {program.focus.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.8 + index * 0.2 + i * 0.05 }}
                          className="flex items-center gap-2"
                        >
                          <div className={`w-1.5 h-1.5 ${program.accentColor.replace('text', 'bg')}`} />
                          <span className="text-brand-white/70 text-sm">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Learn More - NOW WITH WORKING LINK */}
                  <Link href={program.link}>
                    <motion.div
                      whileHover={{ x: 10 }}
                      className={`
                        mt-8 flex items-center gap-2 ${program.accentColor}
                        font-display text-xl tracking-wider
                        transition-all cursor-pointer
                      `}
                    >
                      LEARN MORE
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </Link>
                </div>

                {/* Hover Glow Effect */}
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                  bg-gradient-to-br ${index === 0 ? 'from-brand-red' : 'from-brand-gray'} to-transparent
                `} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}