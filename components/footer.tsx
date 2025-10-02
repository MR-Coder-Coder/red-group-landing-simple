import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/redgroup-logo.png" alt="RedGroup" width={180} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-white/80 max-w-xs leading-relaxed mb-6">
              Leading healthcare recruitment specialists connecting exceptional nursing and homecare professionals with
              top facilities across the UK.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+442046040537" className="hover:text-primary transition-colors">
                  +44 204 604 0537
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:referrals@red-group.org.uk" className="hover:text-primary transition-colors">
                  referrals@red-group.org.uk
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>3rd Floor - The News Building, 3 London Bridge Street, London, England, SE1 9SG</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link href="#" className="text-white/80 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">For Jobseekers</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-white/80 hover:text-primary transition-colors">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-primary transition-colors">
                  Register Your CV
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-primary transition-colors">
                  Career Advice
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-primary transition-colors">
                  Training & Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">For Clients</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-white/80 hover:text-primary transition-colors">
                  Hire Staff
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-primary transition-colors">
                  Homecare Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-primary transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-primary transition-colors">
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-white/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-primary transition-colors">
                  Insights & News
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div className="text-sm text-white/80 text-center sm:text-left">
              <p className="mb-1">Red Group Personnel Ltd is registered in England and Wales, no. 11235320.</p>
              <p>Registered office address: 124 City Road, London, England, EC1V 2NX.</p>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/80">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-sm text-white/80">© 2025 Red Group Ltd</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
