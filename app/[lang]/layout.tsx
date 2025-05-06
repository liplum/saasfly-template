import { Suspense } from "react"

import { NavBar } from "@/app/navbar"
import { SiteFooter } from "@/components/site-footer"
import type { Locale } from "@/i18n"
import { getMarketingConfig } from "@/app/[lang]/config"
import { useI18n } from "@/i18n/server"

export default async function MarketingLayout({
  children, params,
}: {
  children: React.ReactNode
  params: Promise<{
    lang: Locale
  }>
}) {
  const { lang } = await params
  const dict = await useI18n(lang)
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback="...">
        <NavBar
          items={
            (await getMarketingConfig({ params: { lang: `${lang}` } })).mainNav
          }
          params={{ lang: `${lang}` }}
          scroll={true}
          marketing={dict.marketing}
        />
      </Suspense>
      <main className="flex-1">{children}</main>
      <SiteFooter
        className="border-t border-border"
        params={{ lang: `${lang}` }}
        dict={dict.common}
      />
    </div>
  )
}
