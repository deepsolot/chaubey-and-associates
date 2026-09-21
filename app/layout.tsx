import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Adv. Rahul Sharma | Expert Legal Counsel — न्याय आपका अधिकार है",
  description:
    "Premier legal services by Adv. Rahul Sharma — Civil & Criminal Litigation, Corporate Law, IPR, Family Law, Tax Law, and more. Serving clients across India with 15+ years of expertise.",
  keywords:
    "advocate, lawyer India, civil litigation, criminal lawyer, corporate law, IPR, family law, GST tax lawyer, cyber law, Rahul Sharma advocate",
  openGraph: {
    title: "Adv. Rahul Sharma | Expert Legal Counsel",
    description:
      "Premier legal services across Civil, Criminal, Corporate, IPR, Family & Tax law.",
    type: "website",
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
