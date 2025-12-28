import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingQuoteButton from "@/components/FloatingQuoteButton";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { COMPANY_INFO, SERVICE_AREAS, SERVICES } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hplandscaping.com"),
  title: {
    default: "HP Landscaping | Professional Landscaping Services in San Diego County",
    template: "%s | HP Landscaping San Diego",
  },
  description: "HP Landscaping provides professional landscaping, irrigation, hardscaping, and lawn care services throughout San Diego County. Licensed & insured with 15+ years experience. Free estimates!",
  keywords: [
    "landscaping San Diego",
    "landscape design San Diego",
    "irrigation systems San Diego",
    "hardscaping San Diego",
    "lawn care San Diego",
    "tree services San Diego",
    "outdoor lighting San Diego",
    "San Diego landscaper",
    "landscaping Chula Vista",
    "landscaping Carlsbad",
    "landscaping Oceanside",
    "landscaping Escondido",
    "drought tolerant landscaping",
    "California native plants",
  ],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hplandscaping.com",
    siteName: COMPANY_INFO.name,
    title: "HP Landscaping | Professional Landscaping Services in San Diego County",
    description: "Transform your outdoor space with HP Landscaping. Expert landscape design, irrigation, hardscaping & lawn care serving all of San Diego County.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HP Landscaping - San Diego County Landscaping Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HP Landscaping | San Diego County",
    description: "Professional landscaping services throughout San Diego County. Free estimates!",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: "https://hplandscaping.com",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

// Comprehensive LocalBusiness Schema for AI/LLM SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  "@id": "https://hplandscaping.com/#organization",
  name: COMPANY_INFO.name,
  alternateName: "HP Landscaping San Diego",
  description: "HP Landscaping is a professional landscaping company serving San Diego County with over 15 years of experience in landscape design, irrigation systems, hardscaping, lawn care, and tree services.",
  url: "https://hplandscaping.com",
  telephone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  foundingDate: COMPANY_INFO.foundedYear.toString(),
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Diego",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.7157,
    longitude: -117.1611,
  },
  areaServed: SERVICE_AREAS.map(area => ({
    "@type": "City",
    name: area.name,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "San Diego County",
    },
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Landscaping Services",
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
      },
      position: index + 1,
    })),
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "250",
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.facebook.com/hplandscaping",
    "https://www.instagram.com/hplandscaping",
    "https://twitter.com/hplandscaping",
  ],
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://hplandscaping.com/contact",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "Reservation",
      name: "Free Landscaping Consultation",
    },
  },
  knowsAbout: [
    "Landscape Design",
    "Irrigation Systems",
    "Hardscaping",
    "Lawn Care",
    "Tree Services",
    "Drought Tolerant Landscaping",
    "Native California Plants",
    "Outdoor Lighting",
    "Water Conservation",
    "Sustainable Landscaping",
  ],
};

// WebSite Schema for Sitelinks Search Box
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY_INFO.name,
  url: "https://hplandscaping.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://hplandscaping.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
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
        {/* JSON-LD Structured Data for AI/LLM SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingQuoteButton />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
