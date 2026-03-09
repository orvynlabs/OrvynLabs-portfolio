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
    ArrowRight,
    Search,
    Code2
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { HeroHeader } from '@/components/header'
import { FooterBlock } from '@/components/uitripled/footer-block-shadcnui'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

export default function MernStackGuide() {
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
                                <span>Engineering</span>
                                <span>•</span>
                                <span className="flex items-center gap-1.5"><Clock size={12} /> 12 min read</span>
                            </div>
                            <h1 className="font-display text-4xl md:text-7xl font-extrabold tracking-tight">
                                Modern MERN Stack <br /><span className="text-white/40 italic font-normal">A Comprehensive Guide.</span>
                            </h1>
                            <p className="text-lg text-white/50 leading-relaxed italic">
                                Deep dive into MongoDB, Express, React, and Node.js. Learn how to engineer robust systems with industry best practices.
                            </p>
                        </div>
                    </div>
                </article>

                {/* Content */}
                <section className="py-24">
                    <div className="mx-auto max-w-3xl px-6">
                        <div className="space-y-16 gsap-article-fade">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-white">1. The Power of One Language</h2>
                                <p className="text-white/60 leading-relaxed text-lg text-justify">
                                    The primary advantage of the MERN stack is the ability to use JavaScript/TypeScript
                                    across the entire stack. This reduces context switching for developers and
                                    ensures a more cohesive development workflow from the database connection to the UI layer.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-white">2. Architecting for Longevity</h2>
                                <p className="text-white/60 leading-relaxed text-lg text-justify">
                                    MERN stack development at ORVYN LABS is about architectural longevity. We don't just write
                                    scripts; we design patterns. Implementing clean architecture principles where
                                    your business logic is decoupled from external frameworks is crucial.
                                </p>
                                <div className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
                                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                        <Code2 size={18} className="text-white/40" /> Best Practices
                                    </h3>
                                    <ul className="space-y-4 text-sm text-white/50">
                                        <li className="flex gap-3">
                                            <span className="text-white">•</span>
                                            <span>Implement strict TypeScript interfaces for end-to-end type safety.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-white">•</span>
                                            <span>Utilize MongoDB Aggregation Framework for high-speed data processing.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-white">•</span>
                                            <span>Implement robust JWT-based authentication with refresh token strategy.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-white">3. Deploying to Scale</h2>
                                <p className="text-white/60 leading-relaxed text-lg text-justify">
                                    A MERN app is only as good as its deployment strategy. We leverage AWS (S3, EC2, CloudFront)
                                    and Vercel to ensure that your backend can handle concurrent loads while your frontend
                                    is served with sub-millisecond latency via Global CDNs.
                                </p>
                            </div>

                            <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div className="space-y-2">
                                    <h4 className="font-bold">Ready to build your next system?</h4>
                                    <p className="text-sm text-white/40 italic">We are experts in MERN Stack engineering.</p>
                                </div>
                                <div className="flex gap-4">
                                    <Button asChild variant="outline" className="rounded-full border-white/10 hover:bg-white/5">
                                        <Link href="/web-development-calicut">Web Development</Link>
                                    </Button>
                                    <Button asChild className="rounded-full bg-white text-black hover:bg-white/90">
                                        <Link href="/contact">Inquire Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
