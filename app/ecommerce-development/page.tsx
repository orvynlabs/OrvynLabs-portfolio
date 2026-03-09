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
    ShoppingBag,
    CreditCard,
    LayoutDashboard,
    Package
} from 'lucide-react'
import Link from 'next/link'
import { HeroHeader } from '@/components/header'
import { FooterBlock } from '@/components/uitripled/footer-block-shadcnui'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

export default function EcommerceDevelopment() {
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
                                Digital Commerce Solutions
                            </span>
                            <h1 className="gsap-seo-fade font-display text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                                Custom Ecommerce <br />
                                <span className="text-white/40 font-normal italic">Development</span>
                            </h1>
                            <p className="gsap-seo-fade text-xl text-white/50 leading-relaxed mb-10">
                                Engineering high-conversion online stores with high-performance architectures.
                                We build bespoke ecommerce systems that turn visitors into loyal customers.
                            </p>

                            <div className="gsap-seo-fade flex flex-wrap gap-4">
                                <Button asChild size="lg" className="rounded-full px-8 bg-white text-black hover:bg-white/90">
                                    <Link href="/contact">Launch Your Store <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Capability blocks */}
                <section className="py-24 border-b border-white/[0.06]">
                    <div className="mx-auto max-w-7xl px-6 lg:px-16 xl:px-24">
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Online Store Architecture",
                                    desc: "Scalable frontend and backend architectures using Next.js and MERN stack for global reach.",
                                    icon: ShoppingBag
                                },
                                {
                                    title: "Payment Gateway Integrations",
                                    desc: "Seamless Integration with Razorpay, Stripe, and global processors for secure transactions.",
                                    icon: CreditCard
                                },
                                {
                                    title: "Inventory Systems",
                                    desc: "Real-time stock tracking and automated warehouse management flows built into your stack.",
                                    icon: Package
                                },
                                {
                                    title: "Admin Dashboards",
                                    desc: "High-fidelity management portals to control orders, users, and product metrics with ease.",
                                    icon: LayoutDashboard
                                }
                            ].map((item, i) => (
                                <div key={i} className="gsap-seo-fade group flex gap-6 p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                                    <div className="shrink-0 h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                        <item.icon size={24} className="text-white/40 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                        <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tech & Scale */}
                <section className="py-24 border-b border-white/[0.06] bg-white/[0.01]">
                    <div className="mx-auto max-w-7xl px-6 lg:px-16 xl:px-24">
                        <div className="text-center max-w-3xl mx-auto mb-16 gsap-seo-fade">
                            <h2 className="text-4xl font-bold mb-6">Scalable Ecommerce Platforms</h2>
                            <p className="text-white/50 leading-relaxed">
                                We utilize modern tech stacks to ensure your store can handle high traffic bursts
                                during sales and marketing campaigns without breaking a sweat.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 gsap-seo-fade">
                            {["MERN Stack", "Next.js", "Razorpay", "Stripe", "AWS", "Framer Motion"].map((tech) => (
                                <div key={tech} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium">
                                    {tech}
                                </div>
                            ))}
                        </div>

                        <div className="mt-24 gsap-seo-fade p-12 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent text-center">
                            <h3 className="text-2xl font-bold mb-6">Need an Enterprise Solution?</h3>
                            <Link
                                href="/web-development-calicut"
                                className="group inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                            >
                                Learn more about our web development process <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>

                <FooterBlock />
            </main>
        </>
    )
}
