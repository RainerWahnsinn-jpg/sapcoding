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
  metadataBase: new URL("https://www.constantin-felix.de"),
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
              "@id": "https://www.constantin-felix.de/#business",
              name: "Constantin-Felix Weib | Web & KI Agentur",
              image: "https://www.constantin-felix.de/og-image.jpg",
              description:
                "Professionelle Full-Stack Webentwicklung mit Next.js, Supabase und maßgeschneiderten KI-Integrationen für den Mittelstand in Siegen, Wilnsdorf und Südwestfalen.",
              url: "https://www.constantin-felix.de",
              email: "Constantin.Weib@hotmail.com",
              founder: {
                "@type": "Person",
                name: "Constantin-Felix Weib",
                jobTitle: "Full-Stack Developer & Wirtschaftsinformatiker (B.Sc.)",
              },
              knowsAbout: [
                "Webentwicklung",
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
                { "@type": "AdministrativeArea", name: "Siegen-Wittgenstein" },
                { "@type": "AdministrativeArea", name: "Südwestfalen" },
                { "@type": "State", name: "Nordrhein-Westfalen" },
              ],
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
