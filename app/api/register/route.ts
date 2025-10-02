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
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone || "Not provided",
          careType: data.careType || "Not specified",
          message: data.message || "No message",
          hearAbout: data.hearAbout || "Not specified",
          timestamp: new Date().toISOString(),
          source: "Red Homecare Website"
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
