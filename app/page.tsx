"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Building2, ChevronRight, Laptop, MapPin, ShieldCheck, Star, Truck } from "lucide-react";

import ContactModal from "./components/ContactModal";
import DualTrackOffer from "./components/DualTrackOffer";
import HowItWorks from "./components/HowItWorks";
import ReviewGate from "./components/ReviewGate";
import ShippingModal from "./components/ShippingModal";
import { useGeo } from "@/app/context/GeoContext";

export default function Home() {
  const { userCity, isWithinRange } = useGeo();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const reviews = [
    {
      name: "covall1",
      opinion: "Polecam, naprawa sprzętu DeWalt oraz serwis techniczny na najwyższym poziomie.",
      rating: 5,
      type: "Klient Indywidualny",
    },
    {
      name: "Marcin Puzerewski",
      opinion:
        "Ekspresowa naprawa adaptera Wi-Fi. Odbiór i zwrot pod drzwi. Bardzo dobre ceny i profesjonalna obsługa.",
      rating: 5,
      type: "Klient Indywidualny",
    },
    {
      name: "Adam Czerwiński",
      opinion: "Super wykonana praca i szybko. Polecam",
      rating: 5,
      type: "Klient Indywidualny",
    },
  ];

  return (
    <main
      id="start"
      className="min-h-screen overflow-x-hidden bg-[#141414] font-sans text-white selection:bg-[#ffb800] selection:text-black"
    >
      <section className="relative overflow-hidden border-b border-white/[0.07] px-4 pb-20 pt-28 sm:px-6 md:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,184,0,0.10),transparent_28%),radial-gradient(circle_at_82%_30%,rgba(45,212,191,0.06),transparent_24%),linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:auto,auto,48px_48px,48px_48px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ffb800]/35 bg-[#222]/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#ffb800] shadow-inner">
              <MapPin size={14} />
              {isWithinRange ? `Obsługa lokalna: ${userCity}` : "Obsługa IT lokalnie oraz wysyłkowo w całej Polsce"}
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Wsparcie IT oraz Mobilny Serwis
              <span className="mt-2 block text-[#ffb800]">jedna firma. Dwa specjalistyczne tory.</span>
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base">
              Rozsądnie dobieramy wsparcie do Twoich potrzeb — stałą opiekę IT i infrastruktury dla firm oraz precyzyjny
              serwis smartfonów, laptopów i konsol dla klientów indywidualnych.
            </p>

            <div className="grid gap-3 text-xs font-medium text-neutral-300 sm:grid-cols-3">
              <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-black/20 px-3 py-3">
                <Building2 size={16} className="shrink-0 text-[#ffb800]" />
                <span>LAN, Wi-Fi i B2B</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-black/20 px-3 py-3">
                <Laptop size={16} className="shrink-0 text-[#2dd4bf]" />
                <span>PC, GSM i konsole</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-black/20 px-3 py-3">
                <Truck size={16} className="shrink-0 text-[#ffb800]" />
                <span>Dojazd lub STS13M</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#ffb800] px-6 py-3.5 text-sm font-extrabold text-black shadow-[0_0_28px_rgba(255,184,0,0.22)] transition-colors hover:bg-white"
              >
                Zgłoś potrzebę <ChevronRight size={17} />
              </button>
              <Link
                href="/cennik"
                className="flex items-center justify-center gap-2 rounded-2xl border border-[#2dd4bf]/35 bg-[#2dd4bf]/[0.07] px-6 py-3.5 text-sm font-bold text-[#2dd4bf] transition-colors hover:bg-[#2dd4bf] hover:text-black"
              >
                Sprawdź cennik <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative h-[430px] overflow-hidden rounded-[32px] border border-white/10 bg-[#1c1c1c] shadow-[0_30px_80px_-30px_rgba(0,0,0,.9)]">
              <Image
                src="/brand-page.png"
                alt="Warsztat i centrum wsparcia IT Technik-Serwisu"
                fill
                priority
                sizes="(max-width: 1024px) 0px, 42vw"
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/10" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#111]/90 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#ffb800]">
                  <ShieldCheck size={15} /> Technicznie i odpowiedzialnie
                </div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                  Diagnostyka, Wsparcie, Mikrolutowanie, sieci LAN/Wi-Fi, backupy i serwis mobilny z dojazdem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.07] bg-[#1c1c1c] px-4 py-3.5 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 text-xs text-neutral-400 md:flex-row md:items-center">
          <div className="flex items-center gap-2 text-[#ffb800]">
            <span className="h-2 w-2 rounded-full bg-[#ffb800]" />
            <span className="font-bold uppercase tracking-wider">Zasięg do 100 km</span>
          </div>
          <p className="text-center font-medium text-neutral-300 md:text-right">
            Stargard, Szczecin, Pyrzyce, Przelewice, Barlinek, Goleniów i okolice.
          </p>
        </div>
      </section>

      <DualTrackOffer />

      <HowItWorks />

      <section id="wysylka" className="scroll-mt-24 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-[#1c1c1c]/90 p-6 backdrop-blur-2xl sm:p-10">
          <div className="mb-7 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#ffb800]/30 bg-[#ffb800]/10 text-[#ffb800]">
              <Truck size={21} />
            </span>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#ffb800]">Cała Polska</span>
              <h2 className="text-2xl font-bold">Serwis wysyłkowy Paczkomatem</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div className="space-y-4 text-xs leading-relaxed text-neutral-300 sm:text-sm">
              <p>
                Poza zasięgiem mobilnym wyślij sprzęt Paczkomatem. Po diagnozie przedstawiamy kosztorys, a po akceptacji
                wykonujemy naprawę i odsyłamy urządzenie.
              </p>
              <div className="flex items-center gap-2 font-bold text-[#2dd4bf]">
                <ShieldCheck size={17} /> Bezpieczne przekazanie i testy
              </div>
              <button
                type="button"
                onClick={() => setIsShippingOpen(true)}
                className="rounded-2xl border border-[#ffb800]/50 bg-[#ffb800]/10 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-[#ffb800] transition-colors hover:bg-[#ffb800] hover:text-black"
              >
                Instrukcja nadania
              </button>
            </div>
            <div className="rounded-2xl border border-white/[0.07] bg-black/30 p-5 font-mono text-xs text-neutral-300">
              <p>
                <strong className="text-white">Paczkomat:</strong> STS13M
              </p>
              <p className="mt-2">
                <strong className="text-white">Odbiorca:</strong> Technik-Serwisu
              </p>
              <p className="mt-2">
                <strong className="text-white">Telefon:</strong> +48 509 820 956
              </p>
              <p className="mt-2">
                <strong className="text-white">E-mail:</strong> kontakt@technik-serwisu.pl
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-[#181818] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#ffb800]">Opinie klientów</span>
            <h2 className="mt-2 text-3xl font-extrabold">Zaufali nam firmy i klienci indywidualni</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {reviews.map(review => (
              <article key={review.name} className="rounded-2xl border border-white/[0.07] bg-[#1c1c1c] p-6">
                <div className="flex justify-between gap-3">
                  <div className="flex text-[#ffb800]">
                    {[...Array(review.rating)].map((_, index) => (
                      <Star key={index} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#ffb800]">{review.type}</span>
                </div>
                <p className="mt-5 text-sm italic leading-relaxed text-neutral-300">&quot;{review.opinion}&quot;</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-white">— {review.name}</p>
              </article>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIsReviewOpen(true)}
            className="mx-auto mt-8 flex rounded-2xl border border-[#ffb800] px-7 py-3 text-xs font-extrabold uppercase tracking-wider text-[#ffb800] transition-colors hover:bg-[#ffb800] hover:text-black"
          >
            Dodaj opinię
          </button>
        </div>
      </section>

      <section id="o-mnie" className="scroll-mt-24 px-4 py-20 sm:px-6 md:py-24">
        <div className="mx-auto max-w-5xl border-l border-[#ffb800]/30 pl-5 sm:pl-8">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12">
            <div>
              <span className="inline-flex items-center rounded-full border border-[#ffb800]/25 bg-[#ffb800]/[0.07] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffb800]">
                WSPARCIE &amp; PRAKTYKA
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                O firmie Technik-Serwisu
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-neutral-300 sm:text-base">
                Nazywam się Przemysław. Łączę kompleksowe wsparcie IT dla firm z precyzyjnym serwisem sprzętu
                elektronicznego — z dojazdem do klienta lub wysyłkowo.
              </p>
            </div>

            <div className="space-y-6 text-sm leading-relaxed text-neutral-300 sm:text-base">
              <p>
                <strong className="font-semibold text-amber-400">Dla biznesu</strong> projektuję i buduję{" "}
                <strong className="font-semibold text-white">sieci komputerowe od zera</strong>, wdrażam środowiska{" "}
                <strong className="font-semibold text-white">Microsoft 365</strong>, administruję flotami urządzeń oraz
                tworzę <strong className="font-semibold text-white">strony internetowe i automatyzacje</strong>, które
                oszczędzają czas zespołu.{" "}
                <strong className="font-semibold text-emerald-400">W ramach serwisu sprzętowego</strong> zajmuję się{" "}
                <strong className="font-semibold text-white">szybką wymianą podzespołów</strong> w smartfonach (Apple
                iPhone z konfiguracją w Asystencie naprawy iOS oraz Android), laptopach i tabletach, a także wykonuję
                precyzyjne naprawy mikrolutownicze BGA i serwis konsol.
              </p>

              <blockquote className="border-l-2 border-amber-400 pl-4 italic text-zinc-300">
                „Wspieram rozwój firm poprzez bezpieczne i niezawodne środowisko IT, a klientom indywidualnym dostarczam
                pewny, wygodny serwis — z dojazdem pod drzwi w promieniu 100 km lub wygodnie przez Paczkomat z całej
                Polski.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <ReviewGate isOpen={isReviewOpen} onClose={() => setIsReviewOpen(false)} />
      <ShippingModal isOpen={isShippingOpen} onClose={() => setIsShippingOpen(false)} />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
