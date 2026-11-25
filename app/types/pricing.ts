export interface RawPricingItem {
  id: number;
  model: string;
  usluga: string;
  cenaStacjonarna: string | number;
  cenaMobilnaStrefaA: string | number;
  kategoria?: string;
  podkategoria?: string;
  slowaKluczowe?: string;
  opisTechniczny?: string;
  [key: string]: unknown;
}

export interface PricingItem {
  id: number;
  model: string;
  serviceName: string;
  stationaryPrice: number;
  mobilePriceZoneA: number;
  category: string;
  subcategory: string;
  keywords: string;
  description: string;
}

export type ShippingZone = "STATIONARY" | "ZONE_A" | "ZONE_B";
