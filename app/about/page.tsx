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

gsap.registerPlugin(ScrollTrigger)

const values = [
    {
        icon: Layers,
        title: 'Structure First',
        description: 'We prioritize backend architecture and database normalization. A product is only as strong as its foundation.',
        color: 'white', // ORVYN Primary Purple
    },
    {
        icon: Cpu,
        title: 'Systems Thinking',
        description: 'We don’t just build features; we build interconnected systems designed for operational efficiency and scale.',
        color: 'white',
    },
    {
        icon: Zap,
        title: 'Rapid Iteration',
        description: 'The "LABS" in our name stands for experimentation. We build MVPs fast, test with real data, and refine relentlessly.',
        color: 'white',
    },
    {
        icon: ShieldCheck,
        title: 'Production-Ready Security',
        description: 'From JWT/OAuth to secure financial integrations, we ensure your startup is protected from day one.',
        color: 'white',
    },
    {
        icon: BarChart3,
        title: 'Growth-Centric Logic',
        description: 'We integrate technical SEO, funnel thinking, and analytics into the core of every MERN application.',
        color: 'white',
    },
    {
        icon: Globe,
        title: 'Global Scalability',
        description: 'Our code is built to move from local MVPs to international SaaS platforms without massive technical debt.',
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

                {/* The Story/Philosophy Section */}
                <section className="py-20 md:py-28">
                    <div className="mx-auto max-w-[90rem] px-6 lg:px-16 xl:px-24">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6 }}
                            className="grid md:grid-cols-2 gap-16 items-start"
                        >
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-px w-12 bg-[white]/30" />
                                    <span className="font-display text-sm italic text-[white] tracking-wide uppercase font-bold">The Journey</span>
                                </div>
                                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#f0f0f0] tracking-tight mb-6">
                                    From Calicut to <br />Global Products.
                                </h2>
                                <div className="space-y-4 text-white/50 leading-relaxed">
                                    <p>
                                        Our story began in Calicut. Shortly after completing our BCA degrees, four developers united by a shared obsession for clean code and systems thinking decided to move beyond the traditional "agency" model.
                                    </p>
                                    <p>
                                        We realized that many founders weren't just looking for websites; they needed <strong>infrastructure</strong>. They needed systems that could handle users, secure payments, and scale without breaking.
                                    </p>
                                    <p>
                                        Today, <strong>ORVYN LABS</strong> is a specialized 4-member team. We operate at the intersection of product engineering and growth strategy, using the <strong>MERN stack</strong> to build high-stakes digital products.
                                    </p>
                                    <div className="pt-4 flex flex-col gap-3">
                                        <p className="italic text-white/60 font-medium flex items-center gap-2">
                                            <ChevronRight size={16} className="text-[white]" />
                                            No messy development. Only structured systems.
                                        </p>
                                        <p className="text-sm flex items-center gap-2 text-white/30 font-display">
                                            <MapPin size={14} className="text-[white]" />
                                            Rooted in Calicut, Kerala. Scaling Worldwide.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4 md:mt-16">
                                {stats.map((stat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm group hover:border-[white]/50 transition-colors"
                                    >
                                        <span className="font-display text-3xl md:text-4xl font-bold text-[#f0f0f0] group-hover:text-[white] transition-colors">
                                            {stat.number}
                                        </span>
                                        <p className="mt-2 text-sm text-white/50 uppercase tracking-widest font-semibold">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

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
                                    <p className="text-white/50 leading-relaxed text-sm">
                                        {value.description}
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