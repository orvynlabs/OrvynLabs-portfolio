'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import {
    ArrowLeft,
    Rocket,
    Code2,
    Layers,
    Layout,
    ShieldCheck,
    Database,
    Zap,
    ArrowRight,
    Terminal,
    Server,
    Smartphone,
} from 'lucide-react'
import { HeroHeader } from '@/components/header'
import { FooterBlock } from '@/components/uitripled/footer-block-shadcnui'

gsap.registerPlugin(ScrollTrigger)

const services = [
    {
        icon: Layers,
        title: 'Full-Stack Web Engineering',
        description:
            'End-to-end MERN stack applications built for performance. We focus on role-based access control, secure authentication, and seamless user flows.',
        features: ['React / Next.js', 'Node.js & Express', 'JWT / OAuth 2.0', 'Complex Admin Panels'],
        color: 'white', // ORVYN Purple
    },
    {
        icon: Zap,
        title: 'MVP Development',
        description:
            'Rapid development for early-stage founders. We turn your product idea into a structured, launch-ready MVP without technical debt.',
        features: ['Rapid Prototyping', 'Core Feature Scoping', 'Scalable Foundation', 'Idea Validation'],
        color: 'white',
    },
    {
        icon: Database,
        title: 'SaaS Architecture',
        description:
            'Advanced systems design for multi-tenant platforms. We specialize in database normalization and scalable cloud infrastructure.',
        features: ['Multi-tenant DB Design', 'API Orchestration', 'Micro-services', 'Performance Tuning'],
        color: 'white',
    },
    {
        icon: Layout,
        title: 'UI/UX & Glassmorphism',
        description:
            'Modern, technical aesthetics meet functional design. We create high-fidelity dashboards and interfaces using our signature glassmorphic style.',
        features: ['Figma-to-React', 'Dashboard UX', 'Responsive Design', 'Interactive Prototypes'],
        color: 'white',
    },
    {
        icon: ShieldCheck,
        title: 'Security & Optimization',
        description:
            'Ensuring your system is production-ready. We handle security audits, SEO optimization, and financial integration (Razorpay/Stripe).',
        features: ['Security Hardening', 'SEO Engineering', 'Payment Gateways', 'Wallet Systems'],
        color: 'white',
    },
    {
        icon: Rocket,
        title: 'Growth Engineering',
        description:
            'Building the systems that help you scale. We integrate referral systems, coupon logic, and analytics funnels into your core code.',
        features: ['Referral Systems', 'Marketing Tech', 'Data Analytics', 'Conversion Funnels'],
        color: 'white',
    },
]

const processSteps = [
    { step: '01', title: 'System Mapping', desc: 'We map out the architecture, user roles, and database schema before a single line of code is written.' },
    { step: '02', title: 'Agile Engineering', desc: 'Sprints focused on core logic, using clean MERN patterns to build a production-ready foundation.' },
    { step: '03', title: 'Structured Testing', desc: 'Rigorous testing of security, performance, and API stability to ensure the system is bulletproof.' },
    { step: '04', title: 'Launch & Scale', desc: 'Deploying your product and setting up the infrastructure needed to support your first 10,000 users.' },
]

const techStack = [
    { icon: Terminal, name: 'Next.js / React' },
    { icon: Server, name: 'Node.js / Express' },
    { icon: Database, name: 'MongoDB / SQL' },
    { icon: Smartphone, name: 'Tailwind / Framer' },
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
                        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[white]/[0.05] blur-[160px]" />
                        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-[white]/[0.02] blur-[140px]" />
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
                            Architecting <br /><span className="text-[white]">Digital Systems.</span>
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
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
                        >
                            {services.map((service) => (
                                <motion.div
                                    key={service.title}
                                    variants={itemVariants}
                                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition-all duration-500 hover:border-[white]/40 hover:bg-white/[0.04]"
                                >
                                    <div className="relative z-10">
                                        <div
                                            className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 shadow-inner bg-black/40 backdrop-blur-md transition-transform duration-500 group-hover:scale-110"
                                        >
                                            <service.icon size={26} style={{ color: service.color }} className="drop-shadow-lg" />
                                        </div>

                                        <h3 className="font-display text-2xl font-semibold text-[#f0f0f0] mb-4 tracking-tight group-hover:text-white transition-colors duration-300">
                                            {service.title}
                                        </h3>

                                        <p className="text-white/60 leading-relaxed text-sm mb-8 line-clamp-3 group-hover:text-white/80 transition-colors duration-300">
                                            {service.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {service.features.map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="rounded-full border border-white/5 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-white/50 transition-all duration-300 group-hover:border-[white]/30 group-hover:bg-[white]/10 group-hover:text-white/70"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Tech Stack Marquee (New Section) */}
                <section className="py-12 border-y border-white/[0.06] bg-white/[0.01]">
                    <div className="mx-auto max-w-6xl px-6 flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-40 hover:opacity-100 transition-opacity">
                        {techStack.map((tech) => (
                            <div key={tech.name} className="flex items-center gap-3 text-white font-display uppercase tracking-widest text-xs font-bold">
                                <tech.icon size={18} className="text-[white]" />
                                {tech.name}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 md:py-28">
                    <div className="mx-auto max-w-[90rem] px-6 lg:px-16 xl:px-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <div className="h-px w-12 bg-[white]/30" />
                                <span className="font-display text-sm italic text-[white] tracking-wide font-bold uppercase">The Blueprint</span>
                                <div className="h-px w-12 bg-[white]/30" />
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#f0f0f0] tracking-tight">
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
                                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm group hover:border-[white]/30 transition-all"
                                >
                                    <span className="font-display text-4xl font-bold text-[white]/10 mb-4 block group-hover:text-[white]/30 transition-colors">
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
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-[#f0f0f0] tracking-tight mb-6">
                            Ready to ship your system?
                        </h2>
                        <p className="text-white/50 mb-10 text-lg">
                            We don't build one-off pages. We build growth-ready digital infrastructure.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-3 rounded-full bg-[white] px-10 py-4 text-sm font-semibold text-white transition-all hover:bg-[#e5e5e5] hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                            >
                                Start Your MVP
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