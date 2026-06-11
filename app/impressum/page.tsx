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
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">Stand: 17.05.2026</p>

        <div className="mt-10 space-y-10 text-sm leading-7 text-white/70">
          <div>
            <p className="text-base font-semibold text-white">Constantin-Felix Weib</p>
            <p>Hagener Str. 8</p>
            <p>57234 Wilnsdorf</p>
            <p>Deutschland</p>
          </div>

          <div>
            <p className="text-base font-semibold text-white">Kontakt</p>
            <p>
              E-Mail: <a className="underline" href="mailto:Constantin.Weib@hotmail.com">Constantin.Weib@hotmail.com</a>
            </p>
          </div>

          <div>
            <p className="text-base font-semibold text-white">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </p>
            <p>Constantin-Felix Weib</p>
            <p>Hagener Str. 8</p>
            <p>57234 Wilnsdorf</p>
          </div>

          <div>
            <p className="text-base font-semibold text-white">EU-Streitschlichtung</p>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit: <a className="underline" href="https://ec.europa.eu/consumers/odr/">https://ec.europa.eu/consumers/odr/</a>
            </p>
            <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          </div>

          <div>
            <p className="text-base font-semibold text-white">Haftungsausschluss</p>
            <p className="mt-3 font-semibold text-white/90">Haftung für Inhalte</p>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
              Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
            <p className="mt-4 font-semibold text-white/90">Haftung für Links</p>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div>
            <p className="text-base font-semibold text-white">Urheberrecht</p>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
