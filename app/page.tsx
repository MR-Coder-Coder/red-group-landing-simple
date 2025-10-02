import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HomecareSection } from "@/components/homecare-section"
import { Testimonials } from "@/components/testimonials"
import { RegistrationForm } from "@/components/registration-form"
import { CTA } from "@/components/cta"
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
    <div className="min-h-screen">
      <Background3D />
      <Header />
      <main>
        <Hero />
        <Features />
        <HomecareSection />
        <Testimonials />
        <section id="register" className="py-20 bg-muted/30 relative">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Register with <span className="text-primary">Red Homecare</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Take the first step towards exceptional homecare. Fill out the form below and we'll be in touch soon.
              </p>
            </div>
            <RegistrationForm />
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
