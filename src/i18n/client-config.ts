"use client";

import { createContext, useContext } from "react";
import enMessages from "../../messages/en.json";
import jaMessages from "../../messages/ja.json";

type Locale = "en" | "ja";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: typeof enMessages | typeof jaMessages;
}

export const I18nContext = createContext<I18nContextType | undefined>(
  undefined
);

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}

export function useLocale(): Locale {
  const { locale } = useI18n();
  return locale;
}

export function getInitialLocale(): Locale {
  // クライアントサイドでのみ実行
  if (typeof window === "undefined") return "en";

  // 1. Cookieをチェック
  const cookieLocale = document.cookie
    .split("; ")
    .find((row) => row.startsWith("locale="))
    ?.split("=")[1] as Locale | undefined;

  if (cookieLocale === "ja" || cookieLocale === "en") {
    return cookieLocale;
  }

  // 2. ブラウザの言語設定をチェック
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("ja")) {
    return "ja";
  }

  return "en";
}

export function getMessages(locale: Locale) {
  return locale === "ja" ? jaMessages : enMessages;
}
