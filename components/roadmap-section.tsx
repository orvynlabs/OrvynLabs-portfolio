'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const roadmapPoints = [
    {
        id: '01',
        label: 'FORMATION',
        year: '2022',
        title: 'THE SYNERGY',
        items: [
            'Establishment of the 4-member core specialist team',
            'Academic residency focusing on systems thinking (BCA)',
            'Early collaboration on complex engineering modules',
            'Implementation of standardized code quality protocols'
        ],
        position: { x: 5, y: 35 }
    },
    {
        id: '02',
        label: 'ENGINEERING',
        year: '2024',
        title: 'ARCHITECTURAL SHIFT',
        items: [
            'Advanced development of high-performance MERN patterns',
            'Architecture design for multi-tenant SaaS platforms',
            'Full-stack orchestration and custom API development',
            'Performance optimization and database normalization'
        ],
        position: { x: 33, y: 55 }
    },
    {
        id: '03',
        label: 'STRATEGY',
        year: '2025',
        title: 'TECHNICAL RESIDENCY',
        items: [
            'Integration of industry-grade security and testing',
            'Deployment of Meta Ads and Growth-led logic',
            'Strategic marketing architecture for digital products',
            'Finalization of the "Structure-First" methodology'
        ],
        position: { x: 66, y: 40 }
    },
    {
        id: '04',
        label: 'ESTABLISHMENT',
        year: '2026',
        title: 'ORVYN LABS FOUNDED',
        items: [
            'Official Launch and Studio Registration (Feb 2026)',
            'First Commercial Deployment: Luxury Resort System',
            'Deployment of the Digital Product Studio model',
            'Engineering scalable solutions for global startups'
        ],
        position: { x: 95, y: 55 }
    }
]

export default function RoadmapSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    })

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 40,
        damping: 20
    })

    // Adjusted professional winding path for contained width
    const desktopPath = "M -50 300 Q 100 200 200 350 T 400 500 T 600 350 T 800 500 T 1100 400"

    return (
        <section ref={containerRef} className="relative bg-[#0a0a0a] py-32 overflow-hidden min-h-screen">
            {/* Topographic Background Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="topo" width="600" height="400" patternUnits="userSpaceOnUse">
                        <path d="M0,100 C50,50 150,150 200,100 S350,50 400,100 T600,100" fill="none" stroke="white" strokeWidth="0.5" />
                        <path d="M0,200 C50,250 150,150 250,200 S450,250 600,200" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#topo)" />
                </svg>
            </div>

            <div className="mx-auto max-w-[90rem] px-6 lg:px-16 xl:px-24 relative z-10">
                {/* Aligned Header */}
                <div className="mb-24 flex flex-col items-start gap-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span className="text-[10px] font-black tracking-widest text-white/40 uppercase">Evolution</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">
                        Our <span className="text-white/20 italic font-light">Root</span>map
                    </h2>
                </div>

                {/* Desktop Interface */}
                <div className="hidden lg:block relative h-[900px]">
                    <svg viewBox="0 0 1000 1000" className="absolute inset-0 w-full h-full pointer-events-none">
                        {/* Thinner, cleaner winding path */}
                        <path d={desktopPath} stroke="#111" strokeWidth="60" strokeLinecap="round" fill="none" />
                        <path d={desktopPath} stroke="#1a1a1a" strokeWidth="40" strokeLinecap="round" fill="none" />

                        {/* Animated Active Trace */}
                        <motion.path
                            d={desktopPath}
                            stroke="white"
                            strokeWidth="38"
                            strokeLinecap="round"
                            fill="none"
                            style={{ pathLength }}
                            className="opacity-[0.1]"
                        />

                        {/* Thin Dotted Core Line */}
                        <motion.path
                            d={desktopPath}
                            stroke="white"
                            strokeWidth="1"
                            strokeDasharray="8 8"
                            fill="none"
                            style={{ pathLength }}
                            className="opacity-20"
                        />
                    </svg>

                    <div className="absolute inset-0">
                        {roadmapPoints.map((point, index) => (
                            <div key={index} className="absolute" style={{ top: `${point.position.y}%`, left: `${point.position.x}%` }}>
                                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="relative -translate-x-1/2 -translate-y-1/2 group">
                                    {/* Hex Marker */}
                                    <div className="w-12 h-14 bg-black border border-white/20 flex items-center justify-center relative shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:border-white transition-all duration-500" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                                        <div className="text-white text-[10px] font-black">{point.id}</div>
                                    </div>
                                    <div className="mt-4 text-[10px] font-mono text-white/30 text-center uppercase tracking-widest font-bold">{point.year}</div>

                                    {/* Content Card with Aligned Font Sizes */}
                                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} className="absolute top-28 left-1/2 -translate-x-1/2 min-w-[320px]">
                                        <div className="bg-black/95 backdrop-blur-3xl border border-white/5 p-7 rounded-2xl hover:border-white/10 transition-all group-hover:bg-[#0c0c0c] shadow-2xl">
                                            <div className="text-[10px] font-black text-white/25 mb-2 tracking-[0.2em]">{point.label}</div>
                                            <h3 className="text-xl font-bold text-white mb-5 tracking-tight">{point.title}</h3>
                                            <div className="space-y-3">
                                                {roadmapPoints[index].items.map((item, i) => (
                                                    <div key={i} className="text-sm text-white/40 flex items-start gap-3 leading-relaxed">
                                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/10 shrink-0" />
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Interface */}
                <div className="lg:hidden space-y-12 pt-10 px-4">
                    {roadmapPoints.map((point, index) => (
                        <motion.div key={index} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} className="relative pl-10 border-l border-white/5">
                            <div className="absolute left-[-17px] top-0 w-8 h-10 bg-black border border-white/20 flex items-center justify-center font-bold text-white text-[10px]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                                {point.id}
                            </div>
                            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-[10px] tracking-widest text-white/30 font-black uppercase">{point.label}</span>
                                    <span className="text-[10px] font-mono text-white/20">{point.year}</span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-4 tracking-tight">{point.title}</h3>
                                <div className="space-y-2">
                                    {point.items.map((item, i) => (
                                        <div key={i} className="text-sm text-white/40 leading-relaxed flex items-start gap-3">
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-white/10 shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}