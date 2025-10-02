"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export function HomecareSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="homecare" ref={sectionRef} className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/patient-care.png"
          alt="Healthcare professional providing patient care"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 max-w-2xl ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Red Homecare
          </h1>
          <p className="text-lg text-white/90 leading-relaxed mb-6">
            At Red, we are committed to providing high quality, safe and effective care. Whatever your healthcare
            requirements, we will develop a bespoke care plan tailored to your medical needs and personal preferences.
          </p>
          <p className="text-lg text-white/90 leading-relaxed mb-8">
            We deliver care with dignity and respect that supports clients to reach their full potential and live a
            better, more fulfilled life at home.
          </p>
          <p className="text-lg text-white/90 leading-relaxed mb-8">
            Guided by our core values of Responsibility, Respect, Trust, Dedication, and Inclusion, our service begins
            as soon as we receive your call.
          </p>
          
          {/* Register button removed - only keeping main registration form */}
        </div>
      </div>
    </section>
  )
}
