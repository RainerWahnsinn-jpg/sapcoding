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
  metadataBase: new URL("https://www.constantin-felix.de"),
  title: {
    default: "Webdesigner Siegen | Webseite erstellen lassen & KI-Lösungen",
    template: "%s | Constantin-Felix Weib – Web & KI Agentur Siegen",
  },
  description:
    "Webseite erstellen lassen in Siegen: Webdesigner & Full-Stack Entwickler für moderne Websites, Web-Apps & KI-Integrationen. Faire Preise für Handwerk & Mittelstand in Siegen-Wittgenstein und Südwestfalen. Jetzt kostenlose Erstberatung sichern.",
  keywords: [
    "Webdesigner Siegen",
    "Webseite erstellen lassen Siegen",
    "Homepage erstellen lassen Siegen",
    "Webseite kaufen Siegen",
    "Webdesign Siegen",
    "Website erstellen lassen Südwestfalen",
    "Webentwickler Siegen",
    "Webdesign Agentur Siegen-Wittgenstein",
    "Homepage Handwerker Siegen",
    "KI Agentur Siegen",
    "KI Integration Mittelstand",
    "Next.js Entwickler Siegen",
    "Softwareentwickler Siegen",
    "Webseite für Handwerksbetrieb",
    "Online-Marketing Siegen",
    "Prozessautomatisierung Siegen",
    "Webdesign Wilnsdorf",
    "Webdesign Kreuztal",
    "Webdesign Netphen",
  ],
  authors: [{ name: "Constantin-Felix Weib" }],
  creator: "Constantin-Felix Weib",
  publisher: "Constantin-Felix Weib",
  category: "Webentwicklung & KI",
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
    url: "https://www.constantin-felix.de",
    siteName: "Constantin-Felix Weib | Web & KI Agentur Siegen",
    title: "Webdesigner Siegen | Webseite erstellen lassen & KI-Lösungen",
    description:
      "Webseite erstellen lassen in Siegen: moderne Websites, Web-Apps & KI-Integrationen für Handwerk und Mittelstand in Südwestfalen. Jetzt kostenlose Erstberatung.",
    images: [
      {
        url: "https://constantin-felix.de/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Constantin-Felix Weib – Web & KI Agentur Siegen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesigner Siegen | Webseite erstellen lassen & KI-Lösungen",
    description:
      "Webseite erstellen lassen in Siegen: moderne Websites, Web-Apps & KI-Integrationen für Handwerk und Mittelstand in Südwestfalen.",
    images: ["https://constantin-felix.de/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.constantin-felix.de",
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
              "@id": "https://www.constantin-felix.de/#business",
              name: "Constantin-Felix Weib | Web & KI Agentur Siegen",
              alternateName: "Webdesigner Siegen – Constantin-Felix Weib",
              image: "https://www.constantin-felix.de/og-image.jpg",
              logo: "https://www.constantin-felix.de/og-image.jpg",
              description:
                "Webdesigner und Full-Stack Entwickler in Siegen. Ich erstelle moderne Webseiten, Web-Apps und maßgeschneiderte KI-Integrationen für Handwerk und Mittelstand in Siegen, Wilnsdorf und Südwestfalen.",
              url: "https://www.constantin-felix.de",
              email: "Constantin.Weib@hotmail.com",
              telephone: "+49-176-43772184",
              founder: {
                "@type": "Person",
                name: "Constantin-Felix Weib",
                jobTitle: "Full-Stack Developer & Wirtschaftsinformatiker (B.A.)",
                alumniOf: {
                  "@type": "CollegeOrUniversity",
                  name: "Technische Hochschule Mittelhessen",
                },
              },
              knowsAbout: [
                "Webdesign",
                "Webentwicklung",
                "Webseite erstellen lassen",
                "Homepage erstellen",
                "Next.js",
                "React",
                "Supabase",
                "KI-Integration",
                "Prozessautomatisierung",
                "B2B SaaS",
              ],
              areaServed: [
                { "@type": "City", name: "Siegen" },
                { "@type": "City", name: "Wilnsdorf" },
                { "@type": "City", name: "Kreuztal" },
                { "@type": "City", name: "Netphen" },
                { "@type": "City", name: "Freudenberg" },
                { "@type": "City", name: "Olpe" },
                { "@type": "AdministrativeArea", name: "Siegen-Wittgenstein" },
                { "@type": "AdministrativeArea", name: "Südwestfalen" },
                { "@type": "State", name: "Nordrhein-Westfalen" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Web & KI Leistungen",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Webseite erstellen lassen",
                      description:
                        "Moderne, schnelle und suchmaschinenoptimierte Webseiten mit Next.js für Handwerk und Mittelstand.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Web-App & interne Tools",
                      description:
                        "Individuelle Web-Apps und Workflow-Tools mit Supabase zur Digitalisierung interner Prozesse.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "KI-Integration & Automatisierung",
                      description:
                        "Maßgeschneiderte KI-Features und Automatisierungen, die Routineaufgaben übernehmen und Zeit sparen.",
                    },
                  },
                ],
              },
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
                latitude: 50.8189,
                longitude: 8.0989,
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
