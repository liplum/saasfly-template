import "server-only"

import { Locale } from "."

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const messages = {
  en: () =>
    import("@/i18n/messages/en.json").then((module) => module.default),
  zh: () =>
    import("@/i18n/messages/zh.json").then((module) => module.default),
}

export const useI18n = async (locale: Locale) =>
  messages[locale]?.() ?? messages.en()
