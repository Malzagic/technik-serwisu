// app/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  Star,
  Smartphone,
  Zap,
  MapPin,
  Building2,
  Cpu,
  Network,
  FileText,
  Lock,
  Clock,
  Server,
  Headphones,
  Workflow,
  Globe2,
  ChevronRight,
  CheckCircle2,
  ArrowUpRight,
  KeyRound,
} from "lucide-react";

import ShippingModal from "./components/ShippingModal";
import HowItWorks from "./components/HowItWorks";
import ContactModal from "./components/ContactModal";
import ReviewGate from "./components/ReviewGate";
import { useGeo } from "@/app/context/GeoContext";

export default function Home() {
  const { userCity, isWithinRange } = useGeo();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  // Filary Usług B2B & B2C
  const services = [
    {
      title: "Infrastruktura Sieciowa Od Zera",
      description:
        "Projektujemy, budujemy i konfigurujemy sieci komputerowe – LAN, WAN, bezpieczne WiFi, VPN – tak, by pasowały do Twojego biznesu. Zapewniamy stabilne połączenia i ochronę sieci w biurach, magazynach i zakładach.",
      icon: Network,
      tag: "Trzon Oferty B2B",
    },
    {
      title: "Outsourcing IT & Help Desk",
      description:
        "Dedykowane wsparcie dla Twojego zespołu. Oferujemy bieżącą pomoc, administrowanie zasobami, migrację danych, wdrażanie licencji Microsoft 365 / Office i zarządzanie uprawnieniami użytkowników.",
      icon: Headphones,
      tag: "Ciągłość Operacyjna",
    },
    {
      title: "Automatyzacje & Strony WWW",
      description:
        "Tworzymy nowoczesne strony internetowe i usprawniamy cyfrowe procesy w firmie. Automatyzujemy powtarzalne zadania i łączymy systemy, by Twój zespół mógł zaoszczędzić czas.",
      icon: Workflow,
      tag: "Rozwój Biznesu",
    },
    {
      title: "Serwis Flotowy & Naprawy Sprzętowe",
      description:
        "Opiekujemy się flotą laptopów, komputerów i smartfonów firmowych. Szybko wymieniamy podzespoły z dojazdem, wykonujemy mikrolutowanie BGA i naprawiamy uszkodzony sprzęt.",
      icon: Cpu,
      tag: "Serwis Mobilny",
    },
  ];

  // Korzyści B2B
  const b2bFeatures = [
    {
      icon: Server,
      title: "Projekt i Budowa Sieci",
      desc: "Budujemy sieci komputerowe dopasowane do potrzeb Twojego przedsiębiorstwa. Tworzymy stabilne środowiska LAN/WiFi od fizycznego okablowania i montażu RACK, po zaawansowaną konfigurację urządzeń sieciowych i serwerów.",
    },
    {
      icon: KeyRound,
      title: "Migracja Danych",
      desc: "Bezpieczne przenoszenie profili i danych użytkowników, wdrażanie subskrypcji Microsoft Office oraz pełna konfiguracja nowych stanowisk pracy bez przestojów.",
    },
    {
      icon: Headphones,
      title: "Brak Przestojów w Pracy",
      desc: "Inżynierskie wsparcie Help Desk, stały nadzór nad infrastrukturą oraz szybki czas reakcji w przypadku awarii z dojazdem na miejsce.",
    },
    {
      icon: FileText,
      title: "Przejrzyste Rozliczenia",
      desc: "Pełne rozliczenie na podstawie faktur z dopasowanymi warunkami płatności i bezwzględną poufnością (NDA/RODO).",
    },
  ];

  // Referencje
  const reviews = [
    {
      name: "covall1",
      opinion: "Polecam, naprawa sprzętu DeWalt oraz serwis techniczny na najwyższym poziomie 😁💪…",
      rating: 5,
      type: "Klient Indywidualny",
    },
    {
      name: "Marcin Puzerewski",
      opinion:
        "Polecam. Ekspresowa naprawa adaptera Wi-FI. Odbiór i zwrot pod drzwi. Bardzo dobre ceny. Jeśli w przyszłości będę potrzebował naprawy jakiegoś sprzętu to już wiem do kogo zgłoszę się ponownie.",
      rating: 5,
      type: "Klient Indywidualny",
    },
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main
      id="start"
      className="min-h-screen bg-[#141414] text-white font-sans pt-20 scroll-mt-20 selection:bg-[#ffb800] selection:text-black"
    >
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 px-6 border-b border-[#2a2a2a] bg-gradient-to-b from-[#1a1a1a] via-[#141414] to-[#141414] overflow-hidden">
        {/* Tło siatki technologicznej w tle */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffb800_1px,transparent_1px)] [background-size:16px_16px]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10"
        >
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#222222] border border-[#ffb800]/40 text-[#ffb800] px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full shadow-inner">
              <MapPin size={14} className="animate-pulse" />{" "}
              {isWithinRange
                ? `Obsługuje Twoją okolicę: ${userCity}`
                : "Obsługa IT lokalnie oraz wysyłkowo w całej Polsce"}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Kompleksowe Wsparcie IT dla Firm i Klientów Indywidualnych w <br className="hidden sm:block" />
              <span className="text-[#ffb800] block mt-1">{userCity}</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal max-w-2xl">
              Projektujemy i budujemy sieci komputerowe od zera. Dostarczamy outsourcing IT, który naprawdę działa.
              Automatyzujemy procesy i tworzymy strony internetowe w firmie, by wszystko szło sprawnie. Dla klientów
              indywidualnych oferujemy szybki serwis z dojazdem. Naprawy sprzętu robimy u klienta – bez konieczności
              wyjazdu.
            </p>

            {/* Trzy szybkie wyróżniki technologiczne */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-gray-300 border-t border-[#2a2a2a]/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#ffb800] shrink-0" />
                <span>Sieci LAN / WiFi od A do Z</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#ffb800] shrink-0" />
                <span>Help Desk & Wsparcie IT</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#ffb800] shrink-0" />
                <span>Serwis z dojazdem do biura/klienta</span>
              </div>
            </div>

            {/* Przyciski CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#ffb800] text-black px-7 py-3.5 text-sm md:text-base font-extrabold hover:bg-white transition-all duration-200 text-center shadow-[0_0_25px_rgba(255,184,0,0.25)] flex items-center justify-center gap-2 group rounded-sm"
              >
                <span>Skonsultuj Projekt / B2B</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#wysylka"
                className="border border-[#444] text-gray-200 px-6 py-3.5 text-sm md:text-base font-bold hover:bg-white hover:text-black hover:border-white transition-all duration-200 text-center flex items-center justify-center gap-2 rounded-sm"
              >
                <span>Serwis Wysyłkowy (InPost)</span>
              </a>
            </div>
          </div>

          {/* Banner graficzny / Karta wizerunkowa */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative h-[380px] w-full border-2 border-[#333] overflow-hidden rounded-sm bg-[#1c1c1c] group hover:border-[#ffb800] transition-colors duration-300 shadow-2xl">
              <Image
                src="/brand-page.png"
                alt="Centrum dowodzenia IT i mobilny warsztat Technik-Serwisu"
                fill
                style={{ objectFit: "cover" }}
                priority
                className="opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#1a1a1a]/90 backdrop-blur-md border border-[#333] rounded-sm">
                <div className="text-xs uppercase font-extrabold tracking-wider text-[#ffb800] mb-1">
                  Wsparcie IT & Serwis
                </div>
                <div className="text-sm font-bold text-white">
                  Tworzenie sieci, stron internetowych, wsparcie Help Desk, migracje danych i zaawansowany serwis
                  sprzętu.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- BANER OBSZARU DZIAŁANIA --- */}
      <section className="bg-[#1c1c1c] py-3.5 px-6 border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ffb800] inline-block animate-ping" />
            <span className="text-[#ffb800] font-bold uppercase tracking-wider">Zasięg Operacyjny (do 100 km):</span>
          </div>
          <div className="text-center md:text-right font-medium text-gray-300">
            Stargard, Szczecin, Pyrzyce, Myślibórz, Lipiany, Gryfino, Choszczno, Barlinek, Gorzów Wlkp. i okolice.
          </div>
        </div>
      </section>

      {/* --- DEDYKOWANA SEKCJA B2B / OUTSOURCING IT --- */}
      <section id="b2b" className="py-24 px-6 bg-[#181818] border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#ffb800] font-extrabold bg-[#222] px-3 py-1 border border-[#333]">
              Wsparcie IT dla Firm i Przedsiębiorstw
            </span>
            <h2 className="text-3xl sm:text-4xl mt-1 font-extrabold tracking-tight text-white">
              Pełny outsourcing IT dla Twojej firmy
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Zapewniamy stałe wsparcie techniczne i opiekę nad infrastrukturą sieciową. Serwisujemy flotę komputerową
              błyskawicznie. Dzięki temu możesz skoncentrować się na rozwoju swojego biznesu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {b2bFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#1c1c1c] p-7 border border-[#2e2e2e] hover:border-[#ffb800] transition-all duration-300 rounded-sm flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 bg-[#262626] border border-[#3a3a3a] group-hover:border-[#ffb800] flex items-center justify-center text-[#ffb800] mb-6 transition-colors">
                      <IconComp size={22} />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#ffb800] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-[#262626] text-[11px] font-bold uppercase tracking-wider text-[#ffb800] flex items-center gap-1">
                    <span>Gwarancja Jakości</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- SEKCJA GŁÓWNYCH USŁUG --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="uslugi">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#ffb800] font-extrabold mb-2 block">
              Wsparcie IT dla Firm i Klientów Indywidualnych
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white border-l-4 border-[#ffb800] pl-5">
              Filary Oferty Usługowej
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            Elastyczne podejście: kompleksowe wdrożenia dla biznesu oraz szybka pomoc sprzętowa dla osób prywatnych.
          </p>
        </div>

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
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.4 } },
                }}
                className="group bg-[#1c1c1c] p-8 border border-[#2e2e2e] hover:border-[#ffb800] rounded-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,184,0,0.12)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-black uppercase tracking-widest bg-[#262626] text-[#ffb800] px-2.5 py-1 border border-[#3a3a3a]">
                      {service.tag}
                    </span>
                    <IconComponent
                      className="text-[#ffb800] group-hover:scale-110 transition-transform duration-300"
                      size={26}
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#ffb800] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">{service.description}</p>
                </div>

                <div
                  onClick={() => setIsModalOpen(true)}
                  className="pt-4 border-t border-[#262626] flex items-center justify-between cursor-pointer group/btn"
                >
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 group-hover/btn:text-[#ffb800] transition-colors">
                    dowiedz się więcej
                  </span>
                  <ChevronRight
                    size={16}
                    className="text-[#ffb800] group-hover/btn:translate-x-1 transition-transform"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* --- PROCES COOPERATION (HOW IT WORKS) --- */}
      <HowItWorks />

      {/* --- SEKCJA WYSYŁKOWA (PACZKOMAT) --- */}
      <section id="wysylka" className="py-20 px-6 max-w-5xl mx-auto bg-[#141414]">
        <div className="border border-[#2e2e2e] bg-[#1c1c1c] p-8 sm:p-10 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#ffb800] text-black font-extrabold text-[10px] uppercase tracking-widest px-4 py-1">
            Cała Polska
          </div>

          <h3 className="text-2xl font-bold mb-6 text-[#ffb800] flex items-center gap-2">
            <Truck size={24} /> Serwis Wysyłkowy (Paczkomat InPost)
          </h3>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Jesteś spoza strefy mobilnej? Obsługujemy firmy oraz klientów prywatnych z całej Polski. Wyślij sprzęt
                Paczkomatem – po wstępnej diagnozie i akceptacji kosztów realizujemy usługę i odsyłamy urządzenie w
                24–48h.
              </p>
              <div className="flex items-center gap-3 text-xs text-emerald-400 font-bold">
                <ShieldCheck size={18} /> <span>Bezpieczeństwo danych & natychmiastowa odsyłka</span>
              </div>
              <button
                onClick={() => setIsShippingOpen(true)}
                className="w-full sm:w-auto bg-[#262626] hover:bg-[#ffb800] hover:text-black transition-all px-6 py-3 font-bold border border-[#ffb800] text-[#ffb800] text-xs uppercase tracking-wider"
              >
                Instrukcja Nadania Paczki
              </button>
            </div>

            <div className="bg-[#161616] p-6 border border-[#2e2e2e] space-y-3 rounded-sm">
              <h4 className="font-bold text-xs uppercase tracking-widest text-[#ffb800] mb-2">
                Dane do Nadania Przesyłki:
              </h4>
              <ul className="text-xs text-gray-300 space-y-2 font-mono">
                <li>
                  <strong className="text-white font-sans">Paczkomat:</strong> STS13M
                </li>
                <li>
                  <strong className="text-white font-sans">Odbiorca:</strong> Technik-Serwisu
                </li>
                <li>
                  <strong className="text-white font-sans">Telefon:</strong> +48 509 820 956
                </li>
                <li>
                  <strong className="text-white font-sans">E-mail:</strong> kontakt@technik-serwisu.pl
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEKCJA OPINII --- */}
      <section className="py-20 px-6 bg-[#181818] border-t border-b border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#ffb800] font-extrabold">
              Społeczny Dowód Słuszności
            </span>
            <h2 className="text-3xl font-extrabold text-white">Zaufali Nam Klienci i Biznes</h2>
          </div>

          <div className="grid md:grid-cols-1 max-w-2xl mx-auto gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-[#1c1c1c] p-8 border border-[#2e2e2e] relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#ffb800]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ffb800] bg-[#262626] px-2.5 py-1 border border-[#3a3a3a]">
                    {review.type}
                  </span>
                </div>
                <p className="text-gray-300 text-sm italic mb-6 leading-relaxed">&quot;{review.opinion}&quot;</p>
                <p className="font-bold text-white text-xs uppercase tracking-wider">- {review.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsReviewOpen(true)}
              className="text-[#ffb800] border border-[#ffb800] px-8 py-3 text-xs uppercase tracking-widest font-extrabold hover:bg-[#ffb800] hover:text-black transition-all"
            >
              Dodaj Opinię / Oceń Usługę
            </button>
          </div>
        </div>
      </section>

      {/* --- SEKCJA O FIRMIE --- */}
      <section id="o-mnie" className="py-24 px-6 bg-[#141414]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto space-y-8"
        >
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#ffb800] font-extrabold">Wsparcie & Praktyka</span>
            <h2 className="text-3xl font-extrabold border-l-4 border-[#ffb800] pl-4 text-white">
              O Firmie Technik-Serwisu
            </h2>
          </div>

          <div className="text-gray-300 text-base sm:text-lg leading-relaxed space-y-5 border-l border-[#2e2e2e] pl-6">
            <p>
              Nazywam się Przemysław. Tworzę Technik-Serwis – markę, która łączy kompleksowy outsourcing IT dla firm z
              szybkimi naprawami sprzętu z dojazdem do klienta.
            </p>
            <p>
              Projektuję i buduję sieci komputerowe od podstaw, wdrażam nowoczesne środowiska biurowe oraz automatyzuję
              powtarzalne procesy oraz tworzę strony internetowe dla firm. Zapewniam stałe wsparcie techniczne dla flot
              urządzeń, a w ramach serwisu sprzętowego wykonuję precyzyjne naprawy mikrolutownicze BGA, wymieniam
              podzespoły i naprawiam uszkodzone gniazda ładowania w laptopach i smartfonach.
            </p>
            <p className="text-[#ffb800] font-semibold italic text-sm sm:text-base pt-2">
              &quot;Wspieram rozwój biznesu poprzez niezawodne środowisko IT, a klientom indywidualnym dostarczam pewny,
              wygodny serwis z dojazdem pod same drzwi.&quot;
            </p>
          </div>
        </motion.div>
      </section>

      {/* MODALE */}
      <ReviewGate isOpen={isReviewOpen} onClose={() => setIsReviewOpen(false)} />
      <ShippingModal isOpen={isShippingOpen} onClose={() => setIsShippingOpen(false)} />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
