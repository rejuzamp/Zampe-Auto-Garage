import Navigation from "@/components/Navigation"
import BookingForm from "@/components/BookingForm"
import Footer from "@/components/Footer"

/**
 * Booking Page - Dedicated appointment scheduling page
 * Clean layout focused on the booking form with navigation and footer
 */ /*changes both light and dark back ground black*/
export default function BookPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      <Navigation />
      <main className="pt-16">
        <div className="py-8">
          <BookingForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
