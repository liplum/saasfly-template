import "server-only"

import type { Locale } from "@/i18n/config"

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () =>
    import("@/i18n/dictionaries/en.json").then((module) => module.default),
  zh: () =>
    import("@/i18n/dictionaries/zh.json").then((module) => module.default),
}

export const useI18n = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en()
