'use client'
import React from 'react'
import FlowingMenu from './ui/flowing-menu'
import ScrollReveal from './ui/scroll-reveal'

const processItems = [
    { link: '#', text: 'Discover', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Request', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Create', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Activate', image: 'https://picsum.photos/600/400?random=4' }
];

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

