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
            <Image src="/redgroup-logo.png" alt="RedGroup" width={180} height={40} className="h-10 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link href="#homecare" className="text-sm font-medium text-white hover:text-primary transition-colors">
              Homecare
            </Link>
            <Link href="#about" className="text-sm font-medium text-white hover:text-primary transition-colors">
              About Us
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90">Contact us</Button>
          <Button
            variant="outline"
            className="hidden md:inline-flex border-primary text-white hover:text-primary hover:bg-primary/10 bg-transparent"
          >
            Careers at Red
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
