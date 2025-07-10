"use client"

import { Link, usePathname } from "@/i18n/navigation"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeSwitcher } from "./theme-switcher"
import { SiteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Menu, Moon, Sun } from "lucide-react"

export type navItemsType = {
  label: string
  href: string
}

export function Header() {
  const pathname = usePathname()

  const navItems: navItemsType[] = []

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 shrink-0 items-center justify-between">
        <Link href="/">
          <span className="text-foreground text-lg font-semibold">
            {SiteConfig.title}
          </span>
        </Link>
        <nav className="hidden gap-6 font-medium lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-foreground/70 hover:text-foreground transition-colors",
                pathname === item.href && "text-foreground font-semibold"
              )}
              data-prevent-nprogress={true}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <ThemeSwitcher>
        <Button className="hover:bg-secondary text-secondary-foreground flex h-9 w-9 rounded-full bg-transparent shadow-none max-md:hidden">
              <Sun className="size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            </Button>
          </ThemeSwitcher>
          <div className="block lg:hidden">
            <MobileNav>
          <Button
              size="icon"
              variant="secondary"
              className="hover:bg-secondary text-secondary-foreground flex h-9 w-9 rounded-full bg-transparent shadow-none lg:hidden"
            >
              <Menu className="size-5" />
            </Button>
            </MobileNav>
          </div>
        </div>
      </div>
    </header>
  )
}
