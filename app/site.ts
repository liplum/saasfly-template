export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Saasfly",
  description: "We provide an easier way to build saas service in production",
  url: "https://github.com/saasfly/saasfly",
  ogImage: "",
  links: {
    github: "https://github.com/saasfly/saasfly",
  },
}
