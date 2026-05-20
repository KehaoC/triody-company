"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { Locale } from "@/lib/types";

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
}>({
  locale: "en",
  setLocale: () => {},
  toggleLocale: () => {},
});

const STORAGE_KEY = "triody-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "zh") {
      setLocale(stored);
    } else {
      const nav = navigator.language.toLowerCase();
      setLocale(nav.startsWith("zh") ? "zh" : "en");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "zh" : "en"));
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
