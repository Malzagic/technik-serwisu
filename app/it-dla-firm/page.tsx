// app/it-dla-firm/page.tsx
import React from "react";
import { ShieldCheck, Clock, Server, CheckCircle2, ArrowRight, Building2, Lock, Headphones } from "lucide-react";

export const metadata = {
  title: "Outsourcing IT dla Firm | SLA i Bezpieczeństwo - Technik-Serwisu.pl",
  description:
    "Dedykowana obsługa informatyczna dla firm w Stargardzie, Szczecinie i okolicach. Gwarantowane czasy reakcji SLA, ochrona sieci, backup i wsparcie on-site.",
};

export default function B2BPage() {
  return (
    <main className="min-h-screen bg-[#101010] text-white pt-28 pb-20 px-4 sm:px-6 relative overflow-hidden font-sans">
      {/* BACKGROUND FUTURE GLOW & GRID EFFECTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ffb800]/10 via-transparent to-transparent pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* HERO SECTION */}
        <div className="text-center space-y-4 relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a1a1a] border border-[#ffb800]/30 text-[#ffb800] text-[11px] font-mono uppercase tracking-widest shadow-[0_0_15px_rgba(255,184,0,0.15)]">
            <Building2 size={13} />
            <span>OUTSOURCING IT & BEZPIECZEŃSTWO BIZNESU</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-white leading-tight">
            BEZPIECZNA INFRASTRUKTURA <br className="hidden sm:inline" />
            <span className="text-[#ffb800]">BEZ ETATU INFORMATYKA</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base font-medium leading-relaxed">
            Zapewniamy ciągłość pracy komputerów, sieci i systemów w Twojej firmie. Wybierz elastyczny abonament z
            gwarantowanym czasem reakcji SLA oraz wsparciem on-site w Stargardzie i okolicach.
          </p>
        </div>

        {/* PRICING PACKAGES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* STARTER */}
          <div className="bg-[#1a1a1a]/80 border border-[#333333] rounded-2xl p-8 flex flex-col justify-between backdrop-blur-xl relative group hover:border-[#555555] transition-all duration-300">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  🟢 STARTER
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight">Małe Biuro</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Idealne rozwiązanie dla mikrofirm i punktów usługowych (1–3 stanowiska).
                </p>
              </div>

              <div className="py-4 border-y border-[#262626]">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black font-mono text-white">399</span>
                  <span className="text-sm font-bold text-[#ffb800]">PLN</span>
                  <span className="text-xs text-gray-500 font-mono">/ mies. brutto</span>
                </div>
                <div className="text-[11px] font-mono text-gray-400 mt-1">4 GODZINY wsparcia w cenie</div>
              </div>

              <ul className="space-y-3 text-xs text-gray-300 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#ffb800] shrink-0" />
                  <span>Pomoc zdalna (Helpdesk / Pulpit)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#ffb800] shrink-0" />
                  <span>SLA: Reakcja do końca nast. dnia</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#ffb800] shrink-0" />
                  <span>Diagnostyka Windows & Poczty</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#ffb800] shrink-0" />
                  <span>Obsługa drukarek i sieci LAN</span>
                </li>
              </ul>
            </div>

            <a
              href="#audyt-form"
              className="mt-8 w-full py-3 px-4 bg-[#262626] hover:bg-[#333333] text-white border border-[#444444] rounded-lg text-xs font-extrabold uppercase tracking-wider text-center transition-all duration-200"
            >
              Wybierz Starter
            </a>
          </div>

          {/* STANDARD (FEATURED) */}
          <div className="bg-[#1a1a1a] border-2 border-[#ffb800] rounded-2xl p-8 flex flex-col justify-between backdrop-blur-xl relative shadow-[0_0_30px_rgba(255,184,0,0.15)] transform md:-translate-y-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ffb800] text-black text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-full shadow-md">
              Rekomendowany Pakiet
            </div>

            <div className="space-y-6">
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-[#ffb800] font-bold uppercase tracking-wider">🔵 STANDARD</span>
                <h3 className="text-2xl font-black uppercase tracking-tight">Biznes Biurowy</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Kompleksowe wsparcie dla rozwijających się firm (3–6 stanowisk).
                </p>
              </div>

              <div className="py-4 border-y border-[#262626]">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black font-mono text-[#ffb800]">800</span>
                  <span className="text-sm font-bold text-[#ffb800]">PLN</span>
                  <span className="text-xs text-gray-500 font-mono">/ mies. brutto</span>
                </div>
                <div className="text-[11px] font-mono text-[#ffb800] mt-1">8 GODZIN w cenie + Dojazd</div>
              </div>

              <ul className="space-y-3 text-xs text-gray-200 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#ffb800] shrink-0" />
                  <span>
                    <strong>SLA: Czas reakcji do 8h roboczych</strong>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#ffb800] shrink-0" />
                  <span>
                    <strong>Wsparcie Zdalne + Dojazd w cenie</strong>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#ffb800] shrink-0" />
                  <span>Izolacja i segmentacja sieci (VLAN)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#ffb800] shrink-0" />
                  <span>Nadzór nad backupem i chmurą</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#ffb800] shrink-0" />
                  <span>Przegląd profilaktyczny (raz/kwartał)</span>
                </li>
              </ul>
            </div>

            <a
              href="#audyt-form"
              className="mt-8 w-full py-3.5 px-4 bg-[#ffb800] hover:bg-white text-black rounded-lg text-xs font-black uppercase tracking-wider text-center transition-all duration-200 shadow-lg"
            >
              Zamów Pakiet Standard
            </a>
          </div>

          {/* PRO */}
          <div className="bg-[#1a1a1a]/80 border border-[#333333] rounded-2xl p-8 flex flex-col justify-between backdrop-blur-xl relative group hover:border-[#555555] transition-all duration-300">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
                  🟣 PRO / PREMIUM
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight">Infrastruktura</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Dla firm z infrastrukturą krytyczną i zakłady (do 10 stanowisk).
                </p>
              </div>

              <div className="py-4 border-y border-[#262626]">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black font-mono text-white">1 199</span>
                  <span className="text-sm font-bold text-[#ffb800]">PLN</span>
                  <span className="text-xs text-gray-500 font-mono">/ mies. brutto</span>
                </div>
                <div className="text-[11px] font-mono text-purple-400 mt-1">16 GODZIN w cenie + PRIORYTET</div>
              </div>

              <ul className="space-y-3 text-xs text-gray-300 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#ffb800] shrink-0" />
                  <span>
                    <strong>PRIORYTET SLA: Reakcja do 4h</strong>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#ffb800] shrink-0" />
                  <span>Priorytetowy dojazd On-Site</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#ffb800] shrink-0" />
                  <span>Obsługa serwerów, NAS & VPN</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#ffb800] shrink-0" />
                  <span>Proaktywny monitoring sieci 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#ffb800] shrink-0" />
                  <span>Przegląd profilaktyczny (raz/miesiąc)</span>
                </li>
              </ul>
            </div>

            <a
              href="#audyt-form"
              className="mt-8 w-full py-3 px-4 bg-[#262626] hover:bg-[#333333] text-white border border-[#444444] rounded-lg text-xs font-extrabold uppercase tracking-wider text-center transition-all duration-200"
            >
              Wybierz PRO
            </a>
          </div>
        </div>

        {/* VALUE PROPOSITION CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 border-t border-[#262626]">
          <div className="bg-[#1a1a1a]/40 border border-[#333333] p-6 rounded-xl space-y-3">
            <Clock className="text-[#ffb800]" size={24} />
            <h4 className="text-sm font-extrabold uppercase tracking-wide">Ciągłość Pracy</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Usuwamy usterki zanim przełożą się na przestój w sprzedaży czy produkcji.
            </p>
          </div>

          <div className="bg-[#1a1a1a]/40 border border-[#333333] p-6 rounded-xl space-y-3">
            <Lock className="text-[#ffb800]" size={24} />
            <h4 className="text-sm font-extrabold uppercase tracking-wide">Ochrona Danych</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Separujemy kamery i sieć dla gości od komputerów biurowych i księgowości.
            </p>
          </div>

          <div className="bg-[#1a1a1a]/40 border border-[#333333] p-6 rounded-xl space-y-3">
            <Server className="text-[#ffb800]" size={24} />
            <h4 className="text-sm font-extrabold uppercase tracking-wide">Automatyczny Backup</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Nadzór nad bezpieczną synchronizacją kopii zapasowych w chmurze i serwerach NAS.
            </p>
          </div>

          <div className="bg-[#1a1a1a]/40 border border-[#333333] p-6 rounded-xl space-y-3">
            <Headphones className="text-[#ffb800]" size={24} />
            <h4 className="text-sm font-extrabold uppercase tracking-wide">Lokalny Partner</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Szybki dojazd on-site do firm na terenie Stargardu, Szczecina i Pyrzyc.
            </p>
          </div>
        </div>

        {/* LEAD MAGNET / AUDIT FORM SECTION */}
        <div
          id="audyt-form"
          className="bg-gradient-to-r from-[#1a1a1a] to-[#111111] border border-[#ffb800]/40 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ffb800] uppercase tracking-widest">
                <ShieldCheck size={16} />
                <span>BEZPŁATNA WERYFIKACJA INFRASTRUKTURY</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
                ZAMÓW BEZPŁATNY AUDYT IT W TWOJEJ FIRMIE
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Przeanalizujemy bezpieczeństwo Twojej sieci lokalnej, zweryfikujemy poprawność wykonywania kopii
                zapasowych (Backup) oraz sprawdzimy stan sprzętu w biurze. Bez żadnych zobowiązań.
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-4 bg-[#111111] p-6 rounded-xl border border-[#333333]">
              <div>
                <label className="block text-[11px] font-mono uppercase text-gray-400 mb-1">
                  Nazwa Firmy / Imię i Nazwisko
                </label>
                <input
                  type="text"
                  required
                  placeholder="np. Nazwa Firmy / Jan Kowalski"
                  className="w-full bg-[#1a1a1a] text-white placeholder-gray-600 px-4 py-3 rounded-lg border border-[#333333] focus:outline-none focus:border-[#ffb800] text-xs font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-gray-400 mb-1">
                  Numer Telefonu Kontaktowego
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+48 500 000 000"
                  className="w-full bg-[#1a1a1a] text-white placeholder-gray-600 px-4 py-3 rounded-lg border border-[#333333] focus:outline-none focus:border-[#ffb800] text-xs font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-gray-400 mb-1">Adres E-mail</label>
                <input
                  type="email"
                  required
                  placeholder="kontakt@twojafirma.pl"
                  className="w-full bg-[#1a1a1a] text-white placeholder-gray-600 px-4 py-3 rounded-lg border border-[#333333] focus:outline-none focus:border-[#ffb800] text-xs font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-[#ffb800] hover:bg-white text-black font-black uppercase tracking-wider text-xs rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Zamów Bezpłatny Audyt (0 PLN)</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
