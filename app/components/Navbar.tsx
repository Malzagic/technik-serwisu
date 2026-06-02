"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#1a1a1a]/80 backdrop-blur-lg border-b border-[#333333]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section - Now links back to home (root) */}
        <Link href="/" className="flex items-center gap-3">
          {/* Logo jako obrazek (wrzuć favicon/logo.png do folderu public) */}
          <div className="relative w-10 h-10">
            <Image src="/logo.png" alt="Technik-Serwisu logo" fill className="object-contain" />
          </div>

          {/* Tekst marki */}
          <span className="text-2xl font-black tracking-tighter text-white">
            TECHNIK-<span className="text-[#ffb800]">SERWISU</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-semibold tracking-wide uppercase">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsOpen(false);
            }}
            className="text-gray-300 hover:text-[#ffb800] transition-colors uppercase"
          >
            Start
          </button>
          <a href="#o-mnie" className="text-gray-300 hover:text-[#ffb800] transition-colors">
            O mnie
          </a>
          <a href="#uslugi" className="text-gray-300 hover:text-[#ffb800] transition-colors">
            Usługi
          </a>
          <a
            href="#kontakt"
            className="bg-[#ffb800] text-black px-6 py-2.5 rounded-sm font-bold hover:bg-white transition-all"
          >
            Kontakt
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute w-full bg-[#1a1a1a] border-b border-[#333333] shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-6 text-lg font-medium text-center">
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#ffb800]">
                Start
              </Link>
              <a href="#o-mnie" onClick={() => setIsOpen(false)} className="hover:text-[#ffb800]">
                O mnie
              </a>
              <a href="#uslugi" onClick={() => setIsOpen(false)} className="hover:text-[#ffb800]">
                Usługi
              </a>
              <a href="#kontakt" onClick={() => setIsOpen(false)} className="text-[#ffb800]">
                Kontakt
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
