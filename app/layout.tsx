import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://newzenadvocate.com"),
  title: "MK Associates | Expert Legal Panel — New Delhi · Varanasi · Kaimur",
  description:
    "Panel of expert advocates led by Adv. Manoj Kumar Chaubey (40 yrs experience). Civil, Criminal, Corporate, IPR, Family & Tax Law. Offices in New Delhi, Varanasi (UP) & Kaimur (Bihar). Call: 9305592322.",
  keywords:
    "advocate Delhi, lawyer Varanasi, MK Associates, Manoj Kumar Chaubey, Madan Kumar advocate, civil litigation, criminal lawyer, corporate law, IPR, family law, Uttam Nagar advocate, Kaimur Bihar lawyer, newzen advocate",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MK Associates | Expert Legal Panel",
    description:
      "100+ years of combined legal expertise. Civil, Criminal, Corporate, IPR, Family & Tax Law. New Delhi · Varanasi · Kaimur.",
    url: "https://newzenadvocate.com",
    siteName: "MK Associates - Newzen Advocate",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/icon.png?v=2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [
      { url: "/apple-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=Rajdhani:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
