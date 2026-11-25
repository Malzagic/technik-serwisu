import { RawPricingItem, PricingItem } from "../types/pricing";

const GOOGLE_APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_URL || "";

/**
 * Converts a price to an integer by keeping only its digits when provided as a string.
 * Returns 0 when the input is empty or contains no digits.
 */
function parsePrice(value: string | number): number {
  if (typeof value === "number") return value;
  if (!value) return 0;
  const digits = value.toString().replace(/[^0-9]/g, "");
  return digits ? parseInt(digits, 10) : 0;
}

function firstText(item: RawPricingItem, keys: string[]): string {
  for (const key of keys) {
    const value = item[key];
    if (typeof value === "string" || typeof value === "number") {
      const text = value.toString().trim();
      if (text) return text;
    }
  }
  return "";
}

function firstValue(item: RawPricingItem, keys: string[], fallback: string | number): string | number {
  for (const key of keys) {
    const value = item[key];
    if (typeof value === "string" || typeof value === "number") return value;
  }
  return fallback;
}

/**
 * Fetches pricing rows from the configured Google Apps Script endpoint and normalizes them.
 *
 * The response is revalidated hourly. If the endpoint is not configured or the request fails,
 * the error is logged and an empty list is returned.
 */
export async function fetchPricingData(): Promise<PricingItem[]> {
  if (!GOOGLE_APPS_SCRIPT_URL) {
    console.error("❌ BŁĄD: Zmienna NEXT_PUBLIC_GOOGLE_SHEETS_API_URL nie jest zdefiniowana w .env.local!");
    return [];
  }

  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "GET",
      redirect: "follow",
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error(`❌ HTTP Error: ${response.status} ${response.statusText} dla URL: ${GOOGLE_APPS_SCRIPT_URL}`);
      throw new Error(`Failed to fetch pricing data: ${response.statusText}`);
    }

    const rawData: RawPricingItem[] = await response.json();

    return rawData.map((item, index) => {
      const model = firstText(item, ["model", "urzadzenie", "urządzenie", "device"]);
      const serviceName = firstText(item, ["usluga", "usługa", "podkategoria", "subcategory", "serviceName"]);
      const category = firstText(item, ["kategoria", "category", "grupa"]);
      const subcategory = firstText(item, ["podkategoria", "subcategory", "typ"]);
      const keywords = firstText(item, ["slowaKluczowe", "słowaKluczowe", "keywords", "wyszukiwanie"]);
      const description = firstText(item, ["opisTechniczny", "opis", "description"]);
      return {
        id: typeof item.id === "number" ? item.id : index + 1,
        model,
        serviceName,
        category,
        subcategory,
        keywords,
        description,
        stationaryPrice: parsePrice(firstValue(item, ["cenaStacjonarna", "cenaRobocizna", "cenaCzysta", "stationaryPrice"], 0)),
        mobilePriceZoneA: parsePrice(firstValue(item, ["cenaMobilnaStrefaA", "cenaMobilna", "mobilePriceZoneA"], 0)),
      };
    });
  } catch (error) {
    console.error("❌ Błąd podczas pobierania danych z Google Sheets:", error);
    return [];
  }
}
