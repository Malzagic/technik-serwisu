"use client";

import PageRevealWrapper from "./components/PageRevealWrapper";

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageRevealWrapper origin="50% 10%">{children}</PageRevealWrapper>;
}
