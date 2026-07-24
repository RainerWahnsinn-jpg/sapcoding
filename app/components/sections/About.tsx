import Image from "next/image";
import { Code2, FileText, Link2, Briefcase } from "lucide-react";
import Reveal from "../Reveal";

const highlights = [
  {
    icon: Code2,
    title: "ABAP & ABAP OO",
    text: "Professionelle Programmierung, Erweiterungen mit BAdIs, BAPIs und kundenspezifische Entwicklungen.",
  },
  {
    icon: FileText,
    title: "Formulare",
    text: "Adobe Forms und Smart Forms für professionelle Geschäftsdokumente in SD, MM und FI.",
  },
  {
    icon: Link2,
    title: "Schnittstellen",
    text: "EDI-Anbindungen, IDoc-Entwicklung, RFC und OData für nahtlose Systemintegration.",
  },
  {
    icon: Briefcase,
    title: "Modul-Expertise",
    text: "Tiefgreifende Erfahrung in SD, MM, FI sowie Zoll und Außenhandel – seit 2008 im SAP-Umfeld.",
  },
];

/** Kennzahlen, die B2B-Entscheider sofort einordnen können. */
const stats = [
  { value: "15+", label: "Jahre SAP-Erfahrung" },
  { value: "10+", label: "S/4 HANA Projekte" },
  { value: "SD · MM · FI", label: "Modul-Fokus" },
  { value: "2008", label: "Freiberuflich seit" },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* ── Portrait-Card: rechteckig, angeschnitten, mit Stats ──── */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40">
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <Image
                  src="/Sabrina.jpg"
                  alt="Sabrina Knaup"
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover object-top"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent"
                />
              </div>

              {/* Kennzahlen direkt unter dem Foto */}
              <dl className="grid grid-cols-2 gap-px bg-slate-800">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-slate-900/60 px-5 py-4">
                    <dt className="text-lg font-semibold tracking-tight text-white">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-[11px] uppercase tracking-[0.14em] text-slate-500">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {/* ── Text + Kompetenz-Karten ──────────────────────────────── */}
          <div>
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                Über mich
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Sabrina Knaup
              </h2>
              <p className="mt-2 text-base font-medium text-cyan-400/90">
                SAP Development Expert · ABAP Consultant · Freiberuflich seit 2008
              </p>
            </Reveal>

            <Reveal delay={1}>
              <p className="mt-6 text-base leading-7 text-slate-400">
                Externe SAP-Expertin für die Themen, die intern liegenbleiben. Mit über
                15 Jahren Erfahrung in der SAP-Entwicklung übernehme ich komplexe
                Anforderungen – ob S/4 HANA Migration, EDI-Anbindungen oder individuelle
                Formularentwicklung. Pragmatisch, zuverlässig und lösungsorientiert.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
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
      </div>
    </section>
  );
}
