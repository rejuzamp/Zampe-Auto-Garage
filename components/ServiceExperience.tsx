import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Wrench, Award } from "lucide-react"

/**
 * Service Experience Component - Showcases years of experience and achievements
 * Displays key statistics and company milestones
 */
export default function ServiceExperience() {
  const stats = [
    { icon: Calendar, number: "2015", label: "Experience Since", description: "Years of trusted service" },
    { icon: Users, number: "1000+", label: "Happy Customers", description: "Satisfied clients served" },
    { icon: Wrench, number: "1000+", label: "Repairs Done", description: "Successful repairs completed" },
    { icon: Award, number: "100%", label: "Quality Work", description: "Customer satisfaction rate" },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Main content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Service Experience</h2>
            <div className="mb-6 sm:mb-8">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-600 mb-2">2025</div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">Since our establishment</p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6">
                With experience in automotive service, Zampe Auto Garage has built a reputation for
                excellence, reliability, and customer satisfaction. Our journey began in 2025 with a simple mission: to
                provide honest, professional automotive care to our community.
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                  Professional diagnostic equipment
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                  Certified automotive technicians
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                  Genuine parts and quality service
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                  Comprehensive warranty coverage
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Stats grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md bg-white dark:bg-gray-900/30">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-600 dark:text-gray-300 mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm font-semibold text-green-600 mb-1 sm:mb-2">{stat.label}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
