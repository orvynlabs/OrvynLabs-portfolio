import type { Metadata } from "next";
import AboutPageClient from "./about-page-client";

export const metadata: Metadata = {
    title: "About ORVYN LABS | Digital Product & Growth Studio",
    description: "ORVYN LABS is a specialized digital product agency focusing on architectural engineering and high-fidelity design for startups.",
};

export default function Page() {
    return <AboutPageClient />;
}
