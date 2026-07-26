'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Loader2, Check, PartyPopper } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

type FormState = {
  name: string
  business: string
  facebook: string
  instagram: string
  website: string
  whatsapp: string
}

const initialState: FormState = {
  name: '',
  business: '',
  facebook: '',
  instagram: '',
  website: '',
  whatsapp: '',
}

export function MasinaForm() {
  const [formData, setFormData] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
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
          subject: `Analiză gratuită (mașină) - ${formData.business}`,
          from_name: 'Formular Mașină - BNDigital',
          nume: formData.name,
          numele_afacerii: formData.business,
          facebook: formData.facebook,
          instagram: formData.instagram,
          website: formData.website,
          whatsapp: formData.whatsapp,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        toast.success('Cerere trimisă cu succes!')
      } else {
        setStatus('error')
        toast.error('Cererea nu a putut fi trimisă.', {
          description: 'Te rugăm încearcă din nou.',
        })
      }
    } catch {
      setStatus('error')
      toast.error('Cererea nu a putut fi trimisă.', {
        description: 'Te rugăm încearcă din nou.',
      })
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <PartyPopper size={48} className="text-accent mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
          Gata! Analiza ta ajunge pe WhatsApp în maxim 24 de ore.
        </h2>
        <p className="text-foreground/70 mb-8">
          Între timp, aruncă un ochi peste ce facem:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
          <a
            href="https://www.instagram.com/bndigital.ro/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg border border-accent/30 text-foreground/90 hover:border-accent hover:text-accent transition-colors"
          >
            Instagram BNDigital
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61554284195201"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg border border-accent/30 text-foreground/90 hover:border-accent hover:text-accent transition-colors"
          >
            Facebook BNDigital
          </a>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-lg bg-accent text-black hover:bg-accent/90 transition-colors"
          >
            bndigital.ro
          </Link>
        </div>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Numele tău</label>
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
        <label className="block text-sm font-medium text-foreground mb-2">Numele afacerii</label>
        <input
          type="text"
          name="business"
          value={formData.business}
          onChange={handleChange}
          required
          className="w-full bg-black border border-accent/20 hover:border-accent/50 focus:border-accent rounded-lg px-4 py-3 text-foreground focus:outline-none transition-colors"
          placeholder="Numele afacerii tale"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Pagina de Facebook</label>
        <input
          type="text"
          name="facebook"
          value={formData.facebook}
          onChange={handleChange}
          required
          className="w-full bg-black border border-accent/20 hover:border-accent/50 focus:border-accent rounded-lg px-4 py-3 text-foreground focus:outline-none transition-colors"
          placeholder="Lipește linkul aici"
        />
        <p className="text-foreground/50 text-xs mt-1.5">Dacă nu ai, scrie: nu există</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Pagina de Instagram</label>
        <input
          type="text"
          name="instagram"
          value={formData.instagram}
          onChange={handleChange}
          required
          className="w-full bg-black border border-accent/20 hover:border-accent/50 focus:border-accent rounded-lg px-4 py-3 text-foreground focus:outline-none transition-colors"
          placeholder="Lipește linkul aici"
        />
        <p className="text-foreground/50 text-xs mt-1.5">Dacă nu ai, scrie: nu există</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Website</label>
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          required
          className="w-full bg-black border border-accent/20 hover:border-accent/50 focus:border-accent rounded-lg px-4 py-3 text-foreground focus:outline-none transition-colors"
          placeholder="Lipește linkul aici"
        />
        <p className="text-foreground/50 text-xs mt-1.5">Dacă nu ai, scrie: nu există</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Număr WhatsApp</label>
        <input
          type="tel"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          required
          pattern="^\+?[0-9\s]{9,15}$"
          title="Introdu un număr de telefon valid (ex: 0734 837 002)"
          className="w-full bg-black border border-accent/20 hover:border-accent/50 focus:border-accent rounded-lg px-4 py-3 text-foreground focus:outline-none transition-colors"
          placeholder="07XX XXX XXX"
        />
      </div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-accent text-black hover:bg-accent/90 text-base font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-60"
        >
          {status === 'sending' ? (
            <>
              <Loader2 size={20} className="animate-spin" /> Se trimite...
            </>
          ) : (
            <>
              <Check size={20} /> Vreau analiza
            </>
          )}
        </Button>
      </motion.div>

      <p className="text-foreground/50 text-xs text-center leading-relaxed">
        Prin trimitere ești de acord să te contactăm pe WhatsApp pentru analiză.{' '}
        <Link href="/politica-de-confidentialitate" className="underline hover:text-accent transition-colors">
          Politica de confidențialitate
        </Link>
      </p>

      {status === 'error' && (
        <p className="text-destructive text-sm text-center">
          A apărut o eroare. Te rugăm încearcă din nou.
        </p>
      )}
    </form>
  )
}
