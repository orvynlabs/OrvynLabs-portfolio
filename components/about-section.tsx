'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { LayoutGrid, Box, Search, RefreshCw, Palette, Puzzle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, SplitText)

interface ServiceItem {
    icon: LucideIcon
    label: string
    bgColor: string
    iconColor: string
    rotation: number
}

const services: { left: ServiceItem[]; right: ServiceItem[] } = {
    left: [
        {
            icon: LayoutGrid,
            label: 'Design systems',
            bgColor: '#F97316',
            iconColor: '#FFFFFF',
            rotation: -3,
        },
        {
            icon: Box,
            label: 'UX Design',
            bgColor: '#1C1C1E',
            iconColor: '#4ADE80',
            rotation: 2,
        },
        {
            icon: Search,
            label: 'Research',
            bgColor: '#38BDF8',
            iconColor: '#FFFFFF',
            rotation: -1,
        },
    ],
    right: [
        {
            icon: RefreshCw,
            label: 'Animation',
            bgColor: '#4ADE80',
            iconColor: '#FFFFFF',
            rotation: 2,
        },
        {
            icon: Palette,
            label: 'Branding',
            bgColor: '#F472B6',
            iconColor: '#FFFFFF',
            rotation: -2,
        },
        {
            icon: Puzzle,
            label: 'Strategy',
            bgColor: '#FACC15',
            iconColor: '#FFFFFF',
            rotation: 3,
        },
    ],
}

/* Desktop badge — individual staggered animations with rotation */
function ServiceBadge({
    icon: Icon,
    label,
    bgColor,
    iconColor,
    rotation,
    delay,
}: ServiceItem & { delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: rotation }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            className="service-badge"
        >
            <div
                className="service-badge-icon"
                style={{ backgroundColor: bgColor }}
            >
                <Icon size={16} color={iconColor} strokeWidth={2.5} />
            </div>
            <span className="service-badge-label">{label}</span>
        </motion.div>
    )
}

/* Mobile badge — static (no individual animation, parent handles it) */
function MobileServiceBadge({
    icon: Icon,
    label,
    bgColor,
    iconColor,
}: ServiceItem) {
    return (
        <div className="service-badge">
            <div
                className="service-badge-icon"
                style={{ backgroundColor: bgColor }}
            >
                <Icon size={16} color={iconColor} strokeWidth={2.5} />
            </div>
            <span className="service-badge-label">{label}</span>
        </div>
    )
}

export default function AboutSection() {
    const textRef = useRef<HTMLParagraphElement>(null)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!textRef.current || !sectionRef.current) return

        // Split the paragraph into lines
        const split = new SplitText(textRef.current, { type: 'lines' })

        // Animate each line's backgroundPositionX on scroll
        split.lines.forEach((line) => {
            gsap.to(line, {
                backgroundPositionX: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: line,
                    scrub: 1,
                    start: 'top center',
                    end: 'bottom center',
                },
            })
        })

        return () => {
            split.revert()
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative py-32 md:py-48"
        >
            {/* Hello divider */}
            <div className="flex items-center justify-center gap-4 mb-16">
                <div className="h-px w-16 bg-border" />
                <span className="font-display text-sm italic text-muted-foreground tracking-wide">Hello!</span>
                <div className="h-px w-16 bg-border" />
            </div>

            {/* Main content */}
            <div className="mx-auto max-w-7xl px-6">
                <div className="relative flex items-center justify-center">
                    {/* Left badges — desktop only */}
                    <div className="hidden lg:flex flex-col gap-5 absolute left-0">
                        {services.left.map((service, i) => (
                            <ServiceBadge
                                key={service.label}
                                {...service}
                                delay={i * 0.15}
                            />
                        ))}
                    </div>

                    {/* Center text — same scroll reveal on all screens */}
                    <div className="flex items-center justify-center px-4 lg:px-32">
                        <p
                            ref={textRef}
                            className="gsap-text-reveal font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-center max-w-3xl"
                        >
                            We help brands grow with standout design, clear branding, and content that drives results.
                        </p>
                    </div>

                    {/* Right badges — desktop only */}
                    <div className="hidden lg:flex flex-col gap-5 absolute right-0 items-end">
                        {services.right.map((service, i) => (
                            <ServiceBadge
                                key={service.label}
                                {...service}
                                delay={i * 0.15 + 0.2}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile badges — single group fade-in (one effect) */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-wrap justify-center gap-3 mt-12 lg:hidden"
                >
                    {[...services.left, ...services.right].map((service) => (
                        <MobileServiceBadge
                            key={service.label}
                            {...service}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
