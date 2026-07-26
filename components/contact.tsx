'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Phone, Mail, MessageCircle, Instagram, Facebook, Check, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { toast } from 'sonner'

const SERVICE_LABELS: Record<string, string> = {
  smm: 'Social Media Management',
  ads: 'Reclame Meta & Google Ads',
  'photo-video': 'Fotografie și Video',
  website: 'Website-uri și Landing Pages',
  branding: 'Branding și Strategie',
  other: 'Altele',
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'smm',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '410d854f-d7d8-4a0e-a277-61401f351d0f',
          subject: `Mesaj nou de pe bndigital.ro - ${SERVICE_LABELS[formData.service] ?? formData.service}`,
          from_name: 'Formular de Contact - BNDigital',
          name: formData.name,
          email: formData.email,
          serviciu_interesat: SERVICE_LABELS[formData.service] ?? formData.service,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', service: 'smm', message: '' })
        toast.success('Mesaj trimis cu succes!', {
          description: 'Îți răspundem în maxim 24 de ore.',
        })
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        toast.error('Mesajul nu a putut fi trimis.', {
          description: 'Te rugăm încearcă din nou sau scrie-ne pe WhatsApp.',
        })
      }
    } catch {
      setStatus('error')
      toast.error('Mesajul nu a putut fi trimis.', {
        description: 'Te rugăm încearcă din nou sau scrie-ne pe WhatsApp.',
      })
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefon / WhatsApp',
      value: '+40 734 837 002',
      href: 'tel:+40734837002',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@bndigital.ro',
      href: 'mailto:contact@bndigital.ro',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@bndigital.ro',
      href: 'https://www.instagram.com/bndigital.ro/',
    },
  ]

  return (
    <section 
      ref={ref}
      id="contact" 
      className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-black via-black/80 to-black overflow-hidden"
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
          <p className="text-accent text-lg font-semibold mb-3 tracking-widest uppercase">Contact</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Să Vorbim Despre
            <br />
            <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
              Afacerea Ta
            </span>
          </h2>
          <p className="text-foreground/70 text-xl max-w-2xl mx-auto">
            Suntem gata să te ajutăm să fii mai vizibil și să atragi mai mulți clienți
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group bg-black border border-accent/20 hover:border-accent/50 p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={32} className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{info.label}</h3>
                  <a 
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-foreground/70 hover:text-accent transition-colors break-all font-medium"
                  >
                    {info.value}
                  </a>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Form and Methods */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground">Formular de Contact</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nume Complet</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-accent/20 hover:border-accent/50 focus:border-accent rounded-lg px-4 py-3 text-foreground focus:outline-none transition-colors"
                  placeholder="Numele tău"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-accent/20 hover:border-accent/50 focus:border-accent rounded-lg px-4 py-3 text-foreground focus:outline-none transition-colors"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Serviciu Interesat</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-black border border-accent/20 hover:border-accent/50 focus:border-accent rounded-lg px-4 py-3 text-foreground focus:outline-none transition-colors"
                >
                  <option value="smm">Social Media Management</option>
                  <option value="ads">Reclame Meta & Google Ads</option>
                  <option value="photo-video">Fotografie și Video</option>
                  <option value="website">Website-uri și Landing Pages</option>
                  <option value="branding">Branding și Strategie</option>
                  <option value="other">Altele</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mesaj</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-black border border-accent/20 hover:border-accent/50 focus:border-accent rounded-lg px-4 py-3 text-foreground focus:outline-none transition-colors resize-none"
                  placeholder="Spune-mi despre proiectul tău..."
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-accent text-black hover:bg-accent/90 text-base font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-60"
                >
                  {status === 'sending' && (
                    <>
                      <Loader2 size={20} className="animate-spin" /> Se trimite...
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <Check size={20} /> Trimis cu Succes!
                    </>
                  )}
                  {(status === 'idle' || status === 'error') && 'Trimite Mesaj'}
                </Button>
              </motion.div>

              {status === 'error' && (
                <p className="text-destructive text-sm text-center">
                  A apărut o eroare. Te rugăm încearcă din nou sau scrie-ne direct pe WhatsApp.
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground">Alte Metode de Contact</h3>
            
            <div className="space-y-4 mb-8">
              {[
                { icon: MessageCircle, label: 'WhatsApp', text: 'Scrie-ne direct pe WhatsApp', url: 'https://wa.me/40734837002' },
                { icon: Instagram, label: 'Instagram', text: '@bndigital.ro - Vezi lucrările noastre', url: 'https://www.instagram.com/bndigital.ro/' },
                { icon: Facebook, label: 'Facebook', text: 'BNDigital - Agenție de Marketing Digital', url: 'https://www.facebook.com/profile.php?id=61554284195201' },
              ].map((method, idx) => {
                const Icon = method.icon
                return (
                  <motion.a
                    key={idx}
                    href={method.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-4 p-4 bg-black border border-accent/20 hover:border-accent/50 rounded-lg transition-all duration-300 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon size={24} className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-foreground">{method.label}</h4>
                      <p className="text-foreground/70 text-sm">{method.text}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-lg"
            >
              <h4 className="font-semibold text-foreground mb-2">Timp de Răspuns</h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Suntem disponibili pentru consultații prin telefon, WhatsApp sau întâlniri în persoană. Răspundem la mesaje în termen de 24 de ore.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
