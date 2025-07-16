import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface HeaderProps {
  showBackButton?: boolean
  title?: string
}

/**<Link href="/model">
  <img src="/logo.png" alt="Zampe Auto Logo" className="h-10 w-auto cursor-pointer" />
</Link>

 * Header Component - Top navigation with optional back button and site title
 * Used across all pages for consistent navigation
 */ /** i wanna change zampe auto garage to Zampe A.G */

export default function Header({ showBackButton = false, title = "Zampe A.G" }: HeaderProps) {
  return (
    <header className="bg-[#1F1F1F] text-white py-4 px-4">
      <div className="max-w-4xl mx-auto flex items-center gap-4">
        {showBackButton && (
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-white hover:text-[#FFD700]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        )}
        <h1 className="text-2xl font-bold text-[#FFD700]">{title}</h1>
      </div>
    </header>
  )
}