import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-black/40 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image src="/Red Logo Dark Trans.png" alt="RedGroup" width={240} height={60} className="h-16 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link href="#homecare" className="text-sm font-medium text-white hover:text-primary transition-colors">
              Homecare
            </Link>
            <Link href="#clinical" className="text-sm font-medium text-white hover:text-primary transition-colors">
              Clinical Care
            </Link>
            <Link href="#about" className="text-sm font-medium text-white hover:text-primary transition-colors">
              About Us
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Buttons removed - only keeping functional registration */}
        </div>
      </div>
    </header>
  )
}
