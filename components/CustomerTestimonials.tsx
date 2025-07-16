"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

/**
 * Customer Testimonials Component - Real feedback from satisfied customers
 * Bilingual support with 5-star ratings and customer feedback
 */
export default function CustomerTestimonials() {
  const { t, language } = useLanguage()

  const testimonials = [
    {
      name: language === "en" ? "Waltike G." : "Waltike G.",
      rating: 5,
      feedback:
        language === "en"
          ? "Excellent service! They diagnosed my engine problem quickly and fixed it at a fair price. Very professional team."
          : "Tajaajila gaarii! Rakkoo maashinii koo dafanii addeessanii gatii haqa qabu irratti suphanii. Garee ogummaa qabu.",
    },
    {
      name: language === "en" ? "Captain Desta" : "Captain Desta",
      rating: 5,
      feedback:
        language === "en"
          ? "I've known them for more than 10 years. Always honest, reliable service. They explain everything clearly and never overcharge."
          : "Waggaa 3f as dhufaa jira. Yeroo hunda tajaajila amanamaa fi dhugaa. Waan hunda ifatti ibsanii gonkumaa hin gatisiisan.",
    },
    {
      name: language === "en" ? "Buzayew ." : "Buzayew .",
      rating: 5,
      feedback:
        language === "en"
          ? "Best garage in Burayu! Fixed my brake system perfectly. The Giovanni family really knows their craft."
          : "Garaajii hundarra gaarii Burayu keessa! Sirna bareekaa koo haala gaarii ta'een suphanii. Maatiin Giovanni ogummaa isaanii beeku.",
    },
    {
      name: language === "en" ? "Fayisa K." : "Fayisa K.",
      rating: 5,
      feedback:
        language === "en"
          ? "Professional service with genuine parts. They completed my car maintenance on time and within budget. Highly recommended!"
          : "Tajaajila ogummaa qabu qabxii dhugaa waliin. Kunuunsa konkolaataa koo yeroo isaanii fi baajata keessatti xumuranii. Baayyee nan gorsaa!",
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <section id="about" className="py-12 sm:py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("testimonials.title")}</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">{t("testimonials.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md relative text-center bg-white dark:bg-gray-900/30">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4">
                  <Quote className="w-6 h-6 text-green-200" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">{renderStars(testimonial.rating)}</div>

                {/* Feedback */}
                <p className="text-gray-900 dark:text-gray-400 text-sm leading-relaxed mb-4 italic">"{testimonial.feedback}"</p>

                {/* Customer Name */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-900 dark:text-gray-400">{t("testimonials.verifiedCustomer")}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-base text-gray-600 dark:text-gray-400">{t("testimonials.joinMessage")}</p>
        </div>
      </div>
    </section>
  )
}
