"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageRevealWrapperProps {
  children: React.ReactNode;
  /** Punkt startowy rozchodzenia się koła, domyślnie lewy górny róg jak na wideo */
  origin?: string;
}

export default function PageRevealWrapper({ children, origin = "12% 14%" }: PageRevealWrapperProps) {
  return (
    <motion.div
      initial={{
        clipPath: `circle(0% at ${origin})`,
        opacity: 0,
        scale: 0.96,
      }}
      animate={{
        clipPath: `circle(155% at ${origin})`,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        clipPath: {
          duration: 1.45,
          ease: [0.16, 1, 0.3, 1], // Długie, jedwabiste wyhamowanie
        },
        scale: {
          duration: 1.45,
          ease: [0.16, 1, 0.3, 1],
        },
        opacity: {
          duration: 0.6,
          ease: "easeOut",
        },
      }}
      className="w-full min-h-screen will-change-[clip-path,transform]"
    >
      {children}
    </motion.div>
  );
}
