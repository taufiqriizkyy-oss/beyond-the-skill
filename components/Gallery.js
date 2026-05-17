'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const images = [
    {
      src: "/images/foto3.JPG",
      alt: "Olympic Arena Performance",
      aspect: "aspect-[4/5]",
      label: "Olympic Stage"
    },
    {
      src: "/images/foto6.JPG",
      alt: "Elite Performance",
      aspect: "aspect-[16/9]",
      label: "Technical Excellence"
    },
    {
      src: "/images/foto8.JPG",
      alt: "Portrait",
      aspect: "aspect-[3/4]",
      label: "Athlete Focus"
    },
    {
      src: "/images/foto7.JPG",
      alt: "International Competition",
      aspect: "aspect-[4/3]",
      label: "World Stage"
    },
    {
      src: "/images/foto5.JPG",
      alt: "Competition Movement",
      aspect: "aspect-[16/9]",
      label: "In Motion"
    },
    {
      src: "/images/foto5.JPG",
      alt: "Technical Execution",
      aspect: "aspect-[4/5]",
      label: "Precision"
    }
  ]

  return (
    <section ref={ref} className="relative py-32 px-6 bg-brand-black">
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
            Gallery
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-display"
          >
            THE JOURNEY<br />
            <span className="text-brand-gray">TO EXCELLENCE</span>
          </motion.h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="break-inside-avoid group relative overflow-hidden"
            >
              <div className={`relative ${image.aspect} overflow-hidden`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={index < 3}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-brand-red font-display text-2xl">
                    {image.label}
                  </p>
                </div>

                {/* Red accent border on hover */}
                <div className="absolute inset-0 border-2 border-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-20"
        >
          <p className="text-brand-gray text-xl italic">
            Every moment, every movement, refined to perfection
          </p>
        </motion.div>
      </div>
    </section>
  )
}