'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const principles = [
    "Movement Quality",
    "Execution Refinement",
    "Polishing Details",
    "Body Control",
    "Efficiency",
    "Elite Standards",
  ]

  return (
    <section ref={ref} className="relative py-32 px-6 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-display mb-8 leading-tight"
          >
            BEYOND SKILLS.<br />
            <span className="text-brand-red">INTO PRECISION.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-brand-gray max-w-4xl mx-auto leading-relaxed"
          >
            Gymnastics is not only about achieving a skill. It is about refining movement
            into something efficient, precise, safe, artistic, controlled, elegant,
            and valuable in execution.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative aspect-[4/5] overflow-hidden group"
          >
            <Image
              src="/images/foto5.JPG"
              alt="Elite execution"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-3xl font-display text-brand-red">PRECISION</p>
              <p className="text-brand-white/80 mt-2">Every movement matters</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden group"
          >
            <Image
              src="/images/fotofoto.JPG"
              alt="Movement quality"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-3xl font-display text-brand-red">ARTISTRY</p>
              <p className="text-brand-white/80 mt-2">Technical excellence meets expression</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="border border-brand-gray/20 p-8 hover:border-brand-red transition-all hover:bg-brand-red/5 group"
            >
              <div className="text-5xl font-display text-brand-red group-hover:scale-110 transition-transform">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="text-xl text-brand-white/80 mt-4">{principle}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}