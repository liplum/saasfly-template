import { MetadataRoute } from "next"
import { siteConfig } from "./site"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.baseUrl
  const sitemap: MetadataRoute.Sitemap = []

  sitemap.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  },)

  return sitemap
}