'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useInView } from 'react-intersection-observer'

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('weddings')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const categories = [
    { id: 'weddings', label: 'Nuntă', count: 15 },
    { id: 'portraits', label: 'Portrete', count: 15 },
    { id: 'events', label: 'Evenimente', count: 15 },
    { id: 'branding', label: 'Branding', count: 5 },
  ]

  const portfolioImages = {
    weddings: [
      { id: 1, src: '/wedding-photography-bride-and-groom-at-sunset.jpg' },
      { id: 2, src: '/wedding-photography-ceremony-emotional-moment.jpg' },
      { id: 3, src: '/wedding-photography-details-rings-flowers.jpg' },
      { id: 4, src: '/wedding-photography-first-dance-elegant.jpg' },
      { id: 5, src: '/professional-headshot-man-business-suit.jpg' },
      { id: 6, src: '/event-photography-candid-guests-laughing.jpg' },
      { id: 7, src: '/professional-photographer-woman-in-studio-with-cam.jpg' },
      { id: 8, src: '/event-photography-banquet-table-setup.jpg' },
      { id: 9, src: '/wedding-photographer-details.jpg' },
      { id: 10, src: '/bride-preparation-morning.jpg' },
      { id: 11, src: '/groom-first-look.jpg' },
      { id: 12, src: '/ceremony-couple-exchange-vows.jpg' },
      { id: 13, src: '/reception-first-dance.jpg' },
      { id: 14, src: '/guests-dancing-celebration.jpg' },
      { id: 15, src: '/couple-sunset-portrait.jpg' },
    ],
    portraits: [
      { id: 1, src: '/portrait-photography-woman-natural-lighting.jpg' },
      { id: 2, src: '/professional-portrait-headshot-studio-lighting.jpg' },
      { id: 3, src: '/portrait-photography-artistic-creative-styling.jpg' },
      { id: 4, src: '/professional-headshot-woman.jpg' },
      { id: 5, src: '/family-portrait-outdoor.jpg' },
      { id: 6, src: '/couple-portrait-romantic.jpg' },
      { id: 7, src: '/children-portrait-candid.jpg' },
      { id: 8, src: '/business-headshot-professional.jpg' },
      { id: 9, src: '/portrait-dramatic-lighting.jpg' },
      { id: 10, src: '/beauty-portrait-makeup.jpg' },
      { id: 11, src: '/lifestyle-portrait-candid.jpg' },
      { id: 12, src: '/maternity-portrait-outdoor.jpg' },
      { id: 13, src: '/placeholder.svg?height=800&width=600' },
      { id: 14, src: '/placeholder.svg?height=800&width=600' },
      { id: 15, src: '/placeholder.svg?height=800&width=600' },
    ],
    events: [
      { id: 1, src: '/event-photography-crowd-dancing-celebration.jpg' },
      { id: 2, src: '/corporate-event-photography-business-conference.jpg' },
      { id: 3, src: '/event-photography-banquet-table-setup.jpg' },
      { id: 4, src: '/placeholder.svg?height=800&width=600' },
      { id: 5, src: '/placeholder.svg?height=800&width=600' },
      { id: 6, src: '/placeholder.svg?height=800&width=600' },
      { id: 7, src: '/placeholder.svg?height=800&width=600' },
      { id: 8, src: '/placeholder.svg?height=800&width=600' },
      { id: 9, src: '/placeholder.svg?height=800&width=600' },
      { id: 10, src: '/placeholder.svg?height=800&width=600' },
      { id: 11, src: '/placeholder.svg?height=800&width=600' },
      { id: 12, src: '/placeholder.svg?height=800&width=600' },
      { id: 13, src: '/placeholder.svg?height=800&width=600' },
      { id: 14, src: '/placeholder.svg?height=800&width=600' },
      { id: 15, src: '/placeholder.svg?height=800&width=600' },
    ],
    branding: [
      { id: 1, src: '/placeholder.svg?height=800&width=600' },
      { id: 2, src: '/placeholder.svg?height=800&width=600' },
      { id: 3, src: '/placeholder.svg?height=800&width=600' },
      { id: 4, src: '/placeholder.svg?height=800&width=600' },
      { id: 5, src: '/placeholder.svg?height=800&width=600' },
    ],
  }

  const currentImages = portfolioImages[selectedCategory as keyof typeof portfolioImages]

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
            Lucrări
            <br />
            <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
              Profesionale
            </span>
          </h2>
          <p className="text-foreground/70 text-xl max-w-2xl mx-auto">
            Explorează colecția noastră de lucrări și inspiră-te
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-16 flex-wrap"
        >
          {categories.map((cat, idx) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-accent text-black shadow-lg shadow-accent/30'
                  : 'border-2 border-accent text-accent hover:bg-accent/10'
              }`}
            >
              {cat.label}
              <span className="ml-2 text-sm opacity-70">({cat.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {currentImages.map((image, idx) => (
              <motion.div
                key={`${selectedCategory}-${image.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => setSelectedImage(image.src)}
                className="relative group cursor-pointer h-64 md:h-80 rounded-xl overflow-hidden bg-secondary border border-accent/10 hover:border-accent/50 transition-all"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={`Portfolio ${image.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="px-6 py-3 bg-accent text-black font-semibold rounded-full hover:bg-accent/90 transition-all"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedImage(image.src)
                    }}
                  >
                    Vizualizează
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-accent text-black p-2 rounded-full hover:bg-accent/90 transition-all z-10"
                >
                  <X size={24} />
                </button>
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt="Full view"
                  className="w-full h-auto rounded-xl shadow-2xl shadow-accent/30"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
