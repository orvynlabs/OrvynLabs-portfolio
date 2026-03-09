'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    Cpu,
    ArrowRight,
    Search,
    Clock,
    User,
    ChevronRight,
    Terminal
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { HeroHeader } from '@/components/header'
import { FooterBlock } from '@/components/uitripled/footer-block-shadcnui'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

const articles = [
    {
        title: "The Architecture of Startup MVP Development",
        slug: "startup-mvp-development",
        desc: "Why choosing the right tech stack for your MVP is critical for long-term scalability and investor confidence.",
        date: "March 15, 2024",
        category: "Strategy",
        readTime: "8 min"
    },
    {
        title: "A Comprehensive Guide to Modern MERN Stack",
        slug: "mern-stack-guide",
        desc: "Deep dive into MongoDB, Express, React, and Node.js. Learn how to engineer robust systems with industry best practices.",
        date: "March 10, 2024",
        category: "Engineering",
        readTime: "12 min"
    },
    {
        title: "Building Scalable Ecommerce Architecture",
        slug: "scalable-ecommerce-architecture",
        desc: "How we architect online stores to handle high concurrency and integrated payment security.",
        date: "March 05, 2024",
        category: "Architecture",
        readTime: "10 min"
    }
]

export default function BlogIndex() {
    const mainRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!mainRef.current) return
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.gsap-blog-fade',
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
                            <span className="gsap-blog-fade text-xs uppercase tracking-[0.3em] text-white/60 font-bold mb-4 block">
                                Insights & Engineering
                            </span>
                            <h1 className="gsap-blog-fade font-display text-5xl md:text-8xl font-extrabold tracking-tight mb-8">
                                The <br />
                                <span className="text-white/40 font-normal italic">ORVYN Lab Logs</span>
                            </h1>
                            <p className="gsap-blog-fade text-xl text-white/50 leading-relaxed">
                                Engineering thoughts, architectural deep dives, and startup
                                growth strategies from the ORVYN LABS team.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Articles list */}
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-16 xl:px-24">
                        <div className="space-y-12">
                            {articles.map((article, i) => (
                                <Link
                                    key={article.slug}
                                    href={`/blog/${article.slug}`}
                                    className="gsap-blog-fade block group"
                                >
                                    <div className="relative p-8 md:p-12 rounded-[2rem] border border-white/5 bg-white/[0.02] group-hover:bg-white/[0.05] group-hover:border-white/10 transition-all duration-500">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                                            <div className="space-y-4 max-w-2xl">
                                                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-white/40 font-bold">
                                                    <span className="text-white/80">{article.category}</span>
                                                    <span>•</span>
                                                    <span className="flex items-center gap-1.5"><Clock size={12} /> {article.readTime}</span>
                                                </div>
                                                <h2 className="text-3xl md:text-4xl font-bold group-hover:text-white transition-colors">{article.title}</h2>
                                                <p className="text-white/50 leading-relaxed italic">{article.desc}</p>
                                            </div>
                                            <div className="shrink-0 flex items-center justify-center h-14 w-14 rounded-full border border-white/10 bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                                <ArrowRight size={20} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Categories & Search (Simplified placeholder) */}
                <section className="pb-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-16 xl:px-24 text-center">
                        <div className="gsap-blog-fade p-12 rounded-[2rem] border border-white/5 bg-white/[0.01]">
                            <h3 className="text-xl font-bold mb-8 italic">Stay updated on our engineering process</h3>
                            <Button asChild className="rounded-full px-10 bg-white text-black hover:bg-white/90">
                                <Link href="/contact">Inquire for Projects</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <FooterBlock />
            </main>
        </>
    )
}
