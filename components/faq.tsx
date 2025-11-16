'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useInView } from 'react-intersection-observer'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const faqs = [
    {
      question: 'Care este durata tipică a unei sesiuni fotografice?',
      answer: 'Durata unei sesiuni depinde de tipul fotografiei. Sesiile de portrete durează obicei 1-2 ore, nuntele 8-10 ore, iar evenimentele corporate 4-6 ore. Putem discuta despre necesitățile specifice și să ajustez oferta în consecință.',
    },
    {
      question: 'Cât timp durează livrarea fotografiilor editate?',
      answer: 'Obicei, fotografiile sunt editate și livrate în 7-10 zile lucrătoare. Pentru proiecte urgente, ofenim opțiuni de livrare accelerată cu o taxă suplimentară.',
    },
    {
      question: 'Oferiți pachete personalizate?',
      answer: 'Da, absolut! Fiecare client este unic și fiecare proiect este diferit. Creez pachete personalizate care se potrivesc bugetului și necesităților tale. Contactează-mă pentru o consultație.',
    },
    {
      question: 'Cum funcționează reviziile și modificările?',
      answer: 'Reviziile sunt incluse în pachetul standard. Putem ajusta editarea fotografiilor, retușurile și alte detalii. Modificări majore pot implica costuri suplimentare, pe care le discutăm în prealabil.',
    },
    {
      question: 'Puteți lucra în locuri externe sau doar în studio?',
      answer: 'Lucrez atât în studio, cât și în locații externe. De fapt, prefer sesiunile outdoor pentru portrete și cupluri. Pot veni la locația ta sau găsim un loc frumos împreună.',
    },
    {
      question: 'Ce se include în serviciile de social media management?',
      answer: 'Serviciile includ: creare conținut, planificare editorială, gestionare canale, analiză performanță și rapoarte lunare. Putem personaliza pachetele în funcție de necesitățile tale.',
    },
  ]

  return (
    <section 
      ref={ref}
      id="faq" 
      className="relative py-32 px-6 md:px-12 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent opacity-40" />
      
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-lg font-semibold mb-3 tracking-widest uppercase">Întrebări</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Întrebări
            <br />
            <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
              Frecvente
            </span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Răspunsuri la cele mai comune întrebări
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card 
                className="group bg-black border border-accent/20 hover:border-accent/50 p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground flex-1 group-hover:text-accent transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown size={24} className="text-accent" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-foreground/70 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
