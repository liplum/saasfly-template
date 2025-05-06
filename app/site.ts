export interface SiteConfig {
  name: string
  baseUrl: string
  description: string
  url: string
  ogImage: string
  links: {
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Saasfly",
  baseUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  description: "We provide an easier way to build saas service in production",
  url: "https://github.com/saasfly/saasfly",
  ogImage: "",
  links: {
    github: "https://github.com/saasfly/saasfly",
  },
}
