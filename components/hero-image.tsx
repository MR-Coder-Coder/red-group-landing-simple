"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export function HeroImage() {
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
    <div ref={sectionRef} className="relative w-full h-[400px] md:h-[500px] opacity-0 mb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 z-10" />
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        <Image
          src="/professional-healthcare-woman.jpg"
          alt="Healthcare professionals working together"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
            Excellence in Healthcare Recruitment
          </h2>
          <p className="text-lg md:text-xl drop-shadow-lg max-w-2xl mx-auto">
            Connecting passionate professionals with life-changing opportunities
          </p>
        </div>
      </div>
    </div>
  )
}
