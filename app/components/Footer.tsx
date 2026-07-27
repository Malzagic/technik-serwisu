// components/Footer.tsx
"use client";

import React, { useState } from "react";
import { useGeo } from "@/app/context/GeoContext";

export default function Footer() {
  const [showPhone, setShowPhone] = useState(false);
  const { userCity, isWithinRange } = useGeo();

  return (
    <footer id="kontakt" className="bg-[#111111] border-t-2 border-[#333333] py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-gray-400">
        {/* Column 1: CONTACT INFO */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-[#ffb800] font-bold mb-4 uppercase tracking-wider">Kontakt</h4>
          <p className="mb-1 font-semibold text-white">Technik-Serwisu</p>
          <p className="mb-2">Stargard, Polska</p>
          <p
            className="text-white hover:text-[#ffb800] transition-colors cursor-pointer"
            onClick={() => setShowPhone(true)}
            onMouseEnter={() => setShowPhone(true)}
          >
            {showPhone ? (
              <a href="tel:+48509820956" className="hover:underline font-bold text-[#ffb800]">
                tel: +48 509 820 956
              </a>
            ) : (
              "tel: +48 XXX XXX XXX"
            )}
          </p>
        </div>

        {/* Column 2: QUICK LINKS & SOCIALS */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-[#ffb800] font-bold mb-4 uppercase tracking-wider">Szybki Kontakt</h4>
          <ul className="space-y-2 w-full flex flex-col items-center md:items-start">
            <li>
              <a href="#uslugi" className="hover:text-white transition-colors">
                Zakres usług
              </a>
            </li>
            <li>
              <a href="#wysylka" className="hover:text-white transition-colors">
                Naprawa wysyłkowa (Paczkomat)
              </a>
            </li>
            <li>
              <a
                href="mailto:kontakt@technik-serwisu.pl"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wyślij wiadomość
              </a>
            </li>
            <li className="pt-4 flex gap-4">
              <a
                href="https://www.facebook.com/serwistechnikserwisu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffb800] transition-colors font-medium"
              >
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@technikserwisupmdev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffb800] transition-colors font-medium"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: DYNAMIC SERVICE AREA BASED ON GEOLOCATION */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-[#ffb800] font-bold mb-4 uppercase tracking-wider">Zasięg Działania</h4>
          <p className="text-sm leading-relaxed max-w-[280px]">
            {isWithinRange ? (
              <>
                Serwis mobilny z dojazdem:{" "}
                <strong className="text-white">
                  Obsługujemy miejscowość {userCity} oraz całą okolicę do 100 km od Stargardu
                </strong>
                .
              </>
            ) : (
              <>
                Serwis mobilny z dojazdem:{" "}
                <strong className="text-white">Stargard i okolice w promieniu do 100 km</strong> (Szczecin, Pyrzyce,
                Choszczno i inne).
              </>
            )}
          </p>
          <p className="text-sm leading-relaxed max-w-[280px] mt-2 text-gray-500">
            Dla klientów z całej Polski: bezpieczna i szybka naprawa wysyłkowa przez Paczkomat InPost.
          </p>
        </div>
      </div>

      {/* Footer copyright section */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-[#222222] text-center text-sm text-gray-600">
        © 2026 PMDEV Technik Serwisu. Wszystkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
