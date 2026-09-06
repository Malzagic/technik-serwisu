// app/context/GeoContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { STARGARD_COORDS, calculateDistance } from "@/app/lib/geo";

interface GeoContextType {
  userCity: string;
  isWithinRange: boolean;
  isLoading: boolean;
}

const DEFAULT_CITY = "Stargard";
const MAX_SERVICE_RADIUS_KM = 100;

const GeoContext = createContext<GeoContextType>({
  userCity: DEFAULT_CITY,
  isWithinRange: true,
  isLoading: true,
});

export function GeoProvider({ children }: { children: ReactNode }) {
  const [userCity, setUserCity] = useState<string>(DEFAULT_CITY);
  const [isWithinRange, setIsWithinRange] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function detectUserLocation() {
      try {
        const response = await fetch("/api/geo");
        if (!response.ok) return;

        const data = await response.json();
        const userLat = parseFloat(data.lat);
        const userLng = parseFloat(data.lng);
        const cityName = data.city;

        if (!userLat || !userLng || !cityName) return;

        const distance = calculateDistance(STARGARD_COORDS.lat, STARGARD_COORDS.lng, userLat, userLng);

        const isNearby = distance <= MAX_SERVICE_RADIUS_KM;

        setUserCity(isNearby ? cityName : DEFAULT_CITY);
        setIsWithinRange(isNearby);
      } catch (error) {
        console.warn("Geolocation resolution failed, fallback applied:", error);
        setUserCity(DEFAULT_CITY);
        setIsWithinRange(true);
      } finally {
        setIsLoading(false);
      }
    }

    detectUserLocation();
  }, []);

  return <GeoContext.Provider value={{ userCity, isWithinRange, isLoading }}>{children}</GeoContext.Provider>;
}

/**
 * Custom hook to consume geolocation context throughout the application.
 */
export function useGeo() {
  return useContext(GeoContext);
}
