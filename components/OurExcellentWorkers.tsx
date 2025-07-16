"use client";

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

/**
 * Our Excellent Workers Component - Team showcase with professional photos
 * Three team members displayed in cards with hover effects
 */
export default function OurExcellentWorkers() {
  const { t } = useLanguage()

  console.log("Translation check:", t("team.title"));

  const teamMembers = [
    {
      name: "Regina Giovanni",
      title: "Automotive Operations Manager",
      image: "/images/regina-office.jpg",
      description:
        "Operations lead and customer service specialist managing the day-to-day flow of Zampe Auto Garage. Focused on efficient service delivery, team coordination, and building lasting client relationships with every visit.",
    },
    {
      name: "Giuseppe Giovanni",
      title: "Mechanical Engineer & Repair Specialist",
      image: "/images/giuseppe-giovanni.jpg",
      description:
        "Certified mechanical engineer specializing in engine diagnostics and complex automotive repairs with hands-on expertise.",
    },
    {
      name: "Dave Giovanni",
      title: "Diagnostics Expert & Vehicle Tester",
      image: "/images/dave-giovanni.jpg",
      description:
        "Advanced diagnostic specialist with expertise in modern vehicle computer systems and engine troubleshooting.",
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("team.title")}</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">{t("team.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 text-center bg-white dark:bg-gray-900/30">
              <div className="relative overflow-hidden">
                <div
                  className="h-80 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay text on hover for real photos */}
                {member.image.includes("/images/") && (
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">In Action at Zampe Auto Garage</p>
                  </div>
                )}
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.title}</p>
                <p className="text-gray-900 dark:text-gray-400 text-sm leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
