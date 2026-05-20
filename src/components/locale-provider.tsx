"use client";

import { LocaleProvider } from "@/lib/locale";
import type { ReactNode } from "react";

export function ClientLocaleProvider({ children }: { children: ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
