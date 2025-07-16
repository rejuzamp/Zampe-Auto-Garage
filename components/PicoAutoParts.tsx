"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Droplets, Zap, Shield, Car, Settings, Lightbulb, Flame } from "lucide-react"

/**
 * Pico Auto Parts Component - Comprehensive list of available automotive parts
 * Fully responsive grid layout with icons and bilingual support
 */
export default function PicoAutoParts() {
  const { t, language } = useLanguage()

  const autoParts = [
    {
      name: language === "en" ? "Engine Oil" : "Zayitii Injinarii",
      icon: Droplets,
      category: "fluids",
    },
    {
      name: language === "en" ? "Oil Filters" : "Gingilchaa Zayitii",
      icon: Settings,
      category: "filters",
    },
    {
      name: language === "en" ? "Fuel Filters" : "Gingilchaa Boba'aa",
      icon: Settings,
      category: "filters",
    },
    {
      name: language === "en" ? "Brake Fluid" : "Dhangala'aa Bireekii",
      icon: Droplets,
      category: "fluids",
    },
    {
      name: language === "en" ? "Brake Pads" : "Paadii Bireekii",
      icon: Shield,
      category: "brake",
    },
    {
      name: language === "en" ? "Bearings" : "Beeriingii",
      icon: Settings,
      category: "mechanical",
    },
    {
      name: language === "en" ? "Air Cleaners" : "Qulqulleessaa Qilleensaa",
      icon: Car,
      category: "filters",
    },
    {
      name: language === "en" ? "Shock Absorbers" : "Fudhattuu Sochooftuu",
      icon: Settings,
      category: "suspension",
    },
    {
      name: language === "en" ? "Light Bulbs" : "Ampuulii Ibsaa",
      icon: Lightbulb,
      category: "electrical",
    },
    {
      name: language === "en" ? "Bushings" : "Bushingii",
      icon: Settings,
      category: "mechanical",
    },
    {
      name: language === "en" ? "Transmission Oil" : "Zayitii Jijjiirraa",
      icon: Droplets,
      category: "fluids",
    },
    {
      name: language === "en" ? "Spark Plugs" : "Qabduu Ibiddaa",
      icon: Zap,
      category: "electrical",
    },
    {
      name: language === "en" ? "Oil Sales" : "Gurgurtaa Zayitii",
      icon: Droplets,
      category: "fluids",
    },
    {
      name: language === "en" ? "Different Types of Bolts" : "Booltii Gosa Adda Addaa",
      icon: Wrench,
      category: "hardware",
    },
    {
      name: language === "en" ? "Fire Extinguishers" : "Dhaamsa Ibiddaa",
      icon: Flame,
      category: "safety",
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      fluids: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      filters: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      brake: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
      mechanical: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
      electrical: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
      suspension: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      hardware: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
      safety: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
  }

  return (
    <section id="pico" className="py-12 sm:py-16 px-4 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("pico.title")}</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            {t("pico.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {autoParts.map((part, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 bg-white dark:bg-gray-800"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${getCategoryColor(part.category)}`}
                  >
                    <part.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 break-words">
                      {part.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 capitalize">
                      {language === "en"
                        ? part.category
                        : part.category === "fluids"
                          ? "dhangala'aa"
                          : part.category === "filters"
                            ? "gingilchaa"
                            : part.category === "brake"
                              ? "bareekaa"
                              : part.category === "mechanical"
                                ? "mekaaniikii"
                                : part.category === "electrical"
                                  ? "elektirikii"
                                  : part.category === "suspension"
                                    ? "sochooftuu"
                                    : part.category === "hardware"
                                      ? "meeshaalee"
                                      : part.category === "safety"
                                        ? "nageenya"
                                        : part.category}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 sm:p-6 max-w-3xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold text-green-800 dark:text-green-300 mb-3">
              {t("pico.contactTitle")}
            </h3>
            <p className="text-sm sm:text-base text-green-700 dark:text-green-400 mb-4">{t("pico.contactDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a
                href="tel:+251931225021"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                📞 +251 931225021
              </a>
              <a
                href="mailto:reginagiovanni3@gmail.com"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-600 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                ✉️ {t("pico.emailUs")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
