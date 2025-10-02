"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

const values = [
  {
    title: "Responsibility",
    icon: "👤"
  },
  {
    title: "Respect", 
    icon: "🤝"
  },
  {
    title: "Trust",
    icon: "❤️"
  },
  {
    title: "Dedication",
    icon: "⭐"
  },
  {
    title: "Inclusion",
    icon: "🤲"
  }
]

export function ValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

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
    <section ref={sectionRef} className="py-20 relative opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          Our <span className="text-primary">Values</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4 text-2xl">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{value.title}</h3>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/healthcare-team.png"
              alt="Healthcare team providing quality care"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-[400px]"
            />
          </div>
          <div className="space-y-6">
            <p className="text-white/80 text-lg leading-relaxed">
              We use our skills and extensive experience to positively impact those we care for, their loved ones, and our teams of nurses and carers.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              Our care is nurse led; nurses develop comprehensive care plans following a clinical assessment and their role is vital in ensuring staff are trained and competent.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
