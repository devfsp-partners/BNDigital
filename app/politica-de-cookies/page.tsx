import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Politica de Cookies',
  description: 'Politica de cookies a site-ului bndigital.ro, operat de BNDIGITAL S.R.L.',
  alternates: {
    canonical: '/politica-de-cookies',
  },
}

export default function PoliticaDeCookiesPage() {
  return (
    <LegalPage title="Politica de Cookies" updated="12 septembrie 2026">
      <p className="mb-6">
        Această pagină explică modul în care <strong className="text-foreground">BNDIGITAL S.R.L.</strong>{' '}
        (CUI 55347431) folosește cookie-uri și tehnologii similare pe{' '}
        <a href="https://bndigital.ro" className="underline hover:text-accent transition-colors">
          bndigital.ro
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">1. Ce sunt cookie-urile</h2>
      <p className="mb-6">
        Cookie-urile sunt fișiere text mici stocate pe dispozitivul tău atunci când vizitezi un
        site. Pot fi folosite pentru funcționarea site-ului, memorarea preferințelor sau
        măsurarea traficului.
      </p>

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">2. Ce folosim acum</h2>
      <p className="mb-3">
        <strong className="text-foreground">În prezent, bndigital.ro nu setează cookie-uri de marketing, publicitate sau urmărire.</strong>
      </p>
      <p className="mb-3">Putem folosi, în schimb:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>
          <strong className="text-foreground">Cookie-uri strict necesare</strong> — doar dacă sunt
          cerute de funcționarea tehnică a site-ului sau de hosting (de exemplu, pentru
          livrarea paginilor). Acestea nu sunt folosite pentru publicitate.
        </li>
        <li>
          <strong className="text-foreground">Vercel Analytics</strong> — un serviciu de măsurare a
          vizitelor, fără cookie-uri de urmărire și fără identificarea persoanelor.
        </li>
      </ul>
      <p className="mb-6">
        De aceea, în acest moment, nu afișăm un banner de consimțământ pentru cookie-uri. Dacă
        vom introduce cookie-uri care necesită acordul tău (de exemplu Google Analytics, Meta
        Pixel sau remarketing), vom actualiza această politică și vom cere consimțământul înainte
        de a le activa.
      </p>

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">3. Cum poți controla cookie-urile</h2>
      <p className="mb-6">
        Poți șterge sau bloca cookie-urile din setările browserului. Dacă blochezi cookie-urile
        strict necesare, unele funcții ale site-ului pot să nu mai funcționeze corect.
      </p>

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">4. Date personale</h2>
      <p className="mb-6">
        Modul în care prelucrăm datele din formulare este descris în{' '}
        <Link href="/politica-de-confidentialitate" className="underline hover:text-accent transition-colors">
          Politica de confidențialitate
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">5. Contact</h2>
      <p>
        BNDIGITAL S.R.L., CUI 55347431 —{' '}
        <a href="mailto:contact@bndigital.ro" className="underline hover:text-accent transition-colors">
          contact@bndigital.ro
        </a>
        , WhatsApp{' '}
        <a
          href="https://wa.me/40734837002"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-accent transition-colors"
        >
          +40 734 837 002
        </a>
        .
      </p>
    </LegalPage>
  )
}
