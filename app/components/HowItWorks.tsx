// components/HowItWorks.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, FileSearch, ShieldCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <PhoneCall size={32} />,
      title: "1. Zgłoszenie & Wycena",
      desc: "Kontaktujesz się telefonicznie lub przez formularz. Ustalamy zakres prac, szacowane koszty oraz formę realizacji (dojazd do biura/domu, odbiór sprzętu lub Paczkomat).",
    },
    {
      icon: <FileSearch size={32} />,
      title: "2. Diagnostyka & Poufność",
      desc: "Przeprowadzamy szczegółową analizę usterki. Przed przystąpieniem do pracy zatwierdzasz ostateczny kosztorys. Gwarantujemy 100% bezpieczeństwa i poufności danych.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "3. Naprawa & Rozliczenie",
      desc: "Realizujemy serwis w mobilnym warsztacie lub stanowisku BGA. Sprzęt przechodzi testy końcowe. Wystawiamy fakturę i przekazujemy naprawiony sprzęt.",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="proces">
      <div className="mb-12">
        <h2 className="text-xs uppercase tracking-widest text-[#ffb800] font-bold mb-2">Przejrzysty Proces</h2>
        <h3 className="text-3xl font-extrabold border-l-4 border-[#ffb800] pl-4">Jak wygląda współpraca?</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="flex flex-col items-center text-center p-8 bg-[#202020] border border-[#333] hover:border-[#ffb800] transition-colors rounded-sm group"
          >
            <div className="mb-6 p-4 bg-[#262626] text-[#ffb800] rounded-full border border-[#333] group-hover:scale-110 transition-transform">
              {step.icon}
            </div>
            <h4 className="text-xl font-bold mb-3 text-white group-hover:text-[#ffb800] transition-colors">
              {step.title}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
