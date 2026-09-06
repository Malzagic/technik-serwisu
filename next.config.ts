import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Automatyczne usuwanie console.log() w produkcyjnej wersji aplikacji
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Optymalizacja importów dużych bibliotek ikon i animacji
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
