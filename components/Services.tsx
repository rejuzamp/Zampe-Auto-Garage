import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, Car, Settings, Droplets, Battery, Calendar } from "lucide-react"

/**
 * Services Component - Showcase of all automotive services offered
 * Grid layout with icons and descriptions for each service type
 */
export default function Services() {
  const services = [
    {
      icon: Settings,
      title: "Engine Diagnostics",
      description: "Advanced computer diagnostics to identify engine issues",
    },
    {
      icon: Wrench,
      title: "Brake Repair",
      description: "Complete brake system inspection and repair services",
    },
    {
      icon: Car,
      title: "Tire Replacement",
      description: "Professional tire installation and balancing services",
    },
    {
      icon: Droplets,
      title: "Oil & Filter Change",
      description: "Regular maintenance to keep your engine running smooth",
    },
    {
      icon: Battery,
      title: "Battery Services",
      description: "Battery testing, replacement, and electrical system repair",
    },
    {
      icon: Calendar,
      title: "Scheduled Maintenance",
      description: "Comprehensive maintenance packages for all vehicle types",
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#1f1f1f]">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <service.icon className="w-12 h-12 mx-auto mb-4 text-[#FFD700]" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
