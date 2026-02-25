'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import {
    ArrowLeft,
    Palette,
    Code,
    PenTool,
    BarChart3,
    Megaphone,
    Globe,
    ArrowRight,
    Rocket,
} from 'lucide-react'
import { HeroHeader } from '@/components/header'
import { FooterBlock } from '@/components/uitripled/footer-block-shadcnui'

gsap.registerPlugin(ScrollTrigger)

const services = [
    {
        icon: Palette,
        title: 'Brand Identity',
        description:
            'We craft cohesive brand identities that tell your story and make a lasting impression. From logos to full visual systems, we build brands that resonate.',
        features: ['Logo Design', 'Color Systems', 'Typography', 'Brand Guidelines'],
        color: '#F97316',
    },
    {
        icon: PenTool,
        title: 'UI/UX Design',
        description:
            'User-centered design that balances beauty with function. We create intuitive interfaces that delight users and drive engagement.',
        features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
        color: '#38BDF8',
    },
    {
        icon: Code,
        title: 'Web Development',
        description:
            'High-performance websites and web applications built with modern technologies. Fast, responsive, and designed to scale.',
        features: ['React / Next.js', 'Full-Stack Apps', 'API Development', 'Performance'],
        color: '#4ADE80',
    },
    {
        icon: Megaphone,
        title: 'Content Strategy',
        description:
            'Strategic content that connects with your audience and drives action. We help you say the right things in the right places.',
        features: ['Content Planning', 'Copywriting', 'SEO Strategy', 'Social Media'],
        color: '#F472B6',
    },
    {
        icon: BarChart3,
        title: 'Growth & Analytics',
        description:
            'Data-driven insights that fuel your growth. We track, analyze, and optimize to ensure your digital presence delivers results.',
        features: ['Analytics Setup', 'A/B Testing', 'Conversion Optimization', 'Reporting'],
        color: '#FACC15',
    },
    {
        icon: Globe,
        title: 'Digital Strategy',
        description:
            'Comprehensive digital strategies aligned with your business goals. We map out the path from where you are to where you want to be.',
        features: ['Market Research', 'Competitor Analysis', 'Roadmapping', 'Launch Planning'],
        color: '#A78BFA',
    },
]

const processSteps = [
    { step: '01', title: 'Discover', desc: 'We learn about your brand, goals, and audience through in-depth research.' },
    { step: '02', title: 'Strategize', desc: 'We create a tailored roadmap and plan aligned with your objectives.' },
    { step: '03', title: 'Design & Build', desc: 'Our team brings the vision to life with meticulous craft and modern tech.' },
    { step: '04', title: 'Launch & Grow', desc: 'We launch, measure, and continuously optimize for maximum impact.' },
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
                        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[160px]" />
                        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[140px]" />
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
                            Our <span className="text-white/40">Services</span>
                        </h1>

                        <p className="gsap-fade mx-auto max-w-2xl text-lg text-white/50 leading-relaxed">
                            End-to-end creative and technical solutions to elevate your brand,
                            engage your audience, and accelerate your growth.
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
                                    className="group rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]"
                                >
                                    <div
                                        className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                                        style={{ backgroundColor: `${service.color}20` }}
                                    >
                                        <service.icon size={22} style={{ color: service.color }} />
                                    </div>

                                    <h3 className="font-display text-xl font-semibold text-[#f0f0f0] mb-3 tracking-tight">
                                        {service.title}
                                    </h3>

                                    <p className="text-white/50 leading-relaxed text-sm mb-6">
                                        {service.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/50"
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
                                <div className="h-px w-12 bg-white/15" />
                                <span className="font-display text-sm italic text-white/50 tracking-wide">How We Work</span>
                                <div className="h-px w-12 bg-white/15" />
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#f0f0f0] tracking-tight">
                                Our Process
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
                                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm"
                                >
                                    <span className="font-display text-4xl font-bold text-white/10 mb-4 block">
                                        {item.step}
                                    </span>
                                    <h3 className="font-display text-lg font-semibold text-[#f0f0f0] mb-2 tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/50 text-sm leading-relaxed">
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
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#f0f0f0] tracking-tight mb-6">
                            Have a project in mind?
                        </h2>
                        <p className="text-white/50 mb-10 text-lg">
                            Let&apos;s discuss how we can help bring your vision to life with our expertise.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-3 rounded-full bg-[#f0f0f0] px-8 py-4 text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-white hover:-translate-y-0.5"
                            >
                                Start a Project
                                <Rocket size={16} />
                            </Link>
                            <Link
                                href="/#our-work"
                                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white/70 transition-all hover:border-white/25 hover:text-white/90"
                            >
                                View Our Work
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
