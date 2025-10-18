import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { HeaderNav } from "@/components/navigation-menu"
import FooterSection from "@/components/footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
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
            <HeaderNav />
            <main className="mx-auto max-w-screen-xl flex-1 px-4 py-6">
              {children}
            </main>
            <FooterSection className="bg-muted"/>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}