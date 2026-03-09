import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Website Development Company in Calicut | ORVYN LABS",
    description: "ORVYN LABS is the leading website development company in Calicut, specializing in high-performance Next.js and MERN stack systems for startups and businesses.",
    openGraph: {
        title: "Website Development Company in Calicut | ORVYN LABS",
        description: "Engineering scalable digital products in Calicut. Web development, MERN stack, and Next.js experts.",
        type: "website",
        url: "https://www.orvynlabs.in/web-development-calicut",
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
