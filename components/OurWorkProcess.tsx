import { Card, CardContent } from "@/components/ui/card"
import { Phone, Search, Wrench, CheckCircle } from "lucide-react"

/**
 * Our Work Process Component - 4-step process workflow
 * Shows customers the service process from booking to completion
 */
export default function OurWorkProcess() {
  const processSteps = [
    {
      icon: Phone,
      number: "01",
      title: "Choose Services",
      description: "Select the automotive service you need from our comprehensive range of offerings.",
    },
    {
      icon: Search,
      number: "02",
      title: "Make Appointment",
      description: "Schedule your preferred date and time through our easy online booking system.",
    },
    {
      icon: Wrench,
      number: "03",
      title: "Confirm Request",
      description: "Receive confirmation of your appointment with detailed service information.",
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Pay Your Car",
      description: "Complete payment after quality service delivery with our transparent pricing.",
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Work Process</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Simple and transparent process to get your vehicle serviced professionally
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md relative  bg-white dark:bg-gray-900/30">
              <CardContent className="p-8">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-green-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
