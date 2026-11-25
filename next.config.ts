import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Automatically remove console.log() in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Optimize imports from large icon and animation libraries
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
