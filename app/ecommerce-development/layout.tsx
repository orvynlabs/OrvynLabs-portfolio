import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ecommerce Website Development | ORVYN LABS",
    description: "Custom ecommerce website development for high-growth brands. We build scalable online stores with Next.js, MERN stack, and secure payment integrations.",
    openGraph: {
        title: "Ecommerce Website Development | ORVYN LABS",
        description: "Scale your online sales with high-performance ecommerce architecture. Next.js and MERN stack experts.",
        type: "website",
        url: "https://www.orvynlabs.in/ecommerce-development",
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
