import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Termeni și Condiții',
  description: 'Termenii și condițiile de utilizare ale site-ului bndigital.ro, operat de BNDIGITAL S.R.L.',
  alternates: {
    canonical: '/termeni-si-conditii',
  },
}

export default function TermeniSiConditiiPage() {
  return (
    <LegalPage title="Termeni și Condiții" updated="12 septembrie 2026">
      <p className="mb-6">
        Prin accesarea site-ului{' '}
        <a href="https://bndigital.ro" className="underline hover:text-accent transition-colors">
          bndigital.ro
        </a>{' '}
        ești de acord cu acești termeni. Dacă nu ești de acord, te rugăm să nu folosești site-ul.
      </p>

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">1. Identitatea operatorului</h2>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>
          <strong className="text-foreground">Denumire:</strong> BNDIGITAL S.R.L.
        </li>
        <li>
          <strong className="text-foreground">CUI:</strong> 55347431
        </li>
        <li>
          <strong className="text-foreground">Email:</strong>{' '}
          <a href="mailto:contact@bndigital.ro" className="underline hover:text-accent transition-colors">
            contact@bndigital.ro
          </a>
        </li>
        <li>
          <strong className="text-foreground">Telefon / WhatsApp:</strong>{' '}
          <a href="https://wa.me/40734837002" className="underline hover:text-accent transition-colors">
            +40 734 837 002
          </a>
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">2. Obiectul site-ului</h2>
      <p className="mb-6">
        Site-ul prezintă serviciile BNDIGITAL S.R.L. (marketing digital, social media, reclame
        plătite, fotografie și video, website-uri și branding) și permite trimiterea de solicitări
        de contact sau de analiză gratuită. Informațiile de pe site au caracter informativ și nu
        constituie, prin ele însele, o ofertă fermă.
      </p>

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">3. Formulare și comunicare</h2>
      <p className="mb-6">
        Completarea unui formular presupune că datele transmise sunt corecte și că ești de acord
        să te contactăm în legătură cu solicitarea ta. Analiza gratuită nu implică nicio
        obligație de a încheia un contract. Condițiile comerciale ale unui eventual colaborări se
        stabilesc separat, în scris.
      </p>

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">4. Proprietate intelectuală</h2>
      <p className="mb-6">
        Conținutul site-ului (texte, fotografii, logo, design) aparține BNDIGITAL S.R.L. sau
        partenerilor săi și nu poate fi copiat, redistribuit sau folosit comercial fără acordul
        nostru scris. Fotografiile de portofoliu ilustrează lucrări realizate de noi și rămân
        protejate.
      </p>

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">5. Limitarea răspunderii</h2>
      <p className="mb-6">
        Depunem eforturi rezonabile pentru ca informațiile de pe site să fie corecte și
        actualizate, însă nu garantăm că site-ul funcționează neîntrerupt sau fără erori. Nu
        răspundem pentru daune rezultate din utilizarea sau imposibilitatea utilizării site-ului,
        în măsura permisă de lege.
      </p>

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">6. Link-uri către terți</h2>
      <p className="mb-6">
        Site-ul poate conține link-uri către Instagram, Facebook sau alte platforme. Nu
        controlăm conținutul acelor site-uri și nu suntem responsabili pentru politicile lor.
      </p>

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">7. Date personale</h2>
      <p className="mb-6">
        Prelucrarea datelor personale este descrisă în{' '}
        <Link href="/politica-de-confidentialitate" className="underline hover:text-accent transition-colors">
          Politica de confidențialitate
        </Link>
        . Informații despre cookie-uri găsești în{' '}
        <Link href="/politica-de-cookies" className="underline hover:text-accent transition-colors">
          Politica de cookies
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">8. Modificări</h2>
      <p className="mb-6">
        Putem actualiza acești termeni. Versiunea în vigoare este cea publicată pe această
        pagină, cu data ultimei actualizări.
      </p>

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">9. Legea aplicabilă</h2>
      <p>
        Acești termeni sunt guvernați de legea română. Eventualele litigii se soluționează amiabil
        sau, în subsidiar, de instanțele competente din România.
      </p>
    </LegalPage>
  )
}
