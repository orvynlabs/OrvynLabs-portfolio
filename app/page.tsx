import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProcessSection from "@/components/process-section";
import CaseStudiesSection from "@/components/case-studies-section";
import FaqSection from "@/components/faq-section";
import DomainsToolsSection from "@/components/domains-tools-section";
import { ContactFormSection } from "@/components/uitripled/contact-form-section-shadcnui";
import { FooterBlock } from "@/components/uitripled/footer-block-shadcnui";


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <DomainsToolsSection />
      <CaseStudiesSection />
      <FaqSection />
      <ContactFormSection />
      <FooterBlock />
    </>
  );
}
