"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="container py-24 md:py-32 opacity-0">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-12 md:p-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="relative flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to start your healthcare career journey?
          </h2>
          <p className="max-w-2xl text-balance text-lg text-muted-foreground">
            Join thousands of healthcare professionals who have found their perfect role with RedGroup. Let us help you
            take the next step in your nursing or homecare career.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Button size="lg" className="text-base bg-primary hover:bg-primary/90">
              Browse Jobs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-transparent border-primary text-primary hover:bg-primary/10"
            >
              Register Your CV
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Free registration • Personalized job matches • Expert career guidance
          </p>
        </div>
      </div>
    </section>
  )
}
