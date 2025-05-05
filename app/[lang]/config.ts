import { MainNavItem } from "@/app/[lang]/main-nav"
import type { Locale } from "@/i18n"
import { useI18n } from "@/i18n/server"

export interface MarketingConfig {
  mainNav: MainNavItem[]
}

export const getMarketingConfig = async ({
  params: { lang },
}: {
  params: {
    lang: Locale
  }
}): Promise<MarketingConfig> => {
  const dict = await useI18n(lang)
  return {
    mainNav: [
      {
        title: dict.marketing.main_nav_pricing,
        href: `/pricing`,
      },
      {
        title: dict.marketing.main_nav_blog,
        href: `/blog`,
      },
    ],
  }
}
