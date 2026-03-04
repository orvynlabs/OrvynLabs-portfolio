'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    ArrowUpRight,
    Github,
    Layers,
    Zap,
    ShieldCheck,
    Cpu,
    ArrowRight,
    Link
} from 'lucide-react'
import { HeroHeader } from '@/components/header'
import { FooterBlock } from '@/components/uitripled/footer-block-shadcnui'
import CaseStudiesSection from '@/components/case-studies-section'

gsap.registerPlugin(ScrollTrigger)

// --- ADDED: Professional Project Data Structure ---
const featuredProjects = [
    {
        title: "NEXTZEN",
        category: "Full-Stack E-commerce Engineering",
        description: "A high-performance apparel platform featuring an LLM-powered chatbot, automated inventory alerts, and secure Razorpay integration.",
        tags: ["Next.js", "Node.js", "MongoDB", "Gemini AI"],
        stats: { scale: "SaaS Ready", performance: "98/100", tech: "MERN" },
        image: "/projects/nextzen-bg.jpg", // Placeholder for your actual project image
        link: "#",
        github: "#"
    },
    {
        title: "EXZA",
        category: "E-commerce System",
        description: "A scalable digital storefront focused on clean state management and optimized database normalization for high-traffic sales.",
        tags: ["React", "Express", "Tailwind", "Redux"],
        stats: { scale: "Multi-tenant", performance: "Fast", tech: "Full-Stack" },
        image: "/projects/exza-bg.jpg",
        link: "#",
        github: "#"
    }
]

export default function WorksPage() {
    const heroRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!heroRef.current) return
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.gsap-work-fade',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: 0.2,
                }
            )
        }, heroRef.current)
        return () => ctx.revert()
    }, [])

    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden bg-[#0a0a0a] min-h-screen">
                {/* --- ADDED: Dynamic Hero Section --- */}
                <section ref={heroRef} className="relative pt-32 pb-20 md:pt-44 md:pb-28 border-b border-white/[0.06]">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[white]/[0.05] blur-[160px]" />
                    </div>

                    <div className="mx-auto max-w-6xl px-6 lg:px-16 xl:px-24">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                            <div className="max-w-2xl">
                                <span className="gsap-work-fade text-xs uppercase tracking-[0.3em] text-[white] font-bold mb-4 block">
                                    Our Portfolio
                                </span>
                                <h1 className="gsap-work-fade font-display text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
                                    Selected <br /><span className="text-white/40 font-normal italic">Artifacts.</span>
                                </h1>
                                <p className="gsap-work-fade text-lg text-white/50 leading-relaxed">
                                    A collection of structured systems, MVPs, and digital products
                                    built with the MERN stack. We don't just build sites; we engineer
                                    solutions that scale.
                                </p>
                            </div>

                            {/* Technical Capabilities Badges */}
                            <div className="gsap-work-fade flex flex-wrap gap-3 pb-2">
                                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-widest text-white/70">
                                    <Cpu size={12} className="text-[white]" /> Architecture First
                                </div>
                                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-widest text-white/70">
                                    <ShieldCheck size={12} className="text-[white]" /> Production Ready
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- ADDED: Featured Case Study (NEXTZEN Highlight) --- */}
                <section className="py-20 bg-white/[0.01]">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-12 flex items-center gap-4">
                            <h2 className="font-display text-2xl font-bold text-white">Featured Case Study</h2>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>

                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="group relative mb-20 grid lg:grid-cols-12 gap-8 items-center"
                            >
                                {/* Project Info */}
                                <div className="lg:col-span-5 space-y-6">
                                    <div className="space-y-2">
                                        <p className="text-[white] text-sm font-bold tracking-widest uppercase">{project.category}</p>
                                        <h3 className="text-4xl font-bold text-white group-hover:text-[white] transition-colors">{project.title}</h3>
                                    </div>
                                    <p className="text-white/50 leading-relaxed">{project.description}</p>

                                    <div className="grid grid-cols-3 gap-4 border-y border-white/10 py-6">
                                        {Object.entries(project.stats).map(([key, val]) => (
                                            <div key={key}>
                                                <p className="text-[10px] uppercase text-white/30 font-bold mb-1">{key}</p>
                                                <p className="text-sm text-white font-medium">{val}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-6 pt-4">
                                        <Link href={project.link} className="inline-flex items-center gap-2 text-white font-bold text-sm hover:text-[white] transition-colors">
                                            Live Demo <ArrowUpRight size={16} />
                                        </Link>
                                        <Link href={project.github} className="inline-flex items-center gap-2 text-white/40 font-bold text-sm hover:text-white transition-colors">
                                            View Source <Github size={16} />
                                        </Link>
                                    </div>
                                </div>

                                {/* Project Visual (Glassmorphism Card) */}
                                <div className="lg:col-span-7 relative group">
                                    <div className="absolute -inset-4 bg-[white]/10 blur-2xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[white]/20 to-transparent opacity-40" />
                                        {/* You would place a screenshot or visual here */}
                                        <div className="flex items-center justify-center h-full">
                                            <Layers size={64} className="text-white/10 group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Original Case Studies Grid Section */}
                <div className="pb-24">
                    <div className="mx-auto max-w-7xl px-6 mb-12">
                        <h2 className="font-display text-2xl font-bold text-white">Full Archive</h2>
                    </div>
                    <CaseStudiesSection />
                </div>

                {/* --- ADDED: Work CTA --- */}
                <section className="py-20 md:py-32 border-t border-white/[0.06] text-center">
                    <div className="mx-auto max-w-3xl px-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                            Have a complex system <br />in mind?
                        </h2>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-sm font-bold text-black hover:bg-[white] hover:text-white transition-all shadow-xl shadow-white/5"
                        >
                            Discuss Your Project <ArrowRight size={18} />
                        </Link>
                    </div>
                </section>

                <FooterBlock />
            </main>
        </>
    )
}