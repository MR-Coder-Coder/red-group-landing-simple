import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Send data to n8n webhook
    const webhookUrl = "https://n8n-l8h7n-u38477.vm.elestio.app/webhook/email-submit"
    
    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Legacy fields for backward compatibility
          firstName: data.fullName?.split(' ')[0] || data.firstName || "Not provided",
          lastName: data.fullName?.split(' ').slice(1).join(' ') || data.lastName || "Not provided",
          email: data.emailAddress || data.email || "Not provided",
          phone: data.phoneNumber || data.phone || "Not provided",
          careType: data.careType || "Not specified",
          message: data.additionalNotes || data.message || "No message",
          hearAbout: data.source || "Not specified",
          
          // New lead capture fields
          serviceType: data.serviceType || "Not specified",
          nursingRole: data.nursingRole || "Not applicable",
          careRole: data.careRole || "Not applicable",
          careAvailability: data.careAvailability || [],
          organisation: data.organisation || "Not provided",
          location: data.location || "Not provided",
          postcode: data.postcode || "Not provided",
          preferredStartDate: data.preferredStartDate || "Not specified",
          additionalNotes: data.additionalNotes || "No additional notes",
          timestamp: new Date().toISOString(),
          source: data.source || "Red Group Lead Capture Form"
        }),
      })

      if (!webhookResponse.ok) {
        console.error("Webhook response error:", await webhookResponse.text())
      } else {
        console.log("Registration successfully sent to webhook")
      }
    } catch (webhookError) {
      console.error("Error sending to webhook:", webhookError)
      // Continue even if webhook fails - don't want to show error to user
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing registration:", error)
    return NextResponse.json({ success: false, error: "Failed to process registration" }, { status: 500 })
  }
}
