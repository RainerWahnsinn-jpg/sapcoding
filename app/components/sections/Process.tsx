import { MessagesSquare, PencilRuler, Code2, Rocket } from "lucide-react";
import Reveal from "../Reveal";

const steps = [
  {
    icon: MessagesSquare,
    step: "01",
    title: "Erstgespräch",
    text: "Wir analysieren Ihr Vorhaben unverbindlich und identifizieren gemeinsam Chancen und Ziele.",
  },
  {
    icon: PencilRuler,
    step: "02",
    title: "Konzept",
    text: "Sie erhalten ein klares Konzept mit Umfang, Zeitplan und transparenter Kostenschätzung.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Umsetzung",
    text: "Saubere, performante Entwicklung mit regelmäßigen Updates – Sie bleiben jederzeit im Bild.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    text: "Go-Live inklusive Optimierung, Übergabe und auf Wunsch laufender Betreuung.",
  },
];

export default function Process() {
  return (
    <section id="ablauf" className="relative border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Ablauf
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              So läuft die Zusammenarbeit ab.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Vier klare Schritte – vom ersten Gespräch bis zum erfolgreichen Launch.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          {/* Verbindungslinie (Desktop) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-7 hidden h-px w-full bg-linear-to-r from-violet-500/40 via-cyan-400/40 to-emerald-400/40 md:block"
          />

          <div className="grid gap-10 md:grid-cols-4 md:gap-8">
            {steps.map((item, i) => (
              <Reveal
                key={item.step}
                delay={((i % 3) + 1) as 1 | 2 | 3}
                as="article"
                className="group relative"
              >
                {/* Icon-Kreis */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-zinc-950 transition-all duration-500 ease-out group-hover:md:-translate-y-1 group-hover:md:border-cyan-300/40 group-hover:md:shadow-[0_0_28px_rgba(34,211,238,0.25)]">
                  <item.icon className="h-6 w-6 text-cyan-300" />
                </div>
                <span className="mt-5 block text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                  Schritt {item.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
