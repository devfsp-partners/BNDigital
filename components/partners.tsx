'use client'

import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

export function Partners() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const partnerLogos = Array.from({ length: 12 }, (_, i) => `/logos-parteneri/${i + 1}.png`)
  const marqueeLogos = [...partnerLogos, ...partnerLogos]

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 md:px-12 bg-black border-y border-accent/10 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className="text-center text-accent text-sm font-semibold mb-10 tracking-widest uppercase"
        >
          Afaceri care ne-au ales
        </motion.p>

        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="animate-marquee flex w-max items-center gap-6 hover:[animation-play-state:paused]">
            {marqueeLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex h-24 w-44 flex-shrink-0 items-center justify-center rounded-xl bg-white/95 px-4 py-3 opacity-90 shadow-sm transition-all duration-300 hover:opacity-100 hover:shadow-lg hover:shadow-accent/10"
              >
                <img
                  src={logo}
                  alt={`Logo partener ${(idx % partnerLogos.length) + 1}`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
