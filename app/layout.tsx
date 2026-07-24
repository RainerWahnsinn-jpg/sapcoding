import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToasterProvider from "./components/ToasterProvider";
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
  metadataBase: new URL("https://www.sapcoding.de"),
  title: {
    default: "SAP Entwicklung & ABAP Expertin | Sabrina Knaup",
    template: "%s | Sabrina Knaup – SAP Development Expert",
  },
  description:
    "Externe SAP-Expertin mit 15+ Jahren Erfahrung in ABAP, EDI-Schnittstellen, Adobe Forms und Modulen SD, MM, FI. Maßgeschneiderte SAP-Entwicklung, die Ihnen den Tag rettet.",
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
    url: "https://www.sapcoding.de",
    siteName: "Sabrina Knaup | SAP Development Expert",
    title: "SAP Entwicklung & ABAP Expertin | Sabrina Knaup",
    description:
      "Externe SAP-Expertin mit 15+ Jahren Erfahrung in ABAP, EDI-Schnittstellen und Adobe Forms. Maßgeschneiderte SAP-Entwicklung für Ihr Unternehmen.",
    images: [
      {
        url: "https://sapcoding.de/og-image.png",
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
      "Externe SAP-Expertin mit 15+ Jahren Erfahrung in ABAP, EDI-Schnittstellen und Adobe Forms.",
    images: ["https://sapcoding.de/og-image.png"],
  },
  alternates: {
    canonical: "https://www.sapcoding.de",
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
              "@id": "https://www.sapcoding.de/#business",
              name: "Sabrina Knaup | SAP Development Expert",
              alternateName: "SAP Entwicklerin – Sabrina Knaup",
              image: "https://www.sapcoding.de/og-image.png",
              logo: "https://www.sapcoding.de/og-image.png",
              description:
                "Externe SAP-Expertin mit 15+ Jahren Erfahrung. Spezialisiert auf ABAP, EDI-Schnittstellen, Adobe Forms und Module SD, MM, FI. Maßgeschneiderte SAP-Entwicklung für Ihr Unternehmen.",
              url: "https://www.sapcoding.de",
              email: "Sabrina.Knaup@SAPCoding.de",
              telephone: "+49-160-98427523",
              founder: {
                "@type": "Person",
                name: "Sabrina Knaup",
                jobTitle: "SAP Development Expert & ABAP Consultant",
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
                { "@type": "City", name: "Herborn" },
                { "@type": "State", name: "Hessen" },
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
                "https://www.linkedin.com/in/constantin-felix-weib-824b0116a/",
              ],
            }),
          }}
        />
        <ToasterProvider />
        <Header />
        <div className="pt-16 flex-1">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
