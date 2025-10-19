"use client";

import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import TranslateButton from "./translateButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/src/i18n/client-config";

function NavigationMenuDemo() {
  const isMobile = useIsMobile();
  const { setTheme, theme } = useTheme();

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="#about-me">About Me</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="#profile">Profile</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="#works">Works</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="#blog">Blog</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <TranslateButton />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <button
              type="button"
              className="flex items-center gap-2 px-2 py-1 rounded hover:bg-accent transition"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      {/* ビューポート（開閉時のアニメーション領域） */}
      {!isMobile && <NavigationMenuViewport />}
    </NavigationMenu>
  );
}

function MobileNav() {
  const { theme, setTheme } = useTheme();
  const { locale, setLocale } = useI18n();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const toggleLocale = () => setLocale(locale === "ja" ? "en" : "ja");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-56">
        <DropdownMenuItem asChild>
          <Link href="#about-me">About Me</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="#profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="#works">Works</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="#blog">Blog</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={toggleLocale}>
          {locale === "ja" ? "English" : "日本語"}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={toggleTheme}>
          {theme === "dark" ? (
            <span className="inline-flex items-center gap-2">
              <Sun className="h-4 w-4" /> Light
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              <Moon className="h-4 w-4" /> Dark
            </span>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function HeaderNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4">
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <NavigationMenuDemo />
        </div>
      </div>
    </header>
  );
}
