import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // Importujemy dedykowany komponent do skryptów
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.technik-serwisu.pl"),
  title: "Technik-Serwisu - Profesjonalny Serwis Elektroniki | Pyrzyce i okolice",
  description:
    "Technik-Serwisu: Serwis telefonów, laptopów, elektroniki i elektronarzędzi w Pyrzycach. Specjalistyczna diagnostyka płyt głównych, naprawy wysyłkowe i micro-soldering.",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Przemysław Młoczkowski" }],
  openGraph: {
    title: "Technik-Serwisu - Profesjonalny Serwis Elektroniki",
    description: "Serwis mobilny elektroniki w Pyrzycach. Naprawa wysyłkowa, darmowa diagnostyka.",
    url: "https://www.technik-serwisu.pl",
    siteName: "Technik Serwisu",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Technik Serwisu",
    image: "https://www.technik-serwisu.pl/og-image.png",
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
      <body className={inter.className}>
        <Navbar />
        <main id="start" className="pt-20">
          {children}
        </main>
        <Footer />

        {/* Google Analytics używając wbudowanego w Next.js komponentu Script */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-M6HGD2NL8J" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M6HGD2NL8J');
          `}
        </Script>

        {/* JSON-LD wstrzykiwany bezpiecznie jako skrypt */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
