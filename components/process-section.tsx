'use client'
import React from 'react'
import FlowingMenu from './ui/flowing-menu'
import ScrollReveal from './ui/scroll-reveal'

const processItems = [
    { text: 'Discover', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&h=400&fit=crop' }, // People planning/meeting
    { text: 'Request', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&h=400&fit=crop' },  // Data/analytics dashboard
    { text: 'Create', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&h=400&fit=crop' },   // Code on screen
    { text: 'Activate', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=400&fit=crop' } // Deployment/launch metrics
] as any;

export default function ProcessSection() {
    return (
        <section id="services" className="process-section bg-background pt-24 pb-16">
            {/* Section header */}
            <div className="process-header flex flex-col items-center mb-12">
                <div className="process-subtitle-row flex items-center gap-4 mb-4">
                    <span className="process-subtitle-line w-8 h-[1px] bg-primary/50" />
                    <p className="process-subtitle text-primary text-sm font-medium uppercase tracking-wider">Our Process, Explained</p>
                    <span className="process-subtitle-line w-8 h-[1px] bg-primary/50" />
                </div>
                <ScrollReveal
                    baseOpacity={0.1}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                    textClassName="process-title text-4xl md:text-5xl font-bold tracking-tight text-center"
                >
                    Here&apos;s how it works
                </ScrollReveal>
            </div>

            <div style={{ height: '600px', position: 'relative' }} className="w-full">
                <FlowingMenu
                    items={processItems}
                    speed={15}
                    textColor="#ffffff"
                    bgColor="var(--background)"
                    marqueeBgColor="#ffffff"
                    marqueeTextColor="#000000"
                    borderColor="rgba(255,255,255,0.1)"
                />
            </div>
        </section>
    )
}

