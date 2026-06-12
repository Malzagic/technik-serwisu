import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.technik-serwisu.pl"),
  title: "PMDEV - Profesjonalny Serwis Elektroniki | Pyrzyce i okolice",
  description:
    "PMDEV: Serwis telefonów, laptopów, wzmacniaczy i elektronarzędzi w Pyrzycach. Specjalistyczna diagnostyka płyt głównych, naprawy wysyłkowe i micro-soldering.",
  authors: [{ name: "Przemysław Młoczkowski" }],
  // Dodajemy Open Graph dla social mediów (ważne dla SEO)
  openGraph: {
    title: "PMDEV - Profesjonalny Serwis Elektroniki",
    description: "Serwis mobilny elektroniki w Pyrzycach. Naprawa wysyłkowa, darmowa diagnostyka.",
    url: "https://technik-serwisu.pl",
    siteName: "PMDEV Technik Serwisu",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PMDEV Technik Serwisu",
    image: "https://technik-serwisu.pl/og-image.png", // Pamiętaj o dodaniu obrazka do folderu public!
    telephone: "+48509820956",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pyrzyce",
      addressRegion: "Zachodniopomorskie",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.1311,
      longitude: 14.8683,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 53.1311, longitude: 14.8683 },
      geoRadius: "50000",
    },
  };

  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main id="start" className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
