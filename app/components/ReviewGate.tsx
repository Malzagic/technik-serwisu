"use client";
import React, { useState } from "react";
import { Star, Mail, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReviewGate({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState("choice");
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#202020] p-8 w-[95%] max-w-sm z-[70] border border-[#333] shadow-2xl text-center"
          >
            <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X />
            </button>

            {step === "choice" && (
              <>
                <h3 className="text-xl font-bold mb-6">Jak oceniasz nasze usługi?</h3>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => setStep("positive")}
                    className="bg-[#ffb800] text-black px-6 py-2 font-bold hover:bg-white transition-colors"
                  >
                    Wszystko OK
                  </button>
                  <button
                    onClick={() => setStep("negative")}
                    className="bg-[#333] text-white px-6 py-2 hover:bg-[#444] transition-colors"
                  >
                    Mam uwagę
                  </button>
                </div>
              </>
            )}

            {step === "positive" && (
              <>
                <Star className="text-[#ffb800] mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-4">Cieszymy się!</h3>
                <p className="mb-6 text-gray-400">Będziemy wdzięczni za opinię w Google.</p>
                <a
                  href={googleReviewLink}
                  target="_blank"
                  className="block bg-[#ffb800] text-black px-6 py-3 font-bold hover:bg-white"
                >
                  Dodaj opinię w Google
                </a>
              </>
            )}

            {step === "negative" && (
              <>
                <Mail className="text-red-500 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-4">Daj nam szansę</h3>
                <p className="mb-6 text-gray-400">
                  Przykro nam, że coś poszło nie tak. Napisz do nas bezpośrednio, na pewno to wyjaśnimy.
                </p>
                <a
                  href="mailto:devpmme@gmail.com"
                  className="block bg-red-600 text-white px-6 py-3 font-bold hover:bg-red-700"
                >
                  Napisz e-mail
                </a>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
