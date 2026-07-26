import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate',
  description: 'Politica de confidențialitate BNDigital — cum colectăm, folosim și protejăm datele tale.',
  alternates: {
    canonical: '/politica-de-confidentialitate',
  },
}

export default function PoliticaDeConfidentialitatePage() {
  return (
    <main className="w-full overflow-x-hidden bg-black">
      <SiteHeader />

      <section className="px-6 md:px-12 py-20 max-w-3xl mx-auto text-foreground/80 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
          Politica de Confidențialitate
        </h1>

        <p className="mb-6">
          BNDigital respectă confidențialitatea datelor tale. Acest document explică ce date
          colectăm prin formularele de pe bndigital.ro, de ce le colectăm și cum le folosim.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">Ce date colectăm</h2>
        <p className="mb-6">
          Prin formularele noastre (contact sau analiza gratuită) putem colecta: nume, numele
          afacerii, adresă de email, număr de telefon/WhatsApp, link-uri către paginile de
          social media sau website, și conținutul mesajului trimis.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">
          Cum folosim aceste date
        </h2>
        <p className="mb-6">
          Datele sunt folosite exclusiv pentru a răspunde solicitării tale — fie printr-o ofertă
          personalizată, fie printr-o analiză a prezenței online a afacerii tale, trimisă pe
          WhatsApp sau email. Nu vindem și nu partajăm datele tale cu terți în scopuri de
          marketing.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">Procesare tehnică</h2>
        <p className="mb-6">
          Formularele de pe site sunt trimise prin serviciul{' '}
          <a
            href="https://web3forms.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-accent transition-colors"
          >
            Web3Forms
          </a>
          , care livrează conținutul formularului direct pe adresa noastră de email, fără a stoca
          datele pe termen lung.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">Drepturile tale</h2>
        <p className="mb-6">
          Poți solicita oricând ștergerea sau rectificarea datelor tale contactându-ne la{' '}
          <a
            href="mailto:contact@bndigital.ro"
            className="underline hover:text-accent transition-colors"
          >
            contact@bndigital.ro
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">Contact</h2>
        <p>
          Pentru orice întrebare legată de datele tale personale, ne poți scrie la{' '}
          <a
            href="mailto:contact@bndigital.ro"
            className="underline hover:text-accent transition-colors"
          >
            contact@bndigital.ro
          </a>{' '}
          sau pe WhatsApp la{' '}
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
      </section>

      <Footer />
    </main>
  )
}
