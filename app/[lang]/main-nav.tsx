"use client"

import React from "react"
import Link from "next/link"

import { ReadMoreGuide } from "@/app/[lang]/read-more-guide"
import { MobileNav } from "@/app/[lang]/mobile-nav"

import { IconCommand, IconX } from "@tabler/icons-react"

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
  params: {
    lang: string
  }
  marketing: Record<string, unknown>
}

export function MainNav({ items, children, params: { lang }, marketing }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)
  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }
  const handleMenuItemClick = () => {
    toggleMenu()
  }
  return (
    <div className="flex gap-6 md:gap-10">
      <div className="flex items-center">
        <Link href={`/${lang}`} className="hidden items-center space-x-2 md:flex">
          <div className="text-3xl">Saasfly</div>
        </Link>

        <Link href="https://docs.saasfly.io" target="_blank" className="ml-4 hidden md:flex lg:flex xl:flex">
          <ReadMoreGuide>
            {marketing?.introducing as string ?? "Introducing Saasfly"}
          </ReadMoreGuide>
        </Link>
      </div>

      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <IconX /> : <IconCommand />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items} menuItemClick={handleMenuItemClick}>
          {children}
        </MobileNav>
      )}
    </div>
  )
}
