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
    ShoppingBag,
    Database,
    Lock
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { HeroHeader } from '@/components/header'
import { FooterBlock } from '@/components/uitripled/footer-block-shadcnui'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

export default function ScalableEcommerceArchitecture() {
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
                                <span>Architecture</span>
                                <span>•</span>
                                <span className="flex items-center gap-1.5"><Clock size={12} /> 10 min read</span>
                            </div>
                            <h1 className="font-display text-4xl md:text-7xl font-extrabold tracking-tight">
                                Scalable Ecommerce <br /><span className="text-white/40 italic font-normal">System Architecture.</span>
                            </h1>
                            <p className="text-lg text-white/50 leading-relaxed italic">
                                How we architect online stores to handle high concurrency and integrated payment security.
                            </p>
                        </div>
                    </div>
                </article>

                {/* Content */}
                <section className="py-24">
                    <div className="mx-auto max-w-3xl px-6">
                        <div className="space-y-16 gsap-article-fade">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-white">1. Decoupling Frontend & Logic</h2>
                                <p className="text-white/60 leading-relaxed text-lg text-justify">
                                    Modern ecommerce requires speed. By leveraging Next.js for SSR (Server-Side Rendering)
                                    and SSG (Static Site Generation), we ensure that product pages load instantly.
                                    The frontend is decoupled from the transactional logic, allowing for seamless updates
                                    without downtime.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-white">2. Handling Order Concurrency</h2>
                                <p className="text-white/60 leading-relaxed text-lg text-justify">
                                    The biggest failure point for online stores is high-traffic sale events.
                                    Our architecture utilizes Node.js event-driven processing and MongoDB transactions
                                    to ensure that stock levels are perfectly synced even when thousands of users
                                    are clicking "Buy Now" simultaneously.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-6 rounded-2xl border border-white/5 bg-white/5 flex flex-col items-center text-center">
                                        <Database className="text-white/40 mb-2" size={24} />
                                        <span className="text-xs font-bold uppercase tracking-widest">ACID Transactions</span>
                                    </div>
                                    <div className="p-6 rounded-2xl border border-white/5 bg-white/5 flex flex-col items-center text-center">
                                        <Lock className="text-white/40 mb-2" size={24} />
                                        <span className="text-xs font-bold uppercase tracking-widest">Secure Checkout</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-white">3. Payment Security & Scalability</h2>
                                <p className="text-white/60 leading-relaxed text-lg text-justify">
                                    Integration with Payment Gateways like Razorpay and Stripe is engineered with
                                    webhook validation and redundant logging. This ensures that every transaction
                                    is verified on the server-side before orders are finalized, completely
                                    eliminating fraudulent order placement.
                                </p>
                            </div>

                            <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div className="space-y-2">
                                    <h4 className="font-bold">Building an online store?</h4>
                                    <p className="text-sm text-white/40 italic">We build high-performance ecommerce systems.</p>
                                </div>
                                <div className="flex gap-4">
                                    <Button asChild variant="outline" className="rounded-full border-white/10 hover:bg-white/5">
                                        <Link href="/ecommerce-development">Ecommerce Services</Link>
                                    </Button>
                                    <Button asChild className="rounded-full bg-white text-black hover:bg-white/90">
                                        <Link href="/works/nextzen-ecommerce">View Case Study <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
