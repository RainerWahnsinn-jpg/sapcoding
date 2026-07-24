import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { SITE_URL } from "./lib/site";
import { CITIES } from "./lib/cities";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SAP Entwicklung & ABAP Expertin | Sabrina Knaup",
    template: "%s | Sabrina Knaup – SAP Development Expert",
  },
  description:
    "SAP-Entwicklung & Consulting: 15+ Jahre Erfahrung in ABAP, EDI-Schnittstellen, Adobe Forms sowie Zoll und Außenhandel. Beratung und Entwicklung für SD, MM, FI – remote und vor Ort.",
  keywords: [
    // SAP Kernkompetenzen
    "SAP Entwicklung",
    "ABAP Entwickler",
    "ABAP Programmierung",
    "SAP Freelancer",
    "SAP Berater",
    "SAP Consultant",
    "SAP Externe Unterstützung",
    // Technische Skills
    "ABAP OO",
    "Adobe Forms SAP",
    "Smart Forms SAP",
    "EDI Schnittstellen",
    "IDoc Entwicklung",
    "RFC Schnittstellen",
    "OData SAP",
    "BADI Implementierung",
    "BAPI Entwicklung",
    "SAP Formulare",
    // Module
    "SAP SD Entwicklung",
    "SAP MM Entwicklung",
    "SAP FI Entwicklung",
    "SAP Zoll Außenhandel",
    // Projekte & Migration
    "S/4 HANA Migration",
    "SAP S/4 HANA Entwicklung",
    "SAP Customizing",
    "SAP Enhancement",
    // Regional
    "SAP Entwickler Hessen",
    "SAP Freelancer Deutschland",
  ],
  authors: [{ name: "Sabrina Knaup" }],
  creator: "Sabrina Knaup",
  publisher: "Sabrina Knaup",
  category: "SAP Entwicklung & Beratung",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "Sabrina Knaup | SAP Development Expert",
    title: "SAP Entwicklung & ABAP Expertin | Sabrina Knaup",
    description:
      "SAP-Entwicklung & Consulting: 15+ Jahre Erfahrung in ABAP, EDI-Schnittstellen, Adobe Forms sowie Zoll und Außenhandel.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sabrina Knaup – SAP Development Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAP Entwicklung & ABAP Expertin | Sabrina Knaup",
    description:
      "SAP-Entwicklung & Consulting: 15+ Jahre Erfahrung in ABAP, EDI-Schnittstellen und Adobe Forms.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": `${SITE_URL}/#business`,
              name: "Sabrina Knaup | SAP Development Expert",
              alternateName: "SAP Entwicklerin – Sabrina Knaup",
              image: `${SITE_URL}/og-image.png`,
              logo: `${SITE_URL}/og-image.png`,
              description:
                "SAP-Entwicklung & Consulting mit 15+ Jahren Erfahrung. Spezialisiert auf ABAP, EDI-Schnittstellen, Adobe Forms, Zoll und Außenhandel sowie die Module SD, MM, FI.",
              url: SITE_URL,
              email: "Sabrina.Knaup@SAPCoding.de",
              telephone: "+49-160-98427523",
              founder: {
                "@type": "Person",
                name: "Sabrina Knaup",
                jobTitle: "SAP Development Expert · EDI & Zoll Consultant",
              },
              knowsAbout: [
                "SAP Entwicklung",
                "ABAP Programmierung",
                "ABAP OO",
                "Adobe Forms",
                "Smart Forms",
                "EDI Schnittstellen",
                "IDoc Entwicklung",
                "SAP SD",
                "SAP MM",
                "SAP FI",
                "S/4 HANA",
              ],
              areaServed: [
                ...CITIES.map((city) => ({ "@type": "City", name: city.name })),
                { "@type": "State", name: "Hessen" },
                { "@type": "State", name: "Nordrhein-Westfalen" },
                { "@type": "State", name: "Rheinland-Pfalz" },
                { "@type": "Country", name: "Deutschland" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "SAP Entwicklung & Beratung",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "ABAP Entwicklung",
                      description:
                        "Professionelle ABAP & ABAP OO Programmierung, Erweiterungen mit BADIs und BAPIs.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SAP Formulare",
                      description:
                        "Adobe Forms und Smart Forms Entwicklung für professionelle Geschäftsdokumente.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Schnittstellen & EDI",
                      description:
                        "EDI, RFC und OData Schnittstellen für nahtlose Systemintegration.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SAP Consulting",
                      description:
                        "Beratung für EDI, SD sowie Zoll und Außenhandel: Konzepte, Prozessoptimierung und Customizing.",
                    },
                  },
                ],
              },
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
                latitude: 50.6803,
                longitude: 8.3062,
              },
              priceRange: "$$",
              currenciesAccepted: "EUR",
              openingHours: "Mo-Fr 09:00-18:00",
              sameAs: [
                "https://www.linkedin.com/in/sabrina-knaup-60a348241/",
              ],
            }),
          }}
        />
        <Header />
        <div className="pt-16 flex-1">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
