"use client";
import React, { useState } from "react";

export default function Footer() {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <footer id="kontakt" className="bg-[#111111] border-t-2 border-[#333333] py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-gray-400">
        {/* Kolumna 1: KONTAKT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-[#ffb800] font-bold mb-4">KONTAKT</h4>
          <p className="mb-1">Technik-Serwisu</p>
          <p className="mb-2">Pyrzyce, Polska</p>
          <p
            className="text-white hover:text-[#ffb800] transition-colors cursor-pointer"
            onClick={() => setShowPhone(true)}
            onMouseEnter={() => setShowPhone(true)}
          >
            {showPhone ? (
              <a href="tel:+48509820956" className="hover:underline">
                tel: +48 509 820 956
              </a>
            ) : (
              "tel: +48 XXX XXX XXX"
            )}
          </p>
        </div>

        {/* Kolumna 2: SZYBKI KONTAKT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-[#ffb800] font-bold mb-4">SZYBKI KONTAKT</h4>
          <ul className="space-y-2 w-full flex flex-col items-center md:items-start">
            <li>
              <a href="#uslugi" className="hover:text-white transition-colors">
                Zakres usług
              </a>
            </li>
            <li>
              <a
                href="mailto:devpmme@gmail.com"
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
                className="hover:text-[#ffb800] transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@technikserwisupmdev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffb800] transition-colors"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>

        {/* Kolumna 3: ZASIĘG */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-[#ffb800] font-bold mb-4">ZASIĘG</h4>
          <p className="text-sm leading-relaxed max-w-[250px]">
            Działamy w Pyrzycach i okolicach (do 50km). Obsługujemy klientów z całego kraju poprzez wysyłkę kurierską.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-[#222222] text-center text-sm text-gray-600">
        © 2026 PMDEV Technik Serwisu. Wszystkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
