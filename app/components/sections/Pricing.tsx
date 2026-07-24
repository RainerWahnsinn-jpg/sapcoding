import { Check, Code2, FileText, Link2, ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";

/**
 * Leistungen – bewusst KEIN Pricing-/Tarif-Layout.
 * Statt Preisen und "Beliebt"-Badges: fachliche Tiefe über Tech-Badges.
 */
const services = [
  {
    icon: Code2,
    name: "ABAP Entwicklung",
    tagline:
      "Professionelle ABAP & ABAP OO Programmierung für Ihre individuellen SAP-Anforderungen.",
    includes: [
      "Kundenspezifische Reports & Programme",
      "Erweiterungen (BAdIs, BAPIs, User Exits)",
      "Performance-Optimierung",
      "Code Reviews & Refactoring",
    ],
    tech: ["ABAP OO", "BAdI", "BAPI", "User Exit", "CDS Views"],
  },
  {
    icon: FileText,
    name: "Formulare & Outputs",
    tagline:
      "Adobe Forms und Smart Forms für professionelle Geschäftsdokumente in allen Modulen.",
    includes: [
      "Adobe Forms Entwicklung",
      "Smart Forms Erstellung",
      "Formular-Migration nach S/4",
      "Mehrsprachige Dokumente",
    ],
    tech: ["Adobe Forms", "Smart Forms", "SAPscript", "BRF+", "Output Mgmt"],
  },
  {
    icon: Link2,
    name: "Schnittstellen & EDI",
    tagline:
      "Nahtlose Integration Ihrer Systeme durch EDI, IDoc, RFC und OData Schnittstellen.",
    includes: [
      "EDI-Anbindungen (EDIFACT, VDA)",
      "IDoc-Entwicklung & Monitoring",
      "RFC & OData Services",
      "Partnerprofile & Nachrichtensteuerung",
    ],
    tech: ["IDoc", "EDIFACT", "OData", "RFC", "Proxy"],
  },
];

export default function Pricing() {
  return (
    <section id="leistungen" className="relative border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Leistungen
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Meine SAP-Entwicklungsleistungen
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Von der ABAP-Programmierung bis zur komplexen EDI-Anbindung – ich unterstütze Sie
              bei allen SAP-Entwicklungsthemen. Abrechnung nach Tagessatz oder Festpreis,
              je nach Projektzuschnitt.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {services.map((service, i) => (
            <Reveal
              key={service.name}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              as="article"
              className="group flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-7 transition-colors duration-300 hover:border-cyan-500/40"
            >
              <service.icon className="h-6 w-6 text-cyan-400" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold text-white">{service.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{service.tagline}</p>

              <ul className="mt-6 flex flex-col gap-3">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tech-Badges: signalisieren technische Tiefe statt Tarif-Umfang */}
              <div className="mt-auto pt-7">
                <div className="flex flex-wrap gap-1.5 border-t border-slate-800 pt-5">
                  {service.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-slate-800 bg-slate-800/50 px-2 py-1 font-mono text-[10px] tracking-wide text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col items-center gap-5 rounded-xl border border-slate-800 bg-slate-900/40 px-8 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              Sie haben ein konkretes SAP-Projekt oder benötigen kurzfristig
              Entwicklungskapazität? Lassen Sie uns unverbindlich über den Zuschnitt sprechen.
            </p>
            <a
              href="/#kontakt"
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
            >
              Anfrage senden
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: "SAP Entwicklungsleistungen – Sabrina Knaup",
            itemListElement: [
              {
                "@type": "Offer",
                name: "ABAP Entwicklung",
                description:
                  "Professionelle ABAP & ABAP OO Programmierung: kundenspezifische Reports, Erweiterungen mit BAdIs und BAPIs, Performance-Optimierung.",
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                name: "Formulare & Outputs",
                description:
                  "Adobe Forms und Smart Forms Entwicklung für professionelle Geschäftsdokumente in SD, MM, FI und weiteren Modulen.",
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                name: "Schnittstellen & EDI",
                description:
                  "EDI-Anbindungen, IDoc-Entwicklung, RFC und OData Services für nahtlose Systemintegration.",
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
              },
            ],
          }),
        }}
      />
    </section>
  );
}
