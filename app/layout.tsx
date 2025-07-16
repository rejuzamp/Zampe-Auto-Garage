import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { ThemeProvider } from "@/contexts/ThemeContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zampe Auto Garage - Professional Automotive Services",
  description: "Expert automotive repair and maintenance services in Sheger, Burayu. Quality service since 2015.",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  // This is the root layout for the application.
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
  
}
