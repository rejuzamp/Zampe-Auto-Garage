"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import LanguageSwitcher from "./LanguageSwitcher"
import ThemeToggle from "./ThemeToggle"

/**
 * Navigation Component - Top navigation bar with logo and menu items
 * Responsive design with mobile hamburger menu, language switcher, and theme toggle
 */
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm fixed w-full top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Zampe A.G
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-900 dark:text-white hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {t("nav.home")}
              </Link>
              <Link
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="#history"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("history")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("nav.history")}
              </Link>
              <Link
                href="#services"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("nav.services")}
              </Link>
              <Link
                href="#pico"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("pico")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("nav.pico")}
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {t("nav.contact")}
              </Link>
              <Link href="/book">
                <Button className="bg-green-600 hover:bg-green-700 text-white">{t("nav.booking")}</Button>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-green-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t dark:border-gray-700">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-900 dark:text-white hover:text-green-600 transition-colors"
              >
                {t("nav.home")}
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                  setIsMenuOpen(false)
                }}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="#history"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("history")?.scrollIntoView({ behavior: "smooth" })
                  setIsMenuOpen(false)
                }}
              >
                {t("nav.history")}
              </Link>
              <Link
                href="#services"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                  setIsMenuOpen(false)
                }}
              >
                {t("nav.services")}
              </Link>
              <Link
                href="#pico"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("pico")?.scrollIntoView({ behavior: "smooth" })
                  setIsMenuOpen(false)
                }}
              >
                {t("nav.pico")}
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors"
              >
                {t("nav.contact")}
              </Link>
              <div className="px-3 py-2">
                <Link href="/book">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">{t("nav.booking")}</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
