import { Check, Code2, FileText, Link2, ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";

const tiers = [
  {
    icon: Code2,
    name: "ABAP Entwicklung",
    tagline:
      "Professionelle ABAP & ABAP OO Programmierung für Ihre individuellen SAP-Anforderungen.",
    includes: [
      "Kundenspezifische Reports & Programme",
      "Erweiterungen (BADIs, BAPIs, User Exits)",
      "Performance-Optimierung",
      "Code Reviews & Refactoring",
    ],
    price: "Auf Anfrage",
    priceNote: "Tagessatz oder projektbasiert",
    cta: "Anfrage senden",
    featured: false,
    accent: "cyan",
  },
  {
    icon: FileText,
    name: "Formulare & Outputs",
    tagline:
      "Adobe Forms und Smart Forms für professionelle Geschäftsdokumente in allen Modulen.",
    includes: [
      "Adobe Forms Entwicklung",
      "Smart Forms Erstellung",
      "Formular-Migration",
      "Mehrsprachige Dokumente",
    ],
    price: "Auf Anfrage",
    priceNote: "Tagessatz oder projektbasiert",
    cta: "Anfrage senden",
    featured: true,
    accent: "indigo",
  },
  {
    icon: Link2,
    name: "Schnittstellen & EDI",
    tagline:
      "Nahtlose Integration Ihrer Systeme durch EDI, IDoc, RFC und OData Schnittstellen.",
    includes: [
      "EDI-Anbindungen (EDIFACT, VDA, etc.)",
      "IDoc-Entwicklung & Monitoring",
      "RFC & OData Services",
      "Partnerprofile & Nachrichtensteuerung",
    ],
    price: "Auf Anfrage",
    priceNote: "Tagessatz oder projektbasiert",
    cta: "Anfrage senden",
    featured: false,
    accent: "violet",
  },
];

export default function Pricing() {
  return (
    <section id="leistungen" className="relative border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Leistungen
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Meine SAP-Entwicklungsleistungen
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Von der ABAP-Programmierung bis zur komplexen EDI-Anbindung – ich unterstütze Sie
              bei allen SAP-Entwicklungsthemen. Sprechen Sie mich an für ein individuelles Angebot.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {tiers.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              as="article"
              className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 backdrop-blur-xl transition-all duration-500 ease-out hover:md:-translate-y-2 ${
                tier.featured
                  ? "border border-transparent [background:linear-gradient(rgba(24,24,27,0.6),rgba(24,24,27,0.6))_padding-box,linear-gradient(135deg,rgba(99,102,241,0.6),rgba(56,189,248,0.5))_border-box]"
                  : "border border-white/5 bg-zinc-900/50 hover:md:border-white/20"
              }`}
            >
              {tier.featured && (
                <span className="absolute right-6 top-7 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                  Beliebt
                </span>
              )}

              <tier.icon
                className={`h-7 w-7 ${
                  tier.accent === "cyan"
                    ? "text-cyan-300"
                    : tier.accent === "indigo"
                      ? "text-indigo-300"
                      : "text-violet-300"
                }`}
              />
              <h3 className="mt-5 text-lg font-semibold text-white">{tier.name}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{tier.tagline}</p>

              <ul className="mt-6 flex flex-col gap-3">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-1 flex-col justify-end">
                <p className="text-2xl font-semibold tracking-tight text-white">{tier.price}</p>
                {tier.priceNote && (
                  <p className="mt-1 text-xs leading-5 text-white/50">{tier.priceNote}</p>
                )}
                <a
                  href="/#kontakt"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${
                    tier.featured
                      ? "bg-linear-to-r from-indigo-500 to-cyan-400 text-black shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:brightness-110"
                      : "border border-white/15 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                  }`}
                >
                  {tier.cta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-sm text-white/50">
            Sie haben ein konkretes SAP-Projekt? Kontaktieren Sie mich für ein unverbindliches
            Gespräch und ein maßgeschneidertes Angebot.
          </p>
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
                  "Professionelle ABAP & ABAP OO Programmierung: kundenspezifische Reports, Erweiterungen mit BADIs und BAPIs, Performance-Optimierung.",
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
