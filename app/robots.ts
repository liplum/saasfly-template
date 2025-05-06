import { MetadataRoute } from "next"
import { siteConfig } from "./site"
import { i18n } from "@/i18n"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.baseUrl

  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
    },
    sitemap: [
      `${new URL("/sitemap.xml", baseUrl)}`,
      ...i18n.locales.map(lang =>
        `${new URL(`/${lang}/blog/sitemap.xml`, baseUrl)}`
      ),
    ]
  }
}