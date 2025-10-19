import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function TranslateButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  // クッキーから現在の言語を取得
  const [currentLang, setCurrentLang] = useState<"ja" | "en">("en");

  useEffect(() => {
    const match = document.cookie.match(/locale=(ja|en)/);
    setCurrentLang(match?.[1] === "ja" ? "ja" : "en");
  }, []);

  // 切り替え処理
  const toggleLocale = () => {
    const nextLocale = currentLang === "ja" ? "en" : "ja";
    startTransition(() => {
      document.cookie = `locale=${nextLocale}; path=/`;
      setCurrentLang(nextLocale);
      router.refresh();
    });
  };

  return (
    <Button variant="ghost" disabled={isPending} onClick={toggleLocale}>
      {currentLang === "ja" ? "English" : "日本語"}
    </Button>
  );
}
