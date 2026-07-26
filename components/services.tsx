'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Camera, Share2, Megaphone, Globe, Palette, ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import { scrollToSectionOrNavigate } from '@/lib/utils'

export function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      id: 'smm',
      title: 'Social Media Management',
      description: 'Ne ocupăm complet de paginile tale de Instagram, Facebook, TikTok sau LinkedIn: plan lunar de postări, design grafic, texte, Reels și Story-uri, publicare și răspuns la comentarii și mesaje.',
      icon: Share2,
      categories: ['Instagram', 'Facebook', 'TikTok', 'Reels'],
      delay: 0,
    },
    {
      id: 'ads',
      title: 'Reclame Meta & Google Ads',
      description: 'Creăm și administrăm reclame plătite pe Facebook, Instagram și Google, ca să ajungi în fața oamenilor care au nevoie de produsele sau serviciile tale, în zona în care activezi.',
      icon: Megaphone,
      categories: ['Meta Ads', 'Google Ads', 'Targetare', 'Rapoarte'],
      delay: 0.1,
    },
    {
      id: 'photo-video',
      title: 'Fotografie și Video',
      description: 'Fotografii și materiale video profesionale, în studioul nostru sau la locația ta, gata de folosit pe social media, în reclame, pe website sau în meniuri și cataloage.',
      icon: Camera,
      categories: ['Foto Produs', 'Foto Echipă', 'Video', 'Reels'],
      delay: 0.2,
    },
    {
      id: 'website',
      title: 'Website-uri și Landing Pages',
      description: 'Construim website-uri de prezentare și pagini dedicate campaniilor, cu fotografii reale ale afacerii tale, optimizate pentru mobil și conectate la Google Analytics și Meta Pixel.',
      icon: Globe,
      categories: ['Design & Dezvoltare', 'Mobil', 'Formular Contact'],
      delay: 0.3,
    },
    {
      id: 'branding',
      title: 'Branding și Strategie',
      description: 'Creăm logo-ul și identitatea vizuală a afacerii tale, definim poziționarea și propunem un plan clar de promovare, bazat pe analiza situației actuale și a concurenței.',
      icon: Palette,
      categories: ['Logo & Identitate', 'Poziționare', 'Strategie'],
      delay: 0.4,
    },
  ]

  const scrollToContact = () => scrollToSectionOrNavigate('contact', '/contact')

  return (
    <section 
      ref={ref}
      id="services" 
      className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-black via-black/80 to-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-lg font-semibold mb-3 tracking-widest uppercase">Servicii Complete</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Tot ce Are Nevoie
            <br />
            <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
              Afacerea Ta
            </span>
          </h2>
          <p className="text-foreground/70 text-xl max-w-2xl mx-auto">
            O gamă completă de servicii de marketing digital, sub un singur acoperiș
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: service.delay }}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)]"
              >
                <Card className="group relative h-full bg-black border border-accent/20 hover:border-accent/60 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  
                  <div className="relative z-10 space-y-6">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"
                    >
                      <Icon size={32} className="text-accent" />
                    </motion.div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.categories.map((cat) => (
                        <span 
                          key={cat} 
                          className="px-3 py-1 bg-accent/10 text-accent/80 text-xs font-medium rounded-full group-hover:bg-accent/20 transition-colors"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ x: 5 }}
                    >
                      <Button 
                        className="w-full bg-accent text-black hover:bg-accent/90 font-semibold group-hover:shadow-lg group-hover:shadow-accent/30 transition-all"
                        onClick={scrollToContact}
                      >
                        Solicitare Ofertă
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
