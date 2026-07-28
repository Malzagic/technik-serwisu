// components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll helper function to return to the top of the page
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-[#1a1a1a]/80 backdrop-blur-lg border-b border-[#333333]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo Section */}
        <Link href="#start" onClick={handleScrollToTop} className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image src="/logo.png" alt="Technik-Serwisu logo" fill className="object-contain" priority />
          </div>

          <span className="text-2xl font-black tracking-tighter text-white">
            TECHNIK-<span className="text-[#ffb800]">SERWISU</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-semibold tracking-wide uppercase">
          <a
            href="#start"
            onClick={handleScrollToTop}
            className="text-gray-300 hover:text-[#ffb800] transition-colors cursor-pointer"
          >
            Start
          </a>
          <a href="#uslugi" className="text-gray-300 hover:text-[#ffb800] transition-colors">
            Usługi
          </a>
          <a href="#wysylka" className="text-gray-300 hover:text-[#ffb800] transition-colors">
            Paczkomat
          </a>
          <a href="#o-mnie" className="text-gray-300 hover:text-[#ffb800] transition-colors">
            O mnie
          </a>
          <a
            href="#kontakt"
            className="bg-[#ffb800] text-black px-6 py-2.5 rounded-sm font-bold hover:bg-white transition-all"
          >
            Kontakt
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute w-full bg-[#1a1a1a] border-b border-[#333333] shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-6 text-lg font-medium text-center uppercase">
              <a
                href="#start"
                onClick={handleScrollToTop}
                className="hover:text-[#ffb800] transition-colors cursor-pointer"
              >
                Start
              </a>
              <a href="#uslugi" onClick={() => setIsOpen(false)} className="hover:text-[#ffb800]">
                Usługi
              </a>
              <a href="#wysylka" onClick={() => setIsOpen(false)} className="hover:text-[#ffb800]">
                Paczkomat
              </a>
              <a href="#o-mnie" onClick={() => setIsOpen(false)} className="hover:text-[#ffb800]">
                O mnie
              </a>
              <a href="#kontakt" onClick={() => setIsOpen(false)} className="text-[#ffb800] font-bold">
                Kontakt
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
