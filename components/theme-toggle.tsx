"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { IconSun, IconMoon, IconBrightnessAuto } from "@tabler/icons-react"
import { SegmentedControl } from "@radix-ui/themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  console.log(theme)

  return (
    <SegmentedControl.Root defaultValue={theme}>
      <SegmentedControl.Item value="light" onClick={() => setTheme("light")}>
        <IconSun className="h-4" />
      </SegmentedControl.Item>
      <SegmentedControl.Item value="dark" onClick={() => setTheme("dark")}>
        <IconMoon className="h-4" />
      </SegmentedControl.Item>
      <SegmentedControl.Item value="system" onClick={() => setTheme("system")}>
        <IconBrightnessAuto className="h-4" />
      </SegmentedControl.Item>
    </SegmentedControl.Root>
  )
}
