import { MainNavItem } from "@/components/main-nav"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get"

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
  const dict = await getDictionary(lang)
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
