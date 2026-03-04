'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import {
    Cpu,
    Database,
    Code2,
    Zap,
    ShieldCheck,
    Terminal
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import ScrollReveal from './ui/scroll-reveal'

interface ServiceItem {
    icon: LucideIcon
    label: string
    bgColor: string
    iconColor: string
    rotation: number
}

// --- UPDATED: Systems-First Service Badges for ORVYN LABS ---
const services: { left: ServiceItem[]; right: ServiceItem[] } = {
    left: [
        {
            icon: Terminal,
            label: 'MERN Stack',
            bgColor: '#ffffff',
            iconColor: '#0a0a0a',
            rotation: -3,
        },
        {
            icon: Database,
            label: 'Scalable DB',
            bgColor: '#ffffff',
            iconColor: '#0a0a0a',
            rotation: 2,
        },
        {
            icon: Cpu,
            label: 'Architecture',
            bgColor: '#ffffff',
            iconColor: '#0a0a0a',
            rotation: -1,
        },
    ],
    right: [
        {
            icon: Zap,
            label: 'MVP Builds',
            bgColor: '#ffffff',
            iconColor: '#0a0a0a',
            rotation: 2,
        },
        {
            icon: Code2,
            label: 'Clean Code',
            bgColor: '#ffffff',
            iconColor: '#0a0a0a',
            rotation: -2,
        },
        {
            icon: ShieldCheck,
            label: 'SaaS Logic',
            bgColor: '#ffffff',
            iconColor: '#0a0a0a',
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
            initial={{ opacity: 0, x: delay < 0.2 ? -20 : 20, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, rotate: rotation }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            className="service-badge flex items-center gap-3 bg-white/[0.03] border border-white/10 px-4 py-2 rounded-full backdrop-blur-md"
        >
            <div
                className="service-badge-icon flex items-center justify-center w-8 h-8 rounded-full"
                style={{ backgroundColor: bgColor }}
            >
                <Icon size={14} color={iconColor} strokeWidth={2.5} />
            </div>
            <span className="service-badge-label text-white/70 text-sm font-medium tracking-tight whitespace-nowrap">{label}</span>
        </motion.div>
    )
}

/* Mobile badge — static parent handles animation */
function MobileServiceBadge({
    icon: Icon,
    label,
    bgColor,
    iconColor,
}: ServiceItem) {
    return (
        <div className="service-badge flex items-center gap-2 bg-white/[0.05] border border-white/10 px-3 py-1.5 rounded-full">
            <div
                className="service-badge-icon flex items-center justify-center w-6 h-6 rounded-full"
                style={{ backgroundColor: bgColor }}
            >
                <Icon size={12} color={iconColor} strokeWidth={2.5} />
            </div>
            <span className="service-badge-label text-white/60 text-xs font-medium">{label}</span>
        </div>
    )
}

export default function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null)

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative pt-12 pb-32 md:py-48 overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] blur-[120px] pointer-events-none" />

            {/* Hello divider */}
            <div className="flex items-center justify-center gap-4 mb-16">
                <div className="h-px w-16 bg-white/10" />
                <span className="font-display text-sm italic text-white/40 tracking-wide uppercase font-bold">The Labs Blueprint</span>
                <div className="h-px w-16 bg-white/10" />
            </div>

            {/* Main content */}
            <div className="mx-auto w-full max-w-[90rem] px-6 lg:px-16 xl:px-24">
                <div className="relative flex items-center justify-center min-h-[300px]">

                    {/* Left badges — desktop only */}
                    <div className="hidden lg:flex flex-col gap-6 absolute left-0">
                        {services.left.map((service, i) => (
                            <ServiceBadge
                                key={service.label}
                                {...service}
                                delay={i * 0.1}
                            />
                        ))}
                    </div>

                    {/* Center text */}
                    <div className="flex items-center justify-center px-4 lg:px-48 z-10">
                        <ScrollReveal
                            baseOpacity={0.1}
                            enableBlur
                            baseRotation={2}
                            blurStrength={4}
                            containerClassName="max-w-4xl mx-auto"
                            textClassName="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.25] tracking-tight text-center text-white"
                        >
                            A premium product studio engineering scalable systems for the next generation of startups.
                        </ScrollReveal>
                    </div>

                    {/* Right badges — desktop only */}
                    <div className="hidden lg:flex flex-col gap-6 absolute right-0 items-end">
                        {services.right.map((service, i) => (
                            <ServiceBadge
                                key={service.label}
                                {...service}
                                delay={i * 0.1 + 0.3}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile badges */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-wrap justify-center gap-3 mt-16 lg:hidden"
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