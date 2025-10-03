"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

interface FormData {
  // Step 1 - Service Selection
  serviceType: string
  nursingRole: string
  careRole: string
  
  // Step 2 - Care Availability
  careAvailability: string[]
  
  // Step 3 - Contact Details
  fullName: string
  organisation: string
  phoneNumber: string
  emailAddress: string
  location: string
  postcode: string
  
  // Step 4 - Care Requirements
  careType: string
  preferredStartDate: string
  additionalNotes: string
}

const initialFormData: FormData = {
  serviceType: "",
  nursingRole: "",
  careRole: "",
  careAvailability: [],
  fullName: "",
  organisation: "",
  phoneNumber: "",
  emailAddress: "",
  location: "",
  postcode: "",
  careType: "",
  preferredStartDate: "",
  additionalNotes: ""
}

export function LeadCaptureForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalSteps = 5

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const updateCareAvailability = (option: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      careAvailability: checked 
        ? [...prev.careAvailability, option]
        : prev.careAvailability.filter(item => item !== option)
    }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "Red Group Lead Capture Form"
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">Thank You!</h3>
        <p className="text-white/80">We've received your request and will be in touch soon to discuss your care requirements.</p>
      </div>
    )
  }

  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/10">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div key={i} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                i + 1 <= currentStep 
                  ? 'bg-primary text-white' 
                  : 'bg-white/20 text-white/60'
              }`}>
                {i + 1}
              </div>
              {i < totalSteps - 1 && (
                <div className={`w-12 h-1 mx-2 ${
                  i + 1 < currentStep ? 'bg-primary' : 'bg-white/20'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            {currentStep === 1 && "Select Service"}
            {currentStep === 2 && "Care Availability"}
            {currentStep === 3 && "Contact Details"}
            {currentStep === 4 && "Care Requirements"}
            {currentStep === 5 && "Review & Submit"}
          </h2>
        </div>
      </div>

      {/* Step 1 - Service Selection */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <div>
            <Label className="text-lg font-semibold text-white mb-4 block">Select Service Type</Label>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="nursing"
                  name="serviceType"
                  value="nursing"
                  checked={formData.serviceType === "nursing"}
                  onChange={(e) => updateFormData("serviceType", e.target.value)}
                  className="w-4 h-4 text-primary"
                />
                <Label htmlFor="nursing" className="text-white cursor-pointer">Nursing</Label>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="care"
                  name="serviceType"
                  value="care"
                  checked={formData.serviceType === "care"}
                  onChange={(e) => updateFormData("serviceType", e.target.value)}
                  className="w-4 h-4 text-primary"
                />
                <Label htmlFor="care" className="text-white cursor-pointer">Health & Social Care</Label>
              </div>
            </div>
          </div>

          {formData.serviceType === "nursing" && (
            <div>
              <Label className="text-lg font-semibold text-white mb-4 block">Nursing Role</Label>
              <Select value={formData.nursingRole} onValueChange={(value) => updateFormData("nursingRole", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select nursing role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rscn">Registered Paediatric Nurse (RSCN / RN Child)</SelectItem>
                  <SelectItem value="rgn">Registered Adult Nurse (RGN)</SelectItem>
                  <SelectItem value="rnld">Registered Learning Disability Nurse (RNLD)</SelectItem>
                  <SelectItem value="rmn">Registered Mental Health Nurse (RMN)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {formData.serviceType === "care" && (
            <div>
              <Label className="text-lg font-semibold text-white mb-4 block">Care Role</Label>
              <Select value={formData.careRole} onValueChange={(value) => updateFormData("careRole", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select care role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hca">Health Care Assistant (HCA) – complex care trained</SelectItem>
                  <SelectItem value="specialist">Specialist Support Worker – skilled in complex care</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      )}

      {/* Step 2 - Care Availability */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <Label className="text-lg font-semibold text-white mb-4 block">Select Care Availability</Label>
          <div className="space-y-4">
            {[
              "Daytime care",
              "Night care – waking nights (active monitoring & interventions)",
              "Night care – sleep-in nights (support if needed)",
              "Weekend cover",
              "Live-in care (24/7 support)"
            ].map((option, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Checkbox
                  id={`availability-${index}`}
                  checked={formData.careAvailability.includes(option)}
                  onCheckedChange={(checked) => updateCareAvailability(option, checked as boolean)}
                />
                <Label htmlFor={`availability-${index}`} className="text-white cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 3 - Contact Details */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => updateFormData("fullName", e.target.value)}
                placeholder="Full Name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organisation">Organisation (if applicable)</Label>
              <Input
                id="organisation"
                value={formData.organisation}
                onChange={(e) => updateFormData("organisation", e.target.value)}
                placeholder="Organisation"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number *</Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => updateFormData("phoneNumber", e.target.value)}
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emailAddress">Email Address *</Label>
              <Input
                id="emailAddress"
                type="email"
                value={formData.emailAddress}
                onChange={(e) => updateFormData("emailAddress", e.target.value)}
                placeholder="Email Address"
                required
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="location">Location (Town/City) *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => updateFormData("location", e.target.value)}
                placeholder="Town/City"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="postcode">Postcode *</Label>
              <Input
                id="postcode"
                value={formData.postcode}
                onChange={(e) => updateFormData("postcode", e.target.value)}
                placeholder="Postcode"
                required
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 4 - Care Requirements */}
      {currentStep === 4 && (
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="careType">Type of care needed *</Label>
            <Textarea
              id="careType"
              value={formData.careType}
              onChange={(e) => updateFormData("careType", e.target.value)}
              placeholder="e.g., tracheostomy, ventilated care, ABI, palliative, etc."
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredStartDate">Preferred start date</Label>
            <Input
              id="preferredStartDate"
              type="date"
              value={formData.preferredStartDate}
              onChange={(e) => updateFormData("preferredStartDate", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalNotes">Additional Notes</Label>
            <Textarea
              id="additionalNotes"
              value={formData.additionalNotes}
              onChange={(e) => updateFormData("additionalNotes", e.target.value)}
              placeholder="Any additional information about care requirements..."
              rows={4}
            />
          </div>
        </div>
      )}

      {/* Step 5 - Review & Submit */}
      {currentStep === 5 && (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Review Your Information</h3>
          <div className="bg-black/20 rounded-lg p-6 space-y-4">
            <div>
              <span className="font-semibold text-white">Service: </span>
              <span className="text-white/80">
                {formData.serviceType === "nursing" ? formData.nursingRole : formData.careRole}
              </span>
            </div>
            <div>
              <span className="font-semibold text-white">Availability: </span>
              <span className="text-white/80">{formData.careAvailability.join(", ")}</span>
            </div>
            <div>
              <span className="font-semibold text-white">Contact: </span>
              <span className="text-white/80">{formData.fullName} - {formData.emailAddress}</span>
            </div>
            <div>
              <span className="font-semibold text-white">Location: </span>
              <span className="text-white/80">{formData.location}, {formData.postcode}</span>
            </div>
            <div>
              <span className="font-semibold text-white">Care Type: </span>
              <span className="text-white/80">{formData.careType}</span>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="bg-transparent border-white/20 text-white hover:bg-white/10"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>

        {currentStep < totalSteps ? (
          <Button
            type="button"
            onClick={nextStep}
            className="bg-primary hover:bg-primary/90"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/90"
          >
            {isSubmitting ? "Submitting..." : "Request a Call Back"}
          </Button>
        )}
      </div>
    </div>
  )
}
