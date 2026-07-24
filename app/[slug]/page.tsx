import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MapPin, ArrowRight, Code2, FileText, Link2 } from "lucide-react";
import { CITIES, getCity } from "../lib/cities";
import ContactForm from "../components/ContactForm";

const BASE_URL = "https://www.sapcoding.de";

/** Nur die definierten Städte-Slugs sind gültige Routen. */
export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((city) => ({ slug: `sap-entwicklung-${city.slug}` }));
}

function cityFromSlug(slug: string) {
  if (!slug.startsWith("sap-entwicklung-")) return undefined;
  return getCity(slug.replace("sap-entwicklung-", ""));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = cityFromSlug(slug);
  if (!city) return {};

  const title = `SAP Entwicklung ${city.name} | ABAP Consultant & S/4 HANA`;
  const description = `SAP Entwicklerin ${city.inCity}: ABAP Programmierung, S/4 HANA Transformation, EDI-Schnittstellen und Adobe Forms. ${city.intro} Jetzt Kontakt aufnehmen.`;
  const url = `${BASE_URL}/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url,
      siteName: "Sabrina Knaup | SAP Development Expert",
      title,
      description,
      images: [`${BASE_URL}/og-image.png`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}

const benefits = [
  {
    icon: Code2,
    title: "ABAP & S/4 HANA Expertise",
    text: "15+ Jahre Erfahrung in ABAP-Entwicklung und S/4 HANA Transformationsprojekten – von der Migration bis zur Neuentwicklung.",
  },
  {
    icon: FileText,
    title: "Formulare & Outputs",
    text: "Adobe Forms und Smart Forms für professionelle Geschäftsdokumente in SD, MM, FI und weiteren Modulen.",
  },
  {
    icon: Link2,
    title: "Schnittstellen & EDI",
    text: "Nahtlose Systemintegration durch EDI-Anbindungen, IDoc-Entwicklung und RFC/OData Services.",
  },
];

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = cityFromSlug(slug);
  if (!city) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/${slug}#business`,
    name: `SAP Entwicklung ${city.name} – Sabrina Knaup`,
    image: `${BASE_URL}/og-image.png`,
    description: `SAP Entwicklerin und ABAP Consultant ${city.inCity}. Spezialisiert auf S/4 HANA Transformation, EDI-Schnittstellen und Adobe Forms.`,
    url: `${BASE_URL}/${slug}`,
    email: "Sabrina.Knaup@SAPCoding.de",
    telephone: "+49-160-98427523",
    areaServed: { "@type": "City", name: city.name },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Elsterweg 2",
      postalCode: "35745",
      addressLocality: "Herborn",
      addressRegion: "Hessen",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.geo.lat,
      longitude: city.geo.lng,
    },
    priceRange: "$$",
    currenciesAccepted: "EUR",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: `SAP Entwicklung ${city.name}`,
        item: `${BASE_URL}/${slug}`,
      },
    ],
  };

  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-black">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.18),rgba(0,0,0,0))]"
        />
        <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-28">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.3em] text-white/60 backdrop-blur-md">
            <MapPin className="h-3.5 w-3.5 text-cyan-300" />
            {city.region}
          </p>
          <h1 className="mt-8 text-4xl font-semibold leading-[1.08] tracking-tighter text-white md:text-6xl">
            SAP Entwicklung {city.name} –{" "}
            <span className="bg-linear-to-r from-violet-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              ABAP & S/4 HANA Expertin
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">{city.intro}</p>
          {city.highlight && (
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-200/90">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              {city.highlight}
            </p>
          )}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-indigo-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(59,130,246,0.4)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
            >
              Kontakt aufnehmen
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/#leistungen"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-white/10 bg-black/20">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            SAP-Entwicklung für Unternehmen {city.inCity}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((b) => (
              <article
                key={b.title}
                className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6 backdrop-blur-xl"
              >
                <b.icon className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-5 text-lg font-semibold text-white">{b.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen kurz */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            SAP-Leistungen für {city.name} und Umgebung
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {([
              "ABAP & ABAP OO Entwicklung",
              "S/4 HANA Transformation & Migration",
              "Adobe Forms & Smart Forms",
              "EDI-Schnittstellen (EDIFACT, VDA)",
              "IDoc-Entwicklung & Monitoring",
              "RFC & OData Services",
              "BADIs, BAPIs & Erweiterungen",
              "Zoll & Außenhandel (SD, MM, FI)",
            ]).map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/5 bg-zinc-900/40 px-4 py-3 text-sm leading-6 text-white/70"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="scroll-mt-24 bg-black/20">
        <div className="mx-auto max-w-3xl px-6 py-24 sm:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
            Kontakt aufnehmen
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            SAP-Projekt {city.inCity}? Sprechen Sie mich an.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/70">
            Sie suchen eine erfahrene SAP-Entwicklerin für Ihr Projekt {city.inCity}? 
            Beschreiben Sie mir kurz Ihr Vorhaben und ich melde mich zeitnah bei Ihnen.
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}
