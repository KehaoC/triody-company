"use client";

import { useLocale } from "@/lib/locale";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLocale();

  return (
    <button
      onClick={toggleLocale}
      className="lang-toggle-btn"
      aria-label={locale === "en" ? "Switch to Chinese" : "切换到英文"}
    >
      {locale === "en" ? "中文" : "EN"}
    </button>
  );
}
