import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/ui/cursor";
import Preloader from "@/components/ui/preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://www.orvynlabs.in"),

  title: {
    default:
      "ORVYN LABS | MERN Stack & Startup Web Development Studio | Calicut",
    template: "%s | ORVYN LABS",
  },

  description:
    "ORVYN LABS engineers scalable MERN and Next.js systems for startups. Architecting robust digital products from MVP to SaaS platforms in Calicut, Kerala.",

  keywords: [
    "MERN Stack Web Development",
    "Next.js Application Architecture",
    "Custom API Engineering",
    "Scalable SaaS Platforms",
    "Startup MVP Development",
    "Product Engineering Studio",
    "Web Development Studio Calicut",
    "Kerala Startup Technology",
  ],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "ORVYN LABS | Startup Web Development Studio",
    description:
      "ORVYN LABS engineers scalable MERN and Next.js systems for startups. Architecting robust digital products from MVP to SaaS platforms.",
    url: "https://orvynlabs.in",
    siteName: "ORVYN LABS",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ORVYN LABS | Startup Web Development Studio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ORVYN LABS | Startup Web Development Studio",
    description:
      "Engineering scalable MERN and Next.js systems for startups.",
    images: ["/opengraph-image.png"],
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
};

// Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ORVYN LABS",
  url: "https://orvynlabs.in",
  logo: "https://orvynlabs.in/logo.png",
  image: "https://orvynlabs.in/opengraph-image.png",
  description:
    "ORVYN LABS engineers scalable MERN and Next.js systems for startups. Architecting robust digital products from MVP to SaaS platforms.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calicut",
    addressRegion: "Kerala",
    addressCountry: "India",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "11.2588",
    longitude: "75.7804",
  },
  founder: {
    "@type": "Person",
    name: "ORVYN LABS Team",
  },
  sameAs: [
    "https://twitter.com/orvynlabs",
    "https://linkedin.com/company/orvynlabs",
    "https://instagram.com/orvynlabs",
    "https://github.com/orvynlabs",
  ],
  telephone: "+919496022026",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body
        className={`${inter.variable} ${bricolage.variable} antialiased`}
      >
        <Preloader />
        <Cursor />
        {children}
      </body>
    </html>
  );
}