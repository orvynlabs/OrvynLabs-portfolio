import type { Metadata } from "next";
import WorksPageClient from "./works-page-client";

export const metadata: Metadata = {
    title: "Startup Projects & SaaS Systems | ORVYN LABS",
    description: "A collection of structured systems, MVPs, and digital products engineered with the MERN stack for startups in Calicut.",
};

export default function Page() {
    return <WorksPageClient />;
}
