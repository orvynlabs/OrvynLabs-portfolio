'use client'

import React from 'react'
import FallingText from './ui/falling-text'

export default function VisionSection() {
    return (
        <section className="vision-section bg-background py-24 border-t border-white/[0.05]">
            <div className="mx-auto max-w-[90rem] px-6 lg:px-16 xl:px-24">
                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-8 h-[1px] bg-primary/50" />
                        <p className="text-primary text-sm font-medium uppercase tracking-wider">Our Vision</p>
                        <span className="w-8 h-[1px] bg-primary/50" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                        The Core of Our Engineering
                    </h2>
                </div>

                <div className="relative h-[400px] w-full rounded-3xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden p-8 md:p-12">
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] blur-[100px]" />
                    </div>

                    <FallingText
                        text="At ORVYN LABS, we architect scalable digital infrastructure. By merging technical rigor with creative precision, we empower startups to transition from early-stage MVPs to market-leading systems."
                        highlightWords={[
                            "ORVYN",
                            "LABS",
                            "architect",
                            "scalable",
                            "technical",
                            "rigor",
                            "creative",
                            "precision",
                            "MVPs",
                            "systems"
                        ]}
                        highlightClass="highlighted"
                        trigger="scroll"
                        backgroundColor="transparent"
                        wireframes={false}
                        gravity={0.4}
                        fontSize="1.75rem"
                        mouseConstraintStiffness={0.9}
                    />
                </div>

                <div className="mt-12 flex justify-center">
                    <p className="text-muted-foreground text-sm flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                        Interactive Element: Hover or drag words to explore our philosophy.
                    </p>
                </div>
            </div>
        </section>
    )
}
