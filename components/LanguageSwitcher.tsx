"use client";

import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

/**
 * Language Switcher Component - Toggle between English and Afan Oromo
 * Clean design with globe icon and EN/OM buttons, dark mode compatible
 */
export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-600 dark:text-gray-400" />
      <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        <Button
          variant={language === "en" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("en")}
          className={`text-xs px-3 py-1 transition-all ${
            language === "en"
              ? "bg-green-600 text-white shadow-sm"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          EN
        </Button>
        <Button
          variant={language === "om" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("om")}
          className={`text-xs px-3 py-1 transition-all ${
            language === "om"
              ? "bg-green-600 text-white shadow-sm"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          OM
        </Button>
      </div>
    </div>
  )
}
