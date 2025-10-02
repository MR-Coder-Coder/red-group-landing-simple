"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

const services = [
  "Complex Care",
  "Spinal Injury", 
  "Cerebral Palsy",
  "Acquired Brain Injury",
  "Tracheostomy Care",
  "Care of the ventilated patient",
  "Children & Young people",
  "Live-in Care",
  "Palliative Care"
]

export function ServicesSection() {
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Services <span className="text-primary">We Provide</span>
            </h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="text-white/80 text-lg">
                  {service}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src="/care-professional.png"
              alt="Healthcare professional providing care"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
