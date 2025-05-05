"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { i18n, localeMap } from "@/i18n"
import { DropdownMenu, IconButton } from "@radix-ui/themes"
import { IconLanguage } from "@tabler/icons-react"

export function LocaleSelector({ url }: { url: string }) {
  const router = useRouter()

  function onClick(locale: string) {
    router.push(`/${locale}/` + url)
  }

  return <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      <IconButton variant="ghost">
        <IconLanguage />
      </IconButton>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
      {i18n.locales.map((locale) => (
        <DropdownMenu.Item key={locale} onClick={() => onClick(locale)}>
          {localeMap[locale]}
        </DropdownMenu.Item>
      ))}
    </DropdownMenu.Content>
  </DropdownMenu.Root>
}
