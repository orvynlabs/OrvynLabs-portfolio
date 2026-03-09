import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Architecture of Startup MVP Development | ORVYN LABS",
    description: "Learn why choosing the right tech stack for your MVP is critical for long-term scalability and investor confidence.",
    openGraph: {
        title: "The Architecture of Startup MVP Development | ORVYN LABS",
        description: "Engineering thoughts on startup growth and MVP architecture.",
        type: "article",
        url: "https://www.orvynlabs.in/blog/startup-mvp-development",
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
