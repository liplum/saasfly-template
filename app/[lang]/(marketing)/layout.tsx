import { Suspense } from "react"

import { NavBar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import type { Locale } from "@/config/i18n-config"
import { getMarketingConfig } from "@/config/ui/marketing"
import { getDictionary } from "@/lib/get-dictionary"

export default async function MarketingLayout({
  children, params,
}: {
  children: React.ReactNode
  params: Promise<{
    lang: Locale
  }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)
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
