import type { Metadata } from "next";
import ServicesPageClient from "./services-page-client";

export const metadata: Metadata = {
    title: "MERN Stack & Next.js Development Services | ORVYN LABS",
    description: "High-performance engineering focusing on structure and scalability. We build digital infrastructure with MERN, Next.js, and SaaS architecture in Calicut.",
};

export default function Page() {
    return <ServicesPageClient />;
}
