import { Code2, FileText, Link2, Briefcase, Mail, Phone, MapPin } from "lucide-react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import ContactForm from "./components/ContactForm";

/**
 * Projekt-Highlights im Bento-Grid.
 * `span` steuert die Breite: 2 = doppelt so breit (Leuchtturm-Projekte).
 */
const projects = [
  {
    icon: Code2,
    title: "S/4 HANA Rollout – Global Template",
    description:
      "Migration und Anpassung der kompletten ABAP-Entwicklungslandschaft für S/4 HANA: Custom Code Analyse, Remediation, Formularmigration und Neuaufbau der Schnittstellen für ein internationales Rollout-Template.",
    tech: ["S/4 HANA", "Custom Code", "CDS Views", "Migration"],
    span: 2,
  },
  {
    icon: Link2,
    title: "EDI-Anbindungen",
    description:
      "Komplette EDI-Landschaften mit EDIFACT, VDA und kundenspezifischen Formaten für internationale Lieferketten.",
    tech: ["EDIFACT", "VDA", "IDoc"],
    span: 1,
  },
  {
    icon: FileText,
    title: "IDoc Monitor",
    description:
      "Monitoring-Tool zur Überwachung und Fehleranalyse von Nachrichtenflüssen inklusive automatisiertem Reprocessing.",
    tech: ["IDoc", "ALV", "Batch"],
    span: 1,
  },
  {
    icon: Briefcase,
    title: "Brexit-Umstellung Zoll & Außenhandel",
    description:
      "Anpassung sämtlicher Zoll- und Außenhandelsprozesse an die neuen Rahmenbedingungen: Dokumentenlogik, Behördenschnittstellen und Präferenzabwicklung im Produktivbetrieb.",
    tech: ["GTS", "Zoll", "SD", "MM"],
    span: 2,
  },
  {
    icon: FileText,
    title: "Adobe Forms Suite",
    description:
      "Neugestaltung der Formularlandschaft mit Adobe Forms für SD, MM und FI inklusive Mehrsprachigkeit.",
    tech: ["Adobe Forms", "Output Mgmt"],
    span: 1,
  },
  {
    icon: Code2,
    title: "Custom ABAP Solutions",
    description:
      "Individuelle Entwicklungen für spezifische Geschäftsprozesse – von Reports bis zu komplexen Erweiterungen.",
    tech: ["ABAP OO", "BAdI", "BAPI"],
    span: 1,
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-slate-950 text-slate-50">
      <Hero />
      <About />
      <Pricing />

      {/* ── Projekt-Highlights: Bento-Grid ───────────────────────────── */}
      <section id="projekte" className="relative border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Projekterfahrung
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ausgewählte Projekt-Highlights
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Ein Auszug aus über 15 Jahren SAP-Entwicklungserfahrung bei namhaften Unternehmen.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`flex flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition-colors duration-300 hover:border-cyan-500/40 ${
                  project.span === 2 ? "lg:col-span-2" : ""
                }`}
              >
                <project.icon className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-slate-800 bg-slate-800/50 px-2 py-1 font-mono text-[10px] tracking-wide text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* ── Kontakt: Formular jetzt als eigene Section (nicht mehr im Hero) ── */}
      <section
        id="kontakt"
        className="relative scroll-mt-20 border-t border-slate-800 bg-slate-900/30"
      >
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* Kontext + direkte Kontaktwege */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                Kontakt
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Erzählen Sie mir von Ihrem SAP-Projekt.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-400">
                Ein kurzes Gespräch reicht, um Anforderungen, Aufwand und Zeitrahmen
                einzuschätzen. Antwort in der Regel innerhalb eines Werktags.
              </p>

              <dl className="mt-10 flex flex-col gap-5 border-t border-slate-800 pt-8">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.14em] text-slate-500">
                      E-Mail
                    </dt>
                    <dd className="mt-1 text-sm text-slate-300">
                      <a
                        href="mailto:Sabrina.Knaup@SAPCoding.de"
                        className="transition hover:text-cyan-400"
                      >
                        Sabrina.Knaup@SAPCoding.de
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.14em] text-slate-500">
                      Telefon
                    </dt>
                    <dd className="mt-1 text-sm text-slate-300">
                      <a href="tel:+4916098427523" className="transition hover:text-cyan-400">
                        +49 160 98427523
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.14em] text-slate-500">
                      Standort
                    </dt>
                    <dd className="mt-1 text-sm text-slate-300">
                      35745 Herborn · deutschlandweit remote
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Formular */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-9">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
