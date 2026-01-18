// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

/* ---------- Fonts ---------- */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

/* ---------- Metadata ---------- */
export const metadata: Metadata = {
  title: {
    template: "%s | Jaipur Call Girls - Verified Independent Escorts 2026",
    default: "Jaipur Call Girls 2026 | High-Profile Independent Escorts & VIP Service",
  },
  description:
    "Trusted Jaipur call girls service 2026. Verified high-profile independent escorts, discreet service, cash-after-meeting, 24/7 availability.",
  keywords:
    "jaipur call girls, call girls jaipur, jaipur escorts, independent escorts jaipur, vip escorts jaipur, discreet escorts jaipur",
  metadataBase: new URL("https://yourdomain.com"), // ← REPLACE with your real domain
  alternates: { canonical: "/" },

  openGraph: {
    title: "Jaipur Call Girls 2026 | Verified High‑Profile Independent Escorts",
    description:
      "Safe, discreet & verified Jaipur call girls service – premium companionship across Jaipur. Cash payment, no advance.",
    url: "https://yourdomain.com",
    siteName: "Jaipur Call Girls",
    images: [
      {
        url: "/images/og-image-jaipur-escorts-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Jaipur Call Girls - Verified Escorts Service 2026",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jaipur Call Girls 2026 | High‑Profile Independent Escorts",
    description:
      "Verified Jaipur call girls – discreet, safe, cash-after-meeting service in Malviya Nagar, C‑Scheme & all areas.",
    images: ["/images/twitter-image-jaipur-escorts.jpg"],
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

  /* ---------- Verification: use allowed fields + 'other' for custom tags ---------- */
  verification: {
    // Next.js supports a named 'google' key — keep if you like:
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    // yandex/yahoo keys are supported if you need them
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
    // Put Bing (and any other custom meta names) under `other` using the exact meta name:
    other: {
      // Bing expects: <meta name="msvalidate.01" content="...">
      "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
      // If you need to add e.g. facebook domain verification:
      // "facebook-domain-verification": "YOUR_FACEBOOK_CODE"
    },
  },

  authors: [{ name: "Jaipur Call Girls Team" }],
  publisher: "Jaipur Call Girls Service",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "Jaipur Call Girls",
  },
};

/* ---------- Optional JSON-LD structured data (rendered in body via script in layout component) ---------- */
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Jaipur Call Girls 2026",
  description:
    "Verified high‑profile independent escorts in Jaipur. Discreet companionship service. Cash-after-meeting, 24/7 availability.",
  provider: {
    "@type": "LocalBusiness",
    name: "Jaipur Call Girls Service",
    telephone: "+918306433904",
    url: "https://yourdomain.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302001",
      addressCountry: "IN",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* preconnect / preload as needed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className="antialiased bg-black min-h-screen">
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}