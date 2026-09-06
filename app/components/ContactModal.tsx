// app/components/ContactModal.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, Building2, User, Send, CheckCircle2, Shield } from "lucide-react";

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [showPhone, setShowPhone] = useState(false);
  const [clientType, setClientType] = useState<"b2c" | "b2b">("b2c");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Zgłoszenie:", { clientType, ...formData });
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

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
            className="relative bg-[#262626] p-6 sm:p-8 w-full max-w-lg z-10 border-t-4 border-[#ffb800] shadow-2xl max-h-[88vh] overflow-y-auto rounded-sm"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Zamknij okno"
            >
              <X size={22} />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 size={56} className="text-[#ffb800] mx-auto" />
                <h3 className="text-2xl font-bold text-white">Dziękujemy za zgłoszenie!</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Skontaktujemy się z Tobą najszybciej jak to możliwe, aby omówić szczegóły naprawy lub obsługi IT.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-[#ffb800] text-black font-bold px-6 py-2.5 rounded-sm hover:bg-white transition-colors text-sm"
                >
                  Zamknij okno
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-2 text-[#ffb800]">Szybki Kontakt & Zgłoszenie</h3>
                <p className="text-xs text-gray-400 mb-6">Zadzwoń bezpośrednio lub wypełnij krótki formularz wyceny.</p>

                {/* Szybkie przyciski bezpośrednie */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div
                    onClick={() => setShowPhone(true)}
                    onMouseEnter={() => setShowPhone(true)}
                    className="cursor-pointer"
                  >
                    {showPhone ? (
                      <a
                        href="tel:+48509820956"
                        className="flex items-center justify-center gap-2 p-3 bg-[#1a1a1a] hover:bg-[#333] transition-all border border-[#ffb800] text-white text-xs font-bold rounded-sm"
                      >
                        <Phone size={16} className="text-[#ffb800]" />
                        <span>+48 509 820 956</span>
                      </a>
                    ) : (
                      <div className="flex items-center justify-center gap-2 p-3 bg-[#1a1a1a] hover:bg-[#333] transition-all border border-[#333] text-gray-300 text-xs font-bold rounded-sm">
                        <Phone size={16} className="text-[#ffb800]" />
                        <span>Pokaż Telefon</span>
                      </div>
                    )}
                  </div>

                  <a
                    href="mailto:kontakt@technik-serwisu.pl"
                    className="flex items-center justify-center gap-2 p-3 bg-[#1a1a1a] hover:bg-[#333] transition-all border border-[#333] hover:border-[#ffb800] text-gray-300 text-xs font-bold rounded-sm"
                  >
                    <Mail size={16} className="text-[#ffb800]" />
                    <span>Napisz E-mail</span>
                  </a>
                </div>

                <div className="relative flex py-2 items-center mb-6">
                  <div className="flex-grow border-t border-[#333]"></div>
                  <span className="flex-shrink mx-4 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    lub wysłanie zapytania
                  </span>
                  <div className="flex-grow border-t border-[#333]"></div>
                </div>

                {/* Wybór typu klienta: Prywatnie vs Firma */}
                <div className="flex gap-2 mb-4 bg-[#1a1a1a] p-1 border border-[#333]">
                  <button
                    type="button"
                    onClick={() => setClientType("b2c")}
                    className={`flex-1 py-2 text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      clientType === "b2c" ? "bg-[#ffb800] text-black shadow" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <User size={14} /> Osoba Prywatna
                  </button>
                  <button
                    type="button"
                    onClick={() => setClientType("b2b")}
                    className={`flex-1 py-2 text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      clientType === "b2b" ? "bg-[#ffb800] text-black shadow" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <Building2 size={14} /> Firma / B2B
                  </button>
                </div>

                {/* Formularz zgłoszeniowy */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  {clientType === "b2b" && (
                    <div>
                      <label className="block text-[11px] font-bold text-gray-300 uppercase mb-1">
                        Nazwa Firmy / NIP
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="np. Firma Sp. z o.o."
                        value={formData.companyName}
                        onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full bg-[#1a1a1a] border border-[#333] focus:border-[#ffb800] px-3 py-2 text-xs text-white outline-none rounded-sm"
                      />
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-300 uppercase mb-1">
                        Imię i Nazwisko
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jan Kowalski"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#1a1a1a] border border-[#333] focus:border-[#ffb800] px-3 py-2 text-xs text-white outline-none rounded-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-300 uppercase mb-1">
                        Telefon kontaktowy
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+48 ___ ___ ___"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#1a1a1a] border border-[#333] focus:border-[#ffb800] px-3 py-2 text-xs text-white outline-none rounded-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-300 uppercase mb-1">Adres E-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="kontakt@domena.pl"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1a1a1a] border border-[#333] focus:border-[#ffb800] px-3 py-2 text-xs text-white outline-none rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-300 uppercase mb-1">
                      Opis usterki / Zakres obsługi
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder={
                        clientType === "b2b"
                          ? "np. Przegląd 5 laptopów biurowych, wymiana baterii, konfiguracja sieci..."
                          : "np. Wymiana szybki iPhone 13, Stargard z dojazdem..."
                      }
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#1a1a1a] border border-[#333] focus:border-[#ffb800] px-3 py-2 text-xs text-white outline-none rounded-sm resize-none"
                    ></textarea>
                  </div>

                  {/* Informacja o rozliczeniu / RODO */}
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 pt-1">
                    <Shield size={14} className="text-[#ffb800] flex-shrink-0" />
                    <span>
                      {clientType === "b2b"
                        ? "Wystawiamy faktury (zwolnienie z VAT). Pełna poufność danych firmowych."
                        : "Gwarantujemy bezpieczeństwo danych na naprawianym urządzeniu."}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#ffb800] hover:bg-white text-black font-bold py-3 px-4 text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 mt-2"
                  >
                    <Send size={14} /> Wyślij Zgłoszenie
                  </button>
                </form>

                <p className="text-[11px] text-gray-500 mt-4 text-center">
                  Preferujesz naprawę wysyłkową? Sprawdź instrukcję w sekcji{" "}
                  <a
                    href="#wysylka"
                    onClick={onClose}
                    className="text-[#ffb800] underline hover:text-white transition-colors"
                  >
                    Paczkomat InPost
                  </a>
                  .
                </p>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
