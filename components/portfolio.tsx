'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useInView } from 'react-intersection-observer'

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const portfolioImages = [
    { id: 1, src: '/images/portfolio/restaurant/mancare-1.jpg' },
    { id: 2, src: '/images/portfolio/medical/cabinet-1.jpg' },
    { id: 3, src: '/images/portfolio/produse/produs-1.jpg' },
    { id: 4, src: '/images/portfolio/social/design-1.jpg' },
    { id: 5, src: '/images/portfolio/restaurant/bautura-1.jpg' },
    { id: 6, src: '/images/portfolio/medical/medic-1.jpg' },
    { id: 7, src: '/images/portfolio/produse/produs-2.jpg' },
    { id: 8, src: '/images/portfolio/social/design-2.jpg' },
    { id: 9, src: '/images/portfolio/restaurant/mancare-2.jpg' },
    { id: 10, src: '/images/portfolio/medical/cabinet-2.jpg' },
    { id: 11, src: '/images/portfolio/produse/produs-3.jpg' },
    { id: 12, src: '/images/portfolio/social/design-3.jpg' },
  ]

  const marqueeImages = [...portfolioImages, ...portfolioImages]

  return (
    <section
      ref={ref}
      id="portfolio"
      className="relative py-32 px-6 md:px-12 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-lg font-semibold mb-3 tracking-widest uppercase">Portofoliu</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Rezultate
            <br />
            <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
              Pentru Clienții Noștri
            </span>
          </h2>
          <p className="text-foreground/70 text-xl max-w-2xl mx-auto">
            Fotografii, materiale și design-uri realizate pentru afaceri din diverse domenii
          </p>
        </motion.div>
      </div>

      {/* Auto-scrolling carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        }}
      >
        <div className="animate-marquee-slow flex w-max items-center gap-6 hover:[animation-play-state:paused]">
          {marqueeImages.map((image, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(image.src)}
              className="group relative h-72 w-56 md:h-80 md:w-64 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border border-accent/10 bg-secondary transition-all hover:border-accent/50"
            >
              <img
                src={image.src}
                alt="Lucrare BNDigital"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="rounded-full bg-accent px-6 py-3 font-semibold text-black transition-all hover:bg-accent/90">
                  Vizualizează
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-accent p-2 text-black transition-all hover:bg-accent/90"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Full view"
                className="w-full h-auto rounded-xl shadow-2xl shadow-accent/30"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
