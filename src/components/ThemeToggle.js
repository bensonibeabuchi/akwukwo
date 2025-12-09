"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md";

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
  {theme === "dark" ? <MdLightMode size={24} /> : <MdDarkMode size={24}/>}
</button>

  )
}
