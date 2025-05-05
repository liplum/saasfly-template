import { PricingCards } from "@/app/[lang]/pricing/pricing-cards"
import { PricingFaq } from "@/app/[lang]/pricing/pricing-faq"
import type { Locale } from "@/i18n"
import { useI18n } from "@/i18n/server"

export const metadata = {
  title: "Pricing",
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{
    lang: Locale
  }>
}) {
  const { lang } = await params
  const dict = await useI18n(lang)
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <PricingCards
        dict={dict.price}
        params={{ lang }}
      />
      <hr className="container" />
      <PricingFaq params={{ lang }} dict={dict.price} />
    </div>
  )
}
