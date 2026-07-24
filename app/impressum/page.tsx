export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <section className="mx-auto max-w-4xl px-6 py-20 sm:px-10">
        <a
          className="mb-6 inline-flex items-center rounded-full border border-white/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          href="/"
        >
          Zur Startseite
        </a>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Impressum</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Angaben gemäß § 5 TMG
        </h1>

        <div className="mt-10 space-y-10 text-sm leading-7 text-white/70">
          <div>
            <p className="text-base font-semibold text-white">Sabrina Knaup</p>
            <p>Elsterweg 2</p>
            <p>35745 Herborn</p>
            <p>Deutschland</p>
          </div>

          <div>
            <p className="text-base font-semibold text-white">Kontakt</p>
            <p>
              Telefon: <a className="underline" href="tel:+4916098427523">+49 160 98427523</a>
            </p>
            <p>
              E-Mail: <a className="underline" href="mailto:Sabrina.Knaup@SAPCoding.de">Sabrina.Knaup@SAPCoding.de</a>
            </p>
          </div>

          <div>
            <p className="text-base font-semibold text-white">Umsatzsteuer-ID</p>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
            </p>
            <p>DE352868773</p>
          </div>

          <div>
            <p className="text-base font-semibold text-white">Haftungsausschluss</p>
            <p className="mt-3 font-semibold text-white/90">Urheberrecht</p>
            <p>
              Alle Inhalte auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die 
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb 
              der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen 
              Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, 
              nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht 
              vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. 
              Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
              auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden 
              Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte 
              umgehend entfernen.
            </p>
          </div>

          <div>
            <p className="text-center text-white/50 mt-8">
              Copyright © 2025 Sabrina Knaup Development
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
