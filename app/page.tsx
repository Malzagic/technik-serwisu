// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Star, Smartphone, BatteryCharging, Zap, MapPin } from "lucide-react";

import ShippingModal from "./components/ShippingModal";
import HowItWorks from "./components/HowItWorks";
import ContactModal from "./components/ContactModal";
import ReviewGate from "./components/ReviewGate";
import { useGeo } from "@/app/context/GeoContext";
// Declare global window interface for Trustindex widget safety
declare global {
  interface Window {
    Trustindex: {
      reload: () => void;
    };
  }
}

export default function Home() {
  const { userCity, isWithinRange } = useGeo();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  // Service offerings tuned for quick modular replacements and mobile repairs
  const services = [
    {
      title: "Wymiana Wyświetlaczy i Szyb",
      description:
        "Ekspresowa wymiana rozbitych ekranów i szyb w smartfonach iPhone oraz Android. Naprawa realizowana na miejscu w mobilnym warsztacie lub wysyłkowo. Zachowujemy pełne bezpieczeństwo Twoich danych.",
      icon: Smartphone,
    },
    {
      title: "Baterie, Gniazda i Tasiemki",
      description:
        "Telefon szybko się rozładowuje albo nie ładuje? Wymiana baterii, portów ładowania (USB-C / Lightning) oraz taśm sygnałowych w 30-60 minut bezpośrednio pod Twoim domem lub biurem.",
      icon: BatteryCharging,
    },
    {
      title: "Laptopy i Komputery",
      description:
        "Szybka diagnostyka i naprawy modułowe: wymiana matryc, klawiatur, dysków SSD oraz gniazd zasilania. Czyszczenie i konserwacja układów chłodzenia z dojazdem na terenie całego regionu.",
      icon: Zap,
    },
    {
      title: "Elektronika & Lutowanie BGA",
      description:
        "Zaawansowana diagnostyka i mikrolutowanie płyt głównych, regeneracja połączeń, naprawa układów zasilania oraz elektronarzędzi. Obsługa trudniejszych usterek w stacjonarnym stanowisku.",
      icon: ShieldCheck,
    },
  ];

  const reviews = [
    {
      name: "covall1",
      opinion: "Polecam, naprawa sprzętu DeWalt na najwyższym poziomie 😁💪…",
      rating: 5,
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main id="start" className="min-h-screen bg-[#1a1a1a] text-white font-sans pt-20">
      {/* Hero Section - Dynamic city adaptation based on location */}
      <section className="relative py-20 px-6 border-b-4 border-[#ffb800]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-[#262626] border border-[#ffb800] text-[#ffb800] px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4 rounded-sm">
              <MapPin size={14} />{" "}
              {isWithinRange
                ? `Obsługujemy Twoją okolicę: ${userCity}`
                : "Obsługujemy całą Polskę wysyłkowo (Paczkomat)"}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Twój Mobilny Warsztat Serwisowy <span className="text-[#ffb800]">{userCity}</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              {isWithinRange ? (
                <>
                  Profesjonalna diagnostyka, czyszczenie i naprawa gniazd ładowania oraz ekspresowa wymiana ekranów i
                  baterii w miejscowości <strong className="text-white">{userCity}</strong> i okolicach. Przyjeżdżamy
                  wyposażonym mobilnym warsztatem pod Twój dom lub firmę!
                </>
              ) : (
                <>
                  Profesjonalna diagnostyka, czyszczenie i naprawa gniazd ładowania oraz ekspresowa wymiana ekranów,
                  baterii i tasiemek. Oferujemy wygodną obsługę wysyłkową przez Paczkomat InPost z odsyłką w 24–48h!
                </>
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#ffb800] text-black px-8 py-3 font-bold hover:bg-white transition-colors text-center"
              >
                {isWithinRange ? "Zamów serwis z dojazdem" : "Zgłoś naprawę"}
              </button>
              <a
                href="#wysylka"
                className="border border-white text-white px-6 py-3 font-bold hover:bg-white hover:text-black transition-colors text-center"
              >
                Naprawa Paczkomatem (24-48h)
              </a>
            </div>
          </div>

          <div className="relative h-72 w-full border-l-8 border-[#ffb800] overflow-hidden rounded-r-lg">
            <Image
              src="/brand-page.png"
              alt="Mobilny warsztat Technik-Serwisu"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* Region Coverage Info Banner */}
      <section className="bg-[#222222] py-4 px-6 border-b border-[#333]">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-400">
          <span className="text-[#ffb800] font-bold">Obszar działania do 100km od Stargardu:</span> Stargard, Szczecin,
          Pyrzyce, Gryfino, Goleniów, Choszczno, Barlinek, Gorzów Wlkp., Wałcz i okolice.
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="uslugi">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl font-extrabold mb-16 border-l-4 border-[#ffb800] pl-6 tracking-tight"
        >
          Główne Usługi & Naprawy Modułowe
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } },
                }}
                className="group bg-[#202020] p-8 border border-[#333] hover:border-[#ffb800] rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,184,0,0.1)] flex flex-col min-h-[320px]"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-1 bg-[#ffb800] group-hover:w-16 transition-all duration-300" />
                  <IconComponent
                    className="text-[#ffb800] group-hover:scale-110 transition-transform duration-300"
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#ffb800] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-normal leading-relaxed flex-grow">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <HowItWorks />

      {/* Shipping Section - InPost Paczkomat Option */}
      <section id="wysylka" className="py-16 px-6 max-w-4xl mx-auto bg-[#1a1a1a]">
        <h3 className="text-2xl font-bold mb-8 text-[#ffb800] border-l-4 border-[#ffb800] pl-4">
          Naprawa Wysyłkowa (Paczkomat InPost) – Cała Polska
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-400 leading-relaxed">
              Jesteś spoza strefy dojazdu? Skorzystaj z ekspresowej naprawy wysyłkowej. Po wcześniejszym uzgodnieniu
              podzespołów, wymieniamy ekran lub baterię w dniu odebrania paczki i odsyłamy urządzenie w 24-48h.
            </p>
            <div className="flex items-center gap-3 text-sm text-green-500 font-semibold">
              <ShieldCheck size={20} /> <span>Bezpieczny transport i natychmiastowa odsyłka</span>
            </div>
            <button
              onClick={() => setIsShippingOpen(true)}
              className="w-full md:w-auto bg-[#333] hover:bg-[#ffb800] hover:text-black transition-all px-6 py-3 font-bold border border-[#ffb800] text-[#ffb800]"
            >
              Zobacz instrukcję pakowania
            </button>
          </div>
          <div className="bg-[#262626] p-6 rounded border border-[#333]">
            <h4 className="font-bold mb-4 flex items-center gap-2 text-white">
              <Truck className="text-[#ffb800]" /> Dane do wysyłki Paczkomatem
            </h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <strong>Paczkomat:</strong> STS13M
              </li>
              <li>
                <strong>Odbiorca:</strong> Technik-Serwisu
              </li>
              <li>
                <strong>Tel:</strong> +48 509 820 956
              </li>
              <li>
                <strong>E-mail:</strong> kontakt@technik-serwisu.pl
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Opinie o Technik-Serwisu</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {reviews.map((review, index) => (
              <div key={index} className="bg-[#202020] p-6 border border-[#333]">
                <div className="flex text-[#ffb800] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">&quot;{review.opinion}&quot;</p>
                <p className="font-bold text-white">- {review.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsReviewOpen(true)}
              className="text-[#ffb800] border border-[#ffb800] px-8 py-3 font-bold hover:bg-[#ffb800] hover:text-black transition-all"
            >
              Oceń nasz serwis
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-mnie" className="py-20 px-6 bg-[#202020]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#ffb800] pl-4">O mnie</h2>
          <div className="text-gray-300 text-lg leading-relaxed space-y-4">
            <p>
              Cześć! Jestem Przemysław i od lat moją pasją jest zaawansowana elektronika oraz tworzenie niezawodnych
              rozwiązań technologicznych.
            </p>
            <p>
              Specjalizuję się w ekspresowych naprawach mobilnych z dojazdem do klienta oraz profesjonalnej diagnostyce
              sprzętu elektronicznego. Dbam o to, aby każda wymiana ekranu, baterii czy podzespołu odbywała się
              sprawnie, przejrzyście i z użyciem części najwyższej jakości.
            </p>
            <p className="text-[#ffb800] font-semibold italic">
              &quot;Wygoda klienta i niezawodność naprawionego sprzętu to dla mnie priorytet.&quot;
            </p>
          </div>
        </motion.div>
      </section>

      {/* Modals */}
      <ReviewGate isOpen={isReviewOpen} onClose={() => setIsReviewOpen(false)} />
      <ShippingModal isOpen={isShippingOpen} onClose={() => setIsShippingOpen(false)} />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
