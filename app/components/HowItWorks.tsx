"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  ClipboardCheck,
  FileSearch,
  Handshake,
  PhoneCall,
  Rocket,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

type ProcessAudience = "service" | "b2b";

export default function HowItWorks() {
  const [audience, setAudience] = useState<ProcessAudience>("service");
  const serviceSteps = [
    {
      icon: <PhoneCall size={32} />,
      title: "1. Wycena z cennika",
      desc: "Wybierz model i zakres usługi w cenniku robocizny, a następnie potwierdź niestandardową naprawę z technikiem.",
    },
    {
      icon: <FileSearch size={32} />,
      title: "2. Dojazd lub Paczkomat",
      desc: "Sprzęt odbieramy w zasięgu do 100 km lub przyjmujemy przesyłkę przez Paczkomat STS13M.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "3. Montaż i testy",
      desc: "Dobieramy części original / Diagnosable, wykonujemy montaż lub lutowanie IC i przeprowadzamy pełne testy.",
    },
  ];
  const b2bSteps = [
    { icon: <ClipboardCheck size={32} />, title: "1. Audyt i konsultacja", desc: "Weryfikujemy infrastrukturę, potrzeby, ryzyka i priorytety użytkowników firmy." },
    { icon: <Rocket size={32} />, title: "2. Wdrożenie i SLA", desc: "Ustalamy zakres, NDA, standardy bezpieczeństwa, SLA i harmonogram wdrożenia." },
    { icon: <Handshake size={32} />, title: "3. Help Desk i FV", desc: "Zapewniamy stałą opiekę IT, wsparcie help desk i przejrzyste rozliczenia fakturami." },
  ];
  const steps = audience === "service" ? serviceSteps : b2bSteps;
  const accent = audience === "service"
    ? {
        active: "bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.35)]",
        card: "hover:border-emerald-500/40",
        icon: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
        heading: "group-hover:text-emerald-400",
      }
    : {
        active: "bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.35)]",
        card: "hover:border-amber-400/40",
        icon: "border-amber-400/20 bg-amber-400/10 text-amber-400",
        heading: "group-hover:text-amber-400",
      };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="proces">
      <div className="mb-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-xs uppercase tracking-widest text-[#ffb800] font-bold mb-2">Przejrzysty Proces</h2>
          <h3 className="text-3xl font-extrabold border-l-4 border-[#ffb800] pl-4">Jak wygląda współpraca?</h3>
        </div>
        <div
          className="inline-flex w-full items-center rounded-2xl border border-white/10 bg-[#121513] p-1.5 shadow-inner sm:w-auto"
          role="tablist"
          aria-label="Wybierz rodzaj współpracy"
          onKeyDown={event => {
            if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
            event.preventDefault();
            const nextTab = audience === "service" ? "b2b" : "service";
            setAudience(nextTab);
            document.getElementById(`process-tab-${nextTab}`)?.focus();
          }}
        >
          {(["service", "b2b"] as ProcessAudience[]).map(tab => {
            const selected = audience === tab;
            const Icon = tab === "service" ? Smartphone : Building2;
            return (
              <button
                key={tab}
                id={`process-tab-${tab}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="process-steps"
                tabIndex={selected ? 0 : -1}
                onClick={() => setAudience(tab)}
                className={`relative z-0 flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-xl px-2 text-[10px] font-semibold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:flex-none sm:px-4 sm:text-xs ${
                  selected ? "font-bold text-[#0B0D0C]" : "text-zinc-400 hover:text-white"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="processTabPill"
                    className={`absolute inset-0 z-0 rounded-xl ${accent.active}`}
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <Icon size={15} className="relative z-10 shrink-0" />
                <span className="relative z-10 whitespace-nowrap">
                  {tab === "service" ? "Klient serwisowy" : "Współpraca B2B"}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={audience}
          id="process-steps"
          role="tabpanel"
          aria-labelledby={`process-tab-${audience}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-8 md:grid-cols-3"
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className={`group flex flex-col items-center rounded-2xl border border-white/10 bg-[#202020]/75 p-8 text-center backdrop-blur-xl transition-colors ${accent.card}`}
            >
              <div className={`mb-6 rounded-full border p-4 transition-transform group-hover:scale-110 ${accent.icon}`}>
                {step.icon}
              </div>
              <h4 className={`mb-3 text-xl font-bold text-white transition-colors ${accent.heading}`}>
                {step.title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-400">{step.desc}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
