// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PMDEV - Profesjonalny Serwis Elektroniki | Pyrzyce i okolice",
  description:
    "PMDEV: Serwis telefonów, laptopów, wzmacniaczy i elektronarzędzi w Pyrzycach. Specjalistyczna diagnostyka płyt głównych i micro-soldering.",
  keywords: [
    "serwis elektroniki Pyrzyce",
    "naprawa laptopów Pyrzyce",
    "naprawa elektronarzędzi",
    "serwis wzmacniaczy",
    "PMDEV",
  ],
  authors: [{ name: "Przemysław Młoczkowski" }],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PMDEV Technik Serwisu",
  description: "Profesjonalna naprawa elektroniki użytkowej i specjalistycznej.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pyrzyce",
    addressRegion: "ZP",
    addressCountry: "PL",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 53.1311, longitude: 14.8683 },
    geoRadius: "50000",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className="scroll-smooth">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <head>
        {/* Injecting JSON-LD correctly as a structured data script */}
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={inter.className}>
        <Navbar />
        {/* We keep the main container here; children (page.tsx) will inject its content */}
        <main id="start" className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
