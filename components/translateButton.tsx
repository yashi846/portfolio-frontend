"use client";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/src/i18n/client-config";

export default function TranslateButton() {
  const { locale, setLocale } = useI18n();

  const toggleLocale = () => {
    const nextLocale = locale === "ja" ? "en" : "ja";
    setLocale(nextLocale);
  };

  return (
    <Button variant="ghost" onClick={toggleLocale}>
      {locale === "ja" ? "English" : "日本語"}
    </Button>
  );
}
