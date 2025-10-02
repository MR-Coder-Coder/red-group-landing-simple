"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Award, Clock } from "lucide-react"
import { useEffect, useRef } from "react"

const features = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "We match healthcare professionals who are passionate about providing exceptional patient care with organizations that share the same values.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Our experienced recruitment consultants provide personalized guidance throughout your entire job search and placement journey.",
  },
  {
    icon: Award,
    title: "Quality Placements",
    description:
      "Rigorous vetting processes ensure we connect qualified, certified professionals with reputable healthcare providers.",
  },
  {
    icon: Clock,
    title: "Flexible Opportunities",
    description:
      "From permanent positions to temporary contracts, we offer diverse opportunities that fit your lifestyle and career goals.",
  },
]

export function Features() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fade-in-up")
            }, index * 100)
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
    <section id="features" className="container py-24 md:py-32">
      <div className="flex flex-col items-center gap-4 text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Why choose <span className="text-primary">RedGroup</span>?
        </h2>
        <p className="max-w-2xl text-balance text-lg text-muted-foreground">
          We're committed to connecting healthcare professionals with opportunities that make a real difference in
          people's lives.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el
            }}
            className="border-border bg-card opacity-0 hover:shadow-lg transition-shadow"
          >
            <CardContent className="flex flex-col gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
