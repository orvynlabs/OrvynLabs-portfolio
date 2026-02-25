'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import {
    ArrowLeft,
    Rocket,
    Crosshair,
    Code,
    Users,
    TrendingUp,
    Handshake,
    UserCheck,
} from 'lucide-react'
import { HeroHeader } from '@/components/header'
import { FooterBlock } from '@/components/uitripled/footer-block-shadcnui'

gsap.registerPlugin(ScrollTrigger)

const values = [
    {
        icon: Crosshair,
        title: 'Problem-First Thinking',
        description: 'We focus on understanding the real problem before writing a single line of code. Technology is a tool — not the goal.',
        color: '#F97316',
    },
    {
        icon: Code,
        title: 'Clean and Scalable Development',
        description: 'We believe in writing maintainable, efficient code that grows with the product instead of creating technical debt.',
        color: '#38BDF8',
    },
    {
        icon: Users,
        title: 'Collaboration Over Ego',
        description: 'As a team of four developers, teamwork and shared responsibility are at the heart of everything we do.',
        color: '#4ADE80',
    },
    {
        icon: TrendingUp,
        title: 'Continuous Learning',
        description: 'Technology evolves fast, and so do we. We constantly learn, adapt, and improve our skills and processes.',
        color: '#FACC15',
    },
    {
        icon: Handshake,
        title: 'Transparency and Trust',
        description: 'We communicate openly with clients and within our team, ensuring clarity, honesty, and reliability in every project.',
        color: '#A78BFA',
    },
    {
        icon: UserCheck,
        title: 'User-Centered Design',
        description: 'Great software is built for people. We prioritize usability, performance, and real user experience.',
        color: '#F472B6',
    },
]

const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '30+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
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
                        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[160px]" />
                    </div>

                    <div className="mx-auto max-w-4xl px-6 text-center">
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
                            About <span className="text-white/40">Us</span>
                        </h1>

                        <p className="gsap-fade mx-auto max-w-2xl text-lg text-white/50 leading-relaxed">
                            Four full-stack developers united by curiosity, discipline, and a
                            shared mission to build technology that makes a real impact.
                        </p>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-20 md:py-28">
                    <div className="mx-auto max-w-6xl px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6 }}
                            className="grid md:grid-cols-2 gap-16 items-start"
                        >
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-px w-12 bg-white/15" />
                                    <span className="font-display text-sm italic text-white/50 tracking-wide">Our Story</span>
                                </div>
                                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#f0f0f0] tracking-tight mb-6">
                                    Our Story
                                </h2>
                                <div className="space-y-4 text-white/50 leading-relaxed">
                                    <p>
                                        Our journey began during our college days, where four passionate students shared
                                        more than just classrooms — we shared a curiosity for technology and a drive to
                                        build meaningful digital solutions. While studying software development, we
                                        realized that many businesses struggled with outdated systems, poor user
                                        experiences, and inefficient workflows. That realization sparked an idea: instead
                                        of just learning development, why not use our skills to solve real-world problems?
                                    </p>
                                    <p>
                                        What started as late-night discussions, small projects, and continuous
                                        experimentation slowly evolved into something bigger. As full-stack developers,
                                        we explored both frontend and backend technologies, focusing on creating complete,
                                        scalable solutions rather than isolated features. Every project became a learning
                                        opportunity, shaping our approach to clean code, performance, and user-focused
                                        design.
                                    </p>
                                    <p>
                                        After gaining experience through collaborative projects and real-world challenges,
                                        we decided to turn our shared vision into a professional journey. We built our
                                        company on the belief that strong teamwork, practical problem-solving, and
                                        continuous learning lead to better products and better results for clients.
                                    </p>
                                    <p>
                                        Today, we remain a team of four dedicated full-stack developers who value
                                        simplicity, efficiency, and innovation. Our goal is not just to build software,
                                        but to create solutions that help businesses grow, adapt, and succeed in a rapidly
                                        changing digital world.
                                    </p>
                                    <p className="italic text-white/60 font-medium">
                                        From college ideas to real-world impact — this is our story, and we are just
                                        getting started.
                                    </p>
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
                                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
                                    >
                                        <span className="font-display text-3xl md:text-4xl font-bold text-[#f0f0f0]">
                                            {stat.number}
                                        </span>
                                        <p className="mt-2 text-sm text-white/50">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* What We Stand For + Core Values Section */}
                <section className="py-20 md:py-28 border-t border-white/[0.06]">
                    <div className="mx-auto max-w-6xl px-6">
                        {/* Intro Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <div className="h-px w-12 bg-white/15" />
                                <span className="font-display text-sm italic text-white/50 tracking-wide">What We Stand For</span>
                                <div className="h-px w-12 bg-white/15" />
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#f0f0f0] tracking-tight mb-6">
                                Our Core Values
                            </h2>
                            <p className="mx-auto max-w-3xl text-white/50 leading-relaxed">
                                We believe technology should be practical, purposeful, and built with intention.
                                As a team of full-stack developers, our focus is on creating solutions that are
                                not only functional but scalable, maintainable, and user-focused. We value clear
                                communication, continuous improvement, and delivering real outcomes rather than
                                unnecessary complexity. Every project we take on reflects our commitment to
                                craftsmanship, collaboration, and long-term impact.
                            </p>
                        </motion.div>

                        {/* Values Grid */}
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
                                    className="group rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]"
                                >
                                    <div
                                        className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
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
                        className="mx-auto max-w-3xl px-6 text-center"
                    >
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#f0f0f0] tracking-tight mb-6">
                            Ready to create something amazing?
                        </h2>
                        <p className="text-white/50 mb-10 text-lg">
                            Let&apos;s turn your vision into reality. Reach out and let&apos;s start the conversation.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-3 rounded-full bg-[#f0f0f0] px-8 py-4 text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-white hover:-translate-y-0.5"
                        >
                            Get in Touch
                            <Rocket size={16} />
                        </Link>
                    </motion.div>
                </section>

                <FooterBlock />
            </main>
        </>
    )
}
