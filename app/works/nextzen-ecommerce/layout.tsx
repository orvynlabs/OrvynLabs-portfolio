import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "NEXTZEN Ecommerce Platform Case Study | ORVYN LABS",
    description: "Detailed case study of NEXTZEN—a full-stack MERN ecommerce platform with AI chatbot, dashboard alerts, and secure Razorpay integration.",
    openGraph: {
        title: "NEXTZEN Ecommerce Platform Case Study | ORVYN LABS",
        description: "How we engineered a scalable men's fashion e-commerce platform using the MERN stack.",
        type: "article",
        url: "https://www.orvynlabs.in/works/nextzen-ecommerce",
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
