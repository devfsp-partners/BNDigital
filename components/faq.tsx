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
      question: 'Ce este inclus în serviciul de social media management?',
      answer: 'Ne ocupăm complet de paginile tale: stabilim un plan lunar de postări, creăm design-ul grafic și textele, filmăm și edităm Reels și Story-uri, publicăm conform calendarului, răspundem la comentarii și mesaje și îți trimitem lunar un raport cu rezultatele.',
    },
    {
      question: 'Care este diferența dintre bugetul de reclame și taxa de administrare?',
      answer: 'Bugetul de reclame merge direct către Meta sau Google pentru afișarea anunțurilor, iar taxa de administrare acoperă munca noastră: strategie, targetare, materiale, configurare campanii și optimizare continuă. Îți trimitem rapoarte clare pentru ambele.',
    },
    {
      question: 'Cât durează până văd primele rezultate?',
      answer: 'Pentru reclame, primele rezultate apar de obicei în 1-2 săptămâni de la lansare. Pentru social media organic, o creștere vizibilă a engagement-ului apare de regulă în 4-8 săptămâni de postări constante. Website-urile sunt livrate, în funcție de complexitate, în 2-4 săptămâni.',
    },
    {
      question: 'Trebuie să vă ofer eu poze sau texte pentru site și postări?',
      answer: 'Nu este obligatoriu. Realizăm noi fotografiile și materialele video la locația ta sau în studio și scriem textele pentru site și postări. Tu ne spui povestea afacerii tale, restul ne ocupăm noi.',
    },
    {
      question: 'Construiți și website-uri, nu doar conținut pentru social media?',
      answer: 'Da. Construim website-uri de prezentare și pagini dedicate campaniilor, cu fotografii reale ale afacerii tale, optimizate pentru mobil, cu formular de contact, buton de WhatsApp și conectate la Google Analytics și Meta Pixel.',
    },
    {
      question: 'Lucrați doar cu afaceri din Satu Mare?',
      answer: 'Nu, colaborăm cu afaceri din toată țara. Ședințele foto/video se organizează la locația ta, iar restul colaborării — social media, reclame, website, branding — se desfășoară online, indiferent de oraș.',
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
