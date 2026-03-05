'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import {
    ArrowLeft,
    Rocket,
    Layers,
    Cpu,
    Zap,
    Globe,
    ShieldCheck,
    BarChart3,
    ChevronRight,
    MapPin,
} from 'lucide-react'
import { HeroHeader } from '@/components/header'
import { FooterBlock } from '@/components/uitripled/footer-block-shadcnui'
import RoadmapSection from '@/components/roadmap-section'

gsap.registerPlugin(ScrollTrigger)

const values = [
    {
        icon: Layers,
        title: 'Structure First',
        description: 'We prioritize backend architecture and database normalization. A product is only as strong as its foundation.',
        linkText: 'Startup Architecture',
        href: '/services',
        color: 'white',
    },
    {
        icon: Cpu,
        title: 'Systems Thinking',
        description: 'We don’t just build features; we build interconnected systems designed for operational efficiency and scale.',
        linkText: 'Startup Systems',
        href: '/services',
        color: 'white',
    },
    {
        icon: Zap,
        title: 'Rapid Iteration',
        description: 'The "LABS" in our name stands for experimentation. We build MVPs fast, test with real data, and refine relentlessly.',
        linkText: 'MVP Engineering',
        href: '/services',
        color: 'white',
    },
    {
        icon: ShieldCheck,
        title: 'Production-Ready Security',
        description: 'From JWT/OAuth to secure financial integrations, we ensure your startup is protected from day one.',
        linkText: 'Secure Systems',
        href: '/services',
        color: 'white',
    },
    {
        icon: BarChart3,
        title: 'Growth-Centric Logic',
        description: 'We integrate technical SEO, funnel thinking, and analytics into the core of every MERN application.',
        linkText: 'MERN Stack Development',
        href: '/services',
        color: 'white',
    },
    {
        icon: Globe,
        title: 'Global Scalability',
        description: 'Our code is built to move from local MVPs to international SaaS platforms without massive technical debt.',
        linkText: 'SaaS Platforms',
        href: '/services',
        color: 'white',
    },
]

const stats = [
    { number: 'MERN', label: 'Core Stack' },
    { number: '4', label: 'Specialists' },
    { number: 'Calicut', label: 'Origin' },
    { number: 'MVP', label: 'Focused' },
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

export default function AboutPage() {
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
                <section ref={heroRef} className="relative pt-32 pb-12 md:pt-44 md:pb-16">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[white]/[0.05] blur-[160px]" />
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
                            Built on <span className="text-[white]">Structure</span>. <br />
                            <span className="text-white/40 text-4xl md:text-6xl">Designed to Scale.</span>
                        </h1>

                        <p className="gsap-fade mx-auto max-w-2xl text-lg text-white/50 leading-relaxed">
                            ORVYN LABS is a digital product and growth studio. We partner with early-stage founders to turn ambitious ideas into structured, high-performance digital systems.
                        </p>
                    </div>
                </section>

                {/* The Roadmap Section */}
                <RoadmapSection />

                {/* Core Values Section */}
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
                                <div className="h-px w-12 bg-white/15" />
                                <span className="font-display text-sm italic text-white/50 tracking-wide">The ORVYN Blueprint</span>
                                <div className="h-px w-12 bg-white/15" />
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#f0f0f0] tracking-tight mb-6">
                                Why Founders Trust Us
                            </h2>
                            <p className="mx-auto max-w-3xl text-white/50 leading-relaxed">
                                We help startups avoid technical debt by building clean, maintainable, and performance-optimized products. Our commitment is to craftsmanship over fast hacks.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {values.map((value) => (
                                <motion.div
                                    key={value.title}
                                    variants={itemVariants}
                                    className="group rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-300 hover:border-[white]/40 hover:bg-white/[0.06]"
                                >
                                    <div
                                        className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                                        style={{ backgroundColor: `${value.color}20` }}
                                    >
                                        <value.icon size={22} style={{ color: value.color }} />
                                    </div>
                                    <h3 className="font-display text-xl font-semibold text-[#f0f0f0] mb-3 tracking-tight">
                                        {value.title}
                                    </h3>
                                    <p className="text-white/50 leading-relaxed text-sm mb-4">
                                        {value.description}
                                    </p>
                                    <Link href={value.href} className="inline-flex items-center gap-1.5 text-xs font-bold text-white transition-opacity hover:opacity-70 border-b border-white/20 pb-0.5">
                                        {value.linkText} <ChevronRight size={12} />
                                    </Link>
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
                            Ready to build for the next generation?
                        </h2>
                        <p className="text-white/50 mb-10 text-lg">
                            Whether you need a scalable MVP or a complex SaaS system, let’s design it to last.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-3 rounded-full text-black bg-[white] px-10 py-4 text-sm font-semibold  transition-all hover:bg-[#e5e5e5] hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            Start Your Build
                            <Rocket size={16} />
                        </Link>
                    </motion.div>
                </section>

                <FooterBlock />
            </main>
        </>
    )
}