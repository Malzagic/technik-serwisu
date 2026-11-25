// app/components/ReviewGate.tsx
"use client";

import React, { useState } from "react";
import { Star, Mail, X, ThumbsUp, MessageSquareWarning } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ModalPortal from "./ModalPortal";

export default function ReviewGate({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState<"choice" | "positive" | "negative">("choice");
  const googleReviewLink = "https://g.page/r/CbvTE5UaDPBwEBM/review";

  const handleClose = () => {
    setStep("choice");
    onClose();
  };

  return (
    <ModalPortal>
      <AnimatePresence>
        {isOpen && (
          <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/75 z-[60] backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-42%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-42%" }}
            transition={{ type: "spring", stiffness: 360, damping: 30 }}
            className="fixed top-1/2 left-1/2 w-[95%] max-w-sm z-[70] p-6 sm:p-8 bg-[#11151a]/90 border border-white/10 rounded-3xl backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.75)] text-center"
          >
            <div className="pointer-events-none absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Zamknij okno"
            >
              <X size={20} />
            </button>

            {step === "choice" && (
              <>
                <h3 className="text-xl font-bold mb-2 text-white">Jak oceniasz współpracę z nami?</h3>
                <p className="text-xs text-gray-400 mb-6">
                  Twoja opinia pomaga rozwijać nasze usługi IT i serwis mobilny w regionie.
                </p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => setStep("positive")}
                    className="bg-[#ffb800] text-black font-bold py-3 px-4 hover:bg-white transition-colors flex items-center justify-center gap-2 text-xs uppercase tracking-wider rounded-sm shadow"
                  >
                    <ThumbsUp size={16} /> Bardzo Dobrze (Polecam)
                  </button>
                  <button
                    onClick={() => setStep("negative")}
                    className="bg-[#262626] text-gray-300 font-semibold py-3 px-4 hover:bg-[#333] hover:text-white transition-colors flex items-center justify-center gap-2 text-xs uppercase tracking-wider border border-[#333] rounded-sm"
                  >
                    <MessageSquareWarning size={16} className="text-gray-400" /> Mam uwagi do usługi
                  </button>
                </div>
              </>
            )}

            {step === "positive" && (
              <>
                <Star className="text-[#ffb800] mx-auto mb-3" size={48} />
                <h3 className="text-xl font-bold mb-2 text-white">Dziękujemy za zaufanie!</h3>
                <p className="mb-6 text-xs text-gray-400 leading-relaxed">
                  Będziemy niezmiernie wdzięczni za wystawienie krótkiej opinii w Google – to najlepsze wsparcie dla
                  naszej firmy!
                </p>
                <a
                  href={googleReviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#ffb800] text-black font-bold py-3 px-4 hover:bg-white transition-colors text-xs uppercase tracking-wider rounded-sm shadow"
                >
                  Dodaj opinię w Google
                </a>
              </>
            )}

            {step === "negative" && (
              <>
                <Mail className="text-red-500 mx-auto mb-3" size={48} />
                <h3 className="text-xl font-bold mb-2 text-white">Daj nam szansę to wyjaśnić</h3>
                <p className="mb-6 text-xs text-gray-400 leading-relaxed">
                  Przykro nam, że usługa nie spełniła w 100% Twoich oczekiwań. Napisz do nas bezpośrednio – natychmiast
                  zweryfikujemy sprawę i znajdziemy rozwiązanie.
                </p>
                <a
                  href="mailto:kontakt@technik-serwisu.pl"
                  className="block bg-red-600 text-white font-bold py-3 px-4 hover:bg-red-700 transition-colors text-xs uppercase tracking-wider rounded-sm shadow"
                >
                  Napisz wiadomość e-mail
                </a>
              </>
            )}
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </ModalPortal>
  );
}
