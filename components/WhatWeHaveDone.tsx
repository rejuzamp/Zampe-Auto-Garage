import { Search, Settings, Droplets, Shield, Palette, Wrench } from "lucide-react"

/**
 * What We Have Done Component - Recreated design showcasing automotive services
 * Features a central yellow car with six service categories arranged around it, with car outline background
 */
export default function WhatWeHaveDone() {
  const services = [
    {
      icon: Search,
      title: "Identify Problems",
      position: "top-left",
      bgColor: "bg-blue-500",
    },
    {
      icon: Settings,
      title: "Auto Parts",
      position: "top-right",
      bgColor: "bg-green-500",
    },
    {
      icon: Droplets,
      title: "Car Washes",
      position: "middle-left",
      bgColor: "bg-cyan-500",
    },
    {
      icon: Shield,
      title: "Guarantee",
      position: "middle-right",
      bgColor: "bg-red-500",
    },
    {
      icon: Palette,
      title: "Car Painting",
      position: "bottom-left",
      bgColor: "bg-purple-500",
    },
    {
      icon: Wrench,
      title: "Auto Repair",
      position: "bottom-right",
      bgColor: "bg-orange-500",
    },
  ]

  const getPositionClasses = (position: string) => {
    switch (position) {
      case "top-left":
        return "absolute top-4 left-4 sm:top-8 sm:left-12 lg:top-12 lg:left-20"
      case "top-right":
        return "absolute top-4 right-4 sm:top-8 sm:right-12 lg:top-12 lg:right-20"
      case "middle-left":
        return "absolute top-1/2 left-2 sm:left-6 lg:left-12 transform -translate-y-1/2"
      case "middle-right":
        return "absolute top-1/2 right-2 sm:right-6 lg:right-12 transform -translate-y-1/2"
      case "bottom-left":
        return "absolute bottom-4 left-4 sm:bottom-8 sm:left-12 lg:bottom-12 lg:left-20"
      case "bottom-right":
        return "absolute bottom-4 right-4 sm:bottom-8 sm:right-12 lg:bottom-12 lg:right-20"
      default:
        return ""
    }
  }

  return (
    <section id="about" className="py-12 sm:py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors relative overflow-hidden">
      {/* Background Car Outline */}
    

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">What We Have Done</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Comprehensive automotive services delivered with expertise and precision
          </p>
        </div>

        {/* Main Container */}
        <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] mx-auto max-w-5xl">
          {/* Central Car Image - Increased Size */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <img
                src="/images/yellow-car.png"
                alt="Yellow sports car - center of automotive services"
                className="w-40 h-48 sm:w-52 sm:h-64 lg:w-64 lg:h-80 object-contain drop-shadow-lxl hover:scale-105 transition-transform duration-300"
                
              />
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-yellow-400 opacity-25 blur-2xl rounded-full scale-90 -z-10"></div>
            </div>
          </div>

          {/* Service Items */}
          {services.map((service, index) => (
            <div key={index} className={`${getPositionClasses(service.position)} z-20`}>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                {/* Icon Circle */}
                <div
                  className={`w-14 h-14 sm:w-18 sm:h-18 lg:w-22 lg:h-22 ${service.bgColor} rounded-full flex items-center justify-center mb-2 sm:mb-3 shadow-xl group-hover:scale-110 transition-all duration-300 border-4 border-white`}
                >
                  <service.icon className="w-7 h-7 sm:w-9 sm:h-9 lg:w-11 lg:h-11 text-white" />
                </div>
                {/* Service Title */}
                <div className=" bg-white dark:bg-gray-800 px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-lg border-2 border-gray-200 group-hover:border-gray-300 group-hover:shadow-xl transition-all duration-300">
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-600 dark:text-gray-300 whitespace-nowrap">
                    {service.title}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Enhanced Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
            {/* Lines from center to each service with better positioning */}
            <line x1="50%" y1="50%" x2="18%" y2="20%" stroke="#fbbf24" strokeWidth="3" strokeDasharray="8,4" />
            <line x1="50%" y1="50%" x2="82%" y2="20%" stroke="#fbbf24" strokeWidth="3" strokeDasharray="8,4" />
            <line x1="50%" y1="50%" x2="12%" y2="50%" stroke="#fbbf24" strokeWidth="3" strokeDasharray="8,4" />
            <line x1="50%" y1="50%" x2="88%" y2="50%" stroke="#fbbf24" strokeWidth="3" strokeDasharray="8,4" />
            <line x1="50%" y1="50%" x2="18%" y2="80%" stroke="#fbbf24" strokeWidth="3" strokeDasharray="8,4" />
            <line x1="50%" y1="50%" x2="82%" y2="80%" stroke="#fbbf24" strokeWidth="3" strokeDasharray="8,4" />
          </svg>
        </div>

        {/* Bottom Description */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From problem identification to complete repairs, we provide comprehensive automotive solutions. Our expert
            team ensures quality service across all aspects of vehicle maintenance and care.
          </p>
        </div>
      </div>
    </section>
  )
}
