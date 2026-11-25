"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cpu, MapPin, PhoneCall, Search, Wrench, X } from "lucide-react";
import ContactModal from "../ContactModal";
import type { PricingItem } from "../../types/pricing";

interface PricingSearchProps {
  initialItems: PricingItem[];
}

const CATEGORIES = [
  "Wszystkie",
  "Smartfony - Apple iPhone",
  "Smartfony - Samsung",
  "Smartfony - Xiaomi/POCO",
  "Smartfony - Inne Marki",
  "Tablety",
  "Konsole i Akcesoria",
  "Laptopy i Komputery",
  "Infrastruktura IT & B2B",
  "Logistyka i Dojazd",
] as const;

function inferCategory(item: PricingItem): string {
  if (item.category?.trim()) return item.category.trim();
  const haystack =
    `${item.model} ${item.serviceName} ${item.subcategory} ${item.keywords} ${item.description}`.toLowerCase();
  if (/iphone|apple|ios/.test(haystack)) return "Smartfony - Apple iPhone";
  if (/samsung|galaxy/.test(haystack)) return "Smartfony - Samsung";
  if (/xiaomi|poco|redmi/.test(haystack)) return "Smartfony - Xiaomi/POCO";
  if (/tablet|ipad/.test(haystack)) return "Tablety";
  if (/ps5|ps4|xbox|switch|console|konsol/.test(haystack)) return "Konsole i Akcesoria";
  if (/laptop|notebook|pc|komputer/.test(haystack)) return "Laptopy i Komputery";
  if (/sieć|lan|wifi|nas|backup|b2b|it\b|serwer/.test(haystack)) return "Infrastruktura IT & B2B";
  if (/dojazd|logist|paczkomat|dostawa/.test(haystack)) return "Logistyka i Dojazd";
  if (/android|smartfon|telefon|gsm/.test(haystack)) return "Smartfony - Inne Marki";
  return "Inne";
}

export function PricingSearch({ initialItems }: PricingSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("Wszystkie");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const normalizedItems = useMemo(
    () => initialItems.map(item => ({ ...item, resolvedCategory: inferCategory(item) })),
    [initialItems],
  );

  const filteredItems = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return normalizedItems.filter(item => {
      const categoryMatch = category === "Wszystkie" || item.resolvedCategory === category;
      if (!categoryMatch) return false;
      if (!query) return true;
      const fullText = [
        item.model,
        item.serviceName,
        item.subcategory,
        item.keywords,
        item.description,
        item.resolvedCategory,
      ]
        .join(" ")
        .toLowerCase();
      return query.split(/\s+/).every(word => fullText.includes(word));
    });
  }, [category, normalizedItems, searchTerm]);

  return (
    <div className="mx-auto w-full max-w-5xl space-y-5">
      <div className="relative rounded-[24px] border border-white/10 bg-white/[0.035] p-3 backdrop-blur-2xl">
        <div className="pointer-events-none absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#ffb800]/50 to-transparent" />
        <div className="relative">
          <label htmlFor="pricing-search" className="sr-only">
            Szukaj modelu, usługi, słowa kluczowego lub części
          </label>
          <Search
            size={18}
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#ffb800]"
          />
          <input
            id="pricing-search"
            type="text"
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
            placeholder="Szukaj modelu, usługi, słowa kluczowego lub części..."
            className="w-full rounded-2xl border border-white/[0.08] bg-black/40 py-4 pl-12 pr-12 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-[#ffb800]/50 focus:ring-1 focus:ring-[#ffb800]/30"
          />
          {searchTerm.length > 0 && (
            <button
              type="button"
              aria-label="Wyczyść wyszukiwanie"
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div
          className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:overflow-x-visible"
          role="group"
          aria-label="Kategorie cennika"
        >
          {CATEGORIES.map(item => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={`shrink-0 rounded-xl border px-3 py-2 text-[10px] font-bold uppercase tracking-wide transition-colors ${
                category === item
                  ? "border-[#ffb800]/50 bg-[#ffb800] text-black"
                  : "border-white/[0.08] bg-black/20 text-neutral-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-1 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
        <span>{filteredItems.length} pozycji</span>
        <span className="flex items-center gap-1.5 text-[#2dd4bf]">
          <Cpu size={12} /> Cennik Live
        </span>
      </div>

      <AnimatePresence mode="popLayout">
        {filteredItems.length > 0 ? (
          <motion.div layout className="space-y-3">
            {filteredItems.slice(0, 40).map((item, index) => {
              const isLogisticsItem = /logistyka|dojazd/i.test(item.resolvedCategory);
              const isInfrastructureItem = /infrastruktura|oprogramowanie/i.test(item.resolvedCategory);
              const hasSingleServiceRate =
                isInfrastructureItem && item.stationaryPrice === item.mobilePriceZoneA;
              const showSinglePrice = isLogisticsItem || hasSingleServiceRate;
              const singlePrice = isLogisticsItem ? item.mobilePriceZoneA : item.stationaryPrice;
              const isFreeLogistics = isLogisticsItem && singlePrice === 0;
              const footerNote = isLogisticsItem
                ? "Opłata jednorazowa za dojazd technika do klienta. Przy kompleksowych naprawach lub stałej obsłudze B2B dojazd wyceniamy indywidualnie."
                : isInfrastructureItem
                  ? "Podana kwota dotyczy usługi inżynierskiej / konfiguracyjnej. Wdrożenia wielostanowiskowe rozliczamy na podstawie faktury VAT."
                  : "Podane ceny dotyczą robocizny. Części dobierane indywidualnie: oryginały lub Diagnosable.";

              return (
                <motion.article
                  layout
                  key={`${item.id}-${item.model}-${item.serviceName}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 350, damping: 30, delay: Math.min(index * 0.025, 0.25) }}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition-colors hover:border-[#ffb800]/35 hover:bg-white/[0.04] sm:p-5"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-[#2dd4bf]/20 bg-[#2dd4bf]/[0.07] px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-[#2dd4bf]">
                          {item.resolvedCategory}
                        </span>
                        {item.subcategory && (
                          <span className="text-[10px] uppercase tracking-wider text-neutral-500">
                            {item.subcategory}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-white sm:text-lg">{item.model}</h3>
                      <p className="mt-1 text-xs text-neutral-400 sm:text-sm">
                        {item.serviceName || "Usługa serwisowa"}
                      </p>
                      {item.description && (
                        <p className="mt-2 max-w-2xl text-xs leading-relaxed text-neutral-500">{item.description}</p>
                      )}
                    </div>

                    {showSinglePrice ? (
                      <div className="shrink-0 sm:w-[300px]">
                        <div
                          className={`rounded-xl border p-3 ${
                            isFreeLogistics
                              ? "border-emerald-500/30 bg-emerald-500/10"
                              : "border-[#ffb800]/20 bg-[#ffb800]/[0.07]"
                          }`}
                        >
                          <span
                            className={`flex items-center gap-1 text-[9px] uppercase tracking-wider ${
                              isFreeLogistics ? "text-emerald-400" : "text-[#ffb800]"
                            }`}
                          >
                            {isLogisticsItem ? <MapPin size={10} /> : <Wrench size={10} />}
                            {isLogisticsItem ? "Koszt dojazdu" : "Stawka usługi"}
                          </span>
                          <strong
                            className={`mt-1 block font-mono text-base ${
                              isFreeLogistics ? "text-emerald-400" : "text-[#ffb800]"
                            }`}
                          >
                            {isFreeLogistics ? "GRATIS" : `${singlePrice} PLN`}
                          </strong>
                        </div>
                      </div>
                    ) : (
                      <div className="grid shrink-0 grid-cols-2 gap-2 sm:w-[300px]">
                        <div className="rounded-xl border border-white/[0.08] bg-black/30 p-3">
                          <span className="flex items-center gap-1 text-[9px] uppercase tracking-wider text-neutral-500">
                            <Wrench size={10} /> Czysta robocizna
                          </span>
                          <strong className="mt-1 block font-mono text-base text-white">
                            {item.stationaryPrice} PLN
                          </strong>
                        </div>
                        <div className="rounded-xl border border-[#ffb800]/20 bg-[#ffb800]/[0.07] p-3">
                          <span className="flex items-center gap-1 text-[9px] uppercase tracking-wider text-[#ffb800]">
                            <MapPin size={10} /> Mobilnie
                          </span>
                          <strong className="mt-1 block font-mono text-base text-[#ffb800]">
                            {item.mobilePriceZoneA} PLN
                          </strong>
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="mt-3 border-t border-white/[0.06] pt-3 text-[10px] leading-relaxed text-neutral-500">
                    {footerNote}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] px-6 py-14 text-center"
          >
            <Search size={28} className="mx-auto text-[#ffb800]" />
            <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-white">
              Nie znaleźliśmy tego modelu w standardowym cenniku
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-neutral-400 sm:text-sm">
              Obsługujemy również mniej popularne modele smartfonów, tabletów, laptopów i konsol. Napisz lub zadzwoń,
              aby szybko sprawdzić koszt i dostępność części.
            </p>
            <div className="mx-auto mt-6 flex max-w-md flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setCategory("Wszystkie");
                }}
                className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-xl border border-white/10 bg-white/[0.04] px-4 text-xs font-bold text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                Wyczyść filtry
              </button>
              <button
                type="button"
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#ffb800] px-4 text-xs font-extrabold text-[#0B0D0C] transition-colors hover:bg-amber-300"
              >
                <PhoneCall size={14} /> Zapytaj o wycenę
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <aside className="mt-8 space-y-3 border-t border-white/10 pt-5 text-xs leading-relaxed text-zinc-400 sm:text-sm">
        <p>
          Nie znalazłeś na liście swojego modelu urządzenia lub konkretnej usługi?{" "}
          <button
            type="button"
            onClick={() => setIsContactModalOpen(true)}
            className="cursor-pointer appearance-none border-0 bg-transparent p-0 font-semibold text-amber-400 underline underline-offset-4 transition-colors hover:text-amber-300"
          >
            Skontaktuj się z nami
          </button>{" "}
          — przygotujemy indywidualną wycenę naprawy na podstawie dokładnego modelu i dostępności części.
        </p>
        <p>
          Cennik ma charakter informacyjny i jest na bieżąco aktualizowany — ostateczny koszt naprawy może ulec zmianie
          w zależności od wariantu wybranych części (oryginał / Diagnosable / zamiennik) oraz aktualnych cen hurtowych.
        </p>
      </aside>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}
