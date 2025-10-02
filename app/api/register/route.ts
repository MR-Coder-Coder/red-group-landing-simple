import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Format the email content
    const emailContent = `
New Registration from Red Homecare Website

First Name: ${data.firstName}
Last Name: ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Care Type: ${data.careType || "Not specified"}
Message: ${data.message || "No message"}
How they heard about us: ${data.hearAbout || "Not specified"}
    `.trim()

    // In a real application, you would send this via an email service
    // For now, we'll just log it and return success
    console.log("[v0] Registration received:", emailContent)
    console.log("[v0] Would send to: ltb.mis247@gmail.com")

    // Here you would integrate with an email service like:
    // - Resend
    // - SendGrid
    // - AWS SES
    // - Nodemailer

    // Example with a hypothetical email service:
    // await sendEmail({
    //   to: "ltb.mis247@gmail.com",
    //   subject: "New Registration from Red Homecare Website",
    //   text: emailContent,
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error processing registration:", error)
    return NextResponse.json({ success: false, error: "Failed to process registration" }, { status: 500 })
  }
}
