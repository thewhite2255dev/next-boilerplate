import type { Metadata } from "next"
import localFont from "next/font/local"
import "../globals.css"
import { Providers } from "@/components/providers"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { SiteConfig } from "@/lib/site-config"
import { routing } from "@/i18n/routing"
import { notFound } from "next/navigation"
import { getMessages } from "next-intl/server"

const inter = localFont({
  src: "../fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
  authors: [{ name: SiteConfig.author.name, url: SiteConfig.author.githubUrl }],
  keywords: [...SiteConfig.keywords],
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
