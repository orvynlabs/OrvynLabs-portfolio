import type { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProcessSection from "@/components/process-section";
import VisionSection from "@/components/vision-section";
import CaseStudiesSection from "@/components/case-studies-section";
import FaqSection from "@/components/faq-section";
import DomainsToolsSection from "@/components/domains-tools-section";
import { ContactFormSection } from "@/components/uitripled/contact-form-section-shadcnui";
import { FooterBlock } from "@/components/uitripled/footer-block-shadcnui";


export const metadata: Metadata = {
  title: "ORVYN LABS | Startup Web Development Studio",
  description: "ORVYN LABS engineers scalable MERN and Next.js systems for startups. Architecting robust digital products from MVP to SaaS platforms in Calicut.",
};


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <VisionSection />
      <DomainsToolsSection />
      <CaseStudiesSection />
      <FaqSection />
      <ContactFormSection />
      <FooterBlock />
    </>
  );
}
