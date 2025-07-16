"use client"

import { useTheme } from "@/contexts/ThemeContext"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Theme Toggle Component - Switch between light and dark modes
 * Clean design with sun/moon icons
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
      ) : (
        <Sun className="w-4 h-4 text-yellow-500" />
      )}
    </Button>
  )
}
