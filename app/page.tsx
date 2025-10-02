import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HomecareSection } from "@/components/homecare-section"
import { ServicesSection } from "@/components/services-section"
import { ValuesSection } from "@/components/values-section"
import { ContactSection } from "@/components/contact-section"
import { RegistrationForm } from "@/components/registration-form"
import { Footer } from "@/components/footer"

// Dynamically import Background3D with SSR disabled to prevent Three.js rendering errors during build
const Background3D = dynamic(
  () => import("@/components/background-3d").then((mod) => ({ default: mod.Background3D })),
  { 
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-950/10 to-transparent" />
      </div>
    )
  }
)

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Background3D />
      <Header />
      <main className="relative w-full">
        <HomecareSection />
        <ServicesSection />
        <ValuesSection />
        <ContactSection />
        <section id="register" className="py-20 relative w-full">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                Register with <span className="text-primary">Red Homecare</span>
              </h2>
            </div>
            <RegistrationForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
