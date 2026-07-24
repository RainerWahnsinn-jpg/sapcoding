import { Code2, FileText, Link2, Briefcase } from "lucide-react";
import Reveal from "../Reveal";

const highlights = [
  {
    icon: Code2,
    title: "ABAP & ABAP OO",
    text: "Programmierung und Erweiterungen mit BAdIs, BAPIs, Enhancement Points und User Exits – für SD, MM, QM, WM, FI/CO sowie Zoll und Außenhandel.",
  },
  {
    icon: FileText,
    title: "Formulare",
    text: "Adobe Forms und Smart Forms inklusive eigener Formularsteuerung – von der Konzeption bis zur mehrsprachigen Umsetzung.",
  },
  {
    icon: Link2,
    title: "Schnittstellen",
    text: "EDI, IDoc, RFC und OData: Konzepte, Entwicklung, Monitoring und Anbindung von AddOns wie SAP AEB.",
  },
  {
    icon: Briefcase,
    title: "Consulting",
    text: "Beratung für EDI, SD sowie Zoll und Außenhandel: Prozessoptimierung, Customizing, Fehleranalyse und Projektkoordination.",
  },
];

/** Werdegang – reale Stationen aus dem CV. */
const career = [
  {
    period: "Seit 2022",
    role: "Selbstständig – Sabrina Knaup Development",
    place: "Herborn",
    text: "ABAP/ABAP OO, Formulare und EDI/RFC/OData-Schnittstellen für SD, MM, QM, WM, FI/CO, Zoll & Außenhandel. Consultant für EDI, SD, Zoll und Außenhandel.",
  },
  {
    period: "2014 – 2022",
    role: "SAP IT SD / IT Development – Loh Services",
    place: "Haiger",
    text: "ABAP-Entwicklung für EDI, SD, MM, FI/CO, WM und Zoll & Außenhandel. Third-Level-Support, Monitoring der AEB- und EDI-Schnittstellen, internationale Rollouts der Rittal-Gruppe.",
  },
  {
    period: "2012 – 2014",
    role: "SAP IT – SSI Schäfer",
    place: "Neunkirchen",
    text: "ABAP- und ITS-Entwicklung für EDI, SD, MM, WM und Online-Shop, Support und Schnittstellen-Monitoring (WAMAS).",
  },
  {
    period: "2008 – 2012",
    role: "Ausbildung & SAP IT SD – Loh Services",
    place: "Haiger",
    text: "Fachinformatikerin Anwendungsentwicklung (Abschlussnote 1,9), anschließend ABAP/BSP-Entwicklung und Support für SD, WM und LES.",
  },
];

/** Kennzahlen, die B2B-Entscheider sofort einordnen können. */
const stats = [
  { value: "15+", label: "Jahre SAP-Erfahrung" },
  { value: "25+", label: "Projekte & Rollouts" },
  { value: "SD · MM · FI", label: "Modul-Fokus" },
  { value: "2022", label: "Freiberuflich seit" },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Über mich
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Sabrina Knaup
            </h2>
            <p className="mt-2 text-base font-medium text-cyan-400/90">
              SAP Development Expert · EDI &amp; Zoll Consultant
            </p>
          </Reveal>

          <Reveal delay={1}>
            <p className="mt-6 text-base leading-7 text-slate-400">
              Seit 2008 im SAP-Umfeld, seit 2022 selbstständig: Ich verbinde
              tiefes Entwicklungs-Know-how mit Beratungskompetenz für EDI, SD
              sowie Zoll und Außenhandel. Ob S/4 HANA Einführung, globales
              Template-Rollout oder individuelle Formularsteuerung – ich
              begleite Projekte vom Konzept über Customizing und Programmierung
              bis zu Go-live und Support. Pragmatisch, zuverlässig und
              lösungsorientiert.
            </p>
          </Reveal>
        </div>

        {/* ── Kennzahlen ────────────────────────────────────────────── */}
        <Reveal>
          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col bg-slate-900/60 px-5 py-5">
                <dd className="order-1 text-xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
                <dt className="order-2 mt-1 text-[11px] uppercase tracking-[0.14em] text-slate-500">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* ── Werdegang als Timeline ───────────────────────────────── */}
          <div>
            <Reveal>
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Werdegang
              </h3>
            </Reveal>
            <ol className="mt-6 space-y-0 border-l border-slate-800">
              {career.map((entry, i) => (
                <Reveal
                  key={entry.period}
                  delay={((i % 3) + 1) as 1 | 2 | 3}
                  as="li"
                  className="relative pb-8 pl-6 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-cyan-500 bg-slate-950"
                  />
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-400/80">
                    {entry.period}
                  </p>
                  <h4 className="mt-1.5 text-base font-semibold text-white">
                    {entry.role}
                  </h4>
                  <p className="text-xs text-slate-500">{entry.place}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{entry.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* ── Kompetenz-Karten ─────────────────────────────────────── */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <Reveal
                key={item.title}
                delay={((i % 3) + 1) as 1 | 2 | 3}
                as="article"
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition-colors duration-300 hover:border-cyan-500/40"
              >
                <item.icon className="h-5 w-5 text-cyan-400" />
                <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
