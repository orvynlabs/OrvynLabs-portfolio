'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'

gsap.registerPlugin(ScrollTrigger)

interface ProcessStep {
    number: number
    title: string
    description: string
}

const steps: ProcessStep[] = [
    {
        number: 1,
        title: 'Discover',
        description:
            'We uncover what drives your brand through purpose clarity audience insight and business focus.',
    },
    {
        number: 2,
        title: 'Request',
        description:
            'We analyze your market understand your competitors and identify where you can stand out.',
    },
    {
        number: 3,
        title: 'Create',
        description:
            'We design a distinct identity using voice visuals and story to build emotional connection.',
    },
    {
        number: 4,
        title: 'Activate',
        description:
            'We launch your brand across all channels creating a consistent experience that grows with you.',
    },
]

function ProcessCard({
    step,
    index,
}: {
    step: ProcessStep
    index: number
}) {
    const isElevated = index % 2 === 1

    return (
        <div
            className="process-card"
            data-index={index}
            style={{
                marginTop: isElevated ? '-32px' : '0',
            }}
        >
            <Card className="relative overflow-hidden rounded-2xl !border !border-white/10 bg-gradient-to-br from-card/80 via-card/40 to-card/20 backdrop-blur-md process-card-inner !shadow-none !outline-none !ring-0">
                {/* Abstract Background Glow — same as glass wallet card */}
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />

                <div className="relative">
                    <span className="process-card-number">{step.number}</span>
                    <div className="process-card-spacer" />
                    <h3 className="process-card-title">{step.title}</h3>
                    <p className="process-card-description">{step.description}</p>
                </div>
            </Card>
        </div>
    )
}

export default function ProcessSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!sectionRef.current || !cardsRef.current) return

        const ctx = gsap.context(() => {
            const cards = cardsRef.current!.querySelectorAll('.process-card')

            gsap.set(cards, { opacity: 0, y: 60 })

            gsap.to(cards, {
                opacity: 1,
                y: 0,
                stagger: 0.12,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: 'top 80%',
                    end: 'top 40%',
                    toggleActions: 'play none none none',
                },
            })
        }, sectionRef.current)

        return () => ctx.revert()
    }, [])

    return (
        <section id="services" ref={sectionRef} className="process-section">
            {/* Section header */}
            <div className="process-header">
                <div className="process-subtitle-row">
                    <span className="process-subtitle-line" />
                    <p className="process-subtitle">Our Process, Explained</p>
                    <span className="process-subtitle-line" />
                </div>
                <h2 className="process-title">Here&apos;s how it works</h2>
            </div>

            {/* Cards grid */}
            <div ref={cardsRef} className="process-cards-grid">
                {steps.map((step, i) => (
                    <ProcessCard key={step.number} step={step} index={i} />
                ))}
            </div>
        </section>
    )
}
