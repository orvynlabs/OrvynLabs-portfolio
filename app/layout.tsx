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

// Improved SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://orvynlabs.in"),

  title: {
    default: "ORVYN LABS | Digital Product & Growth Studio",
    template: "%s | ORVYN LABS",
  },

  description:
    "ORVYN LABS is a Calicut-based digital product studio building scalable startup technology, MERN applications, SaaS platforms and growth-driven digital systems.",

  openGraph: {
    title: "ORVYN LABS | Digital Product & Growth Studio",
    description:
      "A Calicut-based engineering studio building scalable startup products, MERN platforms and modern SaaS systems.",
    url: "https://orvynlabs.in",
    siteName: "ORVYN LABS",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${bricolage.variable} antialiased`}>
        <Preloader />
        <Cursor />
        {children}
      </body>
    </html>
  );
}