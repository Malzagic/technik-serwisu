"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Audience = "all" | "b2b" | "service";

interface AudienceContextValue {
  audience: Audience;
  setAudience: (audience: Audience) => void;
}

const AudienceContext = createContext<AudienceContextValue>({
  audience: "all",
  setAudience: () => undefined,
});

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudience] = useState<Audience>("all");
  return <AudienceContext.Provider value={{ audience, setAudience }}>{children}</AudienceContext.Provider>;
}

export function useAudience() {
  return useContext(AudienceContext);
}
