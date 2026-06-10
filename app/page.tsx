// app/page.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Truck } from "lucide-react";

import ShippingModal from "./components/ShippingModal";
import HowItWorks from "./components/HowItWorks";
import ContactModal from "./components/ContactModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);

  const services = [
    {
      title: "Smartfony i Tablety",
      description:
        "Profesjonalny serwis iPhone oraz urządzeń z systemem Android. Wymiana wyświetlaczy, szyb, naprawa po zalaniu oraz zaawansowane lutowanie układów na płytach głównych. W cenie zawsze darmowa diagnostyka wstępna.",
    },
    {
      title: "Elektronika Mobilna",
      description:
        "Naprawa układów zasilania, gniazd ładowania oraz diagnostyka zasilania w szerokim spektrum urządzeń mobilnych. Pełna obsługa elektroniki użytkowej, gdzie precyzja i jakość są naszym fundamentem.",
    },
    {
      title: "Komputery i Laptopy",
      description:
        "Kompleksowa diagnostyka i naprawa sprzętu komputerowego. Wymiana podzespołów, naprawa układów zasilania, płyt głównych oraz kart graficznych. Darmowa wstępna diagnostyka dla każdego sprzętu.",
    },
    {
      title: "Elektronika Specjalistyczna",
      description:
        "Naprawa elektronarzędzi oraz sprzętu biurowego. Każde zlecenie zaczynamy od pełnej, darmowej diagnostyki pod kątem elektronicznym, aby zapewnić najwyższą precyzję i skuteczność naprawy.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white font-sans">
      <section className="relative py-20 px-6 border-b-4 border-[#ffb800]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h1 className="text-5xl font-bold mb-4">
              TECHNIK-<span className="text-[#ffb800]">SERWISU</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Profesjonalny Serwis mobilny – działamy na terenie Pyrzyc i okolic (do 50km). Oferujemy darmową
              diagnostykę wstępną oraz bezpieczne naprawy wysyłkowe.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#ffb800] text-black px-8 py-3 font-bold hover:bg-white transition-colors"
            >
              Zgłoś naprawę
            </button>
          </div>
          <div className="relative h-64 w-full border-l-8 border-[#ffb800] overflow-hidden">
            <Image src="/brand-page.png" alt="PMDEV Serwis" fill style={{ objectFit: "cover" }} priority />
          </div>
        </motion.div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto" id="uslugi">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl font-extrabold mb-16 border-l-4 border-[#ffb800] pl-6 tracking-tight"
        >
          Zakres naszych usług
        </motion.h2>

        {/* Zmiana tutaj: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 zapewnia elastyczność */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } },
              }}
              className="group bg-[#202020] p-8 border border-[#333] hover:border-[#ffb800] rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,184,0,0.1)] flex flex-col min-h-[300px]"
            >
              <div className="w-12 h-1 bg-[#ffb800] mb-6 group-hover:w-20 transition-all duration-300" />
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#ffb800] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-normal leading-relaxed flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <HowItWorks />

      <section id="wysylka" className="py-16 px-6 max-w-4xl mx-auto bg-[#1a1a1a]">
        <h3 className="text-2xl font-bold mb-8 text-[#ffb800] border-l-4 border-[#ffb800] pl-4">
          Naprawa wysyłkowa krok po kroku
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-400">
              Nie jesteś z okolic Pyrzyc? Oferujemy w pełni bezpieczną naprawę wysyłkową. Każde urządzenie traktujemy z
              najwyższą starannością.
            </p>
            <div className="flex items-center gap-3 text-sm text-green-500 font-semibold">
              <ShieldCheck size={20} /> <span>Bezpieczna przesyłka</span>
            </div>

            {/* Przycisk wyciągnięty z flexa, żeby nie psuł układu i był czytelny */}
            <button
              onClick={() => setIsShippingOpen(true)}
              className="w-full md:w-auto bg-[#333] hover:bg-[#ffb800] hover:text-black transition-all px-6 py-3 font-bold border border-[#ffb800] text-[#ffb800]"
            >
              Zobacz instrukcję pakowania
            </button>
          </div>

          <div className="bg-[#262626] p-6 rounded border border-[#333]">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Truck className="text-[#ffb800]" /> Dane do wysyłki
            </h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <strong>Paczkomat:</strong> ZOV01M
              </li>
              <li>
                <strong>Odbiorca:</strong> &quot;Serwis Technik-Serwisu&quot;
              </li>
              <li>
                <strong>Tel:</strong> +48 509 820 956
              </li>
              <li className="mt-4 text-xs italic text-gray-500">
                *Proszę dołącz kartkę z opisem usterki i numerem telefonu wewnątrz paczki.
              </li>
            </ul>
          </div>
        </div>
      </section>

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
              Cześć! Jestem Przemysław i od lat moją największą pasją jest technologia. Wszystko zaczęło się od
              komputerów i programowania, które nauczyły mnie logicznego myślenia.
            </p>
            <p>
              Jednak to elektronika &quot;od środka&quot; stała się moją prawdziwą specjalizacją. Od naprawy smartfonów,
              przez laptopy, aż po specjalistyczny sprzęt audio – precyzja i jakość to moje fundamenty.
            </p>
            <p className="text-[#ffb800] font-semibold italic">
              &quot;Dla mnie każda naprawa to zagadka, która czeka na rozwiązanie.&quot;
            </p>
          </div>
        </motion.div>
      </section>

      <ShippingModal isOpen={isShippingOpen} onClose={() => setIsShippingOpen(false)} />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
