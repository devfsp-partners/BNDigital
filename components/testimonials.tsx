'use client'

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

export function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      id: 1,
      name: 'Maria Popescu',
      role: 'Mireasa',
      content: 'Experiența fotografării cu BNDigital a fost extraordinară. Fotografiile sunt frumoase, profesionale și captează perfect emoția zilei noastre speciale.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Ioan Titu',
      role: 'Director Marketing, TechCorp',
      content: 'Serviciile de branding au transformat complet identitatea vizuală a companiei. Recomand cu încredere pentru orice proiect de branding profesional.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Elena Stancu',
      role: 'Antreprenoare, E-commerce',
      content: 'Managementul social media oferit a crescut engagement-ul cu 300%. Conținutul creat este de o calitate remarcabilă și foarte relevant pentru audiența noastră.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Andrei Cristescu',
      role: 'Fotograf Corporate',
      content: 'Colaborarea pe sesiuni de fotografie corporate a fost profesională și plăcută. Rezultatele au depășit așteptările noastre.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Carmela Micu',
      role: 'Organizatoare Evenimente',
      content: 'BNDigital a fost alegerea perfectă pentru fotografia la evenimentul nostru. Timp de livrare rapid și calitate extraordinară.',
      rating: 5,
    },
    {
      id: 6,
      name: 'Viktor Novak',
      role: 'Proprietar Restaurant',
      content: 'Fotografia pentru meniu și social media a adus o nouă perspectivă afacerii. Mulțumesc pentru profesionalism și dedicație.',
      rating: 5,
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ delay: i * 0.1 }}
      >
        <Star key={i} size={16} className="fill-accent text-accent" />
      </motion.div>
    ))
  }

  return (
    <section 
      ref={ref}
      id="testimonials" 
      className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-black via-black/50 to-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 opacity-30" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-lg font-semibold mb-3 tracking-widest uppercase">Recomandări</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Ce Spun Clienții
            <br />
            <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
              Noștri
            </span>
          </h2>
          <p className="text-foreground/70 text-xl max-w-2xl mx-auto">
            Povesti reale de la clienți satisfăcuți
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="group bg-gradient-to-br from-black to-black/50 border border-accent/20 hover:border-accent/50 p-8 h-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-foreground/80 mb-6 leading-relaxed italic text-lg">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-accent/20 pt-4">
                  <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
