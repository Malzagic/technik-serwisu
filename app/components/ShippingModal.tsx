// app/components/ShippingModal.tsx
"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Package } from "lucide-react";

export default function ShippingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          {/* Backdrop / Tło przysłaniające */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container - Idealnie wyśrodkowany */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative bg-[#202020] p-6 sm:p-8 w-full max-w-lg z-10 border-t-4 border-[#ffb800] shadow-2xl overflow-y-auto max-h-[88vh] rounded-sm"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Zamknij okno"
            >
              <X size={22} />
            </button>

            <h3 className="text-2xl font-bold mb-2 text-[#ffb800] flex items-center gap-2">
              <Package className="text-[#ffb800]" /> Naprawa Wysyłkowa Paczkomatem
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Instrukcja pakowania i nadania sprzętu dla klientów z całej Polski (B2B & B2C).
            </p>

            <div className="space-y-5 text-gray-300 text-xs sm:text-sm">
              <div className="flex gap-4 items-start">
                <div className="bg-[#ffb800] text-black w-7 h-7 rounded-full flex items-center justify-center font-bold shrink-0 text-xs mt-0.5">
                  1
                </div>
                <p className="leading-relaxed">
                  <strong className="text-white">Zabezpiecz sprzęt:</strong> Owiń urządzenie grubą warstwą folii
                  bąbelkowej. Włóż je do sztywnego kartonu i wypełnij wolne przestrzenie, aby paczka była stabilna w
                  transporcie.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-[#ffb800] text-black w-7 h-7 rounded-full flex items-center justify-center font-bold shrink-0 text-xs mt-0.5">
                  2
                </div>
                <div>
                  <p className="leading-relaxed mb-1">
                    <strong className="text-white">Kartka w środku:</strong> Dołącz do paczki kartkę zawierającą:
                  </p>
                  <ul className="list-disc pl-4 text-gray-400 space-y-1 text-xs">
                    <li>Opis usterki i kod blokady ekranu (jeśli dotyczy)</li>
                    <li>Twój numer telefonu kontaktowego</li>
                    <li>
                      <strong className="text-gray-200">Dla firm:</strong> NIP / dane do faktury
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-[#ffb800] text-black w-7 h-7 rounded-full flex items-center justify-center font-bold shrink-0 text-xs mt-0.5">
                  3
                </div>
                <p className="leading-relaxed">
                  <strong className="text-white">Nadanie Paczkomatem InPost:</strong> Wybierz kod Paczkomatu:{" "}
                  <strong className="text-[#ffb800]">STS13M</strong>. Odbiorca: &quot;Technik-Serwisu&quot;, tel:{" "}
                  <strong>+48 509 820 956</strong>, email: <strong>kontakt@technik-serwisu.pl</strong>.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#1a1a1a] border border-[#ffb800]/30 rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-[#ffb800] font-bold text-xs">
                <CheckCircle size={16} />
                <span>Bezpieczeństwo & Wycena</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Po odebraniu przesyłki wykonujemy bezpłatną diagnostykę wstępną, dzwonimy z kosztorysem i po akceptacji
                naprawiamy oraz odsyłamy urządzenie w 24–48h.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
