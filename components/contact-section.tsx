"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ContactSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Get in touch
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            If you want to make the first step in progressing with your career, then get in touch with
            Red today. We can offer you tailored career advice, guide you through the recruitment
            process, and help you to secure a job that works for you.
          </p>
          
          {/* All buttons removed */}
        </div>

        <div className="relative h-96 mb-16">
          <Image
            src="/healthcare-team.png"
            alt="Providing high-quality homecare"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-primary">Providing</span> high-quality<br />homecare
              </h3>
              {/* Button removed */}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/30 backdrop-blur-sm border border-border/50 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Quick Register</h3>
            </div>
            <p className="text-white/80 mb-6">
              Sign up with Red Group and let us find your perfect job!
            </p>
            {/* Button removed */}
          </div>

          <div className="bg-black/30 backdrop-blur-sm border border-border/50 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Get in Touch</h3>
            </div>
            <div className="space-y-3 text-white/80">
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">Contact Number:</span> +442046040537
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">Email:</span> referrals@red-group.org.uk
              </p>
              <p className="flex items-start gap-2">
                <svg className="w-4 h-4 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <span className="font-medium">Company address:</span><br />
                  3rd Floor - The News Building,<br />
                  3 London Bridge Street,<br />
                  London, England, SE1 9SG
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
