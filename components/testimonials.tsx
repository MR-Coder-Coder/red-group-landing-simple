"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useRef } from "react"

const testimonials = [
  {
    quote:
      "RedGroup helped me find the perfect nursing position that aligned with my career goals. The support throughout the process was exceptional.",
    author: "Sarah Mitchell",
    role: "Registered Nurse",
    avatar: "/professional-nurse-woman.jpg",
    initials: "SM",
  },
  {
    quote:
      "As a healthcare facility manager, RedGroup consistently provides us with qualified, compassionate staff. They truly understand our needs.",
    author: "Dr. James Thompson",
    role: "Clinical Director",
    avatar: "/professional-doctor-man.jpg",
    initials: "JT",
  },
  {
    quote:
      "The flexibility and variety of opportunities RedGroup offered allowed me to find the perfect work-life balance while advancing my career in homecare.",
    author: "Emily Roberts",
    role: "Healthcare Assistant",
    avatar: "/professional-healthcare-woman.jpg",
    initials: "ER",
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
    <section id="testimonials" className="container py-24 md:py-32 bg-muted/30">
      <div className="flex flex-col items-center gap-4 text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Trusted by healthcare professionals
        </h2>
        <p className="max-w-2xl text-balance text-lg text-muted-foreground">
          Hear from the nurses, doctors, and care providers who've found their perfect match with RedGroup.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el
            }}
            className="border-border bg-card opacity-0 hover:shadow-lg transition-shadow"
          >
            <CardContent className="flex flex-col gap-6 p-6">
              <p className="text-base leading-relaxed text-card-foreground">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                  <AvatarFallback className="bg-primary/10 text-primary">{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
