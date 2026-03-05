'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import {
    ArrowLeft,
    Code,
    Palette,
    TrendingUp,
    Cpu,
    ArrowRight,
    Rocket,
    Globe,
    Smartphone,
    Layout,
    Megaphone,
    Search
} from 'lucide-react'
import { HeroHeader } from '@/components/header'
import { FooterBlock } from '@/components/uitripled/footer-block-shadcnui'

gsap.registerPlugin(ScrollTrigger)

const services = [
    {
        icon: Code,
        title: 'MERN Stack Web Development',
        description:
            'High-performance engineering focusing on Next.js Application Architecture and scalability. We build digital infrastructure that grows with your startup.',
        features: ['Full-stack MERN & Next.js', 'Custom API Engineering', 'Scalable SaaS Platforms'],
        color: '#ffffff',
    },
    {
        icon: Palette,
        title: 'Product Engineering Studio',
        description:
            'Technical aesthetics meet functional design. We create modern, high-fidelity interfaces for Startup Systems using our signature glassmorphism style.',
        features: ['Modern Glassmorphism UI/UX', 'Brand Design Architecture', 'Digital Product Engineering'],
        color: '#ffffff',
    },
    {
        icon: TrendingUp,
        title: 'Marketing & Growth',
        description:
            'Data-driven scaling strategies. We optimize your digital presence through Meta Ads for Startups to ensure maximum reach and conversion.',
        features: ['Meta Ads (FB & Insta)', 'SEO & Analytics', 'Google Business Profile Optimization'],
        color: '#ffffff',
    },
    {
        icon: Cpu,
        title: 'Startup Technology Architecture',
        description:
            'The architectural foundation for startup success in Calicut. We help founders through MVP Development for Startups to avoid technical debt.',
        features: ['Startup MVP Development', 'AI Chatbots & Automation', 'SaaS Architecture Consulting'],
        color: '#ffffff',
    },
    {
        icon: Search,
        title: 'Local SEO & Business Authority',
        description:
            'Establish authority and credibility in Calicut, Kerala. We specialize in Google Business Profile Optimization to boost local search visibility.',
        features: ['Local SEO Optimization', 'Review Management', 'Listing Verification'],
        color: '#ffffff',
    }
]

const processSteps = [
    { step: '01', title: 'System Mapping', desc: 'We map out the architecture, user roles, and database schema before writing code.' },
    { step: '02', title: 'Agile Engineering', desc: 'Sprints focused on core logic, using clean MERN patterns to build a production-ready foundation.' },
    { step: '03', title: 'Structured Testing', desc: 'Rigorous testing of security, performance, and API stability to ensure the system is bulletproof.' },
    { step: '04', title: 'Launch & Scale', desc: 'Deploying your product and setting up the infrastructure needed to support your first 10,000 users.' },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
}

export default function ServicesPage() {
    const heroRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!heroRef.current) return

        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.gsap-fade',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: 0.3,
                }
            )
        }, heroRef.current)

        return () => ctx.revert()
    }, [])

    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden bg-[#0a0a0a] min-h-screen">
                {/* Hero Section */}
                <section ref={heroRef} className="relative pt-32 pb-20 md:pt-44 md:pb-28">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[160px]" />
                        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[140px]" />
                    </div>

                    <div className="mx-auto max-w-6xl px-6 lg:px-16 xl:px-24 text-center">
                        <div className="gsap-fade mb-6">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors"
                            >
                                <ArrowLeft size={14} />
                                Back to Home
                            </Link>
                        </div>

                        <h1 className="gsap-fade font-display text-5xl md:text-7xl font-extrabold tracking-tight text-[#f0f0f0] mb-6">
                            Architecting <span className="text-white">
                                Digital Systems.
                            </span>
                        </h1>

                        <p className="gsap-fade mx-auto max-w-2xl text-lg text-white/50 leading-relaxed">
                            From rapid MVP engineering to complex SaaS architecture, we build the technical foundations that allow startups to scale without technical debt.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 md:py-28">
                    <div className="mx-auto max-w-[90rem] px-6 lg:px-16 xl:px-24">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {services.map((service) => (
                                <motion.div
                                    key={service.title}
                                    variants={itemVariants}
                                    className="group rounded-2xl border border-white/[0.08] bg-[#0c0c0c] p-8 transition-all duration-300 hover:border-white/20 hover:bg-[#111]"
                                >
                                    <div
                                        className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-transparent transition-transform duration-500 group-hover:scale-110"
                                    >
                                        <service.icon size={20} className="text-white" />
                                    </div>

                                    <h3 className="font-display text-lg font-medium text-[#f0f0f0] mb-3 tracking-tight">
                                        {service.title}
                                    </h3>

                                    <p className="text-white/40 leading-relaxed text-sm mb-6 font-light">
                                        {service.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="rounded-full border border-white/[0.08] bg-transparent px-3 py-1.5 text-[11px] text-white/40 tracking-wide transition-colors group-hover:border-white/20 group-hover:text-white/70"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Tech Banner */}
                <div className="w-full border-y border-white/[0.05] py-8 bg-[#0a0a0a]">
                    <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-center gap-6 px-6 text-[10px] md:text-xs font-medium tracking-[0.15em] text-white/40 uppercase sm:gap-16">
                        <div className="flex items-center gap-3">
                            <span className="text-white/20 font-bold">&gt;</span> NEXT.JS / REACT
                        </div>
                        <div className="flex items-center gap-3">
                            <Layout size={14} className="text-white/20 hidden md:block" /> NODE.JS / EXPRESS
                        </div>
                        <div className="flex items-center gap-3">
                            <Code size={14} className="text-white/20 hidden md:block" /> MONGODB / SQL
                        </div>
                        <div className="flex items-center gap-3">
                            <Smartphone size={14} className="text-white/20 hidden md:block" /> TAILWIND / FRAMER
                        </div>
                    </div>
                </div>

                {/* Process Section */}
                <section className="py-20 md:py-28 border-t border-white/[0.06]">
                    <div className="mx-auto max-w-[90rem] px-6 lg:px-16 xl:px-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <div className="h-px w-16 bg-white/10" />
                                <span className="font-display text-[10px] tracking-[0.2em] text-white/50 uppercase font-medium">The Blueprint</span>
                                <div className="h-px w-16 bg-white/10" />
                            </div>
                            <h2 className="font-display text-3xl md:text-3xl font-bold text-[#f0f0f0] tracking-tight">
                                Our Build Process
                            </h2>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {processSteps.map((item) => (
                                <motion.div
                                    key={item.step}
                                    variants={itemVariants}
                                    className="rounded-2xl border border-white/[0.08] bg-[#0c0c0c] p-8 group hover:border-white/20 transition-all"
                                >
                                    <span className="font-display text-4xl font-light text-white/[0.07] mb-6 block group-hover:text-white/20 transition-colors">
                                        {item.step}
                                    </span>
                                    <h3 className="font-display text-lg font-medium text-[#f0f0f0] mb-3 tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/40 text-sm leading-relaxed font-light">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 md:py-28 border-t border-white/[0.06]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto max-w-4xl px-6 text-center"
                    >
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-[#f0f0f0] tracking-tight mb-6">
                            Built for the next generation of Startups.
                        </h2>
                        <p className="text-white/50 mb-10 text-lg">
                            Whether you need a scalable MVP or a complex SaaS system, let’s design it to last.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-sm font-semibold text-black transition-all hover:bg-white/90 hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                            >
                                Start Your Project
                                <Rocket size={16} />
                            </Link>
                            <Link
                                href="/#our-work"
                                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-10 py-4 text-sm font-medium text-white/70 transition-all hover:border-white/25 hover:text-white/90"
                            >
                                View Case Studies
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                    </motion.div>
                </section>

                <FooterBlock />
            </main>
        </>
    )
}