"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface InterventionCategory {
  title: string
  items: string[]
}

const interventionCategories: InterventionCategory[] = [
  {
    title: "Airway & Respiratory Care",
    items: [
      "Tracheostomy care",
      "Ventilated patient management (invasive & non-invasive)",
      "Airway management & suctioning",
      "Oxygen therapy & monitoring"
    ]
  },
  {
    title: "Neurological & Spinal Conditions",
    items: [
      "Spinal cord injury care",
      "Acquired brain injury (ABI) support",
      "Traumatic brain injury (TBI) rehabilitation",
      "Cerebral palsy management",
      "Seizure & epilepsy management",
      "Neurological condition support (e.g., MS, MND, Parkinson's)"
    ]
  },
  {
    title: "Nutrition & Medication",
    items: [
      "PEG feeding & gastrostomy care",
      "NG tube feeding",
      "Administering medications (oral, enteral, subcutaneous, etc.)",
      "Bowel & bladder management (catheters, stoma, bowel routines)"
    ]
  },
  {
    title: "Complex & Long-Term Care",
    items: [
      "Physical disabilities support",
      "Learning disabilities care",
      "Mental health support and behavioral management",
      "Live-in care for continuity and stability"
    ]
  },
  {
    title: "End of Life & Specialist Care",
    items: [
      "Palliative & end-of-life care",
      "Symptom management & comfort measures",
      "Family support during advanced illness"
    ]
  }
]

const careGroups = [
  {
    title: "Children & Young People",
    description: "Complex health needs, neurodisabilities, long-term conditions"
  },
  {
    title: "Transitioning to Adulthood",
    description: "Seamless support for young people moving from children's to adult services"
  },
  {
    title: "Adults",
    description: "Ongoing care for long-term conditions, acquired injuries, and specialist needs"
  }
]

const careOptions = [
  {
    title: "Daytime support",
    description: "Full or part-day care"
  },
  {
    title: "Night care",
    description: "Waking nights (active care) or sleep-in nights (reassurance & support)"
  },
  {
    title: "Weekends & holidays",
    description: "Consistent care all year round"
  },
  {
    title: "Live-in care",
    description: "24/7 in-home support for comfort and independence"
  }
]

export function ClinicalInterventions() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const toggleCategory = (title: string) => {
    setExpandedCategory(expandedCategory === title ? null : title)
  }

  return (
    <section id="clinical" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Clinical Interventions <span className="text-primary">We Provide</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Our specialist team delivers comprehensive, evidence-based care across a wide range of complex health conditions and clinical interventions.
          </p>
        </div>

        {/* Clinical Interventions Categories */}
        <div className="grid gap-6 mb-16">
          {interventionCategories.map((category, index) => (
            <div key={index} className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleCategory(category.title)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                {expandedCategory === category.title ? (
                  <ChevronUp className="h-6 w-6 text-primary" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-primary" />
                )}
              </button>
              {expandedCategory === category.title && (
                <div className="px-6 pb-6">
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-white/80">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Who We Care For */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Who We <span className="text-primary">Care For</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {careGroups.map((group, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
                <h4 className="text-xl font-bold text-white mb-4">{group.title}</h4>
                <p className="text-white/80">{group.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Flexible Care Options */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Flexible <span className="text-primary">Care Options</span>
          </h3>
          <p className="text-lg text-white/80 text-center mb-12 max-w-3xl mx-auto">
            We provide care whenever it's needed, ensuring continuity and support for both service users and their families.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careOptions.map((option, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">{option.title}</h4>
                <p className="text-white/80 text-sm">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
