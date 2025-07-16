"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Car, Settings, Droplets, Battery, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

/**
 * Our Special Services Component - 6-card grid of automotive services
 * Dark overlay cards with service descriptions matching Figma design
 */
export default function OurSpecialServices() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Settings,
      title: t("services.items.0"), // Engine Diagnostics
      description: "Advanced computer diagnostics to identify and resolve engine issues with precision.",
      image: "/images/car-diagnostic-test-1.jpg",
    },
    {
      icon: Wrench,
      title: t("services.items.1"), // Brake Repair
      description: "Complete brake system inspection, repair, and replacement for optimal safety.",
      image: "/images/brake.jpg",
    },
    {
      icon: Car,
      title: t("services.items.2"), // Tire Replacement
      description: "Professional tire installation, balancing, alignment, and replacement services.",
      image: "/images/tire.jpg",
    },
    {
      icon: Droplets,
      title: t("services.items.3"), // Oil & Filter Change
      description: "Regular maintenance services to keep your engine running smoothly and efficiently.",
      image: "/images/Oil.jpg",
    },
    {
      icon: Battery,
      title: t("services.items.4"), // Battery Services
      description: "Battery testing, replacement, and complete electrical system diagnostics.",
      image: "/images/battery.jpg",
    },
    {
      icon: Calendar,
      title: t("services.items.5"), // Scheduled Maintenance
      description: "Comprehensive maintenance packages tailored to your vehicle's specific needs.",
      image: "/images/newengine.jpg",
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("services.title")}</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">{t("services.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0">
              <div className="relative">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
