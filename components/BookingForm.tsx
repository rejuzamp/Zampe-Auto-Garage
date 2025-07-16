"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

/**
 * Booking Form Component - Complete appointment booking form with Formspree integration
 * Handles form submission, success feedback, and error handling with bilingual support
 */
export default function BookingForm() {
  const { t, language } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    serviceType: "",
    preferredTime: "",
  })

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

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
        setSubmitted(true)
        form.reset()
        setFormData({ serviceType: "", preferredTime: "" })
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      alert(
        language === "en"
          ? "Oops! There was a problem submitting your form. Please try again."
          : "Dhiifama! Rakkoon foormii kee galchuutti mul'ate. Maaloo irra deebi'ii yaali.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackToForm = () => {
    setSubmitted(false)
  }

  // Success Message Display
  if (submitted) {
    return (
      <section id="contact" className="py-16 px-4 dark:bg-gray-800 bg-gray-9 text-gray-100 dark:text-gray-800">
        {/*<section className="py-12 px-4 bg-background-red- text-foreground"></section>*/}
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg border-0">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg--100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-white-200 mb-4">{t("success.bookingConfirmed")}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t("success.thankYou")}</p>
              <div className="bg-darkblue-900 border border-green-200 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-green-700 mb-2">{t("success.whatNextTitle")}</h3>
                <ul className="text-sm text-green-700 space-y-1 text-left">
                  <li>• {t("success.nextStep1")}</li>
                  <li>• {t("success.nextStep2")}</li>
                  <li>• {t("success.nextStep3")}</li>
                </ul>
              </div>
              <div className="space-y-4">
                <Button
                  onClick={handleBackToForm}
                  variant="outline"
                  className="border-green-600 text-green-600 dark:text-gray-300 hover:bg-green-600 dark:hover:bg-green-600 bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t("success.bookAnother")}
                </Button>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t("success.needHelp")} <span className="font-semibold text-green-600">{t("contact.phone")}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  // Booking Form Display
  return (
    <section className="py-12 px-4 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center bg-green-600 text-white">
            <CardTitle className="text-3xl font-bold">{t("booking.title")}</CardTitle>
            <p className="text-lg text-green-100">{t("booking.subtitle")}</p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName" className="text-base font-medium">
                    {t("booking.fullName")} *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder={t("booking.fullNamePlaceholder")}
                    className="mt-1"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-base font-medium">
                    {t("booking.phoneNumber")} *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={t("booking.phonePlaceholder")}
                    className="mt-1"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-base font-medium">
                  {t("booking.email")}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("booking.emailPlaceholder")}
                  className="mt-1"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Label htmlFor="carPlateNumber" className="text-base font-medium">
                  {t("booking.carPlate")} *
                </Label>
                <Input
                  id="carPlateNumber"
                  name="carPlateNumber"
                  placeholder={t("booking.carPlatePlaceholder")}
                  className="mt-1"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Label htmlFor="serviceType" className="text-base font-medium">
                  {t("booking.serviceType")} *
                </Label>
                <Select
                  name="serviceType"
                  value={formData.serviceType}
                  onValueChange={(value) => handleSelectChange("serviceType", value)}
                  required
                  disabled={isSubmitting}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder={t("booking.selectService")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engine-diagnostics">{t("service.engineDiagnostics")}</SelectItem>
                    <SelectItem value="brake-repair">{t("service.brakeRepair")}</SelectItem>
                    <SelectItem value="tire-replacement">{t("service.tireReplacement")}</SelectItem>
                    <SelectItem value="oil-filter-change">{t("service.oilChange")}</SelectItem>
                    <SelectItem value="battery-services">{t("service.batteryService")}</SelectItem>
                    <SelectItem value="scheduled-maintenance">{t("service.scheduledMaintenance")}</SelectItem>
                    <SelectItem value="other">{t("service.other")}</SelectItem>
                  </SelectContent>
                </Select>
                <input type="hidden" name="serviceType" value={formData.serviceType} />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="preferredDate" className="text-base font-medium">
                    {t("booking.preferredDate")} *
                  </Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    className="mt-1"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Label htmlFor="preferredTime" className="text-base font-medium">
                    {t("booking.preferredTime")} *
                  </Label>
                  <Select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onValueChange={(value) => handleSelectChange("preferredTime", value)}
                    required
                    disabled={isSubmitting}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder={t("booking.selectTime")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="08:00">{t("time.8am")}</SelectItem>
                      <SelectItem value="09:00">{t("time.9am")}</SelectItem>
                      <SelectItem value="10:00">{t("time.10am")}</SelectItem>
                      <SelectItem value="11:00">{t("time.11am")}</SelectItem>
                      <SelectItem value="14:00">{t("time.2pm")}</SelectItem>
                      <SelectItem value="15:00">{t("time.3pm")}</SelectItem>
                      <SelectItem value="16:00">{t("time.4pm")}</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="preferredTime" value={formData.preferredTime} />
                </div>
              </div>

              <div>
                <Label htmlFor="vehicleDetails" className="text-base font-medium">
                  {t("booking.vehicleDetails")}
                </Label>
                <Textarea
                  id="vehicleDetails"
                  name="vehicleDetails"
                  placeholder={t("booking.vehicleDetailsPlaceholder")}
                  rows={4}
                  className="mt-1"
                  disabled={isSubmitting}
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t("booking.submitting") : t("booking.submit")}
                </Button>
              </div>

              <div className="text-center text-sm text-gray-600 pt-2">
                <p>{t("booking.note")}</p>
                <p className="mt-1">
                  {t("urgentCall")} <span className="font-semibold text-green-600">{t("contact.phone")}</span>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
