import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { HeaderNav } from "@/components/navigation-menu"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <HeaderNav />
            <main className="mx-auto max-w-screen-xl px-4 py-6">
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}