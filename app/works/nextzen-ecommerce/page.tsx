'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    Cpu,
    ShieldCheck,
    Globe,
    Terminal,
    ArrowLeft,
    ArrowRight,
    ChevronRight,
    ShoppingBag,
    Database,
    Lock,
    Wallet,
    Users,
    LayoutDashboard,
    Cloud,
    Container,
    Zap,
    Sparkles
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { HeroHeader } from '@/components/header'
import { FooterBlock } from '@/components/uitripled/footer-block-shadcnui'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

export default function NextzenCaseStudy() {
    const mainRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!mainRef.current) return
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.gsap-case-fade',
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
                <div className="absolute top-28 left-6 lg:left-16 z-10 gsap-case-fade">
                    <Link href="/works" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Works
                    </Link>
                </div>

                {/* Hero section */}
                <section className="relative pt-40 pb-20 md:pt-56 md:pb-28 border-b border-white/[0.06]">
                    <div className="mx-auto max-w-7xl px-6 lg:px-16 xl:px-24">
                        <div className="grid lg:grid-cols-12 gap-12 items-end">
                            <div className="lg:col-span-8 space-y-6">
                                <span className="gsap-case-fade text-xs uppercase tracking-[0.3em] text-white/60 font-bold block">
                                    Full Stack Engineering Case Study
                                </span>
                                <h1 className="gsap-case-fade font-display text-5xl md:text-8xl font-extrabold tracking-tight">
                                    NEXTZEN <br />
                                    <span className="text-white/40 font-normal italic">Automated Commerce.</span>
                                </h1>
                            </div>
                            <div className="lg:col-span-4 gsap-case-fade pb-4">
                                <div className="flex flex-wrap gap-3">
                                    <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/70">
                                        Dockerized Backend
                                    </div>
                                    <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/70">
                                        AWS Architecture
                                    </div>
                                    <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/70">
                                        CI/CD Pipeline
                                    </div>
                                    <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/70">
                                        AI Style Assistant
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cover Image */}
                <section className="py-12">
                    <div className="mx-auto max-w-7xl px-6 lg:px-16 xl:px-24">
                        <div className="gsap-case-fade relative aspect-video w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/projects/nextzen-project2.png"
                                alt="NEXTZEN Project Dashboard Overview"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                    </div>
                </section>

                {/* Deep Dive */}
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-16 xl:px-24">
                        <div className="grid lg:grid-cols-[1fr_350px] gap-24">
                            <div className="space-y-24 gsap-case-fade">
                                {/* Problem */}
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold border-b border-white/10 pb-4">The Challenge</h2>
                                    <p className="text-xl text-white/60 leading-relaxed text-left">
                                        NextZen required more than just an online store; it needed a high-performance infrastructure
                                        capable of handling viral growth. The challenge was to move away from standard shared hosting
                                        and build a <strong>custom DevOps pipeline</strong> that handles media-rich content via S3
                                        and automates deployments to AWS EC2 using Docker containers. Additionally, the platform
                                        needed a way to guide users through a premium apparel collection without human intervention.
                                    </p>
                                </div>

                                {/* Architecture */}
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold border-b border-white/10 pb-4">The Infrastructure & AI</h2>
                                    <p className="text-lg text-white/50 leading-relaxed text-left">
                                        We engineered a hybrid deployment strategy. The frontend is hosted on Vercel Edge for
                                        global speed, while the backend is fully containerized with <strong>Docker</strong> and
                                        orchestrated on <strong>AWS EC2</strong>. We integrated a <strong>Product-Specific AI Style Assistant</strong>
                                        using the Gemini API, which provides contextual styling advice, size recommendations, and
                                        automated product discovery based on user behavior and product metadata.
                                    </p>
                                </div>

                                {/* Features Grid */}
                                <div className="space-y-12">
                                    <h2 className="text-3xl font-bold border-b border-white/10 pb-4">Core Engineering Features</h2>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {[
                                            { title: "AI Style Assistant", icon: Sparkles, desc: "Context-aware LLM chatbot that acts as a 24/7 personal stylist, recommending apparel based on trends and user fit." },
                                            { title: "Automated CI/CD", icon: Zap, desc: "GitHub Actions pipeline that builds, pushes to DockerHub, and deploys to EC2 on every production push." },
                                            { title: "Refined Wallet API", icon: Wallet, desc: "Bespoke transaction logic for user credits, automated referral rewards, and secure joiner bonuses." },
                                            { title: "AWS S3 Media Delivery", icon: Cloud, desc: "Optimized delivery of heavy premium apparel video assets through the AWS Global Network." },
                                            { title: "Hybrid Auth", icon: ShieldCheck, desc: "JWT-based manual authentication with a fail-safe Google OAuth integration to prevent login crashes." },
                                            { title: "Containerization", icon: Container, desc: "Dockerized Node.js environment ensuring environmental consistency between local and production." }
                                        ].map((f, i) => (
                                            <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                                                <f.icon className="text-white/40 mb-4" size={24} />
                                                <h3 className="font-bold mb-2">{f.title}</h3>
                                                <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="gsap-case-fade space-y-12">
                                <div className="p-8 rounded-2xl border border-white/10 bg-white/5 space-y-8 sticky top-32">
                                    <div>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">Tech Infrastructure</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["AWS EC2", "AWS S3", "Docker", "Gemini AI", "GitHub Actions", "MongoDB", "Express", "Next.js"].map(item => (
                                                <span key={item} className="px-3 py-1.5 rounded-lg border border-white/10 bg-black/40 text-[10px] font-bold text-white/80">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">Deployment Flow</h4>
                                        <p className="text-sm font-bold text-white">Full CI/CD Automation</p>
                                    </div>

                                    <div>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">Launch Date</h4>
                                        <p className="text-sm font-bold text-white">August 2024</p>
                                    </div>

                                    <div className="pt-4">
                                        <Button asChild className="w-full rounded-xl bg-white text-black hover:bg-white/90 font-bold">
                                            <Link href="https://nextzen.mubashiir.in" target="_blank">View Live Case</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="py-24 border-t border-white/10 text-center">
                    <div className="mx-auto max-w-4xl px-6 space-y-10">
                        <h2 className="text-4xl font-bold">Need a scalable commerce engine?</h2>
                        <Button asChild size="lg" className="rounded-full px-12 bg-white text-black hover:bg-white/90">
                            <Link href="/contact">Build Yours Now <ArrowRight fill="black" className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                </section>

                <FooterBlock />
            </main>
        </>
    )
}

