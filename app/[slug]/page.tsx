import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MapPin, ArrowRight, Zap, Gauge, Bot } from "lucide-react";
import { CITIES, getCity } from "../lib/cities";
import ContactForm from "../components/ContactForm";

const BASE_URL = "https://www.constantin-felix.de";

/** Nur die definierten Städte-Slugs sind gültige Routen. */
export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((city) => ({ slug: `webdesign-${city.slug}` }));
}

function cityFromSlug(slug: string) {
  if (!slug.startsWith("webdesign-")) return undefined;
  return getCity(slug.replace("webdesign-", ""));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = cityFromSlug(slug);
  if (!city) return {};

  const title = `Webdesign ${city.name} | Webseite erstellen lassen`;
  const description = `Webdesigner ${city.inCity}: moderne, schnelle Webseiten, Web-Apps & KI-Lösungen für Handwerk und Mittelstand. ${city.intro} Jetzt kostenlose Erstberatung sichern.`;
  const url = `${BASE_URL}/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url,
      siteName: "Constantin-Felix Weib | Web & KI Agentur Siegen",
      title,
      description,
      images: [`${BASE_URL}/og-image.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/og-image.jpg`],
    },
  };
}

const benefits = [
  {
    icon: Gauge,
    title: "Blitzschnelle Ladezeiten",
    text: "Gebaut mit Next.js statt aufgeblähtem WordPress – für Top-Rankings bei Google und zufriedene Besucher.",
  },
  {
    icon: Zap,
    title: "Für Smartphones optimiert",
    text: "Mobile-first entwickelt: Ihre Seite überzeugt auf jedem Gerät und gewinnt Kunden aus der Region.",
  },
  {
    icon: Bot,
    title: "KI & Automatisierung",
    text: "Auf Wunsch mit intelligenten Features, die Routineaufgaben übernehmen und Ihrem Team Zeit sparen.",
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
    name: `Webdesign ${city.name} – Constantin-Felix Weib`,
    image: `${BASE_URL}/og-image.jpg`,
    description: `Webdesigner und Full-Stack Entwickler ${city.inCity}. Moderne Webseiten, Web-Apps und KI-Integrationen für Handwerk und Mittelstand.`,
    url: `${BASE_URL}/${slug}`,
    email: "Constantin.Weib@hotmail.com",
    telephone: "+49-176-43772184",
    areaServed: { "@type": "City", name: city.name },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hagener Str. 8",
      postalCode: "57234",
      addressLocality: "Wilnsdorf",
      addressRegion: "Nordrhein-Westfalen",
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
        name: `Webdesign ${city.name}`,
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
            Webdesign {city.name} –{" "}
            <span className="bg-linear-to-r from-violet-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Webseite erstellen lassen
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
              Kostenlose Erstberatung
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/#preise"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              Preise ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-white/10 bg-black/20">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Warum eine Webseite von mir für Unternehmen {city.inCity}?
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
            Leistungen für {city.name} und Umgebung
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Neue Unternehmens-Webseite (Next.js)",
              "Website-Relaunch & Modernisierung",
              "Performance- & Google-Optimierung (SEO)",
              "Interne Web-Apps & Workflow-Tools",
              "KI-Integration & Chatbots",
              "Prozessautomatisierung",
            ].map((item) => (
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
            Projektanfrage
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Webseite {city.inCity} anfragen
          </h2>
          <p className="mt-4 text-base leading-7 text-white/70">
            Erzählen Sie mir von Ihrem Vorhaben – ich melde mich zeitnah mit einem konkreten
            Vorschlag.
          </p>
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl sm:p-8">
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
