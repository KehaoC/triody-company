"use client";

import { useLocale } from "@/lib/locale";
import { t, type BiText } from "@/lib/types";

export function ServiceTitle({ text }: { text: BiText }) {
  const { locale } = useLocale();
  return <>{t(text, locale)}</>;
}

export function ServiceBody({ body }: { body: BiText[] }) {
  const { locale } = useLocale();
  return (
    <div className="writing-body">
      {body.map((p, i) => (
        <p key={i}>{t(p, locale)}</p>
      ))}
    </div>
  );
}
