export type BiText = { en: string; zh: string };

export function t(text: BiText | string, locale: "en" | "zh"): string {
  if (typeof text === "string") return text;
  return text[locale] || text.en;
}

export type Locale = "en" | "zh";
