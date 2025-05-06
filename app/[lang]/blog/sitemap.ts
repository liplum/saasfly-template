import { allPosts } from "@/.contentlayer/generated"
import { siteConfig } from "@/app/site"
import { i18n } from "@/i18n"
import { MetadataRoute } from "next"
import { buildPostUrl } from "./page"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.baseUrl
  const sitemap: MetadataRoute.Sitemap = []

  // blog
  const posts = allPosts.filter((post) => post.published)
  const locales = i18n.locales
  for (const post of posts) {
    for (const lang of locales) {
      const url = new URL(buildPostUrl(lang, post), baseUrl)
      sitemap.push({
        url: `${url}`,
        lastModified: new Date(post.date),
        changeFrequency: "never",
        priority: 1,
      })
    }
  }

  return sitemap
}