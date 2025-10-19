import { useI18n } from "./client-config";

export function useTranslations() {
  const { messages } = useI18n();

  const t = (key: string) => {
    const keys = key.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = messages;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // キーが見つからない場合はキー自体を返す
      }
    }

    return typeof value === "string" ? value : key;
  };

  const tRaw = (key: string) => {
    const keys = key.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = messages;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return undefined;
      }
    }

    return value;
  };

  return { t, tRaw };
}
