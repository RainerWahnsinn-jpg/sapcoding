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
  title: "Webentwicklung & KI Agentur in Siegen | Constantin Weib",
  description:
    "Maßgeschneiderte Webseiten, smarte Apps und KI-Integrationen für Unternehmen im Raum Siegen und Südwestfalen. Mehr Umsatz durch performante Software.",
  keywords: [
    "Webdesign Siegen",
    "Webagentur Siegen",
    "KI Agentur Südwestfalen",
    "Webentwickler Siegen",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Constantin Weib - Web & KI Agentur",
              areaServed: "Siegen",
              url: "https://example.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Siegen",
                addressRegion: "NRW",
                addressCountry: "DE",
              },
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
