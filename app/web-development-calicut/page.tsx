'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    Cpu,
    Zap,
    ShieldCheck,
    Globe,
    Terminal,
    ArrowRight,
    ChevronRight,
    Search,
    Rocket
} from 'lucide-react'
import Link from 'next/link'
import { HeroHeader } from '@/components/header'
import { FooterBlock } from '@/components/uitripled/footer-block-shadcnui'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

export default function WebDevelopmentCalicut() {
    const mainRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!mainRef.current) return
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.gsap-seo-fade',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: 0.2,
                }
            )
        }, mainRef.current)
        return () => ctx.revert()
    }, [])

    return (
        <>
            <HeroHeader />
            <main ref={mainRef} className="overflow-hidden bg-[#0a0a0a] min-h-screen text-white">
                {/* Hero section */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 border-b border-white/[0.06]">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[160px]" />
                    </div>

                    <div className="mx-auto max-w-7xl px-6 lg:px-16 xl:px-24">
                        <div className="max-w-3xl">
                            <span className="gsap-seo-fade text-xs uppercase tracking-[0.3em] text-white/60 font-bold mb-4 block">
                                Elite Digital Studio
                            </span>
                            <h1 className="gsap-seo-fade font-display text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                                Website Development <br />
                                <span className="text-white/40 font-normal italic">Company in Calicut</span>
                            </h1>
                            <p className="gsap-seo-fade text-xl text-white/50 leading-relaxed mb-10">
                                ORVYN LABS engineers high-performance digital products for startups and enterprises.
                                We don't just build websites; we architect scalable systems designed for growth.
                            </p>

                            <div className="gsap-seo-fade flex flex-wrap gap-4">
                                <Button asChild size="lg" className="rounded-full px-8 bg-white text-black hover:bg-white/90">
                                    <Link href="/contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-white/10 hover:bg-white/5">
                                    <Link href="/works">View Portfolio</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-24 border-b border-white/[0.06]">
                    <div className="mx-auto max-w-7xl px-6 lg:px-16 xl:px-24">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                            <div className="gsap-seo-fade space-y-12">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                            <Globe size={20} className="text-white" />
                                        </div>
                                        <h2 className="text-2xl font-bold">Custom Website Development</h2>
                                    </div>
                                    <p className="text-white/50 leading-relaxed">
                                        We build tailored digital experiences that align perfectly with your brand identity and business goals.
                                        From high-fidelity UI/UX to complex backend systems, our development process is meticulous and result-driven.
                                    </p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                            <Rocket size={20} className="text-white" />
                                        </div>
                                        <h2 className="text-2xl font-bold">Startup Product Development</h2>
                                    </div>
                                    <p className="text-white/50 leading-relaxed">
                                        Specialized in taking startups from MVP to scale. We understand the agility required for startup growth
                                        and provide the technical architecture needed to support millions of users.
                                    </p>
                                </div>
                            </div>

                            <div className="gsap-seo-fade space-y-12">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                            <Cpu size={20} className="text-white" />
                                        </div>
                                        <h2 className="text-2xl font-bold">High-Performance Next.js Websites</h2>
                                    </div>
                                    <p className="text-white/50 leading-relaxed">
                                        Leveraging the power of Next.js 14, we deliver websites with sub-second load times, excellent SEO
                                        capabilities, and smooth client-side navigation that feels like a native app.
                                    </p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                            <Terminal size={20} className="text-white" />
                                        </div>
                                        <h2 className="text-2xl font-bold">Scalable MERN Architecture</h2>
                                    </div>
                                    <p className="text-white/50 leading-relaxed">
                                        Our core expertise lies in the MERN stack (MongoDB, Express, React, Node.js).
                                        We engineer robust APIs and database structures that serve as the backbone for scalable SaaS platforms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-24 border-b border-white/[0.06] bg-white/[0.01]">
                    <div className="mx-auto max-w-7xl px-6 lg:px-16 xl:px-24">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-6 space-y-8 gsap-seo-fade">
                                <h2 className="font-display text-4xl font-bold">Why businesses in Calicut <br />choose <span className="text-white/40 font-normal italic">ORVYN LABS</span></h2>
                                <p className="text-white/50 text-lg leading-relaxed">
                                    Calicut is a rising hub for entrepreneurship. We provide local businesses with
                                    Silicon Valley-grade engineering. Our proximity allows for seamless
                                    collaboration while delivering world-class results.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Architectural Precision in Code",
                                        "Mobile-First Performance Strategy",
                                        "SEO-Centric Engineering",
                                        "Seamless Scalability from Day One",
                                        "Direct Communication & Collaboration"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/70">
                                            <div className="h-1.5 w-1.5 rounded-full bg-white" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lg:col-span-6 gsap-seo-fade">
                                <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-4">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                                    <div className="relative h-full w-full rounded-xl border border-white/10 bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
                                        <div className="text-center p-8">
                                            <Search size={48} className="mx-auto mb-6 text-white/20" />
                                            <div className="space-y-4">
                                                <div className="h-2 w-32 bg-white/10 rounded-full mx-auto" />
                                                <div className="h-2 w-48 bg-white/5 rounded-full mx-auto" />
                                                <div className="h-2 w-40 bg-white/5 rounded-full mx-auto" />
                                            </div>
                                            <div className="mt-12 text-5xl font-black text-white/10 uppercase tracking-tighter rotate-[-5deg]">
                                                SEO Engineered
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Internal Links & CTA */}
                <section className="py-24 text-center">
                    <div className="mx-auto max-w-4xl px-6">
                        <div className="gsap-seo-fade space-y-12">
                            <h2 className="text-4xl font-bold">Ready to scale your business?</h2>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link
                                    href="/ecommerce-development"
                                    className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                                >
                                    Ecommerce Development <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/mern-stack-development"
                                    className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                                >
                                    MERN Stack Services <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/services"
                                    className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                                >
                                    Core Services <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                            <div className="pt-8">
                                <Button asChild size="lg" className="rounded-full px-12 bg-white text-black hover:bg-white/90 shadow-2xl shadow-white/10">
                                    <Link href="/contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <FooterBlock />
            </main>
        </>
    )
}
