import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LocalBizLabs – Get Your Business Online Fast & Affordable",
  description: "Smart Websites, Booking Tools, Google Maps, Branding, and more. Launch your business online with LocalBizLabs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/logo.ico" />
        <meta name="theme-color" content="#ffffff" />
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="LocalBizLabs – Get Your Business Online Fast & Affordable" />
        <meta property="og:description" content="Smart Websites, Booking Tools, Google Maps, Branding, and more. Launch your business online with LocalBizLabs." />
        <meta property="og:image" content="https://yourdomain.com/LocalBiz_Labs.png" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}