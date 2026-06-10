import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Constantin-Felix Weib | Webentwicklung & KI-Automatisierung Siegen",
  description:
    "Maßgeschneiderte Webentwicklung und KI-Automatisierung für den Mittelstand in Siegen und Siegen-Wittgenstein. Mehr Leads, weniger Aufwand – schnell umgesetzt.",
  keywords: [
    "Webentwicklung Siegen",
    "Webagentur Siegen",
    "KI-Automatisierung Siegen",
    "KI Agentur Südwestfalen",
    "Webentwickler Siegen-Wittgenstein",
    "Mittelstand Siegen digitalisieren",
    "Next.js Agentur NRW",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.constantin-felix.de",
    siteName: "Constantin-Felix Weib – Web & KI Agentur Siegen",
    title: "Constantin-Felix Weib | Webentwicklung & KI-Automatisierung Siegen",
    description:
      "Maßgeschneiderte Webentwicklung und KI-Automatisierung für den Mittelstand im Raum Siegen-Wittgenstein.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Constantin-Felix Weib | Webentwicklung & KI-Automatisierung Siegen",
    description:
      "Maßgeschneiderte Webentwicklung und KI-Automatisierung für den Mittelstand im Raum Siegen-Wittgenstein.",
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
              "@type": "LocalBusiness",
              name: "Constantin-Felix Weib – Web & KI Agentur Siegen",
              description:
                "Maßgeschneiderte Webentwicklung und KI-Automatisierung für Unternehmen im Raum Siegen-Wittgenstein.",
              url: "https://www.constantin-felix.de",
              email: "Constantin.Weib@hotmail.com",
              areaServed: [
                { "@type": "City", name: "Siegen" },
                { "@type": "AdministrativeArea", name: "Siegen-Wittgenstein" },
                { "@type": "State", name: "Nordrhein-Westfalen" },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Hagener Str. 8",
                addressLocality: "Wilnsdorf",
                postalCode: "57234",
                addressRegion: "Nordrhein-Westfalen",
                addressCountry: "DE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 50.8228,
                longitude: 8.0762,
              },
              priceRange: "€€",
              currenciesAccepted: "EUR",
              openingHours: "Mo-Fr 09:00-18:00",
              sameAs: [],
            }),
          }}
        />
        <ToasterProvider />
        <Header />
        <div className="pt-16 flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
