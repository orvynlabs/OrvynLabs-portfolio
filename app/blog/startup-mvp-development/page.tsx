'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    Cpu,
    ArrowLeft,
    Clock,
    User,
    ChevronRight,
    Terminal,
    ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { HeroHeader } from '@/components/header'
import { FooterBlock } from '@/components/uitripled/footer-block-shadcnui'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

export default function StartupMvpDevelopment() {
    const mainRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!mainRef.current) return
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.gsap-article-fade',
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
                {/* Back button */}
                <div className="absolute top-28 left-6 lg:left-16 z-10 gsap-article-fade">
                    <Link href="/blog" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
                    </Link>
                </div>

                {/* Hero section */}
                <article className="pt-40 pb-20 md:pt-56 md:pb-32 border-b border-white/[0.06]">
                    <div className="mx-auto max-w-4xl px-6">
                        <div className="space-y-8 text-center gsap-article-fade">
                            <div className="flex items-center justify-center gap-4 text-[10px] uppercase tracking-widest text-white/40 font-bold">
                                <span>Strategy</span>
                                <span>•</span>
                                <span className="flex items-center gap-1.5"><Clock size={12} /> 8 min read</span>
                            </div>
                            <h1 className="font-display text-4xl md:text-7xl font-extrabold tracking-tight">
                                The Architecture of Startup <span className="text-white/40 italic font-normal">MVP Development.</span>
                            </h1>
                            <p className="text-lg text-white/50 leading-relaxed italic">
                                Why choosing the right tech stack for your MVP is critical for long-term scalability and investor confidence.
                            </p>
                        </div>
                    </div>
                </article>

                {/* Content */}
                <section className="py-24">
                    <div className="mx-auto max-w-3xl px-6">
                        <div className="space-y-16 gsap-article-fade">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-white">1. Defining the Core Value Proposition</h2>
                                <p className="text-white/60 leading-relaxed text-lg text-justify">
                                    The Minimum Viable Product (MVP) is not just a basic version of your app.
                                    It is the architectural foundation upon which your entire business will scale.
                                    At ORVYN LABS, we focus on engineering the "V" in MVP—ensuring it truly delivers
                                    the core value proposition with zero technical debt.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-white">2. Choosing the Tech Stack for Speed & Scale</h2>
                                <p className="text-white/60 leading-relaxed text-lg text-justify">
                                    For most startups, the MERN stack (MongoDB, Express, React, Node.js) combined
                                    with Next.js offers the perfect balance. It allows for rapid prototyping while
                                    providing the structural integrity of a production-level system.
                                </p>
                                <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
                                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                        <Terminal size={18} className="text-white/40" /> Recommended Stack
                                    </h3>
                                    <ul className="grid grid-cols-2 gap-4 text-sm text-white/50">
                                        <li>• Frontend: Next.js 14</li>
                                        <li>• Logic: Node.js (Express)</li>
                                        <li>• Database: MongoDB</li>
                                        <li>• Style: Tailwind CSS</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-white">3. Building for Future Investors</h2>
                                <p className="text-white/60 leading-relaxed text-lg text-justify">
                                    Clean code and documented architecture are not secondary; they are assets.
                                    When you approach investors, having a scalable MERN stack codebase shows
                                    technical maturity and reduces the perceived risk of future technical migrations.
                                </p>
                            </div>

                            <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div className="space-y-2">
                                    <h4 className="font-bold">Interested in our services?</h4>
                                    <p className="text-sm text-white/40 italic">We engineer MVPs for high-growth startups.</p>
                                </div>
                                <div className="flex gap-4">
                                    <Button asChild variant="outline" className="rounded-full border-white/10 hover:bg-white/5">
                                        <Link href="/mern-stack-development">MERN Services</Link>
                                    </Button>
                                    <Button asChild className="rounded-full bg-white text-black hover:bg-white/90">
                                        <Link href="/contact">Let's talk <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <FooterBlock />
            </main>
        </>
    )
}
