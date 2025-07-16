"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Award } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

/**
 * Why We Are Best Component - Three key value propositions
 * Highlights main competitive advantages with icons and descriptions
 */
export default function WhyWeAreBest() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Shield,
      title: t("whyBest.certifiedExperts"),
      description: t("whyBest.certifiedExpertsDesc"),
    },
    {
      icon: Users,
      title: t("whyBest.customerFirst"),
      description: t("whyBest.customerFirstDesc"),
    },
    {
      icon: Award,
      title: t("whyBest.qualityGuarantee"),
      description: t("whyBest.qualityGuaranteeDesc"),
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("whyBest.title")}</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            {t("whyBest.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow border-0 shadow-md bg-white dark:bg-gray-900/30"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
