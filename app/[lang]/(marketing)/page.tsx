import Link from "next/link"
import { useI18n } from "@/i18n/get"

import { Comments } from "@/components/comments"
import { FeaturesGrid } from "@/components/features-grid"
import { RightSideMarketing } from "@/components/right-side-marketing"

import { BackgroundLines } from "@/ui/background-lines"
import { Button } from "@/ui/button"
import { ColourfulText } from "@/ui/colorful-text"

import type { Locale } from "@/i18n/config"
import { IconArrowRight } from "@tabler/icons-react"

export default async function IndexPage({
  params,
}: {
  params: Promise<{
    lang: Locale
  }>
}) {
  const { lang } = await params
  const dict = await useI18n(lang)

  return (
    <>
      <section className="container">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
          <div className="flex flex-col items-start h-full">
            <BackgroundLines className="h-full">
              <div className="flex flex-col pt-4 md:pt-36 lg:pt-36 xl:pt-36">
                <div className="mt-20">
                  <div
                    className="mb-6 max-w-4xl text-left text-4xl font-semibold dark:text-zinc-100 md:text-5xl xl:text-5xl md:leading-[4rem] xl:leading-[4rem]">
                    {dict.marketing.title || "Ship your apps to the world easier with "}
                    <ColourfulText text="Saasfly" />
                  </div>
                </div>

                <div className="mt-4">
                  <span className="text-neutral-500 dark:text-neutral-400 sm:text-lg">
                    {dict.marketing.sub_title || "Your complete All-in-One solution for building SaaS services."}
                  </span>
                </div>

                <div
                  className="mb-4 mt-6 flex w-full flex-col justify-center space-y-4 sm:flex-row sm:justify-start sm:space-x-8 sm:space-y-0 z-10">
                  <Link href="https://github.com/saasfly/saasfly" target="_blank">
                    <Button
                      className="bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg px-6 h-12 font-medium">
                      {dict.marketing.get_started}
                      <IconArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </BackgroundLines>
          </div>

          <div className="hidden h-full w-full xl:block bg-background">
            <div className="flex flex-col pt-44">
              <RightSideMarketing dict={dict.marketing.right_side} />
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mt-[-180px] xl:mt-[-180px]">
        <FeaturesGrid dict={dict.marketing.features_grid} />
      </section>
      <section className="w-full px-8 pt-10 sm:px-0 sm:pt-24 md:px-0 md:pt-24 xl:px-0 xl:pt-24">
        <div className="flex h-full w-full flex-col items-center pb-[100px] pt-10">
          <div>
            <h1 className="mb-6 text-center text-3xl font-bold dark:text-zinc-100 md:text-5xl">
              {dict.marketing.people_comment.title}
            </h1>
          </div>
          <div className="mb-6 text-lg text-neutral-500 dark:text-neutral-400">
            {dict.marketing.people_comment.desc}
          </div>

          <div className="w-full overflow-x-hidden">
            <Comments />
          </div>
        </div>
      </section>
    </>
  )
}
