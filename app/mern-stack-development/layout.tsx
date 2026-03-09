import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "MERN Stack Development Services | ORVYN LABS",
    description: "Expert MERN stack development services. We engineer scalable SaaS platforms and web applications using MongoDB, Express, React, and Node.js.",
    openGraph: {
        title: "MERN Stack Development Services | ORVYN LABS",
        description: "Full-stack engineering with MongoDB, Express, React, and Node.js. Architecting robust digital systems.",
        type: "website",
        url: "https://www.orvynlabs.in/mern-stack-development",
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
