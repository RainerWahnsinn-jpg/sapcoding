import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Constantin-Felix Weib | Web & KI Agentur Siegen",
  description:
    "High-End Webentwicklung mit Next.js, Supabase & maßgeschneiderten KI-Integrationen für den Mittelstand in Siegen und Südwestfalen. Jetzt digitale Infrastruktur aufbauen.",
  keywords: [
    "Webdesign Siegen",
    "KI Agentur Südwestfalen",
    "Next.js Entwickler",
    "Webseiten bauen Nebengewerbe",
    "Softwareentwickler Siegen",
    "KI Builder",
    "Automatisierung Mittelstand",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.constantin-felix.de",
    siteName: "Constantin-Felix Weib | Web & KI Agentur",
    title: "Constantin-Felix Weib | Web & KI Agentur Siegen",
    description:
      "High-End Webentwicklung mit Next.js, Supabase & maßgeschneiderten KI-Integrationen für den Mittelstand in Siegen und Südwestfalen.",
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
    title: "Constantin-Felix Weib | Web & KI Agentur Siegen",
    description:
      "High-End Webentwicklung mit Next.js, Supabase & maßgeschneiderten KI-Integrationen für den Mittelstand in Siegen und Südwestfalen.",
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
              name: "Constantin-Felix Weib | Web & KI Agentur",
              image: "https://constantin-felix.de/og-image.jpg",
              description:
                "Professionelle Full-Stack Webentwicklung und KI-Integrationen für Unternehmen in Siegen und Umgebung.",
              url: "https://constantin-felix.de",
              email: "Constantin.Weib@hotmail.com",
              telephone: "",
              areaServed: [
                { "@type": "City", name: "Siegen" },
                { "@type": "AdministrativeArea", name: "Siegen-Wittgenstein" },
                { "@type": "AdministrativeArea", name: "Südwestfalen" },
                { "@type": "State", name: "Nordrhein-Westfalen" },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Siegen",
                addressRegion: "Südwestfalen",
                addressCountry: "DE",
              },
              priceRange: "$$",
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
        <Analytics />
      </body>
    </html>
  );
}
