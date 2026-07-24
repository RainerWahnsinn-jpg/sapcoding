/**
 * Zentrale Konfiguration für regionale SAP-Entwicklung Landingpages.
 * Jede Stadt/Region erzeugt beim Build eine statische, SEO-optimierte Seite
 * unter /sap-entwicklung-<slug> mit eigenem LocalBusiness-Schema.
 */
export type City = {
  /** URL-Slug ohne Präfix, z. B. "frankfurt" -> /sap-entwicklung-frankfurt */
  slug: string;
  /** Stadtname im Nominativ, z. B. "Frankfurt" */
  name: string;
  /** Präposition + Stadt für Fließtext, z. B. "in Frankfurt" */
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
    slug: "frankfurt",
    name: "Frankfurt",
    inCity: "in Frankfurt",
    intro:
      "Erfahrene SAP-Entwicklerin für Unternehmen in Frankfurt am Main: ABAP-Programmierung, S/4 HANA Transformation und EDI-Schnittstellen für Industrie und Finanzsektor.",
    region: "60311 Frankfurt am Main, Hessen",
    geo: { lat: 50.1109, lng: 8.6821 },
  },
  {
    slug: "wiesbaden",
    name: "Wiesbaden",
    inCity: "in Wiesbaden",
    intro:
      "SAP-Entwicklung für Unternehmen in Wiesbaden: Von ABAP über Adobe Forms bis zur kompletten S/4 HANA Migration – professionell und zuverlässig.",
    region: "65183 Wiesbaden, Hessen",
    geo: { lat: 50.0782, lng: 8.2398 },
  },
  {
    slug: "herborn",
    name: "Herborn",
    inCity: "in Herborn",
    intro:
      "SAP-Entwicklung direkt vor Ort: Als ansässige Entwicklerin in Herborn biete ich kurze Wege und persönliche Betreuung für Ihr SAP-Projekt.",
    region: "35745 Herborn, Hessen",
    highlight: "Mein Standort: Direkt in Herborn ansässig.",
    geo: { lat: 50.6803, lng: 8.3062 },
  },
  {
    slug: "giessen",
    name: "Gießen",
    inCity: "in Gießen",
    intro:
      "SAP-Beratung und Entwicklung für den Raum Gießen: ABAP, Formulare und Schnittstellen für Mittelstand und Industrie in Mittelhessen.",
    region: "35390 Gießen, Hessen",
    geo: { lat: 50.5840, lng: 8.6784 },
  },
  {
    slug: "marburg",
    name: "Marburg",
    inCity: "in Marburg",
    intro:
      "Professionelle SAP-Entwicklung für Unternehmen in Marburg: Von der Schnittstellenentwicklung bis zur kompletten S/4 HANA Transformation.",
    region: "35037 Marburg, Hessen",
    geo: { lat: 50.8021, lng: 8.7668 },
  },
  {
    slug: "limburg",
    name: "Limburg",
    inCity: "in Limburg",
    intro:
      "SAP-Expertise für Limburg an der Lahn: ABAP-Entwicklung, EDI-Anbindungen und Formularentwicklung für regionale Unternehmen.",
    region: "65549 Limburg, Hessen",
    geo: { lat: 50.3854, lng: 8.0503 },
  },
  {
    slug: "wetzlar",
    name: "Wetzlar",
    inCity: "in Wetzlar",
    intro:
      "SAP-Entwicklung für Wetzlar und Umgebung: Spezialisiert auf ABAP, Adobe Forms und Schnittstellenentwicklung für Industrie und Mittelstand.",
    region: "35576 Wetzlar, Hessen",
    geo: { lat: 50.5549, lng: 8.5046 },
  },
  {
    slug: "siegen",
    name: "Siegen",
    inCity: "in Siegen",
    intro:
      "SAP-Entwicklung für Siegen-Wittgenstein: ABAP-Programmierung, S/4 HANA Consulting und EDI-Lösungen für den industriestarken Mittelstand.",
    region: "57072 Siegen, NRW",
    geo: { lat: 50.8748, lng: 8.0243 },
  },
  {
    slug: "dillenburg",
    name: "Dillenburg",
    inCity: "in Dillenburg",
    intro:
      "SAP-Beratung und Entwicklung für Dillenburg: Professionelle ABAP-Lösungen und S/4 HANA Transformationen in direkter Nachbarschaft.",
    region: "35683 Dillenburg, Hessen",
    geo: { lat: 50.7417, lng: 8.2872 },
  },
  {
    slug: "koeln",
    name: "Köln",
    inCity: "in Köln",
    intro:
      "SAP-Entwicklung für Köln und das Rheinland: Erfahrene ABAP-Entwicklerin für komplexe Schnittstellen, Formulare und S/4 HANA Projekte.",
    region: "50667 Köln, NRW",
    geo: { lat: 50.9375, lng: 6.9603 },
  },
  {
    slug: "bonn",
    name: "Bonn",
    inCity: "in Bonn",
    intro:
      "SAP-Expertise für Bonn und Umgebung: Von der EDI-Anbindung bis zur S/4 HANA Migration – professionelle SAP-Entwicklung für Ihren Erfolg.",
    region: "53113 Bonn, NRW",
    geo: { lat: 50.7374, lng: 7.0982 },
  },
  {
    slug: "koblenz",
    name: "Koblenz",
    inCity: "in Koblenz",
    intro:
      "SAP-Entwicklung für Koblenz und Rheinland-Pfalz: ABAP, Formulare und Schnittstellen für Industrie, Handel und Logistik.",
    region: "56068 Koblenz, Rheinland-Pfalz",
    geo: { lat: 50.3569, lng: 7.5890 },
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((city) => city.slug === slug);
}
