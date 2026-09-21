// app/layout.tsx
import type { Metadata } from "next";
import { GeoProvider } from "@/app/context/GeoContext";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"], display: "swap", preload: true });
const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GA_ID || "G-M6HGD2NL8J";
const GA_SCRIPT_SRC = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.technik-serwisu.pl"),
  title: "Outsourcing IT, Strony WWW, Informatyk & Serwis | Stargard, Szczecin, Pyrzyce",
  description:
    "Kompleksowy outsourcing IT i tworzenie stron WWW dla firm oraz mobilny informatyk z dojazdem. Szybka naprawa komputerów, laptopów i telefonów / smartfonów (Stargard, Szczecin, Pyrzyce i okolice).",
  keywords: [
    "outsourcing IT Stargard",
    "tworzenie stron internetowych Stargard",
    "strony www Szczecin",
    "informatyk Pyrzyce",
    "naprawa komputerów Pyrzyce",
    "naprawa telefonów z dojazdem",
    "serwis smartfonów Stargard",
    "wymiana ekranu szybki telefon",
    "mobilny informatyk Szczecin",
    "serwis komputerowy Stargard",
    "budowa sieci komputerowych Stargard",
    "mikrolutowanie BGA Szczecin",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Przemysław Młoczkowski" }],
  openGraph: {
    title: "Outsourcing IT, Strony WWW & Mobilny Serwis Komputerów i Telefonów | Technik-Serwisu",
    description:
      "Twój partner technologiczny. Tworzenie stron WWW, budowa sieci i outsourcing IT dla biznesu oraz szybki serwis komputerów, laptopów i smartfonów z dojazdem w Stargardzie, Szczecinie i Pyrzycach.",
    url: "https://www.technik-serwisu.pl",
    siteName: "Technik Serwisu",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Structured Data (JSON-LD) zwięźle łączące usługi IT, strony WWW i naprawę elektroniki
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RepairService"],
    name: "Technik Serwisu - Wsparcie IT, Strony WWW, Mobilny Informatyk & Serwis Telefonów",
    description:
      "Tworzenie stron internetowych, outsourcing IT i projektowanie sieci dla firm oraz mobilny serwis komputerów, laptopów, telefonów i smartfonów z dojazdem (Stargard, Szczecin, Pyrzyce i okolice do 100 km).",
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
      "Outsourcing IT i obsługa firm",
      "Tworzenie nowoczesnych stron internetowych i aplikacji",
      "Projektowanie i budowa sieci LAN WiFi",
      "Mobilny serwis komputerowy i pogotowie IT",
      "Naprawa telefonów i smartfonów z dojazdem",
      "Wymiana wyświetlaczy, szybki i baterii w telefonach",
      "Mikrolutowanie BGA i naprawa płyty głównej",
      "Administracja sieciami i serwerami",
      "Migracje danych i stanowisk pracy",
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
        <Script src={GA_SCRIPT_SRC} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}');
          `}
        </Script>

        {/* Structured Data Insertion */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
