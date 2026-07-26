'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import { CheckCircle2 } from 'lucide-react'

export function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const expertise = [
    'Social Media Management',
    'Reclame Meta & Google Ads',
    'Fotografie & Video',
    'Website-uri & Landing Pages',
    'Branding & Identitate Vizuală',
    'Strategie & Consultanță',
  ]

  return (
    <section 
      ref={ref}
      id="about" 
      className="relative py-32 px-6 md:px-12 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black opacity-60" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-lg font-semibold mb-3 tracking-widest uppercase">Despre BNDigital</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Partenerul Tău
            <br />
            <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
              de Marketing Digital
            </span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl group"
          >
            <img
              src="/images/portfolio/restaurant/mancare-1.jpg"
              alt="Fotografie profesională realizată de BNDigital pentru un client din HoReCa"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <p className="text-white text-lg font-semibold">Lucrări reale, pentru clienți reali</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">O agenție dedicată afacerilor locale</h3>
              <p className="text-foreground/70 leading-relaxed text-lg mb-4">
                BNDigital este o agenție de marketing digital specializată în promovarea afacerilor locale și a firmelor mici și mijlocii. Ne ocupăm de prezența online a clienților noștri: pagini de social media, reclame plătite, fotografie și video, website-uri și branding.
              </p>
              <p className="text-foreground/70 leading-relaxed text-lg mb-4">
                Scopul colaborării cu noi este simplu: afacerea ta să fie mai vizibilă, să atragă mai mulți clienți și să aibă o imagine profesională.
              </p>
              <p className="text-foreground/70 leading-relaxed text-lg">
                Lucrăm cu restaurante și cafenele, saloane de înfrumusețare, clinici și cabinete medicale, magazine locale, firme de construcții, producători, companii B2B și profesioniști independenți.
              </p>
            </div>

            {/* Expertise List */}
            <div className="grid grid-cols-2 gap-3">
              {expertise.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.05 }}
                  className="flex items-center gap-3 text-foreground/80"
                >
                  <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <Button 
              size="lg"
              className="bg-accent text-black hover:bg-accent/90 font-semibold px-8 py-6 rounded-lg w-full sm:w-auto"
              onClick={() => scrollToSection('contact')}
            >
              Discutează Proiectul Tău
            </Button>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
