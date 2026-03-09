'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    Cpu,
    Database,
    Terminal,
    Code2,
    ShieldCheck,
    Layers,
    ArrowRight,
    ChevronRight,
    Server,
    Activity
} from 'lucide-react'
import Link from 'next/link'
import { HeroHeader } from '@/components/header'
import { FooterBlock } from '@/components/uitripled/footer-block-shadcnui'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

export default function MernStackDevelopment() {
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
                                Full Stack Engineering
                            </span>
                            <h1 className="gsap-seo-fade font-display text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                                MERN Stack <br />
                                <span className="text-white/40 font-normal italic">Development Services</span>
                            </h1>
                            <p className="gsap-seo-fade text-xl text-white/50 leading-relaxed mb-10">
                                Harnessing MongoDB, Express, React, and Node.js to build industrial-grade
                                web applications. We architect high-concurrency systems for the modern web.
                            </p>

                            <div className="gsap-seo-fade flex flex-wrap gap-4">
                                <Button asChild size="lg" className="rounded-full px-8 bg-white text-black hover:bg-white/90">
                                    <Link href="/contact">Build Your Stack <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tech blocks */}
                <section className="py-24 border-b border-white/[0.06]">
                    <div className="mx-auto max-w-7xl px-6 lg:px-16 xl:px-24">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "MongoDB Architecture",
                                    desc: "Flexible, document-based schemas designed for complex data relationships and rapid scaling.",
                                    icon: Database
                                },
                                {
                                    title: "Express API Engineering",
                                    desc: "High-performance middleware and routing for robust, RESTful and GraphQL API ecosystems.",
                                    icon: Server
                                },
                                {
                                    title: "React Front-end Systems",
                                    desc: "State-of-the-art UI engineering with Redux/Zustand for seamless, high-fidelity user experiences.",
                                    icon: Code2
                                },
                                {
                                    title: "Node.js Infrastructure",
                                    desc: "Event-driven, non-blocking I/O backends optimized for speed and concurrent processing.",
                                    icon: Terminal
                                }
                            ].map((tech, i) => (
                                <div key={i} className="gsap-seo-fade group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                                    <tech.icon className="text-white/40 mb-6 group-hover:text-white transition-colors" size={32} />
                                    <h3 className="text-xl font-bold mb-4">{tech.title}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed">{tech.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SaaS Highlight */}
                <section className="py-24 border-b border-white/[0.06] bg-white/[0.01]">
                    <div className="mx-auto max-w-7xl px-6 lg:px-16 xl:px-24 text-center">
                        <div className="max-w-3xl mx-auto space-y-8 gsap-seo-fade">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[10px] uppercase tracking-widest">
                                <ShieldCheck size={12} /> Enterprise Ready
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold">Scalable SaaS Systems</h2>
                            <p className="text-lg text-white/50 leading-relaxed">
                                We specialize in architecting Multi-tenant SaaS platforms using the MERN stack.
                                From role-based access control (RBAC) to complex billing cycles, we engineer
                                systems that handle the intricacies of software-as-a-service.
                            </p>
                            <div className="pt-8 flex justify-center gap-6">
                                <Link
                                    href="/services"
                                    className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                                >
                                    Explore Services <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/works"
                                    className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                                >
                                    Our Case Studies <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <FooterBlock />
            </main>
        </>
    )
}
