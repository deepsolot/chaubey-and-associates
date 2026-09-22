import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const email = formData.get("email") as string;

    if (!email || !email.includes("@")) {
      return NextResponse.redirect(new URL("/blog?newsletter=error", req.url));
    }

    try {
      const dirPath = path.join(process.cwd(), "data");
      const filePath = path.join(dirPath, "newsletter.json");

      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      let subscribers: { email: string; subscribedAt: string }[] = [];
      if (fs.existsSync(filePath)) {
        subscribers = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      }

      // Avoid duplicates
      if (!subscribers.find((s) => s.email === email)) {
        subscribers.push({ email, subscribedAt: new Date().toISOString() });
        fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2));
      }
    } catch (fsErr) {
      console.warn("Serverless environment filesystem warning:", fsErr);
    }

    return NextResponse.redirect(new URL("/blog?newsletter=success", req.url));
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.redirect(new URL("/blog?newsletter=error", req.url));
  }
}
