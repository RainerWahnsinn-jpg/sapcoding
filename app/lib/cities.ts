/**
 * Zentrale Konfiguration für lokale Webdesign-Landingpages.
 * Jede Stadt erzeugt beim Build eine statische, SEO-optimierte Seite
 * unter /webdesign-<slug> mit eigenem LocalBusiness-Schema.
 */
export type City = {
  /** URL-Slug ohne Präfix, z. B. "kreuztal" -> /webdesign-kreuztal */
  slug: string;
  /** Stadtname im Nominativ, z. B. "Kreuztal" */
  name: string;
  /** Präposition + Stadt für Fließtext, z. B. "in Kreuztal" */
  inCity: string;
  /** Kurzer, ortsbezogener Intro-Satz */
  intro: string;
  /** Postleitzahl-Region für Kontext */
  region: string;
  /** Optionaler Hinweis (z. B. Heimspiel) */
  highlight?: string;
  /** Geokoordinaten für LocalBusiness-Schema */
  geo: { lat: number; lng: number };
};

export const CITIES: City[] = [
  {
    slug: "kreuztal",
    name: "Kreuztal",
    inCity: "in Kreuztal",
    intro:
      "Ihr Partner für modernes Webdesign in Kreuztal: schnelle, mobiloptimierte Webseiten, die Handwerk und Mittelstand im Siegerland sichtbar machen.",
    region: "57223 Kreuztal, Siegen-Wittgenstein",
    geo: { lat: 50.9636, lng: 7.9889 },
  },
  {
    slug: "netphen",
    name: "Netphen",
    inCity: "in Netphen",
    intro:
      "Professionelle Webseiten für Unternehmen in Netphen – individuell gestaltet, blitzschnell und auf lokale Kundengewinnung ausgelegt.",
    region: "57250 Netphen, Siegen-Wittgenstein",
    geo: { lat: 50.9139, lng: 8.1006 },
  },
  {
    slug: "wilnsdorf",
    name: "Wilnsdorf",
    inCity: "in Wilnsdorf",
    intro:
      "Webdesign aus Wilnsdorf – direkt vor Ort. Als ansässiger Entwickler baue ich moderne Webseiten und KI-Lösungen für Betriebe in der Region.",
    region: "57234 Wilnsdorf, Siegen-Wittgenstein",
    highlight: "Heimspiel: Mein Standort ist in Wilnsdorf.",
    geo: { lat: 50.8189, lng: 8.0989 },
  },
  {
    slug: "olpe",
    name: "Olpe",
    inCity: "in Olpe",
    intro:
      "Moderne Webentwicklung für den Kreis Olpe: performante Next.js-Webseiten und smarte Automatisierung für Unternehmen im Sauerland.",
    region: "57462 Olpe, Kreis Olpe",
    geo: { lat: 51.0281, lng: 7.8511 },
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
