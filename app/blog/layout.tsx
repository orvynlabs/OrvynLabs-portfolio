import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Engineering & Growth Insights | ORVYN LABS",
    description: "Read the latest engineering logs, architectural deep dives, and startup growth strategies from the ORVYN LABS team.",
    openGraph: {
        title: "Blog | Engineering & Growth Insights | ORVYN LABS",
        description: "Insights on MERN stack, Next.js, and startup product engineering.",
        type: "website",
        url: "https://www.orvynlabs.in/blog",
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
