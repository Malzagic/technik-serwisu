// app/context/GeoContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { STARGARD_COORDS, calculateDistance } from "@/app/lib/geo";

interface GeoContextType {
  userCity: string;
  isWithinRange: boolean;
  isLoading: boolean;
}

const GeoContext = createContext<GeoContextType>({
  userCity: "Stargard",
  isWithinRange: true,
  isLoading: true,
});

export function GeoProvider({ children }: { children: ReactNode }) {
  const [userCity, setUserCity] = useState<string>("Stargard");
  const [isWithinRange, setIsWithinRange] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function detectUserLocation() {
      try {
        // Fetch from internal proxy API route to avoid CORS and rate-limit issues
        const response = await fetch("/api/geo");
        if (!response.ok) return;

        const data = await response.json();
        const userLat = parseFloat(data.lat);
        const userLng = parseFloat(data.lng);
        const cityName = data.city;

        if (userLat && userLng && cityName) {
          const distance = calculateDistance(STARGARD_COORDS.lat, STARGARD_COORDS.lng, userLat, userLng);

          // Radius check: 100km limit from Stargard
          if (distance <= 100) {
            setUserCity(cityName);
            setIsWithinRange(true);
          } else {
            setUserCity("Stargard");
            setIsWithinRange(false);
          }
        }
      } catch (error) {
        // Fallback gracefully to default city (Stargard)
        console.warn("Could not determine user location via IP, defaulting to Stargard:", error);
      } finally {
        setIsLoading(false);
      }
    }

    detectUserLocation();
  }, []);

  return <GeoContext.Provider value={{ userCity, isWithinRange, isLoading }}>{children}</GeoContext.Provider>;
}

/**
 * Custom hook to consume geolocation context across the application
 */
export function useGeo() {
  return useContext(GeoContext);
}
