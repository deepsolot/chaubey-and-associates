import type { Metadata } from "next";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://newzenadvocate.com"),
  title: "New Zen Advocate (MK Associates) | Expert Legal Panel — New Delhi · Varanasi · Kaimur",
  description:
    "New Zen Advocate (MK Associates) — Expert legal panel led by Adv. Manoj Kumar Chaubey and Adv. Madan Kumar Upadhyay. 100+ years combined legal expertise. High Court & District Court counsel in New Delhi, Varanasi (UP) & Kaimur (Bihar). Call: 9305592322.",
  keywords: [
    "New Zen Advocate",
    "new zen advocate",
    "newzenadvocate",
    "newzen advocate",
    "newzenadvocate.com",
    "MK Associates",
    "Advocate Delhi",
    "Advocate Varanasi",
    "lawyer Varanasi",
    "Manoj Kumar Chaubey",
    "Madan Kumar Upadhyay",
    "Ashok Kumar Seth",
    "Nand Jee Kumar Upadhyay",
    "Uttam Nagar advocate",
    "Kaimur Bihar lawyer",
    "best legal consultation Varanasi Delhi"
  ],
  alternates: {
    canonical: "https://newzenadvocate.com",
  },
  openGraph: {
    title: "New Zen Advocate (MK Associates) | Expert Legal Panel",
    description:
      "New Zen Advocate (MK Associates) — 100+ years of combined legal expertise. Civil, Criminal, Corporate, Military, IPR, Family & Revenue Law. New Delhi · Varanasi · Kaimur.",
    url: "https://newzenadvocate.com",
    siteName: "New Zen Advocate",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Zen Advocate (MK Associates) | Expert Legal Panel",
    description:
      "New Zen Advocate — Expert Legal Counsel in Delhi, Varanasi & Kaimur. Call: +91 9305592322.",
  },
  verification: {
    google: "kghvuXby47Nft3RyA6MJ0fBpUbIM8y8s0dMoDGP5qiY",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://newzenadvocate.com/#legalservice",
      "name": "New Zen Advocate",
      "alternateName": ["MK Associates", "Newzen Advocate", "Chaubey and Associates"],
      "url": "https://newzenadvocate.com",
      "logo": "https://newzenadvocate.com/logo.png",
      "image": "https://newzenadvocate.com/courtroom-panel.jpg",
      "telephone": "+919305592322",
      "email": "maddydragon85@gmail.com",
      "priceRange": "₹₹",
      "description": "New Zen Advocate (MK Associates) provides premier legal counsel across Civil, Criminal, Military, High Court, and Supreme Court litigation with offices in New Delhi, Varanasi, and Kaimur.",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "K-4/3, Third Floor, K4, Mohan Garden, Uttam Nagar",
          "addressLocality": "New Delhi",
          "postalCode": "110059",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Civil Court Compound / Kutchery",
          "addressLocality": "Varanasi",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "221002",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Civil Court Bhabua",
          "addressLocality": "Kaimur",
          "addressRegion": "Bihar",
          "postalCode": "821101",
          "addressCountry": "IN"
        }
      ],
      "founder": [
        {
          "@type": "Person",
          "name": "Adv. Manoj Kumar Chaubey",
          "jobTitle": "Senior Partner & Litigation Counsel"
        },
        {
          "@type": "Person",
          "name": "Adv. Madan Kumar Upadhyay",
          "jobTitle": "Lead Multi-Domain Counsel"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://newzenadvocate.com/#website",
      "url": "https://newzenadvocate.com",
      "name": "New Zen Advocate",
      "description": "Official Legal Consultation and Advocate Portal for New Zen Advocate / MK Associates.",
      "publisher": {
        "@id": "https://newzenadvocate.com/#legalservice"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="kghvuXby47Nft3RyA6MJ0fBpUbIM8y8s0dMoDGP5qiY"
        />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
      </head>
      <body>
        <AuthProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
