"use client";

import { ReactNode, useState, useEffect } from "react";
import { I18nContext, getInitialLocale, getMessages } from "./client-config";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<"en" | "ja">("en");
  const [messages, setMessages] = useState(getMessages("en"));

  useEffect(() => {
    const initialLocale = getInitialLocale();
    setLocaleState(initialLocale);
    setMessages(getMessages(initialLocale));
  }, []);

  const setLocale = (newLocale: "en" | "ja") => {
    setLocaleState(newLocale);
    setMessages(getMessages(newLocale));
    // Cookieに保存
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, messages }}>
      {children}
    </I18nContext.Provider>
  );
}
