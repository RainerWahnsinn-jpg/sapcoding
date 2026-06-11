export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <section className="mx-auto max-w-4xl px-6 py-20 sm:px-10">
        <a
          className="mb-6 inline-flex items-center rounded-full border border-white/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          href="/"
        >
          Zur Startseite
        </a>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
          Datenschutzerklärung
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Datenschutz auf einen Blick
        </h1>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">Stand: 17.05.2026</p>

        <div className="mt-10 space-y-10 text-sm leading-7 text-white/70">
          <div>
            <p className="text-base font-semibold text-white">1. Datenschutz auf einen Blick</p>
            <p className="mt-3 font-semibold text-white/90">Allgemeine Hinweise</p>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            <p className="mt-4 font-semibold text-white/90">Verantwortlicher</p>
            <p>Constantin-Felix Weib</p>
            <p>
              E-Mail:{" "}
              <a className="underline" href="mailto:Constantin.Weib@hotmail.com">
                Constantin.Weib@hotmail.com
              </a>
            </p>
          </div>

          <div>
            <p className="text-base font-semibold text-white">2. Hosting</p>
            <p>
              Unsere Website wird bei Vercel Inc. (USA) gehostet. Vercel kann technisch bedingt
              Zugriffsdaten (z.B. IP-Adresse, Zeitpunkt des Zugriffs) erheben, um den sicheren und
              schnellen Betrieb der Webseite zu gewährleisten. Weitere Informationen finden Sie
              unter:{" "}
              <a className="underline" href="https://vercel.com/legal/privacy-policy">
                vercel.com/legal/privacy-policy
              </a>
            </p>
          </div>

          <div>
            <p className="text-base font-semibold text-white">
              3. Kontaktformular und E-Mail-Versand (Resend)
            </p>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
              dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name,
              E-Mail-Adresse, Unternehmen, Nachricht) zur Bearbeitung der Anfrage und für den
              Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p className="mt-4">
              Für den sicheren und zuverlässigen Versand dieser Formular-Daten an unsere
              E-Mail-Adresse nutzen wir den Dienst Resend (Resend Labs Inc., USA). Die Daten
              werden verschlüsselt übertragen. Weitere Informationen zum Datenschutz bei Resend
              finden Sie unter:{" "}
              <a className="underline" href="https://resend.com/privacy">
                resend.com/privacy
              </a>
            </p>
          </div>

          <div>
            <p className="text-base font-semibold text-white">4. Cookies</p>
            <p>
              Wir verzichten auf dieser Website bewusst auf Tracking-, Werbe- und Analyse-Cookies.
              Es werden, wenn überhaupt, nur technisch notwendige Cookies gesetzt, die für den
              fehlerfreien Betrieb der Website zwingend erforderlich sind.
            </p>
          </div>

          <div>
            <p className="text-base font-semibold text-white">5. Ihre Rechte (DSGVO)</p>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger
              und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben
              außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
            </p>
            <div className="mt-4 space-y-2">
              <p>Recht auf Auskunft (Art. 15 DSGVO)</p>
              <p>Recht auf Berichtigung (Art. 16 DSGVO)</p>
              <p>Recht auf Löschung (Art. 17 DSGVO)</p>
              <p>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</p>
              <p>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</p>
              <p>Widerspruchsrecht (Art. 21 DSGVO)</p>
            </div>
            <p className="mt-4">
              Wenden Sie sich hierzu oder zu weiteren Fragen zum Thema Datenschutz jederzeit an:{" "}
              <a className="underline" href="mailto:Constantin.Weib@hotmail.com">
                Constantin.Weib@hotmail.com
              </a>
            </p>
          </div>

          <div>
            <p className="text-base font-semibold text-white">
              6. Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </p>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht
              bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres üblichen
              Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
