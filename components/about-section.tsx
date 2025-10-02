"use client"

import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative bg-black/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Welcome to <span className="text-primary">Red Group Personnel Limited</span>
            </h2>
          </div>

          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Red Group Personnel Limited is a specialist complex care provider, delivering high-quality, 
                person-centred services across the UK and internationally. We are committed to supporting 
                individuals with complex and long-term health needs through evidence-based care, clinical 
                excellence, and professional integrity.
              </p>

              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Our team comprises experienced registered nurses and highly trained specialist carers, 
                enabling us to deliver safe, effective, and responsive care in the community. We support 
                clients across all age groups — from children and young people through to adults and 
                those transitioning into adult services.
              </p>

              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                We have expertise in managing a wide range of clinical interventions, including tracheostomy 
                and ventilator care, spinal cord and acquired brain injury rehabilitation, neurological 
                conditions, complex medication management, bowel and bladder care, and palliative/end-of-life 
                support.
              </p>

              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Our services are designed to provide flexibility and continuity, with care available during 
                the day, overnight (waking or sleep-in), weekends, and through live-in arrangements. This 
                ensures we can meet the needs of both service users and commissioning partners in a reliable 
                and sustainable way.
              </p>

              <p className="text-lg text-white/90 leading-relaxed">
                At Red Group Personnel Limited, we combine clinical governance, specialist training, and a 
                robust quality assurance framework to deliver safe and effective care that upholds dignity, 
                independence, and quality of life.
              </p>
            </div>
          </div>

          {/* Complex Care Images Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Our <span className="text-primary">Complex Care</span> in Action
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/Children with complex care needs.png"
                    alt="Children with complex care needs"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Children & Young People</h4>
                <p className="text-white/80 text-sm">Specialized care for children with complex health needs and neurodisabilities</p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/Ventilation care and mobility support.png"
                    alt="Ventilation care and mobility support"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Ventilation & Mobility</h4>
                <p className="text-white/80 text-sm">Advanced respiratory care and mobility support for independence</p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/Family-centered care and support.png"
                    alt="Family-centered care and support"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Family-Centered Care</h4>
                <p className="text-white/80 text-sm">Supporting families through every step of their care journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
