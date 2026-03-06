'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, Zap, ShieldCheck, Cpu, Globe } from 'lucide-react'
import Image from 'next/image'

interface ProjectModalProps {
    isOpen: boolean
    onClose: () => void
    project: {
        title: string
        category?: string
        description: string
        fullDescription?: string
        tags: string[]
        image: string
        links: {
            demo?: string
            github?: string
        }
        features?: string[]
        stats?: Record<string, string>
    } | null
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
    if (!project) return null

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* Immersive Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#080808] shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                    >
                        {/* Interactive Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute right-8 top-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/50 backdrop-blur-xl transition-all hover:bg-white/10 hover:text-white"
                        >
                            <X size={18} />
                        </button>

                        <div className="flex flex-col lg:flex-row h-full">
                            {/* Visual Feature Section */}
                            <div className="relative h-72 lg:h-auto lg:w-[45%] overflow-hidden bg-[#111]">
                                <motion.div
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="h-full w-full"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-80"
                                        priority
                                    />
                                </motion.div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent lg:bg-gradient-to-r" />

                                {/* Overlay Branding */}
                                <div className="absolute bottom-10 left-10 hidden lg:block">
                                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-md">
                                        <div className="h-2 w-2 animate-pulse rounded-full bg-white/60" />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">Active Artifact</span>
                                    </div>
                                </div>
                            </div>

                            {/* Detailed Information Section */}
                            <div className="flex flex-col lg:w-[55%] overflow-y-auto bg-gradient-to-b from-white/[0.02] to-transparent">
                                <div className="p-8 lg:p-14 space-y-12">
                                    {/* Header Meta */}
                                    <header className="space-y-4">
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="flex items-center gap-3"
                                        >
                                            <span className="h-px w-8 bg-white/20" />
                                            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[white]/50">
                                                {project.category || 'Case Study'}
                                            </span>
                                        </motion.div>
                                        <motion.h2
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="font-display text-4xl font-black tracking-tighter text-white md:text-5xl lg:text-6xl"
                                        >
                                            {project.title}.
                                        </motion.h2>
                                    </header>

                                    {/* Deep Dive Description */}
                                    <section className="space-y-4">
                                        <div className="flex items-center gap-2 opacity-30">
                                            <Cpu size={14} className="text-white" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-white">System Architecture</span>
                                        </div>
                                        <p className="text-lg leading-relaxed text-white/50 font-medium">
                                            {project.fullDescription || project.description}
                                        </p>
                                    </section>

                                    {/* Feature Ecosystem Grid */}
                                    {project.features && (
                                        <section className="space-y-6">
                                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 border-b border-white/5 pb-4">Key Capabilities</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {project.features.map((feature, i) => (
                                                    <div key={i} className="group flex items-start gap-4 rounded-2xl border border-white/[0.03] bg-white/[0.01] p-4 transition-colors hover:bg-white/[0.03]">
                                                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/40 group-hover:text-white transition-colors">
                                                            <Zap size={12} />
                                                        </div>
                                                        <span className="text-[13px] font-medium leading-tight text-white/60 group-hover:text-white/80 transition-colors">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    )}

                                    {/* Technical Stack Badges */}
                                    <section className="space-y-6">
                                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 border-b border-white/5 pb-4">Built With</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-2 text-[11px] font-bold text-white/50 transition-all hover:border-white/20 hover:text-white hover:bg-white/10"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Dynamic Data Stats */}
                                    {project.stats && (
                                        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {Object.entries(project.stats).map(([key, val], i) => (
                                                <div key={key} className="space-y-2">
                                                    <p className="text-[9px] font-black uppercase tracking-widest text-white/20 leading-none">{key}</p>
                                                    <p className="text-[13px] font-bold text-white/70 leading-none">{val}</p>
                                                </div>
                                            ))}
                                        </section>
                                    )}

                                    {/* Action Footbar */}
                                    <footer className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/5">
                                        {project.links.demo && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-black uppercase tracking-widest text-black transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-white/10"
                                            >
                                                Launch System <Globe size={14} />
                                            </a>
                                        )}
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-xs font-black uppercase tracking-widest text-white/50 transition-all hover:bg-white/10 hover:text-white"
                                            >
                                                Source <Github size={14} />
                                            </a>
                                        )}
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
