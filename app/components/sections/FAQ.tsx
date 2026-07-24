import { Plus } from "lucide-react";
import Reveal from "../Reveal";

const faqs = [
  {
    question: "Wie läuft die Zusammenarbeit mit einer externen SAP-Entwicklerin ab?",
    answer:
      "Nach einem ersten Gespräch zur Anforderungsklärung erstelle ich ein individuelles Angebot. Die Zusammenarbeit erfolgt remote oder vor Ort – je nach Projektanforderung. Regelmäßige Abstimmungen und transparente Kommunikation sind selbstverständlich.",
  },
  {
    question: "Welche SAP-Modules decken Sie ab?",
    answer:
      "Mein Schwerpunkt liegt auf SD (Sales & Distribution), MM (Materials Management) und FI (Financial Accounting). Zusätzlich bringe ich umfangreiche Erfahrung im Bereich Zoll und Außenhandel mit.",
  },
  {
    question: "Arbeiten Sie auf Tagessatz oder projektbasiert?",
    answer:
      "Beides ist möglich. Bei klar definierten Projekten biete ich gerne einen Festpreis an. Für laufende Unterstützung oder Projekte mit variablem Umfang arbeite ich auf Tagessatzbasis. Das besprechen wir individuell.",
  },
  {
    question: "Können Sie bei S/4 HANA Migrationen unterstützen?",
    answer:
      "Ja, ich habe Erfahrung mit S/4 HANA Einführungen und Migrationen. Das umfasst die Anpassung bestehender ABAP-Entwicklungen, Formularmigration und die Überarbeitung von Schnittstellen für die neue Systemlandschaft.",
  },
  {
    question: "Wie schnell können Sie in ein Projekt einsteigen?",
    answer:
      "Je nach aktueller Auslastung kann ich oft innerhalb von 1-2 Wochen starten. Bei dringenden Anfragen finden wir gemeinsam eine Lösung – sprechen Sie mich einfach an.",
  },
  {
    question: "Bieten Sie auch Support und Wartung für bestehende Entwicklungen?",
    answer:
      "Ja, ich übernehme auch die Pflege und Weiterentwicklung bestehender ABAP-Programme, Formulare und Schnittstellen. Eine saubere Dokumentation und Übergabe ist dabei selbstverständlich.",
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
              Häufige Fragen zur SAP-Entwicklung
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Antworten rund um Zusammenarbeit, Leistungen und Ablauf.
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
