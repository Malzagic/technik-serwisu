"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, Search, Wrench } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Phone size={32} />,
      title: "Kontakt",
      desc: "Zadzwoń lub napisz. Omówimy problem, wstępnie wycenimy usługę i ustalimy sposób dostarczenia sprzętu.",
    },
    {
      icon: <Search size={32} />,
      title: "Diagnostyka",
      desc: "Przeprowadzam dokładną analizę usterki. Przed każdą naprawą otrzymujesz pełną informację o kosztach.",
    },
    {
      icon: <Wrench size={32} />,
      title: "Naprawa",
      desc: "Profesjonalny serwis z dbałością o każdy detal. Po naprawie sprzęt jest gotowy do odbioru lub wysyłki.",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="proces">
      <h2 className="text-3xl font-bold mb-12 border-l-4 border-[#ffb800] pl-4">Jak to działa?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="flex flex-col items-center text-center p-6 bg-[#262626] rounded-sm"
          >
            <div className="mb-4 text-[#ffb800]">{step.icon}</div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
