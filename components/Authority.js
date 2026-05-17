'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Authority() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { number: "70+", label: "National & International Competition Medals" },
    { number: "2024", label: "Paris Olympics Qualifier" },
    { number: "1st", label: "Indonesian Olympic Gymnast" },
  ]

  const certifications = [
    "National Certified Gymnastics Training",
    "Certified Mental Trainer",
    "Certified Strength & Conditioning Trainer",
    "Bachelor Degree in Sports Coaching",
  ]

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/foto1.JPG"
                alt="Rifda Irfanaluthfi - Paris Olympics"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            {/* Floating Medal - Hidden on mobile, visible on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-10 -right-10 w-48 h-48 lg:w-64 lg:h-64 hidden md:block"
            >
              <Image
                src="/images/foto2.JPG"
                alt="Medal achievements"
                fill
                sizes="(max-width: 1024px) 192px, 256px"
                className="object-cover rounded-lg shadow-2xl"
                quality={85}
              />
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-brand-red text-sm tracking-[0.3em] uppercase mb-6"
            >
              Olympic Authority
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-6xl md:text-7xl font-display leading-none mb-6"
            >
              RIFDA<br />IRFANALUTHFI
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-brand-gray mb-8 leading-relaxed"
            >
              First and only Indonesian gymnast to qualify for the Paris Olympics.
              Bringing Olympic-level expertise and world-class technical refinement
              to advanced gymnast development.
            </motion.p>

            {/* Stats Grid - Responsive layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="border-l-2 border-brand-red pl-4"
                >
                  <div className="text-4xl font-display text-brand-red mb-1">{stat.number}</div>
                  <div className="text-sm text-brand-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h3 className="text-2xl font-display mb-6 text-brand-gray">Certifications & Education</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-brand-red flex-shrink-0" />
                    <span className="text-brand-white/80 text-sm md:text-base">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}