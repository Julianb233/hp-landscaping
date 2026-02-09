import { NextRequest, NextResponse } from "next/server";

interface BookingData {
  selectedService: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  alternateDate?: string;
  alternateTime?: string;
  contactName: string;
  email: string;
  phone: string;
  propertyAddress: string;
  propertyType: string;
  additionalNotes?: string;
  hearAboutUs?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: BookingData = await request.json();

    // Validate required fields
    const requiredFields = [
      "selectedService",
      "serviceType",
      "preferredDate",
      "preferredTime",
      "contactName",
      "email",
      "phone",
      "propertyAddress",
      "propertyType",
    ];

    for (const field of requiredFields) {
      if (!data[field as keyof BookingData]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate phone format
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { error: "Invalid phone number format" },
        { status: 400 }
      );
    }

    // Format the booking data for email
    const bookingDate = new Date(data.preferredDate);
    const formattedDate = bookingDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const emailContent = `
New Appointment Booking Request

Service: ${data.selectedService}
Appointment Type: ${data.serviceType}

Preferred Date & Time:
${formattedDate} at ${data.preferredTime}

${
  data.alternateDate && data.alternateTime
    ? `Alternate Date & Time:
${new Date(data.alternateDate).toLocaleDateString()} at ${data.alternateTime}
`
    : ""
}
Contact Information:
Name: ${data.contactName}
Email: ${data.email}
Phone: ${data.phone}

Property Details:
Address: ${data.propertyAddress}
Type: ${data.propertyType}

${data.additionalNotes ? `Additional Notes:\n${data.additionalNotes}` : ""}

${data.hearAboutUs ? `How they heard about us: ${data.hearAboutUs}` : ""}

Submitted: ${new Date().toLocaleString()}
    `.trim();

    // In production, you would:
    // 1. Send email notification to business
    // 2. Send confirmation email to customer
    // 3. Store in database
    // 4. Integrate with calendar system

    // Example: Send to email service
    // await sendEmail({
    //   to: process.env.BUSINESS_EMAIL,
    //   subject: `New Booking: ${data.selectedService} - ${formattedDate}`,
    //   body: emailContent,
    // });

    // For now, just log it
    console.log("=== NEW BOOKING REQUEST ===");
    console.log(emailContent);
    console.log("===========================");

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Booking request submitted successfully",
        bookingId: `BOOK-${Date.now()}`, // In production, use proper ID generation
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking submission error:", error);
    return NextResponse.json(
      {
        error: "Failed to process booking request",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Handle GET requests (for checking booking availability in the future)
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const date = searchParams.get("date");

  // In production, check actual availability from calendar/database
  // For now, return mock data
  return NextResponse.json({
    date,
    availableTimes: [
      "08:00 AM",
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "01:00 PM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM",
      "05:00 PM",
    ],
  });
}
