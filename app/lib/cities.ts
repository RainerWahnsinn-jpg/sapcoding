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
  {
    slug: "freudenberg",
    name: "Freudenberg",
    inCity: "in Freudenberg",
    intro:
      "Tradition trifft digitale Sichtbarkeit: Für Handwerk und Mittelstand in Freudenberg baue ich moderne Webseiten, die den Charme der Altstadt mit erstklassiger Google-Präsenz verbinden.",
    region: "57258 Freudenberg, Siegen-Wittgenstein",
    geo: { lat: 50.8969, lng: 7.8736 },
  },
  {
    slug: "neunkirchen",
    name: "Neunkirchen",
    inCity: "in Neunkirchen",
    intro:
      "Professionelles Webdesign für Betriebe in Neunkirchen im Siegerland – schnelle, mobiloptimierte Webseiten, die neue Kunden aus der Region bringen.",
    region: "57290 Neunkirchen, Siegen-Wittgenstein",
    geo: { lat: 50.7994, lng: 7.9906 },
  },
  {
    slug: "betzdorf",
    name: "Betzdorf",
    inCity: "in Betzdorf",
    intro:
      "Webentwicklung für Unternehmen in Betzdorf und dem Kreis Altenkirchen: moderne Webseiten und Automatisierungslösungen für den Mittelstand in Rheinland-Pfalz.",
    region: "57518 Betzdorf, Rheinland-Pfalz",
    geo: { lat: 50.7883, lng: 7.8722 },
  },
  {
    slug: "hachenburg",
    name: "Hachenburg",
    inCity: "in Hachenburg",
    intro:
      "Moderne Webseiten für den Westerwald: Für Handwerk und Mittelstand in Hachenburg entwickle ich schnelle, suchmaschinenoptimierte Web-Auftritte.",
    region: "57627 Hachenburg, Rheinland-Pfalz",
    geo: { lat: 50.6606, lng: 7.8231 },
  },
  {
    slug: "haiger",
    name: "Haiger",
    inCity: "in Haiger",
    intro:
      "Für die Industrie- und Metallregion rund um Haiger: leistungsstarke Web-Apps und B2B-Plattformen, die Schluss mit Excel-Chaos machen – plus schnelle Firmen-Webseiten.",
    region: "35708 Haiger, Hessen",
    geo: { lat: 50.7419, lng: 8.2064 },
  },
  {
    slug: "herborn",
    name: "Herborn",
    inCity: "in Herborn",
    intro:
      "Webdesign und Workflow-Tools für Herborn und das Lahn-Dill-Gebiet: digitale Lösungen für die zahlreichen Industrie- und Handwerksbetriebe der Region.",
    region: "35745 Herborn, Hessen",
    geo: { lat: 50.6822, lng: 8.3072 },
  },
  {
    slug: "dillenburg",
    name: "Dillenburg",
    inCity: "in Dillenburg",
    intro:
      "Für die Industriebetriebe rund um Dillenburg: individuelle B2B-Plattformen, interne Workflow-Tools gegen Zettelwirtschaft und moderne, schnelle Webseiten.",
    region: "35683 Dillenburg, Hessen",
    geo: { lat: 50.7381, lng: 8.2872 },
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
