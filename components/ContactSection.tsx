"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

/**
 * Contact Section Component - Contact form and information
 * Green-themed design matching Figma with contact details and booking form
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const { t } = useLanguage()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement

    try {
      const response = await fetch("https://formspree.io/f/xyzjarll", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        alert(t("success.messageSent"))
        setFormData({ name: "", email: "", phone: "", message: "" })
        form.reset()
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-16 px-4 bg-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Contact Form */}
          <div className="order-2 lg:order-1">
            <Card className="bg-green-600 border-0 text-white">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl font-bold text-center">{t("contact.title")}</CardTitle>
                <p className="text-center text-green-100 text-sm sm:text-base">{t("contact.subtitle")}</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white text-sm sm:text-base">
                      {t("booking.fullName")}
                    </Label>
                    <Input
                      id="contactName"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white text-sm sm:text-base">
                      {t("booking.email")}
                    </Label>
                    <Input
                      id="contactEmail"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white text-sm sm:text-base">
                      {t("booking.phoneNumber")}
                    </Label>
                    <Input
                      id="contactPhone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white text-sm sm:text-base">
                      {t("common.message")}
                    </Label>
                    <Textarea
                      id="contactMessage"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t("common.howCanWeHelp")}
                      rows={3}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-white text-green-600 hover:bg-gray-100 font-semibold py-2 sm:py-3 text-sm sm:text-base"
                  >
                    {t("common.sendMessage")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Contact Information */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">{t("contact.title")}</h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">{t("contact.subtitle")}</p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1">{t("contact.ourLocation")}</h3>
                  <p className="text-sm sm:text-base text-gray-300">{t("contact.location")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1">{t("contact.phoneNumber")}</h3>
                  <p className="text-sm sm:text-base text-gray-300">{t("contact.phone")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1">{t("contact.emailAddress")}</h3>
                  <p className="text-sm sm:text-base text-gray-300">{t("contact.email")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1">{t("contact.workingHours")}</h3>
                  <p className="text-sm sm:text-base text-gray-300">{t("contact.workingHoursTime")}</p>
                  <p className="text-sm sm:text-base text-gray-300">{t("footer.sundayClosed")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
