"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Calculator, Building2, PhoneCall, Menu, X } from "lucide-react";
import ContactModal from "./ContactModal";

const NAV_LINKS = [
  { href: "/", label: "Start" },
  { href: "/#oferta", label: "Oferta" },
  { href: "/cennik", label: "Cennik", icon: Calculator, badge: "Live" },
  { href: "/it-dla-firm", label: "Dla firm", icon: Building2 },
  { href: "/#wysylka", label: "Paczkomat" },
  { href: "/#o-mnie", label: "O firmie" },
];

function subscribeToHashChange(callback: () => void) {
  window.addEventListener("hashchange", callback);
  window.addEventListener("popstate", callback);
  return () => {
    window.removeEventListener("hashchange", callback);
    window.removeEventListener("popstate", callback);
  };
}

function getLocationHash() {
  return window.location.hash;
}

export default function Navbar() {
  const pathname = usePathname();
  const [clickedHref, setClickedHref] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const hash = useSyncExternalStore(subscribeToHashChange, getLocationHash, () => "");

  const activeTab = (() => {
    if (pathname.startsWith("/cennik")) return "/cennik";
    if (pathname.startsWith("/it-dla-firm")) return "/it-dla-firm";

    if (pathname === "/") {
      if (clickedHref && NAV_LINKS.some(link => link.href === clickedHref)) return clickedHref;

      const hashHref = hash ? `/${hash}` : null;
      return hashHref && NAV_LINKS.some(link => link.href === hashHref) ? hashHref : "/";
    }

    return pathname;
  })();

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a[href]");
      const href = link?.getAttribute("href");
      if (!href) return;

      const url = new URL(href, window.location.href);
      const target = `${url.pathname}${url.hash}`;
      if (url.origin === window.location.origin && NAV_LINKS.some(item => item.href === target)) {
        setClickedHref(target);
      }
    };
    const syncClickedHref = () => {
      const { pathname: currentPath, hash: currentHash } = window.location;
      const target = `${currentPath}${currentHash}`;
      setClickedHref(NAV_LINKS.some(item => item.href === target) ? target : null);
    };
    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("hashchange", syncClickedHref);
    window.addEventListener("popstate", syncClickedHref);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("hashchange", syncClickedHref);
      window.removeEventListener("popstate", syncClickedHref);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setClickedHref(href);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B0D0C]/85 px-4 backdrop-blur-md sm:px-6">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 md:h-[76px]">
          <Link
            href="/"
            onClick={() => handleNavClick("/")}
            className="group flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-xl"
          >
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-black/40 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Technik-Serwisu logo"
                fill
                sizes="32px"
                className="object-contain p-0.5"
                priority
              />
            </div>

            <div className="flex min-w-0 flex-col">
              <span className="whitespace-nowrap text-sm font-black leading-none tracking-tight text-white transition-colors group-hover:text-[#ffb800]">
                TECHNIK<span className="text-[#ffb800]">-SERWISU</span>
              </span>
              <span className="mt-0.5 whitespace-nowrap font-mono text-[9px] uppercase leading-tight tracking-widest text-neutral-400">
                Wsparcie IT i Serwis
              </span>
            </div>
          </Link>

          <LayoutGroup id="desktop-navbar">
            <nav
              aria-label="Nawigacja główna"
              className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1"
            >
              {NAV_LINKS.map(link => {
                const isActive = activeTab === link.href;
                const Icon = link.icon;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl px-2.5 py-2 text-[11px] font-semibold tracking-wide transition-all duration-200 xl:px-3 xl:text-xs ${
                      isActive ? "text-white" : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {Icon && (
                      <Icon size={14} className={`shrink-0 ${isActive ? "text-[#ffb800]" : "text-neutral-400"}`} />
                    )}
                    <span className="whitespace-nowrap">{link.label}</span>

                    {link.badge && (
                      <span className="ml-0.5 whitespace-nowrap rounded-full border border-[#ffb800]/30 bg-[#ffb800]/15 px-1.5 text-[9px] font-mono font-bold text-[#ffb800]">
                        {link.badge}
                      </span>
                    )}

                    {isActive && (
                      <motion.div
                        layout="position"
                        layoutId="desktopNavActive"
                        className="absolute inset-0 rounded-xl bg-white/10 border border-white/10 -z-10"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </LayoutGroup>

          <div className="flex shrink-0 items-center gap-2 lg:ml-2">
            <button
              type="button"
              onClick={() => setIsContactModalOpen(true)}
              className="hidden whitespace-nowrap rounded-xl bg-[#ffb800] px-2.5 py-2 text-[10px] font-extrabold uppercase tracking-wide text-black transition-colors hover:bg-white lg:inline-flex xl:px-3 xl:text-[11px]"
            >
              Zgłoś awarię
              <PhoneCall size={13} className="ml-1.5" />
            </button>
            <Link
              href="/cennik"
              onClick={() => handleNavClick("/cennik")}
              className="inline-flex min-h-10 items-center gap-1.5 whitespace-nowrap rounded-xl border border-[#ffb800]/30 bg-[#ffb800]/10 px-3 text-xs font-bold text-[#ffb800] transition-colors hover:bg-[#ffb800] hover:text-black lg:hidden"
            >
              <Calculator size={15} />
              Cennik
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(open => !open)}
              aria-label={mobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/10 lg:hidden"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            id="mobile-navigation"
            className="fixed inset-x-3 top-[4.5rem] z-40 rounded-2xl border border-white/10 bg-[#0B0D0C]/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl lg:hidden sm:inset-x-6"
          >
            <nav aria-label="Nawigacja mobilna" className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    handleNavClick(link.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex min-h-11 items-center gap-2 whitespace-nowrap rounded-xl border px-3 text-xs font-semibold transition-colors ${
                    activeTab === link.href
                      ? "border-[#ffb800]/30 bg-[#ffb800]/10 text-[#ffb800]"
                      : "border-white/[0.06] bg-white/[0.03] text-neutral-300 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {(() => {
                    const Icon = link.icon;
                    return Icon ? <Icon size={14} className="shrink-0" /> : null;
                  })()}
                  <span className="whitespace-nowrap">{link.label}</span>
                  {link.badge && <span className="whitespace-nowrap text-[9px] text-[#ffb800]">{link.badge}</span>}
                </Link>
              ))}
            </nav>
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-white/10 pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsContactModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#ffb800] px-3 text-xs font-extrabold uppercase text-black"
              >
                Zgłoś awarię <PhoneCall size={14} />
              </button>
              <a
                href="tel:+48509820956"
                className="flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/10 bg-white/[0.04] px-3 text-xs font-bold text-white"
              >
                <PhoneCall size={14} /> Zadzwoń
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}
