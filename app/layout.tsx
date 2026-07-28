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
  title: "Mobilny Serwis Telefonów & Elektroniki Stargard, Szczecin | Technik-Serwisu",
  description:
    "Mobilny serwis telefonów, laptopów i elektroniki z dojazdem do klienta w Stargardzie, Szczecinie i w promieniu do 100 km. Ekspresowa wymiana ekranu, baterii, diagnostyka i naprawa gniazd ładowania oraz obsługa wysyłkowa Paczkomatem.",
  keywords: [
    "mobilny serwis telefonów Stargard",
    "serwis elektroniki Szczecin",
    "wymiana ekranu iPhone Stargard",
    "wymiana baterii telefon Stargard",
    "czyszczenie gniazda ładowania",
    "naprawa telefonów Pyrzyce",
    "naprawa wysyłkowa Paczkomat",
    "serwis laptopów Stargard",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Przemysław Młoczkowski" }],
  openGraph: {
    title: "Mobilny Serwis Elektroniki z Dojazdem | Technik-Serwisu Stargard",
    description:
      "Szybka wymiana ekranów, baterii, diagnostyka i czyszczenie gniazd ładowania z dojazdem pod Twój dom w Stargardzie, Szczecinie i okolicach (do 100 km). Naprawy wysyłkowe Paczkomatem w 24-48h.",
    url: "https://www.technik-serwisu.pl",
    siteName: "Technik Serwisu",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Structured Data (JSON-LD) optimized for phone repair and regional SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ElectronicsRepairShop"], // More specific Schema type
    name: "Technik Serwisu - Mobilny Serwis i Naprawa Telefonów",
    description:
      "Mobilny serwis i naprawa telefonów, smartfonów, laptopów oraz elektroniki z dojazdem do klienta w Stargardzie, Pyrzycach, Szczecinie i okolicach.",
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
    // Key services explicitly declared for search engines
    knowsAbout: [
      "Naprawa telefonów",
      "Serwis telefonów",
      "Wymiana wyświetlacza",
      "Wymiana baterii",
      "Czyszczenie gniazda ładowania",
      "Naprawa smartfonów iPhone i Android",
      "Serwis laptopów",
    ],
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", latitude: 53.3369, longitude: 15.0386 },
        geoRadius: "100000", // 100 km radius
      },
      { "@type": "City", name: "Stargard" },
      { "@type": "City", name: "Szczecin" },
      { "@type": "City", name: "Pyrzyce" },
      { "@type": "City", name: "Choszczno" },
      { "@type": "City", name: "Goleniów" },
      { "@type": "City", name: "Gryfino" },
      { "@type": "City", name: "Barlinek" },
      { "@type": "City", name: "Gorzów Wielkopolski" },
      { "@type": "City", name: "Wałcz" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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
            gtag('config', 'G-M6HGD2NL8J');
          `}
        </Script>

        {/* Structured Data Insertion */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
