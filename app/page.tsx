import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HomecareSection } from "@/components/homecare-section"
import { ServicesSection } from "@/components/services-section"
import { ClinicalInterventions } from "@/components/clinical-interventions"
import { ValuesSection } from "@/components/values-section"
import { ContactSection } from "@/components/contact-section"
import { AboutSection } from "@/components/about-section"
import { LeadCaptureForm } from "@/components/lead-capture-form"
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
        <ClinicalInterventions />
        <ValuesSection />
        <ContactSection />
        <AboutSection />
        <section id="register" className="py-20 relative w-full">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                Request a <span className="text-primary">Call Back</span>
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Tell us about your care requirements and we'll get back to you with the perfect solution.
              </p>
            </div>
            <LeadCaptureForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
