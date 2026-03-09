import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "A Comprehensive Guide to Modern MERN Stack | ORVYN LABS",
    description: "Deep dive into MongoDB, Express, React, and Node.js. Learn how to engineer robust systems with industry best practices.",
    openGraph: {
        title: "A Comprehensive Guide to Modern MERN Stack | ORVYN LABS",
        description: "Industrial-grade MERN stack development patterns and best practices.",
        type: "article",
        url: "https://www.orvynlabs.in/blog/mern-stack-guide",
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
