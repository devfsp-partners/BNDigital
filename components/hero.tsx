'use client'

import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { motion } from 'motion/react'
import { ThreeDMarquee } from '@/components/ui/3d-marquee'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const heroImages = [
    '/wedding-photography-bride-and-groom-at-sunset.jpg',
    '/professional-portrait-headshot-studio-lighting.jpg',
    '/event-photography-crowd-dancing-celebration.jpg',
    '/corporate-event-photography-business-conference.jpg',
    '/wedding-photography-ceremony-emotional-moment.jpg',
    '/portrait-photography-woman-natural-lighting.jpg',
    '/event-photography-candid-guests-laughing.jpg',
    '/wedding-photography-details-rings-flowers.jpg',
    '/professional-headshot-man-business-suit.jpg',
    '/wedding-photography-first-dance-elegant.jpg',
    '/event-photography-banquet-table-setup.jpg',
    '/portrait-photography-artistic-creative-styling.jpg',
  ]

  return (
    <section 
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black pt-24 pb-12"
    >
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-black/50 backdrop-blur-md border-b border-accent/10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent"
        >
          BNDigital
        </motion.div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {['Servicii', 'Portofoliu', 'Contact'].map((item, idx) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="relative group text-foreground/80 hover:text-accent transition-colors"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 space-y-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center pt-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-accent text-lg font-semibold mb-4 tracking-widest uppercase">Fotografie Profesională</p>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight"
          >
            Capturează
            <br />
            <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
              Perfecțiunea
            </span>
            <br />
            Momentelor
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-foreground/70 mb-10 text-balance font-light max-w-2xl mx-auto"
          >
            Fotografie de nuntă, portrete și evenimente în Satu Mare. Transformă momentele tale în amintiri eterne.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              size="lg"
              className="bg-accent text-black hover:bg-accent/90 text-base font-semibold px-8 py-6 rounded-lg"
              onClick={() => scrollToSection('contact')}
            >
              Rezervă Acum
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent/10 text-base font-semibold px-8 py-6 rounded-lg"
              onClick={() => scrollToSection('portfolio')}
            >
              Explore Portofoliul
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="w-full"
        >
          <ThreeDMarquee images={heroImages} />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown size={32} className="text-accent" />
      </motion.div>
    </section>
  )
}
