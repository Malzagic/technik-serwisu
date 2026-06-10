// components/ShippingInfo.tsx
import { Package, ShieldCheck, Truck } from "lucide-react";

export default function ShippingInfo() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto bg-[#1a1a1a]">
      <h3 className="text-2xl font-bold mb-8 text-[#ffb800] border-l-4 border-[#ffb800] pl-4">
        Bezpieczna wysyłka krok po kroku
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-gray-400">
            Nie jesteś z okolic Pyrzyc? Żaden problem. Oferujemy w pełni bezpieczną naprawę wysyłkową. Każde urządzenie
            traktujemy z najwyższą starannością, jakby było nasze własne.
          </p>
          <div className="flex items-center gap-3 text-sm text-green-500 font-semibold">
            <ShieldCheck size={20} /> <span>Ubezpieczona przesyłka w obie strony</span>
          </div>
        </div>

        <div className="bg-[#262626] p-6 rounded border border-[#333]">
          <h4 className="font-bold mb-4 flex items-center gap-2">
            <Truck className="text-[#ffb800]" /> Dane do wysyłki
          </h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <strong>Paczkomat:</strong> ZOV01M
            </li>
            <li>
              <strong>Odbiorca:</strong> Serwis Technik-Serwisu
            </li>
            <li>
              <strong>Tel:</strong> +48 509 820 956
            </li>
            <li className="mt-4 text-xs italic text-gray-500">
              *Proszę dołącz kartkę z opisem usterki i numerem telefonu wewnątrz paczki.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
