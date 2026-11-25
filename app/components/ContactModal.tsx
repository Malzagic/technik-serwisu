"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, Building2, User, Send, CheckCircle2, Shield, Loader2, Sparkles } from "lucide-react";
import ModalPortal from "./ModalPortal";

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [showPhone, setShowPhone] = useState(false);
  const [clientType, setClientType] = useState<"b2c" | "b2b">("b2c");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          clientType,
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        alert("Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub zadzwoń bezpośrednio.");
      }
    } catch (err) {
      console.error(err);
      alert("Błąd połączenia. Spróbuj ponownie później.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ name: "", companyName: "", phone: "", email: "", message: "" });
    onClose();
  };

  return (
    <ModalPortal>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-4">
          {/* Backdrop z głębokim rozmyciem */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Szklany kontener VisionOS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="relative bg-[#0d0f12]/95 border border-white/10 p-5 sm:p-7 w-full max-w-lg z-10 rounded-3xl backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] max-h-[90vh] overflow-y-auto"
          >
            {/* Ambient glow z góry */}
            <div className="pointer-events-none absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#ffb800]/50 to-transparent" />

            {/* Przycisk zamknięcia */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/[0.04] border border-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              aria-label="Zamknij okno"
            >
              <X size={18} />
            </button>

            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#ffb800]/10 border border-[#ffb800]/30 flex items-center justify-center text-[#ffb800]">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Dziękujemy za zgłoszenie!</h3>
                <p className="text-neutral-400 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                  Skontaktujemy się z Tobą najszybciej jak to możliwe, aby potwierdzić wycenę i ustalić termin
                  realizacji.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="bg-[#ffb800] text-black font-extrabold px-6 py-2.5 rounded-xl hover:bg-white transition-all text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,184,0,0.3)] cursor-pointer"
                  >
                    Zamknij okno
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="pr-8 mb-5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ffb800]/10 border border-[#ffb800]/25 text-[#ffb800] text-[10px] font-mono uppercase tracking-wider mb-2">
                    <Sparkles size={11} />
                    <span>Infolinia & Wycena Live</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Szybki Kontakt <span className="text-[#ffb800]">&</span> Zgłoszenie
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Wybierz preferowaną formę kontaktu lub prześlij parametry usterki.
                  </p>
                </div>

                {/* Szybkie przyciski kontaktu */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                  <div
                    onClick={() => setShowPhone(true)}
                    onMouseEnter={() => setShowPhone(true)}
                    className="cursor-pointer"
                  >
                    {showPhone ? (
                      <a
                        href="tel:+48509820956"
                        className="flex items-center justify-center gap-2 p-3 bg-black/50 hover:bg-black/70 border border-[#ffb800]/60 text-[#ffb800] text-xs font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(255,184,0,0.15)]"
                      >
                        <Phone size={15} />
                        <span>+48 509 820 956</span>
                      </a>
                    ) : (
                      <div className="flex items-center justify-center gap-2 p-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-neutral-300 text-xs font-semibold rounded-xl transition-all">
                        <Phone size={15} className="text-[#ffb800]" />
                        <span>Pokaż Telefon</span>
                      </div>
                    )}
                  </div>

                  <a
                    href="mailto:kontakt@technik-serwisu.pl"
                    className="flex items-center justify-center gap-2 p-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 text-neutral-300 text-xs font-semibold rounded-xl transition-all"
                  >
                    <Mail size={15} className="text-[#ffb800]" />
                    <span>Napisz E-mail</span>
                  </a>
                </div>

                {/* Rozdzielacz */}
                <div className="relative flex py-1 items-center mb-5">
                  <div className="flex-grow border-t border-white/10"></div>
                  <span className="flex-shrink mx-3 text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
                    lub formularz zgłoszeniowy
                  </span>
                  <div className="flex-grow border-t border-white/10"></div>
                </div>

                {/* Przełącznik profilu klienta z animowanym layoutId */}
                <div className="flex bg-black/40 p-1 rounded-xl border border-white/10 mb-4 relative">
                  <button
                    type="button"
                    onClick={() => setClientType("b2c")}
                    className={`relative flex-1 py-2 text-xs font-bold flex items-center justify-center gap-2 transition-colors z-10 cursor-pointer ${
                      clientType === "b2c" ? "text-black" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {clientType === "b2c" && (
                      <motion.div
                        layoutId="clientTypeGlow"
                        className="absolute inset-0 bg-[#ffb800] rounded-lg shadow-[0_0_15px_rgba(255,184,0,0.4)]"
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <User size={14} /> Osoba Prywatna
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setClientType("b2b")}
                    className={`relative flex-1 py-2 text-xs font-bold flex items-center justify-center gap-2 transition-colors z-10 cursor-pointer ${
                      clientType === "b2b" ? "text-black" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {clientType === "b2b" && (
                      <motion.div
                        layoutId="clientTypeGlow"
                        className="absolute inset-0 bg-[#ffb800] rounded-lg shadow-[0_0_15px_rgba(255,184,0,0.4)]"
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <Building2 size={14} /> Firma / B2B
                    </span>
                  </button>
                </div>

                {/* Formularz */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <AnimatePresence initial={false}>
                    {clientType === "b2b" && (
                      <motion.div
                        key="company-name"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                        Nazwa Firmy / NIP
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="np. Przedsiębiorstwo Sp. z o.o. / 854..."
                        value={formData.companyName}
                        onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 focus:border-[#ffb800]/60 focus:ring-1 focus:ring-[#ffb800]/50 px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 outline-none rounded-xl transition-all"
                      />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                        Imię i Nazwisko
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jan Kowalski"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 focus:border-[#ffb800]/60 focus:ring-1 focus:ring-[#ffb800]/50 px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 outline-none rounded-xl transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                        Telefon kontaktowy
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+48 ___ ___ ___"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 focus:border-[#ffb800]/60 focus:ring-1 focus:ring-[#ffb800]/50 px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 outline-none rounded-xl transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                      Adres E-mail
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="kontakt@twojadomena.pl"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 focus:border-[#ffb800]/60 focus:ring-1 focus:ring-[#ffb800]/50 px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 outline-none rounded-xl transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                      Opis usterki / Zakres obsługi
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder={
                        clientType === "b2b"
                          ? "np. Audyt sieci LAN/WiFi, administracja 8 stanowiskami PC, konserwacja..."
                          : "np. Wymiana baterii iPhone 13, mikrolutowanie BGA, czyszczenie układu..."
                      }
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 focus:border-[#ffb800]/60 focus:ring-1 focus:ring-[#ffb800]/50 px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 outline-none rounded-xl transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-[10px] text-neutral-400 pt-1">
                    <Shield size={13} className="text-[#ffb800] shrink-0" />
                    <span>
                      {clientType === "b2b"
                        ? "Wystawiamy faktury (zwolnienie z VAT). Pełna poufność danych firmowych (NDA/RODO)."
                        : "Gwarantujemy 100% bezpieczeństwa danych na przekazywanym nośniku."}
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ffb800] hover:bg-white text-black font-extrabold py-3 px-4 text-xs uppercase tracking-wider transition-all duration-200 rounded-xl flex items-center justify-center gap-2 mt-2 shadow-[0_0_20px_rgba(255,184,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={15} className="animate-spin" /> Wysyłanie zgłoszenia...
                      </>
                    ) : (
                      <>
                        <Send size={15} /> Wyślij Zgłoszenie
                      </>
                    )}
                  </button>
                </form>

                <p className="text-[11px] text-neutral-400 mt-4 text-center">
                  Preferujesz naprawę wysyłkową? Sprawdź instrukcję w sekcji{" "}
                  <Link
                    href="/#wysylka"
                    onClick={onClose}
                    className="text-[#ffb800] underline underline-offset-2 hover:text-white transition-colors"
                  >
                    Paczkomat InPost
                  </Link>
                  .
                </p>
              </>
            )}
          </motion.div>
          </div>
        )}
      </AnimatePresence>
    </ModalPortal>
  );
}
