'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WhyTrainHere() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      title: "Olympic Experience",
      description: "Train with Indonesia's first and only Olympic gymnast. Learn from world-class competition experience.",
      icon: "🥇"
    },
    {
      title: "Certified Coaching",
      description: "National certified gymnastics training combined with sports coaching expertise.",
      icon: "📋"
    },
    {
      title: "Advanced Technical Refinement",
      description: "Focus on execution quality, precision, and movement efficiency at elite standards.",
      icon: "⚡"
    },
    {
      title: "Athlete Mental Development",
      description: "Certified mental training to build resilience, confidence, and competitive mindset.",
      icon: "🧠"
    },
    {
      title: "Strength & Conditioning Knowledge",
      description: "Evidence-based strength training and conditioning for optimal athletic performance.",
      icon: "💪"
    },
    {
      title: "Personalized Development",
      description: "Individualized training programs tailored to your specific goals and refinement needs.",
      icon: "🎯"
    }
  ]

  return (
    <section ref={ref} className="relative py-32 px-6 bg-gradient-to-b from-brand-black to-brand-black/95">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-display mb-6"
          >
            WHY TRAIN<br />
            <span className="text-brand-red">WITH ME?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-brand-gray max-w-3xl mx-auto"
          >
            Elite-level refinement meets personalized athlete development
          </motion.p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group relative"
            >
              <div className="
                relative border border-brand-gray/20 bg-brand-black/40 backdrop-blur-sm
                p-8 h-full
                transition-all duration-500
                hover:border-brand-red hover:bg-brand-red/5
                hover:translate-y-[-4px]
              ">
                {/* Icon */}
                <div className="text-5xl mb-6 transform transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display text-brand-white mb-4 group-hover:text-brand-red transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-brand-white/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
