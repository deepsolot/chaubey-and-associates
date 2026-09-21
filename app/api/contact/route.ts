import { NextRequest, NextResponse } from "next/server";

// In-memory store for active session/server lifetime
const bookingsStore: Record<string, unknown>[] = [];

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Validate required fields
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    const booking = {
      id: `BK-${Date.now()}`,
      timestamp: new Date().toISOString(),
      status: "pending",
      ...data,
    };

    // Save to in-memory store & log for monitoring
    bookingsStore.push(booking);
    console.log("=== NEW APPOINTMENT BOOKING ===");
    console.log(JSON.stringify(booking, null, 2));

    // Construct formatted WhatsApp message for Adv. Madan Kumar Upadhyay (+91 9305592322)
    const whatsappText =
      `*New Appointment Request — MK Associates*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Client Name:* ${booking.name}\n` +
      `📞 *Phone Number:* ${booking.phone}\n` +
      `📧 *Email:* ${booking.email || "Not provided"}\n` +
      `⚖️ *Practice Area:* ${booking.area || "General Legal Matter"}\n` +
      `🏢 *Preferred Office:* ${booking.preferredOffice || "New Delhi"}\n` +
      `📅 *Date:* ${booking.preferredDate || "Earliest Available"}\n` +
      `⏰ *Time Slot:* ${booking.preferredTime || "Anytime"}\n` +
      `🗣️ *Mode:* ${booking.consultationType || "Phone"}\n` +
      `💬 *Case Brief:* ${booking.message || "Consultation requested"}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Booking ID: ${booking.id}\n` +
      `_Sent directly via MK Associates Website Portal_`;

    const whatsappUrl = `https://wa.me/919305592322?text=${encodeURIComponent(
      whatsappText
    )}`;

    return NextResponse.json(
      {
        success: true,
        bookingId: booking.id,
        whatsappUrl,
        message: "Appointment prepared successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ bookings: bookingsStore });
}
