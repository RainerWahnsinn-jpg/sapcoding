import { Plus } from "lucide-react";
import Reveal from "../Reveal";

const faqs = [
  {
    question: "Was kostet es, eine Webseite erstellen zu lassen?",
    answer:
      "Der Preis richtet sich nach Umfang und Funktionen. Eine moderne Unternehmens-Webseite für Handwerk oder Mittelstand startet im niedrigen vierstelligen Bereich. Nach einem kostenlosen Erstgespräch erhalten Sie ein transparentes Festpreis-Angebot – ohne versteckte Kosten.",
  },
  {
    question: "Wie lange dauert die Erstellung einer Webseite?",
    answer:
      "Eine klassische Unternehmens-Webseite ist in der Regel innerhalb von 2 bis 4 Wochen online. Komplexere Web-Apps oder KI-Integrationen benötigen etwas länger. Den genauen Zeitplan legen wir gemeinsam im Konzept fest.",
  },
  {
    question: "Bieten Sie Webdesign auch außerhalb von Siegen an?",
    answer:
      "Ja. Mein Sitz ist in Wilnsdorf bei Siegen und ich betreue bevorzugt Kunden in Siegen-Wittgenstein und ganz Südwestfalen (u. a. Kreuztal, Netphen, Freudenberg, Olpe). Die Zusammenarbeit funktioniert dank digitaler Prozesse aber auch deutschlandweit reibungslos.",
  },
  {
    question: "Sind die Webseiten für Smartphones optimiert?",
    answer:
      "Absolut. Jede Webseite wird mobil-first entwickelt, lädt blitzschnell und sieht auf Smartphone, Tablet und Desktop einwandfrei aus. Schnelle Ladezeiten und Mobiloptimierung sind zudem wichtige Ranking-Faktoren bei Google.",
  },
  {
    question: "Wird meine Webseite bei Google gefunden?",
    answer:
      "Suchmaschinenoptimierung (SEO) ist von Anfang an fester Bestandteil. Sauberer Code, schnelle Ladezeiten, strukturierte Daten und lokale SEO für die Region Siegen sorgen dafür, dass potenzielle Kunden Sie finden.",
  },
  {
    question: "Was macht die KI-Integration für mein Unternehmen?",
    answer:
      "KI kann Routineaufgaben automatisieren – von der Content-Erstellung über die Klassifizierung von Anfragen bis hin zu smarten Assistenten auf Ihrer Webseite. Das spart Zeit und schafft Freiraum für Ihr Kerngeschäft.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative border-t border-white/10">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Häufige Fragen zu Webdesign in Siegen.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Antworten rund um Kosten, Ablauf und Ergebnisse – wenn Sie eine Webseite erstellen
              lassen möchten.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((item, i) => (
            <Reveal
              key={item.question}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              as="div"
            >
              <details className="group rounded-2xl border border-white/5 bg-zinc-900/50 p-5 backdrop-blur-xl transition-colors duration-300 open:border-white/20 sm:p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <Plus
                    className="h-5 w-5 shrink-0 text-cyan-300 transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-4 text-sm leading-7 text-white/70">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
