"use client"

import Link from "next/link"
import { Facebook, MessageCircle, Phone, Mail, MapPin, Clock, FacebookIcon } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

/**
 * TikTok Icon Component - Custom TikTok icon since it's not available in Lucide
 */
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

/**
 * Footer Component - Dark footer with comprehensive site information
 * Multi-column layout with company info, services, contact details, and social links
 */
export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Zampe Auto Garage</h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/zamprongo.giovanni"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
                aria-label={t("footer.followUs") + " Facebook"}
              >
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@zampe.auto.garage"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
                aria-label={t("footer.followUs") + " TikTok"}
              >
                <TikTokIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://t.me/zampeautogarage"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
                aria-label="Contact us on Telegram"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="tel:+251931225021"
                className="hover:text-green-400 transition-colors"
                aria-label={t("footer.callUs")}
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="/" className="text-sm sm:text-base hover:text-green-400 transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm sm:text-base hover:text-green-400 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href="#history"
                  className="text-sm sm:text-base hover:text-green-400 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("history")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {t("nav.history")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm sm:text-base hover:text-green-400 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a
                  href="#pico"
                  className="text-sm sm:text-base hover:text-green-400 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("pico")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Pico
                </a>
              </li>
              <li>
                <Link href="/book" className="text-sm sm:text-base hover:text-green-400 transition-colors">
                  {t("nav.bookService")}
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm sm:text-base hover:text-green-400 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">{t("footer.ourServices")}</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <span className="text-sm sm:text-base hover:text-green-400 transition-colors cursor-pointer">
                  {t("services.items.0")}
                </span>
              </li>
              <li>
                <span className="text-sm sm:text-base hover:text-green-400 transition-colors cursor-pointer">
                  {t("services.items.1")}
                </span>
              </li>
              <li>
                <span className="text-sm sm:text-base hover:text-green-400 transition-colors cursor-pointer">
                  {t("services.items.2")}
                </span>
              </li>
              <li>
                <span className="text-sm sm:text-base hover:text-green-400 transition-colors cursor-pointer">
                  {t("services.items.3")}
                </span>
              </li>
              <li>
                <span className="text-sm sm:text-base hover:text-green-400 transition-colors cursor-pointer">
                  {t("services.items.4")}
                </span>
              </li>
              <li>
                <span className="text-sm sm:text-base hover:text-green-400 transition-colors cursor-pointer">
                  {t("services.items.5")}
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">{t("footer.contactInfo")}</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm font-medium text-white mb-1">{t("contact.workingHours")}</p>
                  <p className="text-xs sm:text-sm">{t("contact.workingHoursTime")}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm">{t("contact.location")}</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <a
                  href={`tel:${t("contact.phone")}`}
                  className="text-xs sm:text-sm hover:text-green-400 transition-colors"
                >
                  {t("contact.phone")}
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <a
                  href={`mailto:${t("contact.email")}`}
                  className="text-xs sm:text-sm hover:text-green-400 transition-colors break-all"
                >
                  {t("contact.email")}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            <Link
              href="#"
              className="text-xs sm:text-sm text-gray-400 hover:text-green-400 transition-colors text-center"
            >
              {t("footer.privacyPolicy")}
            </Link>
            <Link
              href="#"
              className="text-xs sm:text-sm text-gray-400 hover:text-green-400 transition-colors text-center"
            >
              {t("footer.termsOfService")}
            </Link>
          </div>

          {/* Copyright and Developer Credit */}
          <p className="text-xs sm:text-sm text-gray-400 text-center">
            © 2025 Zampe Auto Garage. {t("common.allRightsReserved")} | {t("common.builtBy")}{" "}
            <a
              href="https://www.fiverr.com/users/regina_gio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] font-medium hover:underline"
            >
              Regina Giovanni and Dave Giovanni
            </a>
          </p>
        </div>
        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">{t("common.privacyNotice")}</p>
        </div>
      </div>
    </footer>
  )
}
