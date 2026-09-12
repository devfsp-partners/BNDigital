import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate',
  description: 'Politica de confidențialitate BNDIGITAL S.R.L. — cum colectăm, folosim și protejăm datele tale.',
  alternates: {
    canonical: '/politica-de-confidentialitate',
  },
}

export default function PoliticaDeConfidentialitatePage() {
  return (
    <LegalPage title="Politica de Confidențialitate" updated="12 septembrie 2026">
      <p className="mb-6">
        Prezenta Politică de confidențialitate explică modul în care <strong className="text-foreground">BNDIGITAL S.R.L.</strong>{' '}
        (denumită în continuare „BNDigital”, „noi”) prelucrează datele cu caracter personal ale
        persoanelor care vizitează site-ul{' '}
        <a href="https://bndigital.ro" className="underline hover:text-accent transition-colors">
          bndigital.ro
        </a>
        , completează formularele noastre sau ne contactează.
      </p>

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">1. Operatorul de date</h2>
      <p className="mb-2">Datele sunt prelucrate de:</p>
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

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">2. Ce date colectăm</h2>
      <p className="mb-3">
        Colectăm doar datele pe care ni le transmiți tu, prin formularele de pe site sau prin
        canalele de contact:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>nume</li>
        <li>numele afacerii</li>
        <li>adresă de email</li>
        <li>număr de telefon / WhatsApp</li>
        <li>link-uri către paginile de Facebook, Instagram sau website</li>
        <li>serviciul de interes și conținutul mesajului</li>
      </ul>
      <p className="mb-6">
        Nu colectăm date speciale (sănătate, religie, orientare politică etc.) și nu cerem date
        care nu sunt necesare pentru a-ți răspunde.
      </p>

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">3. De ce prelucrăm datele</h2>
      <p className="mb-3">Prelucrăm datele tale pentru:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>a răspunde solicitărilor de contact și a oferi o ofertă personalizată</li>
        <li>a realiza analiza gratuită a prezenței online, atunci când o soliciți</li>
        <li>a te contacta pe WhatsApp, email sau telefon, în legătură cu cererea ta</li>
        <li>a respecta obligațiile legale aplicabile</li>
      </ul>
      <p className="mb-6">
        Temeiul legal este, după caz, executarea demersurilor prealabile încheierii unui contract
        (art. 6 alin. (1) lit. b GDPR) sau consimțământul tău (art. 6 alin. (1) lit. a GDPR),
        atunci când trimiți un formular.
      </p>

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">4. Cui transmitem datele</h2>
      <p className="mb-6">
        Nu vindem și nu închiriem datele tale. Formularele sunt livrate prin serviciul{' '}
        <a
          href="https://web3forms.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-accent transition-colors"
        >
          Web3Forms
        </a>
        , care trimite conținutul pe adresa noastră de email. Site-ul poate folosi și{' '}
        <a
          href="https://vercel.com/docs/analytics"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-accent transition-colors"
        >
          Vercel Analytics
        </a>
        , un serviciu de măsurare a traficului care nu folosește cookie-uri de urmărire și nu
        identifică persoane. Detalii despre cookie-uri găsești în{' '}
        <Link href="/politica-de-cookies" className="underline hover:text-accent transition-colors">
          Politica de cookies
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">5. Cât timp păstrăm datele</h2>
      <p className="mb-6">
        Păstrăm datele din formulare atât timp cât este necesar pentru a răspunde solicitării și,
        ulterior, o perioadă rezonabilă de evidență internă (de regulă maximum 12 luni), sau
        până când ne ceri ștergerea, dacă nu avem o altă obligație legală de păstrare.
      </p>

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">6. Drepturile tale</h2>
      <p className="mb-3">Conform GDPR, ai dreptul de:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>acces la datele tale</li>
        <li>rectificare</li>
        <li>ștergere („dreptul de a fi uitat”)</li>
        <li>restricționare a prelucrării</li>
        <li>opozitie</li>
        <li>retragere a consimțământului, atunci când prelucrarea se bazează pe acesta</li>
        <li>de a depune o plângere la ANSPDCP (www.dataprotection.ro)</li>
      </ul>
      <p className="mb-6">
        Pentru exercitarea drepturilor, scrie-ne la{' '}
        <a href="mailto:contact@bndigital.ro" className="underline hover:text-accent transition-colors">
          contact@bndigital.ro
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">7. Contact</h2>
      <p>
        Pentru orice întrebare legată de datele tale personale:{' '}
        <a href="mailto:contact@bndigital.ro" className="underline hover:text-accent transition-colors">
          contact@bndigital.ro
        </a>{' '}
        sau WhatsApp{' '}
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
