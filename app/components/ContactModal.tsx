// app/components/ContactModal.tsx
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail } from "lucide-react";

/**
 * ContactModal Component
 * Provides quick contact options with interactive phone reveal.
 * Closes automatically when navigating to internal sections.
 */
export default function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-[60] backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#262626] p-8 w-[90%] max-w-md z-[70] border-t-4 border-[#ffb800] shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X />
            </button>

            <h3 className="text-2xl font-bold mb-6 text-[#ffb800]">Zgłoś naprawę</h3>

            <div className="space-y-4">
              {/* Phone reveal section */}
              <div
                onClick={() => setShowPhone(true)}
                onMouseEnter={() => setShowPhone(true)}
                className="cursor-pointer group"
              >
                {showPhone ? (
                  <a
                    href="tel:+48509820956"
                    className="flex items-center gap-4 p-4 bg-[#1a1a1a] hover:bg-[#333] transition-all rounded border border-transparent hover:border-[#ffb800]"
                  >
                    <Phone className="text-[#ffb800]" />
                    <span>Zadzwoń teraz: +48 509 820 956</span>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 bg-[#1a1a1a] hover:bg-[#333] transition-all rounded border border-transparent">
                    <Phone className="text-[#ffb800]" />
                    <span>Zadzwoń teraz: +48 XXX XXX XXX</span>
                  </div>
                )}
              </div>

              {/* Email link */}
              <a
                href="mailto:devpmme@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#1a1a1a] hover:bg-[#333] transition-all rounded border border-transparent hover:border-[#ffb800]"
              >
                <Mail className="text-[#ffb800]" />
                <span>Wyślij e-mail</span>
              </a>

              {/* Navigation link to shipping section with modal auto-close */}
              <p className="text-sm text-gray-500 mt-4 text-center">
                Preferujesz wysyłkę? Sprawdź szczegóły w sekcji{" "}
                <a
                  href="#wysylka"
                  onClick={onClose}
                  className="text-[#ffb800] underline hover:text-white transition-colors"
                >
                  Naprawa Wysyłkowa
                </a>{" "}
                poniżej.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
