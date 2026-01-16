import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Jaipur Escorts - Call Girls in Jaipur | Discreet Services 2026',
    default: 'Call Girls in Jaipur - Verified Independent Escorts & VIP Services',
  },
  description: 'Find genuine call girls in Jaipur with discreet booking, real photos, cash payment. Premium escort services in Jaipur areas like Malviya Nagar, Vaishali Nagar starting ₹3000/hr. 24/7 availability.',
  keywords: 'call girls in Jaipur, Jaipur escorts, independent escorts Jaipur, escort services in Jaipur, VIP escorts Jaipur, discreet companions Jaipur, how to book escorts in Jaipur, escorts near me Jaipur',
  metadataBase: new URL('https://your-escort-site.com'), // Replace with your actual domain
  openGraph: {
    title: 'Jaipur Escorts - Premium Call Girls Services',
    description: 'Discreet and verified escort services in Jaipur. Independent call girls available in all areas with real profiles.',
    images: '/images/og-image-jaipur-escorts.jpg', // Add a relevant OG image
    type: 'website',
    url: 'https://your-escort-site.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  canonical: 'https://your-escort-site.com', // Site-wide canonical if needed
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}