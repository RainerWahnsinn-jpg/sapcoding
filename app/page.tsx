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
    title: "S/4 HANA Global Template – Rollout in 6 Ländern",
    description:
      "Rollout des Global Templates für die EPLAN-Tochtergesellschaften in USA, Tschechien, Slowakei, Österreich, Rumänien und Ungarn: EDI- und SD-Konzepte, Customizing, Programmierung, Adobe Forms, OData-Anbindung an Salesforce sowie Koordination der Projektmitarbeiter und Transportverwaltung.",
    tech: ["S/4 HANA", "EDI", "SD · MM · FI", "OData", "Adobe Forms"],
    span: 2,
  },
  {
    icon: Briefcase,
    title: "S/4 HANA Einführung EPLAN DE & CH",
    description:
      "Projektmitarbeit bei der S/4 HANA Einführung: EDI, Zoll & Außenhandel (AEB), Adobe Forms und SD – von der Konzeption bis zum Go-live.",
    tech: ["S/4 HANA", "AEB", "Zoll"],
    span: 1,
  },
  {
    icon: Link2,
    title: "EDI-Serialisierung zwischen Konzerngesellschaften",
    description:
      "Konzeption, Erstellung und Einführung einer Serialisierung für EDI-Schnittstellen zwischen internationalen Rittal-Gesellschaften.",
    tech: ["EDI", "IDoc", "SAP ERP"],
    span: 1,
  },
  {
    icon: Briefcase,
    title: "Brexit-Umstellung Zoll & Außenhandel",
    description:
      "Umstellung der Zoll- und Außenhandelsprozesse für Rittal Deutschland, England und Irland auf die neuen Brexit-Rahmenbedingungen – als Projektmitarbeiterin für SD und EDI im laufenden Produktivbetrieb.",
    tech: ["Zoll", "SD", "EDI", "AEB Exportkontrolle"],
    span: 2,
  },
  {
    icon: FileText,
    title: "Eigene Formularsteuerung",
    description:
      "Konzeption und Erstellung einer Formularsteuerung im IMG-Leitfaden für Adobe Forms und Smart Forms – im Einsatz bei mehreren Kunden.",
    tech: ["Adobe Forms", "Smart Forms", "IMG"],
    span: 1,
  },
  {
    icon: Code2,
    title: "IDoc Monitor & Auslieferungsmonitor",
    description:
      "Neuer IDoc-Monitor zur Verarbeitung fehlerhafter IDocs sowie ein Auslieferungsmonitor mit Verladeplanung – Konzeption und Umsetzung.",
    tech: ["IDoc", "ABAP OO", "ALV"],
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
              Ein Auszug aus über 15 Jahren SAP-Erfahrung – von internationalen
              S/4&nbsp;HANA Rollouts bis zu eigenentwickelten Monitoring-Werkzeugen.
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
