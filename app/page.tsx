import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import WhyWeAreBest from "@/components/WhyWeAreBest"
import OurHistory from "@/components/OurHistory"
import ServiceExperience from "@/components/ServiceExperience"
import OurSpecialServices from "@/components/OurSpecialServices"
import WhatWeHaveDone from "@/components/WhatWeHaveDone"
import PicoAutoParts from "@/components/PicoAutoParts"
import OurExcellentWorkers from "@/components/OurExcellentWorkers"
import CustomerTestimonials from "@/components/CustomerTestimonials"
import OurWorkProcess from "@/components/OurWorkProcess"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

/**
 * Home Page - Complete landing page with all sections and bilingual support
 * Professional automotive website with green color scheme and modern layout
 */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <WhyWeAreBest />
        <OurHistory />
        <ServiceExperience />
        <OurSpecialServices />
        <WhatWeHaveDone />
        <PicoAutoParts />
        <OurExcellentWorkers /> 
        <CustomerTestimonials />
        <OurWorkProcess />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
