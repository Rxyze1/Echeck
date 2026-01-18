import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../app/components/Navbar.jsx";

/* ---------- FONTS ---------- */
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

/* ---------- GLOBAL METADATA ---------- */
export const metadata: Metadata = {
  title: {
    template: "%s | Jaipur Call Girls - Verified Independent Escorts 2026",
    default: "Jaipur Call Girls 2026 | High‑Profile Independent Escorts & VIP Service",
  },
  description:
    "✅ Trusted Jaipur call girls service 2026. Verified high‑profile independent escorts, 100% discreet, cash‑after‑meeting, NO ADVANCE. 24/7 in Malviya Nagar, C‑Scheme, Raja Park & all Jaipur areas. Real profiles • Fast booking!",
  keywords:
    "jaipur call girls, call girls jaipur, jaipur escorts, independent escorts jaipur, vip escorts jaipur, high profile call girls jaipur, discreet escorts jaipur, escort service jaipur, call girls malviya nagar, jaipur call girls 2026, verified escorts jaipur, jaipur escort service 2026",
  metadataBase: new URL("https://jaipurcallgiirl.top"), // ← CHANGE TO YOUR DOMAIN!
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jaipur Call Girls 2026 | #1 Verified High‑Profile Independent Escorts",
    description:
      "Safe, discreet & verified Jaipur call girls service – premium companionship across Jaipur. Cash payment ✅ No advance ✅ 24/7.",
    url: "https://jaipurcallgiirl.top",
    siteName: "Jaipur Call Girls",
    images: [
      {
        url: "/og-image-jaipur-escorts-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Verified Jaipur Call Girls Service 2026",
        type: "image/jpeg",
      },
      {
        url: "/og-image-jaipur-escorts-2026.jpg",
        width: 600,
        height: 315,
        alt: "Jaipur Escorts 2026",
        type: "image/jpeg",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaipur Call Girls 2026 | High‑Profile Independent Escorts",
    description:
      "Verified Jaipur call girls – discreet, safe, cash‑after‑meeting service in Malviya Nagar, C‑Scheme & all areas.",
    images: ["/twitter-image-jaipur-escorts.jpg"],
    site: "@jaipurcallgirls", // REPLACE WITH YOUR TWITTER HANDLE
    creator: "@jaipurcallgirls",
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
  // verification: {
  //   google: "your-google-verification-code", // GET FROM SEARCH CONSOLE
  //   yandex: "your-yandex-verification",    
  //   bing: "your-bing-verification",        
  // },
  authors: [{ name: "Jaipur Call Girls Team" }],
  publisher: "Jaipur Call Girls Service",
  category: "Adult Services, Companionship",
  classification: "Escort Service",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "Jaipur Call Girls",
  },
  other: {
    "application-name": "Jaipur Call Girls",
    "msapplication-TileColor": "#000000",
  },
};

/* ---------- ENHANCED STRUCTURED DATA (SCHEMA) ---------- */
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Jaipur Call Girls 2026",
  image: "/images/logo.jpg",
  description:
    "Verified high‑profile independent escorts in Jaipur. 100% discreet companionship service. Cash payment after meeting ✅ No advance ✅ 24/7 availability.",
  provider: {
    "@type": "LocalBusiness",
    name: "Jaipur Call Girls Service",
    telephone: "+918306433904",
    url: "https://jaipurcallgiirl.top/",
    logo: "/images/logo.jpg",
    areaServed: [
      { "@type": "City", name: "Jaipur" },
      { "@type": "State", name: "Rajasthan" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Business Street",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302001",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "₹1500 - ₹10000",
  },
  serviceType: "Professional Companionship",
  areaServed: [
    "Malviya Nagar",
    "Vaishali Nagar",
    "C‑Scheme",
    "Raja Park",
    "Mansarovar",
    "Jagatpura",
    "Durgapura",
    "Civil Lines",
    "MI Road",
    "Tonk Road",
    "Bani Park",
    "Lal Kothi",
    "Gopalpura",
    "Jhotwara",
    "Sanganer",
    "Pratap Nagar",
  ],
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "1500",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      minPrice: 1500,
      maxPrice: 10000,
      priceRange: "₹1500 - ₹10000",
    },
    availability: "InStock",
    eligibleRegion: { "@type": "Country", name: "India" },
  },
};

/* FAQ Structured Data (Adds Rich Snippets!) */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the Jaipur call girls service discreet and private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "✅ Absolutely! Your privacy is our top priority. All communications and meetings are 100% discreet. We never share client details.",
      },
    },
    {
      "@type": "Question",
      name: "Do you require advance payment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "❌ NO! We accept **CASH AFTER MEETING ONLY**. No advance, no online payment, no OTP scams.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of Jaipur do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover ALL major areas: Malviya Nagar, C‑Scheme, Raja Park, Mansarovar, Vaishali Nagar, Jagatpura, Durgapura, Civil Lines, MI Road, Tonk Road, Bani Park, Lal Kothi, Gopalpura, Jhotwara, Sanganer & more.",
      },
    },
    {
      "@type": "Question",
      name: "Are profiles verified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "✅ YES! Every profile is personally verified (ID, photos, health check). No fake photos or brokers!",
      },
    },
    {
      "@type": "Question",
      name: "Is 24/7 booking available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "✅ Yes! We operate 24/7. Bookings confirmed within minutes via WhatsApp/Call.",
      },
    },
  ],
};

/* ---------- ROOT LAYOUT ---------- */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* ---------- PRECONNECT & PRELOAD (SPEED) ---------- */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600&display=swap"
          as="style"
          crossOrigin="anonymous"
        />

        {/* ---------- FAVICON & APP ICONS (PWA) ---------- */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ---------- SECURITY HEADERS (Meta Fallback) ---------- */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com;" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      </head>

      <body className="antialiased bg-black min-h-screen">
        {/* ---------- GLOBAL STRUCTURED DATA ---------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Navbar />
        {children}
      </body>
    </html>
  );
}