import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto py-12 text-center">
        <div className="mb-8">
          <Link href="/" className="flex items-center justify-center mb-4">
            <Image src="/redgroup-logo.png" alt="RedGroup" width={180} height={40} className="h-10 w-auto" />
          </Link>
          <p className="text-sm text-white/80 max-w-md mx-auto leading-relaxed">
            Leading healthcare recruitment specialists connecting exceptional nursing and homecare professionals with
            top facilities across the UK.
          </p>
        </div>

        <div className="space-y-2 text-sm text-white/80">
          <p>Red Group Personnel Ltd is registered in England and Wales, no. 11235320.</p>
          <p>Company address: 3rd Floor - The News Building, 3 London Bridge Street, London, England, SE1 9SG</p>
          <p className="pt-4">© 2025 Red Group Ltd</p>
        </div>
      </div>
    </footer>
  )
}