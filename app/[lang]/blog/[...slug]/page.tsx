import "@/styles/mdx.css"

import { notFound } from "next/navigation"
import { allAuthors, allPosts } from "contentlayer/generated"

import { Mdx } from "@/components/markdown/mdx-components"

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Balancer from "react-wrap-balancer"

import { cn } from "@/ui"
import { buttonVariants } from "@/ui/button"

import { absoluteUrl, formatDate } from "@/app/utils"
import { IconChevronLeft } from "@tabler/icons-react"
import { Locale } from "@/i18n/config"
import { useI18n } from "@/i18n/get"

interface PostPageProps {
  params: {
    slug: string[]
  }
}

function getPostFromParams(params: { slug?: string | string[] }) {
  const slug = Array.isArray(params.slug) ? params.slug.join("/") : params.slug
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({ params }: {
  params: Promise<{
    slug: string[]
    lang: Locale
  }>
}): Promise<Metadata> {
  const _params = await params
  const post = getPostFromParams(_params)
  if (!post) {
    return {}
  }

  const url = process.env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", post.title)
  ogUrl.searchParams.set("type", "Blog Post")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  }
}

export function generateStaticParams(): PostPageProps["params"][] {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: {
  params: Promise<{
    slug: string[]
    lang: Locale
  }>
}) {
  const _params = await params
  const i18n = await useI18n(_params.lang)
  const post = getPostFromParams(_params)

  if (!post) {
    notFound()
  }

  const authors = post.authors.map((author) =>
    allAuthors.find(({ slug }) => slug === `/authors/${author}`),
  )

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex",
        )}
      >
        <IconChevronLeft className="mr-2 h-4 w-4" />
        {i18n.blog.seeAllPosts}
      </Link>
      <div>
        {post.date && (
          <time
            dateTime={post.date}
            className="block text-sm text-muted-foreground"
          >
            {i18n.blog.publishedOn.replace("${date}", formatDate(post.date))}
          </time>
        )}
        <h1 className="font-heading mt-2 inline-block text-4xl leading-tight lg:text-5xl">
          <Balancer>{post.title}</Balancer>
        </h1>
        {authors?.length ? (
          <div className="mt-4 flex space-x-4">
            {authors.map((author) =>
              author ? (
                <Link
                  key={author._id}
                  href={author.link}
                  className="flex items-center space-x-2 text-sm"
                >
                  <Image
                    src={author.avatarUrl}
                    alt={author.title}
                    width={42}
                    height={42}
                    className="rounded-full bg-white"
                  />
                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium">{author.title}</p>
                    {author.description && <p className="text-[12px] text-muted-foreground">
                      {author.description}
                    </p>}
                  </div>
                </Link>
              ) : null,
            )}
          </div>
        ) : null}
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <Mdx code={post.body.code} />
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
          <IconChevronLeft className="mr-2 h-4 w-4" />
          {i18n.blog.seeAllPosts}
        </Link>
      </div>
    </article>
  )
}
