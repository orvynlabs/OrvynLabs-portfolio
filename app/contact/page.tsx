import type { Metadata } from "next";
import ContactPageClient from "./contact-page-client";

export const metadata: Metadata = {
    title: "Contact ORVYN LABS | Web Development Studio in Calicut",
    description: "Discuss your project with ORVYN LABS. We engineer scalable MERN and Next.js systems for startups from MVP to SaaS platforms.",
};

export default function Page() {
    return <ContactPageClient />;
}
