"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef } from "react"

const testimonials = [
  {
    quote:
      "RedGroup helped me find the perfect nursing position that aligned with my career goals. The support throughout the process was exceptional.",
    role: "Registered Nurse",
  },
  {
    quote:
      "As a healthcare facility manager, RedGroup consistently provides us with qualified, compassionate staff. They truly understand our needs.",
    role: "Clinical Director",
  },
  {
    quote:
      "The flexibility and variety of opportunities RedGroup offered allowed me to find the perfect work-life balance while advancing my career in homecare.",
    role: "Healthcare Assistant",
  },
]

export function Testimonials() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fade-in-up")
            }, index * 150)
          }
        })
      },
      { threshold: 0.1 },
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="container mx-auto">
      <div className="flex flex-col items-center gap-4 text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          Trusted by healthcare professionals
        </h2>
        <p className="max-w-2xl text-balance text-lg text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
          Hear from the nurses, doctors, and care providers who've found their perfect match with RedGroup.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el
            }}
            className="opacity-0"
          >
            <Card className="border-border/50 bg-black/30 backdrop-blur-sm hover:shadow-lg transition-all hover:bg-black/40">
              <CardContent className="flex flex-col gap-6 p-6">
              <p className="text-base leading-relaxed text-white">"{testimonial.quote}"</p>
              <div className="flex items-center justify-end">
                <div className="text-xs text-white/70">{testimonial.role}</div>
              </div>
            </CardContent>
          </Card>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
