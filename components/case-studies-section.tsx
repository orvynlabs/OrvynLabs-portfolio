'use client'
import React, { useState } from 'react'
import { ProjectCard } from './project-card'
import ScrollReveal from './ui/scroll-reveal'
import { ProjectModal } from './project-modal'

interface Project {
    name: string
    category?: string
    description: string
    fullDescription?: string
    tags: string[]
    image: string
    links: {
        demo?: string
        github?: string
    }
    features?: string[]
    stats?: Record<string, string>
}

const projects: Project[] = [
    {
        name: "AZURA RESORTS",
        category: "Hospitality Web System",
        description: "A premium, 'Anti-Gravity' inspired digital experience for a private peninsula resort.",
        fullDescription: "AZURA RESORTS is a high-end web platform designed for a private peninsula resort. It features a stunning glassmorphic UI, real-time booking context, and a smooth navigation experience using React Lenis and Framer Motion.",
        tags: ["Next.js", "Framer Motion", "Tailwind", "GSAP"],
        image: "/projects/azura-project1.png",
        links: { demo: "https://azuraresorts.in" },
        features: [
            "Glassmorphic UI Design",
            "Smooth Scroll Integration (Lenis)",
            "Real-time Booking Availability",
            "Mobile-Responsive Layout"
        ],
        stats: {
            performance: "Ultra-Smooth",
            tech: "Next.js 14",
            scale: "Private Resort"
        }
    },
    {
        name: "NEXTZEN",
        category: "AI-Enhanced E-commerce",
        description: "A flagship MERN e-commerce system with AI logic and secure payment flows.",
        fullDescription: "NEXTZEN is a high-performance full-stack e-commerce platform featuring an LLM-powered chatbot for contextual assistance and a real-time dashboard for inventory management. It uses Gemmini API for AI features.",
        tags: ["E-Commerce", "MERN", "AI", "Gemini API"],
        image: "/projects/nextzen-project2.png",
        links: { demo: "https://shop.mubashiir.in" },
        features: [
            "AI Chatbot for Sales Support",
            "Dynamic Inventory Alerts",
            "Secure Payment Gateway",
            "Admin Dashboard with Analytics"
        ],
        stats: {
            stack: "MERN + AI",
            realtime: "Dashboard",
            deployment: "Production Ready"
        }
    },
    {
        name: "NUVEE",
        category: "Cloud Perfume Shop",
        description: "Cloud-powered perfume e-commerce with secure authentication and AWS scalability.",
        fullDescription: "NUVEE is a enterprise-level perfume e-commerce solution architected for high volume. It leverages AWS services for global scalability, including S3 for persistent storage and CloudFront for high-speed content delivery.",
        tags: ["MERN", "AWS", "Razorpay", "CI/CD"],
        image: "/projects/nuvee-project4.png",
        links: { demo: "https://nuvee-perfume.niyaf.xyz/" },
        features: [
            "AWS S3 Asset Management",
            "Razorpay Integration",
            "Automated CI/CD Pipeline",
            "CDN-Optimized Images"
        ],
        stats: {
            hosting: "AWS EC2",
            cdn: "CloudFront",
            security: "JWT + SSL"
        }
    },
    {
        name: "SHOEVERSE",
        category: "Footwear Marketplace",
        description: "A modern MERN stack shoe e-commerce platform focused on speed and clean UI.",
        fullDescription: "SHOEVERSE provides a sleek and minimalist shopping experience for footwear. Built with TypeScript for reliability, it features advanced search filters, a dynamic shopping cart, and lightning-fast page loads.",
        tags: ["MERN", "TypeScript", "Tailwind"],
        image: "/projects/shoeverse-project3.png",
        links: { demo: "https://shoe-ecommerce-blush.vercel.app/" },
        features: [
            "Advanced Product Filtering",
            "Fast Search Engine",
            "Minimalist Clean UI",
            "Type-Safe Development"
        ],
        stats: {
            speed: "Optimized",
            ui: "Minimal",
            mobile: "100/100"
        }
    }
]

export default function CaseStudiesSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    return (
        <section id="our-work" className="cs-section py-24 bg-[#000000]">
            {/* Header */}
            <div className="cs-header mb-16 text-center">
                <div className="cs-subtitle-row inline-flex items-center justify-center gap-4 mb-4">
                    <span className="cs-subtitle-line w-12 h-px bg-white/20" />
                    <p className="cs-subtitle text-sm uppercase tracking-wider text-gray-400">Our Projects</p>
                    <span className="cs-subtitle-line w-12 h-px bg-white/20" />
                </div>
                <ScrollReveal
                    baseOpacity={0.1}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                    textClassName="cs-title text-4xl md:text-5xl font-bold tracking-tight text-white"
                >
                    Recent Case Studies
                </ScrollReveal>
            </div>

            {/* Grid */}
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 xl:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.name}
                            title={project.name}
                            description={project.description}
                            tags={project.tags}
                            image={project.image}
                            links={project.links}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject ? {
                    title: selectedProject.name,
                    category: selectedProject.category,
                    description: selectedProject.description,
                    fullDescription: selectedProject.fullDescription,
                    tags: selectedProject.tags,
                    image: selectedProject.image,
                    links: selectedProject.links,
                    features: selectedProject.features,
                    stats: selectedProject.stats
                } : null}
            />
        </section>
    )
}
