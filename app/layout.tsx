import "@/styles/globals.css"
import "@radix-ui/themes/styles.css"

import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

import cn from "@/components/cn"

import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/app/site"
import { i18n } from "@/i18n"
import { Theme } from "@radix-ui/themes"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../styles/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "Shadcn ui",
    "Sass",
    "Fast ",
    "Simple ",
    "Easy",
    "Cloud Native",
  ],
  authors: [
    {
      name: "saasfly",
    },
  ],
  creator: "Saasfly",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://show.saasfly.io/"),
  // manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Theme>
            {children}
            <TailwindIndicator />
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  )
}
