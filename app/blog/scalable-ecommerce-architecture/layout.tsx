import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Building Scalable Ecommerce Architecture | ORVYN LABS",
    description: "How we architect online stores to handle high concurrency and integrated payment security using modern web stacks.",
    openGraph: {
        title: "Building Scalable Ecommerce Architecture | ORVYN LABS",
        description: "Scale your online store with high-performance architectures.",
        type: "article",
        url: "https://www.orvynlabs.in/blog/scalable-ecommerce-architecture",
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
