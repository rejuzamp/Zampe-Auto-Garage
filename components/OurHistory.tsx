"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Heart, Users, Award } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

/**
 * Our History Component - Timeline showcasing the family's automotive legacy
 * Features the story from 1996 to present with emotional storytelling and Giovanni's photo
 */
export default function OurHistory() {
  const { t } = useLanguage()

  const timelineEvents = [
    {
      year: "1996",
      title: "The Beginning",
      description:
        "Giovanni Zamprogno started his garage with heart and dedication, becoming a skilled mechanic in the community of Dambi Dollo,Ethiopia.",
      icon: Wrench,
    },
    {
      year: "Early 2000s",
      title: "Learning the Craft",
      description: "We worked by his side, learning vehicle repair, values of hard work, honesty, and excellence.",
      icon: Heart,
    },
    {
      year: "2010s",
      title: "Building Experience",
      description:
        "Gained deep mechanical knowledge and real-world problem-solving skills through hands-on experience.",
      icon: Users,
    },
    {
      year: "Today",
      title: "Zampe Auto Garage",
      description:
        "Carrying forward his vision with modern tools, fresh energy, and a mission to serve with integrity.",
      icon: Award,
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("history.title")}</h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
        </div>

        {/* Story Introduction with Father's Photo */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Father's Photo */}
            <div className="relative order-2 lg:order-1">
              <Card className="overflow-hidden border-0 shadow-xl">
                <div className="relative">
                  <img
                    src="/images/giovanni-zamprogno.jpg"
                    alt="Giovanni Zamprogno working in his garage in 1996, wearing work overalls and using welding equipment"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Giovanni Zamprogno</h3>
                    <p className="text-base sm:text-lg text-yellow-300 font-semibold">Our Founding Father - 1996</p>
                    <p className="text-xs sm:text-sm text-gray-200 mt-2">
                      "Excellence in every repair, integrity in every service"
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right side - Story Text */}
            <div className="order-1 lg:order-2">
              <Card className="bg-white dark:bg-gray-900/30 border-0 shadow-lg h-full">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                    {t("history.legacyTitle")}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6">
                    {t("history.description1")}
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6">
                    {t("history.description2")}
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{t("history.description3")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-500 hidden lg:block"></div>

          <div className="space-y-8 lg:space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                <div
                  className={`flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:space-x-8`}
                >
                  {/* Content Card */}
                  <div className="w-full lg:w-5/12">
                    <Card
                      className={`bg-white dark:bg-gray-900/30 border-0 shadow-lg h-full{
                        index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                      }`}
                    >
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                            <event.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-yellow-600">{event.year}</h3>
                            <h4 className="text-base sm:text-lg font-semibold text-gray-600 dark:text-gray-300">{event.title}</h4>
                          </div>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Spacer for opposite side */}
                  <div className="w-full lg:w-5/12 hidden lg:block"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legacy Message */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("history.legacyMessage")}</h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">{t("history.legacyDesc")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
