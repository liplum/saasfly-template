"use client"

import React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { cn } from "@/ui"

import { MainNav, MainNavItem } from "./main-nav"
import { LocaleChange } from "@/components/locale-change"

import useScroll from "@/hooks/use-scroll"

interface NavBarProps {
  items?: MainNavItem[]
  children?: React.ReactNode
  rightElements?: React.ReactNode
  scroll?: boolean
  params: {
    lang: string
  }
  marketing: Record<string, unknown>
}

export function NavBar({
  items,
  children,
  rightElements,
  scroll = false,
  params: { lang },
  marketing,
}: NavBarProps) {
  const scrolled = useScroll(50)
  const segment = useSelectedLayoutSegment()

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center border-border bg-background/60 backdrop-blur-xl transition-all ${scroll ? (scrolled ? "border-b" : "bg-background/0") : "border-b"
        }`}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <MainNav items={items} params={{ lang: `${lang}` }} marketing={marketing}>
          {children}
        </MainNav>

        <div className="flex items-center space-x-3">
          {items?.length ? (
            <nav className="hidden gap-6 md:flex">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : `/${lang}${item.href}`}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    item.href.startsWith(`/${segment}`)
                      ? "text-blue-500 font-semibold"
                      : "",
                    item.disabled && "cursor-not-allowed opacity-80",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}

          <div className="w-[1px] h-8 bg-accent"></div>

          {rightElements}
          <LocaleChange url={"/"} />
        </div>
      </div>
    </header>
  )
}
