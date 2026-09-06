// app/layout.tsx
import type { Metadata } from "next";
import { GeoProvider } from "@/app/context/GeoContext";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.technik-serwisu.pl"),
  title: "Outsourcing IT, Budowa Sieci & Serwis B2B/B2C Stargard, Szczecin | Technik-Serwisu",
  description:
    "Kompleksowa obsługa IT dla firm oraz mobilny serwis sprzętu z dojazdem (Stargard, Szczecin i okolice do 100km). Projektowanie sieci LAN/WiFi, outsourcing IT, migracje danych, obsługa flotowa oraz serwis komputerów i smartfonów.",
  keywords: [
    "outsourcing IT Stargard",
    "outsourcing IT Szczecin",
    "budowa sieci komputerowych Stargard",
    "tworzenie stron internetowych",
    "montaż sieci LAN WiFi Szczecin",
    "obsługa IT firm Stargard",
    "mobilny serwis komputerowy Szczecin",
    "serwis laptopów flotowych Stargard",
    "naprawa telefonów z dojazdem",
    "mikrolutowanie BGA Szczecin",
    "naprawa wysyłkowa Paczkomat",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Przemysław Młoczkowski" }],
  openGraph: {
    title: "Outsourcing IT dla Firm & Mobilny Serwis Sprzętu | Technik-Serwisu",
    description:
      "Partner technologiczny dla biznesu i klientów indywidualnych. Projektowanie sieci od zera, migracje danych, stałe wsparcie IT oraz ekspresowy mobilny serwis laptopów i smartfonów w Stargardzie, Szczecinie i całym regionie.",
    url: "https://www.technik-serwisu.pl",
    siteName: "Technik Serwisu",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Structured Data (JSON-LD) optimized for hybrid IT Services & Hardware Repair
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RepairService"],
    name: "Technik Serwisu - Wsparcie IT dla Firm & Mobilny Serwis Elektroniki",
    description:
      "Projektowanie sieci komputerowych, outsourcing IT, migracje danych dla firm oraz mobilny serwis laptopów, smartfonów i elektroniki z dojazdem do klienta (Stargard, Szczecin, Pyrzyce i region do 100 km).",
    image: "https://www.technik-serwisu.pl/brand-page.png",
    telephone: "+48509820956",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Stargard",
      addressRegion: "Zachodniopomorskie",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.3369,
      longitude: 15.0386,
    },
    knowsAbout: [
      "Outsourcing IT dla firm",
      "Projektowanie i budowa sieci LAN WiFi",
      "Administracja i konfiguracja routerów oraz szaf RACK",
      "Migracja danych i stanowisk pracy",
      "Wdrażanie Microsoft 365 i oprogramowania biurowego",
      "Tworzenie stron internetowych i automatyzacja procesów",
      "Serwis flotowy laptopów i smartfonów",
      "Mobilny serwis komputerowy z dojazdem",
      "Mikrolutowanie BGA i naprawa płyt głównych",
      "Wymiana ekranów i baterii w telefonach",
    ],
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", latitude: 53.3369, longitude: 15.0386 },
        geoRadius: "100000", // Promień 100 km
      },
      { "@type": "City", name: "Stargard" },
      { "@type": "City", name: "Szczecin" },
      { "@type": "City", name: "Pyrzyce" },
      { "@type": "City", name: "Choszczno" },
      { "@type": "City", name: "Goleniów" },
      { "@type": "City", name: "Gryfino" },
      { "@type": "City", name: "Barlinek" },
      { "@type": "City", name: "Gorzów Wielkopolski" },
      { "@type": "City", name: "Myślibórz" },
      { "@type": "City", name: "Lipiany" },
      { "@type": "City", name: "Kozielice" },
      { "@type": "City", name: "Banie" },
      { "@type": "City", name: "Pełczyce" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  };

  return (
    <html lang="pl" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <GeoProvider>
          {children}
          <Footer />
        </GeoProvider>

        {/* Google Analytics Script */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-M6HGD2NL8J" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>

        {/* Structured Data Insertion */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
