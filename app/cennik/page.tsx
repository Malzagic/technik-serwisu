import { fetchPricingData } from "../../app/lib/pricingService";
import { PricingSearch } from "../components/pricing/PricingSearch";
import { Cpu, Zap, ShieldCheck, Navigation } from "lucide-react";

export default async function PricingPage() {
  const pricingItems = await fetchPricingData();

  return (
    <main className="min-h-screen bg-[#08090a] text-white pt-32 pb-28 px-4 sm:px-6 relative overflow-hidden font-sans">
      {/* BACKGROUND: AMBIENT GLOW & SUBTLE GRID */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[450px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ffb800]/12 via-transparent to-transparent pointer-events-none -z-10 blur-2xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto space-y-12">
        {/* HEADER */}
        <div className="text-center space-y-4 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#ffb800] text-[11px] font-mono uppercase tracking-widest backdrop-blur-md shadow-[0_0_20px_rgba(255,184,0,0.1)]">
            <Cpu size={13} />
            <span>Kalkulator Napraw // Baza B2B & Detal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white">
            Wycena napraw{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb800] to-amber-200">&</span>{" "}
            dojazdów
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
            Wyszukaj urządzenie, kategorię, usługę lub słowo kluczowe. Podane kwoty dotyczą czystej robocizny;
            części dobierane są indywidualnie jako oryginalne lub Diagnosable.
          </p>
        </div>

        {/* PRICING SEARCH */}
        <PricingSearch initialItems={pricingItems} />

        {/* 3 GLASS INFORMATION CARDS AT THE BOTTOM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-white/10">
          <div className="group rounded-2xl p-5 bg-white/[0.02] border border-white/10 backdrop-blur-xl flex items-start gap-4 hover:border-white/20 transition-colors">
            <div className="p-2.5 bg-black/60 text-[#ffb800] rounded-xl border border-white/10 group-hover:border-[#ffb800]/30 transition-colors shrink-0">
              <Zap size={18} />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Szybki Dojazd Mobilny</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Realizacja napraw na miejscu u klienta w Stargardzie, Pyrzycach i okolicach do 100 km.
              </p>
            </div>
          </div>

          <div className="group rounded-2xl p-5 bg-white/[0.02] border border-white/10 backdrop-blur-xl flex items-start gap-4 hover:border-white/20 transition-colors">
            <div className="p-2.5 bg-black/60 text-[#ffb800] rounded-xl border border-white/10 group-hover:border-[#ffb800]/30 transition-colors shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Fabryczna Chemia & Sprzęt BGA</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Montaż na dedykowanych uszczelkach, termopadach wysokiej przewodności i topnikach bezołowiowych.
              </p>
            </div>
          </div>

          <div className="group rounded-2xl p-5 bg-white/[0.02] border border-white/10 backdrop-blur-xl flex items-start gap-4 hover:border-white/20 transition-colors">
            <div className="p-2.5 bg-black/60 text-[#ffb800] rounded-xl border border-white/10 group-hover:border-[#ffb800]/30 transition-colors shrink-0">
              <Navigation size={18} />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Strefy Dojazdowe</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Strefa A (rejon bazowy) gratis przy naprawach powyżej 130 PLN. Przejrzyste warunki bez ukrytych opłat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
