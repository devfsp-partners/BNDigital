import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactează BNDigital pentru o ofertă personalizată: telefon, WhatsApp, email sau formularul de contact. Îți răspundem în maxim 24 de ore.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | BNDigital',
    description: 'Contactează BNDigital pentru o ofertă personalizată: telefon, WhatsApp, email sau formularul de contact. Îți răspundem în maxim 24 de ore.',
    url: '/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-hidden bg-black">
      <SiteHeader />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
