'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import { Particles } from '@/components/ui/particles'
import VariableProximity from '@/components/ui/variable-proximity'
import Cursor from '@/components/ui/cursor'
import dynamic from 'next/dynamic'
import { motion } from 'motion/react'
import { FaWhatsapp } from 'react-icons/fa'

const ColorBends = dynamic(() => import('@/components/ColorBends'), { ssr: false })


const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            } as const,
        },
    },
}

export default function HeroSection() {
    const containerRef = useRef<HTMLElement>(null);
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section className="relative" ref={containerRef}>
                    <div className="relative flex min-h-[100dvh] flex-col items-center justify-center pt-24 pb-8 sm:min-h-[85vh] sm:pt-28 sm:pb-16 lg:h-screen lg:pt-0 lg:pb-0">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            className="absolute inset-0 -z-20 size-full"
                        >
                            <ColorBends
                                className=""
                                style={{}}
                                rotation={255}
                                speed={0.05}
                                colors={["#9b3103", "#000000", "#011141"] as any}
                                transparent={false}
                                autoRotate={0}
                                scale={1.2}
                                frequency={1}
                                warpStrength={1}
                                mouseInfluence={1}
                                parallax={0.5}
                                noise={0.1}
                            />
                        </motion.div>

                        <div className="absolute inset-0 z-0 bg-linear-to-t from-background via-transparent to-transparent" />

                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
                        />

                        {/* Particles overlay */}
                        <Particles
                            className="absolute inset-0 z-[1]"
                            quantity={150}
                            ease={80}
                            color="#ffffff"
                            size={0.4}
                            staticity={40}
                            vy={-0.3}
                        />

                        <div className="mx-auto w-full max-w-[90rem] px-6 lg:px-16 xl:px-24">
                            <div className="text-center mx-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#link"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-sm">
                                            Available to work</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedGroup>

                                <AnimatedGroup variants={transitionVariants}>
                                    <h1 className="font-display mx-auto mt-8 flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-balance text-4xl font-bold tracking-tight sm:gap-x-4 sm:text-5xl md:text-6xl lg:mt-16 xl:text-7xl 2xl:text-8xl">
                                        <span className="text-foreground">Brands</span>

                                        {/* Auto-scroll Card */}
                                        <div className="relative mx-1 sm:mx-2 flex h-[50px] w-[80px] sm:h-[70px] sm:w-[180px] md:h-[90px] md:w-[240px] lg:h-[110px] lg:w-[180px] xl:h-[130px] xl:w-[320px] overflow-hidden rounded-full border border-white/20 bg-black/40 shadow-2xl backdrop-blur-md shrink-0">
                                            {/* Glow effect inside card */}
                                            <div className="absolute top-0 left-1/2 h-[50%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl"></div>

                                            {/* Vertical Marquee */}
                                            <div className="absolute left-0 right-0 top-0 flex w-full flex-col items-center gap-3 py-3 animate-marquee-vertical hover:[animation-play-state:paused]">
                                                <Image src="/projects/project1.png" alt="ORVYN LABS scalable MERN system architecture" width={300} height={200} className="w-[85%] rounded-[0.85rem] border border-white/10 object-cover shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
                                                <Image src="/projects/project2.png" alt="NEXTZEN full stack e-commerce platform dashboard" width={300} height={200} className="w-[85%] rounded-[0.85rem] border border-white/10 object-cover shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
                                                <Image src="/projects/project3.png" alt="ORVYN LABS SaaS platform development" width={300} height={200} className="w-[85%] rounded-[0.85rem] border border-white/10 object-cover shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
                                                {/* Duplicate for seamless infinite loop */}
                                                <Image src="/projects/project1.png" alt="ORVYN LABS scalable MERN system architecture" width={300} height={200} className="w-[85%] rounded-[0.85rem] border border-white/10 object-cover shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
                                                <Image src="/projects/project2.png" alt="NEXTZEN full stack e-commerce platform dashboard" width={300} height={200} className="w-[85%] rounded-[0.85rem] border border-white/10 object-cover shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
                                                <Image src="/projects/project3.png" alt="ORVYN LABS SaaS platform development" width={300} height={200} className="w-[85%] rounded-[0.85rem] border border-white/10 object-cover shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
                                            </div>

                                            {/* Bottom Pill Control Overlay */}
                                            <div className="absolute bottom-2 md:bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-2 py-1 md:py-1.5 md:px-3 backdrop-blur-md">
                                                <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
                                                <div className="h-1.5 w-4 rounded-full bg-white" />
                                                <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
                                            </div>

                                            {/* Gradient fade at bottom and top to blend scrolling images */}
                                            <div className="pointer-events-none absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-black/50 to-transparent"></div>
                                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black/80 to-transparent"></div>
                                        </div>

                                        <span className="text-muted-foreground">Grow</span>
                                        <div className="w-full basis-full mt-0 md:mt-2" />
                                        <span className="text-foreground">Fast </span>
                                        <span className="text-muted-foreground">With us</span>
                                    </h1>
                                </AnimatedGroup>

                                <div className="mx-auto mt-6 max-w-4xl flex justify-center text-center">
                                    <VariableProximity
                                        label="Specialized in MERN Stack Web Development and Next.js Application Architecture. We build scalable SaaS platforms and Startup Systems designed to grow."
                                        className="text-balance text-base font-bold md:text-lg text-muted-foreground"
                                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                                        containerRef={containerRef}
                                        radius={150}
                                        falloff="exponential"
                                    />
                                </div>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-14 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base w-full sm:w-auto">
                                            <Link href="/contact">
                                                <span className="text-nowrap">Contact Now</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <div
                                        key={2}
                                        className="bg-[#ffffff]/10 rounded-[calc(var(--radius-xl)+0.125rem)] border border-[#ffffff]/20 p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            variant="ghost"
                                            className="h-10.5 rounded-xl px-5 w-full flex items-center gap-2 sm:w-auto hover:bg-transparent hover:text-[#25D366] text-[#ffffff] transition-colors">
                                            <Link href="https://wa.me/919496022026" target="_blank" rel="noopener noreferrer">
                                                <FaWhatsapp className="size-5" />
                                                <span className="text-nowrap">Chat to WhatsApp</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </AnimatedGroup>
                            </div>
                        </div>


                    </div>
                </section>

            </main>
        </>
    )
}
