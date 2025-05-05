import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL as string
  const sitemapUrl = new URL("/sitemap.xml", baseUrl)

  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
    },
    sitemap: [
      `${sitemapUrl}`
    ]
  }
}