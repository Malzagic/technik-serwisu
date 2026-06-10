// app/components/ShippingModal.tsx
"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Box, CheckCircle, Package } from "lucide-react";

export default function ShippingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#202020] p-8 w-[95%] max-w-lg z-[70] border border-[#333] shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X />
            </button>

            <h3 className="text-2xl font-bold mb-6 text-[#ffb800] flex items-center gap-2">
              <Package /> Bezpieczna wysyłka
            </h3>

            <div className="space-y-6 text-gray-300">
              <div className="flex gap-4">
                <div className="bg-[#ffb800] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <p>
                  <strong>Zabezpiecz sprzęt:</strong> Owiń urządzenie grubą warstwą folii bąbelkowej. Włóż je do
                  sztywnego kartonu – wypełnij wolne przestrzenie gazetami lub folią, aby nic nie latało w środku.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#ffb800] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <p>
                  <strong>Kartka w środku:</strong> Koniecznie włóż do paczki kartkę z: <strong>Opisem usterki</strong>,
                  Twoim <strong>numerem telefonu</strong> oraz <strong>adresem zwrotnym</strong>.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#ffb800] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <p>
                  <strong>Nadanie:</strong> Wybierz Paczkomat: <strong>ZOV01M</strong>. Jako odbiorcę wpisz &quot;Serwis
                  Technik-Serwisu&quot;, tel: +48 509 820 956.
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-[#1a1a1a] border border-[#ffb800]/20 rounded text-center">
              <CheckCircle className="text-[#ffb800] mx-auto mb-2" />
              <p className="text-sm">Po odebraniu paczki wykonuję darmową diagnostykę i dzwonię z wyceną!</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
