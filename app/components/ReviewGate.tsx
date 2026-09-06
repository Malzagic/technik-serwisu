// app/components/ReviewGate.tsx
"use client";

import React, { useState } from "react";
import { Star, Mail, X, ThumbsUp, MessageSquareWarning } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReviewGate({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState<"choice" | "positive" | "negative">("choice");
  const googleReviewLink = "https://g.page/r/CbvTE5UaDPBwEBM/review";

  const handleClose = () => {
    setStep("choice");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: "-48%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: "-48%" }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#202020] p-6 sm:p-8 w-[95%] max-w-sm z-[70] border-t-4 border-[#ffb800] shadow-2xl text-center"
          >
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
  );
}
