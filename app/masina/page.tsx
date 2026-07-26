import type { Metadata } from 'next'
import Link from 'next/link'
import { MasinaForm } from '@/components/masina-form'

export const metadata: Metadata = {
  title: 'Analiză Gratuită - BNDigital',
  description: 'Lasă-ne datele afacerii tale și îți trimitem gratuit pe WhatsApp o analiză a prezenței tale online.',
  alternates: {
    canonical: '/masina',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function MasinaPage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-black flex flex-col">
      <div className="flex justify-center pt-10">
        <Link href="/">
          <img src="/logo/bndigital-logo-alb.svg" alt="BNDigital" className="h-9 w-auto" />
        </Link>
      </div>

      <section className="flex-1 flex items-center justify-center px-6 py-12 md:py-16">
        <div className="w-full max-w-xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-5 text-balance">
              Ne-ai văzut în oraș 👋
            </h1>
            <p className="text-foreground/70 leading-relaxed mb-3">
              Promisiunea de pe mașină e simplă: ne uităm la prezența online a afacerii tale —
              paginile de social media, cum apari pe Google, website-ul dacă există — și îți
              trimitem pe WhatsApp o analiză personalizată: ce funcționează, ce lipsește și ce
              poți îmbunătăți concret.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-3">
              Nu e un ghid standard. E despre afacerea ta, făcută de un om care s-a uitat efectiv
              la ea.
            </p>
            <p className="text-accent font-semibold">Gratuit, fără nicio obligație.</p>
          </div>

          <MasinaForm />
        </div>
      </section>
    </main>
  )
}
