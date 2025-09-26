import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "LocalBizLabs – Get Your Business Online Fast & Affordable | Websites, Apps & Digital Solutions",
  description: "Transform your local business with professional websites, mobile apps, booking systems, and digital marketing. Trusted by 200+ businesses. Get online in 7 days. Free consultation.",
  keywords: "local business website, small business app, digital marketing, booking system, Google Maps optimization, business branding, e-commerce website, mobile app development",
  authors: [{ name: "LocalBizLabs Team" }],
  creator: "LocalBizLabs",
  publisher: "LocalBizLabs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://localbizlabs.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "LocalBizLabs – Get Your Business Online Fast & Affordable",
    description: "Transform your local business with professional websites, mobile apps, booking systems, and digital marketing. Trusted by 200+ businesses.",
    url: "https://localbizlabs.com",
    siteName: "LocalBizLabs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LocalBizLabs - Digital Solutions for Local Businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LocalBizLabs – Get Your Business Online Fast & Affordable",
    description: "Transform your local business with professional websites, mobile apps, booking systems, and digital marketing.",
    images: ["/og-image.png"],
    creator: "@localbizlabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
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
        <meta name="theme-color" content="#ea580c" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://localbizlabs.com" />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "LocalBizLabs",
              "url": "https://localbizlabs.com",
              "logo": "https://localbizlabs.com/logo.png",
              "description": "Digital solutions for local businesses including websites, mobile apps, booking systems, and marketing services.",
              "foundingDate": "2023",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9548816875",
                "contactType": "customer service",
                "email": "hello@localbizlabs.com",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "Uttarakhand",
                "addressLocality": "Dehradun"
              },
              "sameAs": [
                "https://www.instagram.com/localbizlabs/",
                "https://x.com/LocalBiz_labs"
              ],
              "serviceType": ["Web Development", "Mobile App Development", "Digital Marketing", "Business Branding", "E-commerce Solutions"],
              "areaServed": "Worldwide",
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "200"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "LocalBizLabs",
              "url": "https://localbizlabs.com",
              "description": "Professional digital solutions for local businesses",
              "publisher": {
                "@type": "Organization",
                "name": "LocalBizLabs"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://localbizlabs.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                if (prefersReducedMotion) {
                  document.documentElement.style.setProperty('--animation-duration', '0s');
                }
              } catch (e) {}
            `,
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}