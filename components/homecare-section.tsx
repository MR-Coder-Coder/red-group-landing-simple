"use client"

import { Phone, Mail, MapPin } from "lucide-react"
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
    <section id="homecare" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Red <span className="text-primary">Homecare</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-6 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              At Red, we are committed to providing high quality, safe and effective care. Whatever your healthcare
              requirements, we will develop a bespoke care plan tailored to your medical needs and personal preferences.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              We deliver care with dignity and respect that supports clients to reach their full potential and live a
              better, more fulfilled life at home.
            </p>
            <p className="text-lg text-white/80 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              Guided by our core values of Responsibility, Respect, Trust, Dedication, and Inclusion, our service begins
              as soon as we receive your call.
            </p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm border border-border/50 rounded-lg p-8 max-w-2xl mx-auto hover:bg-black/40 transition-all">
            <h3 className="text-2xl font-bold mb-6 text-center text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1 text-white">Contact Number</p>
                  <a href="tel:+442046040537" className="text-white/80 hover:text-primary transition-colors">
                    +44 204 604 0537
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1 text-white">Email</p>
                  <a
                    href="mailto:referrals@red-group.org.uk"
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    referrals@red-group.org.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1 text-white">Address</p>
                  <p className="text-white/80">
                    3rd Floor - The News Building
                    <br />3 London Bridge Street
                    <br />
                    London, England, SE1 9SG
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
