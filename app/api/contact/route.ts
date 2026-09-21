import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

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

    // Save to a local JSON file (acts as lightweight DB)
    const filePath = path.join(process.cwd(), "data", "bookings.json");

    // Ensure data directory exists
    if (!fs.existsSync(path.join(process.cwd(), "data"))) {
      fs.mkdirSync(path.join(process.cwd(), "data"));
    }

    let bookings: Record<string, unknown>[] = [];
    if (fs.existsSync(filePath)) {
      bookings = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }

    const booking = {
      id: `BK-${Date.now()}`,
      timestamp: new Date().toISOString(),
      status: "pending",
      ...data,
    };

    bookings.push(booking);
    fs.writeFileSync(filePath, JSON.stringify(bookings, null, 2));

    // In production, you would send an email here using nodemailer
    // For now, we just return success
    return NextResponse.json(
      {
        success: true,
        bookingId: booking.id,
        message:
          "Consultation request received! We will confirm within 2 hours.",
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
  // Protected endpoint - in production add authentication
  try {
    const filePath = path.join(process.cwd(), "data", "bookings.json");
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ bookings: [] });
    }
    const bookings = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return NextResponse.json({ bookings });
  } catch {
    return NextResponse.json({ bookings: [] });
  }
}
