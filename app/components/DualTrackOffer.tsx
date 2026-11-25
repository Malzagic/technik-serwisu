"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Laptop,
  Network,
  ServerCog,
  Smartphone,
  Gamepad2,
  PackageCheck,
  Building2,
  Globe2,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import AudienceFilter from "./AudienceFilter";
import { useAudience } from "@/app/context/AudienceContext";

const B2B_TRACK = [
  {
    icon: Network,
    title: "Infrastruktura sieciowa",
    text: "LAN, Wi-Fi, RACK i stabilne połączenia dopasowane do firmy.",
  },
  {
    icon: Headphones,
    title: "Outsourcing IT",
    text: "Help Desk, wsparcie stanowisk, migracje i Microsoft 365.",
  },
  {
    icon: Globe2,
    title: "Automatyzacje i strony",
    text: "Strony, integracje i usprawnienia powtarzalnych procesów.",
  },
  {
    icon: ServerCog,
    title: "Serwery, NAS i backup",
    text: "Nadzór, kopie zapasowe i odporność infrastruktury.",
  },
];

const SERVICE_TRACK = [
  {
    icon: Smartphone,
    title: "Smartfony i diagnostyka",
    text: "Apple iPhone i Android — szybki montaż części Diagnosable (Asystent naprawy iOS), oryginałów oraz opcja lutowania IC.",
  },
  {
    icon: Laptop,
    title: "Laptopy i tablety",
    text: "Precyzyjne naprawy, podzespoły, zasilanie i mikrolutowanie BGA.",
  },
  {
    icon: Gamepad2,
    title: "Konsole i akcesoria",
    text: "PS5, PS4, Xbox i Switch — diagnostyka i naprawa modułów.",
  },
  {
    icon: PackageCheck,
    title: "Mobilnie i Paczkomat",
    text: "Dojazd do 100 km lub wysyłka urządzenia Paczkomatem STS13M.",
  },
];

export default function DualTrackOffer() {
  const sectionRef = useRef<HTMLElement>(null);
  const { audience, setAudience } = useAudience();
  const [activeNodes, setActiveNodes] = useState<Set<string>>(new Set());
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 72%", "end 45%"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const nodes = sectionRef.current?.querySelectorAll<HTMLElement>("[data-track-node]");
    if (!nodes?.length) return;
    const observer = new IntersectionObserver(
      entries => {
        setActiveNodes(previous => {
          const next = new Set(previous);
          entries.forEach(entry => {
            const id = entry.target.getAttribute("data-track-node");
            if (!id) return;
            if (entry.isIntersecting) next.add(id);
            else if (entry.boundingClientRect.top > 0) next.delete(id);
          });
          return next;
        });
      },
      { rootMargin: "-20% 0px -55%", threshold: 0.15 },
    );
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const b2bActive = audience === "b2b";
  const serviceActive = audience === "service";
  const b2bDimmed = serviceActive;
  const serviceDimmed = b2bActive;

  return (
    <section
      ref={sectionRef}
      id="oferta"
      className="scroll-mt-24 relative overflow-hidden border-b border-white/[0.07] px-4 py-24 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(255,184,0,0.08),transparent_28%),radial-gradient(circle_at_75%_30%,rgba(45,212,191,0.07),transparent_26%)]" />

      <div className="relative mx-auto max-w-7xl">
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 180"
          preserveAspectRatio="none"
          className="mx-auto mb-8 h-28 w-full max-w-3xl"
        >
          <defs>
            <linearGradient id="splitAmber" x1="0" x2="1">
              <stop offset="0" stopColor="#fff7d6" />
              <stop offset="1" stopColor="#ffb800" />
            </linearGradient>
            <linearGradient id="splitCyan" x1="0" x2="1">
              <stop offset="0" stopColor="#baf7e8" />
              <stop offset="1" stopColor="#2dd4bf" />
            </linearGradient>
          </defs>
          <path d="M600 8 C600 72 600 42 600 82" fill="none" stroke="rgba(255,255,255,.16)" strokeWidth="3" />
          <motion.path
            d="M600 8 C600 72 600 42 600 82"
            fill="none"
            stroke="url(#splitAmber)"
            strokeWidth="3"
            style={{ pathLength: progress }}
          />
          <path d="M600 82 C590 138 360 82 300 160" fill="none" stroke="rgba(255,184,0,.22)" strokeWidth="3" />
          <path d="M600 82 C610 138 840 82 900 160" fill="none" stroke="rgba(45,212,191,.22)" strokeWidth="3" />
        </svg>

        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
            Jedna firma // dwa kierunki wsparcia
          </span>
          <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Wybierz swoją ścieżkę
          </h2>
          <div className="mt-6">
            <AudienceFilter />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              layout
              id="b2b"
              aria-current={b2bActive ? "true" : undefined}
              className={`relative rounded-[28px] border border-[#ffb800]/12 bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-300 sm:p-7 ${
                serviceActive ? "hidden md:block md:scale-[0.99] md:opacity-[0.35] md:grayscale-[50%] md:hover:opacity-75" : "block"
              } ${b2bActive ? "ring-1 ring-amber-400/40" : ""}`}
            >
              {b2bDimmed && (
                <button
                  type="button"
                  aria-label="Pokaż tor Wsparcie IT dla firm"
                  onClick={() => setAudience("b2b")}
                  className="absolute inset-0 z-20 hidden cursor-pointer rounded-[28px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 md:block"
                />
              )}
              <div className="mb-7 flex items-center gap-3 border-b border-white/[0.07] pb-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#ffb800]/30 bg-[#ffb800]/10 text-[#ffb800]">
                  <Building2 size={20} />
                </span>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-[#ffb800]">Tor B2B</span>
                  <h3 className="text-xl font-bold text-white">Wsparcie IT dla firm</h3>
                </div>
              </div>

              <div className="relative space-y-5 pl-6 before:absolute before:bottom-8 before:left-[9px] before:top-8 before:w-px before:bg-[#ffb800]/25 sm:pl-8">
                <motion.div
                  className="absolute left-[9px] top-8 w-px origin-top bg-gradient-to-b from-[#ffb800] to-[#ffb800]/20"
                  style={{ height: "calc(100% - 4rem)", scaleY: progress }}
                />
                {B2B_TRACK.map((item, index) => {
                  const Icon = item.icon;
                  const active = activeNodes.has(`b2b-${index}`);
                  return (
                    <article
                      key={item.title}
                      data-track-node={`b2b-${index}`}
                      className={`relative rounded-2xl border p-5 transition-all duration-500 ${
                        active
                          ? "border-[#ffb800]/40 bg-[#ffb800]/[0.07] shadow-[0_16px_36px_-24px_rgba(255,184,0,0.7)]"
                          : "border-white/[0.07] bg-black/20"
                      }`}
                    >
                      <span
                        className={`absolute -left-6 top-6 h-3 w-3 rounded-full border-2 border-[#141414] transition-colors sm:-left-8 ${
                          active ? "bg-[#ffb800] shadow-[0_0_18px_#ffb800]" : "bg-[#8d6a12]"
                        }`}
                      />
                      <div className="flex items-start gap-4">
                        <Icon size={20} className="mt-0.5 shrink-0 text-[#ffb800]" />
                        <div>
                          <h4 className="text-sm font-bold text-white">{item.title}</h4>
                          <p className="mt-1.5 text-xs leading-relaxed text-neutral-400">{item.text}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <Link
                href="/it-dla-firm"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ffb800] px-5 py-3 text-xs font-black uppercase tracking-wider text-black transition-colors hover:bg-white"
              >
                Oferta B2B <ArrowUpRight size={15} />
              </Link>
            </motion.div>

            <motion.div
              layout
              id="serwis"
              aria-current={serviceActive ? "true" : undefined}
              className={`relative rounded-[28px] border border-[#2dd4bf]/12 bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-300 sm:p-7 ${
                b2bActive ? "hidden md:block md:scale-[0.99] md:opacity-[0.35] md:grayscale-[50%] md:hover:opacity-75" : "block"
              } ${serviceActive ? "ring-1 ring-emerald-400/40" : ""}`}
            >
              {serviceDimmed && (
                <button
                  type="button"
                  aria-label="Pokaż tor Naprawy sprzętu"
                  onClick={() => setAudience("service")}
                  className="absolute inset-0 z-20 hidden cursor-pointer rounded-[28px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 md:block"
                />
              )}
              <div className="mb-7 flex items-center gap-3 border-b border-white/[0.07] pb-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 text-[#2dd4bf]">
                  <Laptop size={20} />
                </span>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-[#2dd4bf]">Tor Serwisowy</span>
                  <h3 className="text-xl font-bold text-white">Naprawy sprzętu</h3>
                </div>
              </div>

              <div className="relative space-y-5 pl-6 before:absolute before:bottom-8 before:left-[9px] before:top-8 before:w-px before:bg-[#2dd4bf]/25 sm:pl-8">
                <motion.div
                  className="absolute left-[9px] top-8 w-px origin-top bg-gradient-to-b from-[#2dd4bf] to-[#2dd4bf]/20"
                  style={{ height: "calc(100% - 4rem)", scaleY: progress }}
                />
                {SERVICE_TRACK.map((item, index) => {
                  const Icon = item.icon;
                  const active = activeNodes.has(`service-${index}`);
                  return (
                    <article
                      key={item.title}
                      data-track-node={`service-${index}`}
                      className={`relative rounded-2xl border p-5 transition-all duration-500 ${
                        active
                          ? "border-[#2dd4bf]/40 bg-[#2dd4bf]/[0.07] shadow-[0_16px_36px_-24px_rgba(45,212,191,0.7)]"
                          : "border-white/[0.07] bg-black/20"
                      }`}
                    >
                      <span
                        className={`absolute -left-6 top-6 h-3 w-3 rounded-full border-2 border-[#141414] transition-colors sm:-left-8 ${
                          active ? "bg-[#2dd4bf] shadow-[0_0_18px_#2dd4bf]" : "bg-[#1f7167]"
                        }`}
                      />
                      <div className="flex items-start gap-4">
                        <Icon size={20} className="mt-0.5 shrink-0 text-[#2dd4bf]" />
                        <div>
                          <h4 className="text-sm font-bold text-white">{item.title}</h4>
                          <p className="mt-1.5 text-xs leading-relaxed text-neutral-400">{item.text}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <Link
                href="/cennik"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#2dd4bf]/40 bg-[#2dd4bf]/10 px-5 py-3 text-xs font-black uppercase tracking-wider text-[#2dd4bf] transition-colors hover:bg-[#2dd4bf] hover:text-black"
              >
                Wycena naprawy <ArrowUpRight size={15} />
              </Link>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
