import { cookies, headers } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const store = await cookies();
  let locale = store.get('locale')?.value;

  // Cookieがない場合は、ブラウザの言語設定（Accept-Language）を確認
  if (!locale) {
    const headersList = await headers();
    const acceptLanguage = headersList.get('accept-language') || '';

    // Accept-Languageヘッダーから日本語（ja）が含まれているか確認
    if (acceptLanguage.includes('ja')) {
      locale = 'ja';
    } else {
      locale = 'en';
    }
  }

  // 'ja'（日本語）か 'en'（英語）以外は 'en' にフォールバック
  const supportedLocales = ['ja', 'en'];
  const selectedLocale = supportedLocales.includes(locale) ? locale : 'en';

  return {
    locale: selectedLocale,
    messages: (await import(`../../messages/${selectedLocale}.json`)).default
  };
});