'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: "Sarah Anderson",
      role: "Competitive Gymnast",
      text: "Training with Rifda completely transformed my approach to gymnastics. The precision refinement helped me improve my execution scores significantly. Her Olympic experience brings insights you can't get anywhere else.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Parent of Elite Athlete",
      text: "The personalized attention and technical expertise is exceptional. My daughter's confidence and skill quality improved dramatically in just months. Worth every investment for serious gymnasts.",
      rating: 5
    },
    {
      name: "Jessica Martinez",
      role: "Advanced Level Gymnast",
      text: "Beyond The Skill isn't just about learning tricks—it's about refining every detail until your movements are Olympic-level. The artistry program helped me connect with my routines on a deeper level.",
      rating: 5
    }
  ]

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
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
            Athlete Stories
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-display"
          >
            WHAT ATHLETES<br />
            <span className="text-brand-gray">ARE SAYING</span>
          </motion.h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
              className="group"
            >
              <div className="
                relative bg-brand-black border border-brand-gray/20
                p-8 h-full
                transition-all duration-500
                hover:border-brand-red hover:bg-brand-red/5
              ">
                {/* Quote Mark */}
                <div className="text-6xl text-brand-red/20 font-serif mb-4">"</div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-brand-red"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-brand-white/80 leading-relaxed mb-8 italic">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div className="pt-6 border-t border-brand-gray/20">
                  <div className="flex items-center gap-4">
                    {/* Placeholder Avatar */}
                    <div className="w-12 h-12 bg-brand-red/20 rounded-full flex items-center justify-center">
                      <span className="text-brand-red font-display text-xl">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>

                    <div>
                      <div className="font-display text-lg text-brand-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-brand-gray">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accent Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-brand-red/0 group-hover:border-brand-red transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
