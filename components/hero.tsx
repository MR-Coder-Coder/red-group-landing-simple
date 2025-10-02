"use client"

import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useEffect, useRef } from "react"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
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
    <section
      ref={sectionRef}
      className="relative container mx-auto flex flex-col items-center justify-center gap-8 py-24 md:py-32 lg:py-40 opacity-0"
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="max-w-4xl text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          Recruitment the <span className="text-primary">red</span> way.
        </h1>

        <p className="max-w-2xl text-balance text-lg text-white/90 sm:text-xl leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
          Connecting exceptional healthcare professionals with leading care providers across the UK. Your next nursing
          or homecare opportunity starts here.
        </p>
      </div>

      <div className="w-full max-w-3xl mt-8">
        <div className="flex flex-col sm:flex-row gap-3 p-2 bg-transparent backdrop-blur-sm rounded-lg shadow-lg border border-border/50">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="flex-1 px-4 py-3 rounded bg-black/20 backdrop-blur-sm text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400"
          />
          <input
            type="text"
            placeholder="Location"
            className="flex-1 px-4 py-3 rounded bg-black/20 backdrop-blur-sm text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400"
          />
          <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
            <Search className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-6 justify-center">
          <span className="text-sm text-white/70 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">Suggested:</span>
          <Button variant="outline" size="sm" className="rounded-full bg-transparent backdrop-blur-sm hover:bg-card/10">
            Registered Nurse
          </Button>
          <Button variant="outline" size="sm" className="rounded-full bg-transparent backdrop-blur-sm hover:bg-card/10">
            Healthcare Assistant
          </Button>
          <Button variant="outline" size="sm" className="rounded-full bg-transparent backdrop-blur-sm hover:bg-card/10">
            Doctor
          </Button>
          <Button variant="outline" size="sm" className="rounded-full bg-transparent backdrop-blur-sm hover:bg-card/10">
            A&E Nurse
          </Button>
        </div>
      </div>

      <div className="mt-16 grid w-full max-w-5xl grid-cols-2 gap-8 md:grid-cols-4 border-t border-border pt-12">
        <div className="flex flex-col gap-2">
          <div className="text-3xl font-bold text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">10,000+</div>
          <div className="text-sm text-white/70 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">Healthcare professionals placed</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-3xl font-bold text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">500+</div>
          <div className="text-sm text-white/70 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">Partner healthcare facilities</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-3xl font-bold text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">95%</div>
          <div className="text-sm text-white/70 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">Candidate satisfaction rate</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-3xl font-bold text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">24/7</div>
          <div className="text-sm text-white/70 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">Support available</div>
        </div>
      </div>
    </section>
  )
}
