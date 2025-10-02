"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      careType: formData.get("careType"),
      message: formData.get("message"),
      hearAbout: formData.get("hearAbout"),
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
          <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">Thank You!</h3>
        <p className="text-white/80">We've received your registration and will be in touch soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" required placeholder="First Name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" name="lastName" required placeholder="Last Name" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required placeholder="Email" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone (Optional)</Label>
        <Input id="phone" name="phone" type="tel" placeholder="Phone (Optional)" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="careType">Care Type (Optional)</Label>
        <Select name="careType">
          <SelectTrigger id="careType">
            <SelectValue placeholder="Care Type (Optional)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="complex-care">Complex Care</SelectItem>
            <SelectItem value="spinal-injury">Spinal Injury</SelectItem>
            <SelectItem value="cerebral-palsy">Cerebral Palsy</SelectItem>
            <SelectItem value="acquired-brain-injury">Acquired Brain Injury</SelectItem>
            <SelectItem value="tracheostomy">Tracheostomy Care</SelectItem>
            <SelectItem value="ventilated-patient">Care of the Ventilated Patient</SelectItem>
            <SelectItem value="children-young-people">Children & Young People</SelectItem>
            <SelectItem value="live-in">Live-in Care</SelectItem>
            <SelectItem value="palliative">Palliative Care</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">About the care that you require</Label>
        <Textarea id="message" name="message" placeholder="About the care that you require" rows={4} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="hearAbout">How did you hear about us?</Label>
        <Input id="hearAbout" name="hearAbout" placeholder="How did you hear about us?" />
      </div>

      <p className="text-sm text-white/70">
        To find out about how we process your data, please read our privacy policy.
      </p>

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-primary hover:bg-primary/90">
        {isSubmitting ? "Sending..." : "Send"}
      </Button>
    </form>
  )
}
