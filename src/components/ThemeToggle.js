"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true)}, [])

  if (!mounted) return null

  return (
    <button
  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  className=" px-3 py-2 rounded-md cursor-pointer bg-foreground text-background"
>
  {theme === "dark" ? "Light Mode" : "Dark Mode"}
</button>

  )
}
