import Link from "next/link"
import { Button } from "@/components/ui/button"

/**
 * Booking CTA Component - Call-to-action section for service booking
 * Prominent section to encourage appointment scheduling
 */
export default function BookingCTA() {
  return (
    <section className="bg-[#E63946] py-16 px-4 text-green-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Book a Service Now</h2>
        <p className="text-xl mb-8">Need expert help? Schedule your car check-up today.</p>
        <Link href="/book">
          <Button size="lg" className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90 px-8 py-3 text-lg">
            Book an Appointment
          </Button>
        </Link>
      </div>
    </section>
  )
}
