"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Calculator, Home, Layers, PhoneCall } from "lucide-react";
import ContactModal from "./ContactModal";

const BOTTOM_NAV_LINKS = ["/", "/#oferta", "/cennik", "/it-dla-firm"] as const;

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

export default function MobileBottomNav() {
  const pathname = usePathname();
  const hash = useSyncExternalStore(subscribeToHashChange, getLocationHash, () => "");
  const [clickedHref, setClickedHref] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a[href]");
      const href = link?.getAttribute("href");
      if (!href) return;

      const url = new URL(href, window.location.href);
      const target = `${url.pathname}${url.hash}`;
      if (url.origin === window.location.origin) setClickedHref(target);
    };
    const syncClickedHref = () => {
      const target = `${window.location.pathname}${window.location.hash}`;
      setClickedHref(BOTTOM_NAV_LINKS.some(item => item === target) ? target : null);
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

  const activeHref = (() => {
    if (pathname.startsWith("/cennik")) return "/cennik";
    if (pathname.startsWith("/it-dla-firm")) return "/it-dla-firm";

    if (pathname === "/") {
      if (clickedHref) {
        if (BOTTOM_NAV_LINKS.some(item => item === clickedHref)) return clickedHref;
        if (clickedHref.startsWith("/#")) return "/";
      }
      const hashHref = hash ? `/${hash}` : null;
      return hashHref === "/#oferta" ? hashHref : "/";
    }

    return pathname;
  })();

  const links = [
    { href: "/", label: "Start", icon: Home },
    { href: "/#oferta", label: "Oferta", icon: Layers },
    { href: "/cennik", label: "Cennik", icon: Calculator },
    { href: "/it-dla-firm", label: "Dla firm", icon: Building2 },
  ] as const;

  return (
    <>
      <nav
        aria-label="Dolna nawigacja mobilna"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0B0D0C]/90 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_rgba(0,0,0,0.6)] backdrop-blur-lg lg:hidden"
      >
        <div className="grid grid-cols-5 px-2 pt-2">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = activeHref === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setClickedHref(href)}
                aria-current={isActive ? "page" : undefined}
                className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-medium transition-colors ${
                  isActive ? "text-amber-400" : "text-zinc-400 hover:text-white"
                }`}
              >
                <span className="relative">
                  <Icon size={19} strokeWidth={isActive ? 2.2 : 1.8} />
                  {href === "/cennik" && (
                    <span
                      aria-label="Cennik Live"
                      className="absolute -right-1 -top-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400 ring-2 ring-[#0B0D0C]"
                    />
                  )}
                </span>
                <span className="whitespace-nowrap">{label}</span>
              </Link>
            );
          })}
          <button
            type="button"
            onClick={() => setIsContactModalOpen(true)}
            className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-medium text-amber-400 transition-colors hover:text-amber-300"
          >
            <PhoneCall size={19} />
            <span className="whitespace-nowrap">Zgłoś</span>
          </button>
        </div>
      </nav>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}
