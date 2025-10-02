"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

const professionals = [
  {
    name: "Healthcare Professionals",
    image: "/professional-woman-glasses.png",
    alt: "Professional healthcare woman with glasses",
  },
  {
    name: "Diverse Team",
    image: "/professional-woman-diverse.png",
    alt: "Diverse professional woman",
  },
  {
    name: "Nursing Excellence",
    image: "/professional-nurse-woman.jpg",
    alt: "Professional nurse",
  },
  {
    name: "Medical Expertise",
    image: "/professional-doctor-man.jpg",
    alt: "Professional doctor",
  },
]

export function ProfessionalsSection() {
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
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Join Our <span className="text-primary">Healthcare Community</span>
          </h2>
          <p className="max-w-2xl text-balance text-lg text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            Connect with a diverse team of healthcare professionals dedicated to providing exceptional care across the UK.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {professionals.map((professional, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="opacity-0 group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-transparent border border-border/50 transition-all duration-300 hover:shadow-xl hover:scale-105">
                <Image
                  src={professional.image}
                  alt={professional.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{professional.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

