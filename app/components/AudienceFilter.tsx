"use client";

import { motion } from "framer-motion";
import { Layers3, Building2, Wrench } from "lucide-react";
import { useAudience, type Audience } from "@/app/context/AudienceContext";

interface AudienceFilterProps {
  className?: string;
}

const OPTIONS: Array<{ value: Audience; label: string; icon: typeof Layers3 }> = [
  { value: "all", label: "Wszystko", icon: Layers3 },
  { value: "b2b", label: "Dla Firm", icon: Building2 },
  { value: "service", label: "Serwis", icon: Wrench },
];

export default function AudienceFilter({ className = "" }: AudienceFilterProps) {
  const { audience, setAudience } = useAudience();

  return (
    <div
      role="radiogroup"
      aria-label="Wybierz obszar oferty"
      className={`relative grid w-full max-w-md grid-cols-3 rounded-2xl border border-white/10 bg-black/40 p-1 backdrop-blur-2xl ${className}`}
    >
      {OPTIONS.map(option => {
        const Icon = option.icon;
        const selected = audience === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => setAudience(option.value)}
            className={`relative z-10 flex min-h-10 items-center justify-center gap-1.5 rounded-xl px-2 text-[11px] font-bold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
              selected ? "text-[#0B0D0C]" : "text-neutral-400 hover:text-white"
            }`}
          >
            {selected && (
              <motion.span
                layoutId="audience-filter"
                className={`absolute inset-0 -z-10 rounded-xl shadow-[0_8px_24px_-8px_rgba(255,184,0,0.4)] ${
                  option.value === "service"
                    ? "bg-[#10B981] shadow-[0_8px_24px_-8px_rgba(16,185,129,0.5)]"
                    : "bg-[#FBBF24]"
                }`}
                transition={{ type: "spring", stiffness: 450, damping: 32 }}
              />
            )}
            <Icon size={14} className="shrink-0" />
            <span className="whitespace-nowrap">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
