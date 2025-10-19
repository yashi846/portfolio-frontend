import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeaderNav } from "@/components/navigation-menu";
import FooterSection from "@/components/footer";
import { I18nProvider } from "@/src/i18n/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="flex min-h-screen flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <I18nProvider>
              <HeaderNav />
              <main className="mx-auto max-w-screen-xl flex-1 px-4 py-6">
                {children}
              </main>
              <FooterSection className="bg-muted" />
            </I18nProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
