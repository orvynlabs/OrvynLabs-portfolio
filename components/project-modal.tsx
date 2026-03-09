'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShieldCheck, Cpu, Globe } from 'lucide-react'
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
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!project) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-8">
                    {/* Immersive Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ type: "spring", damping: 30, stiffness: 200 }}
                        className="relative w-full max-w-5xl h-full sm:h-[90vh] overflow-hidden sm:rounded-2xl bg-[#0a0a0a] text-white shadow-2xl flex flex-col border border-white/5"
                    >
                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth">
                            <div className="relative aspect-[4/5] sm:aspect-video w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />

                                <div className="absolute inset-x-0 bottom-0 p-8 sm:p-14 flex items-end justify-between">
                                    <div className="text-white space-y-1">
                                        <h3 className="text-3xl sm:text-5xl font-black tracking-tight">{project.title}</h3>
                                        <p className="text-xs sm:text-base font-medium text-white/50 uppercase tracking-[0.3em]">
                                            {project.category || 'Premium Web System'}
                                        </p>
                                    </div>
                                    <div className="hidden sm:block rounded-full bg-white/10 backdrop-blur-md px-8 py-4 border border-white/20">
                                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Active Project</span>
                                    </div>
                                </div>


                                {/* Close Button - High Contrast */}
                                <button
                                    onClick={onClose}
                                    className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-xl border border-white/10 transition-all hover:bg-black/80 active:scale-95 shadow-xl"
                                >
                                    <X size={24} />
                                </button>

                            </div>

                            {/* Middle Section: Meta & Stats */}
                            <div className="px-6 sm:px-14 py-12 space-y-12 mb-12">
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-10">
                                    <div className="space-y-4 max-w-2xl">
                                        <div className="inline-flex items-center gap-2 border-b border-white/10 pb-2">
                                            <Cpu size={14} className="text-white/40" />
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Technical Overview</span>
                                        </div>
                                        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                                            Designing <span className="text-white/40">Next-Gen</span> {project.title}.
                                        </h2>
                                    </div>


                                    {/* Map-like Decorative Graphic (Circuit/Flow) */}
                                    <div className="hidden sm:flex h-20 w-32 items-center justify-center rounded-2xl bg-white/5 p-2 opacity-60">
                                        <svg viewBox="0 0 100 60" className="w-full h-full stroke-white/20 stroke-[2] fill-none">
                                            <path d="M10,30 Q30,10 50,30 T90,30" className="animate-pulse" />
                                            <circle cx="10" cy="30" r="3" className="fill-white/20" />
                                            <circle cx="90" cy="30" r="3" className="fill-white/20" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Stats Bar */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-y border-white/5 py-10">
                                    {project.stats ? (
                                        Object.entries(project.stats).slice(0, 4).map(([key, val]) => (
                                            <div key={key} className="space-y-1">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">{key}</p>
                                                <p className="text-xl font-black text-white leading-none">{val}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <>
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Type</p>
                                                <p className="text-xl font-black text-white">Enterprise</p>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Scale</p>
                                                <p className="text-xl font-black text-white">Global</p>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Status</p>
                                                <p className="text-xl font-black text-white">Active</p>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Build</p>
                                                <p className="text-xl font-black text-white">Vercel</p>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Deep Dive Content */}
                                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
                                    <div className="space-y-8">
                                        <p className="text-xl leading-relaxed text-white/70 font-medium">
                                            {project.fullDescription || project.description}
                                        </p>

                                        {/* Action Links */}
                                        <div className="flex flex-wrap gap-4 pt-4">
                                            {project.links.demo && (
                                                <a
                                                    href={project.links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 min-w-[200px] flex items-center justify-center gap-3 rounded-[24px] bg-white px-10 py-5 text-sm font-black uppercase tracking-widest text-black transition-all hover:bg-white/90 active:scale-95 shadow-xl shadow-black/10"
                                                >
                                                    View Live Case <Globe size={18} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Tech Stack Sidebar */}
                                    <div className="hidden lg:block space-y-6">
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 flex items-center gap-2">
                                            <ShieldCheck size={14} /> Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[11px] font-bold px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-24" /> {/* Spacer for bottom decoration accessibility */}
                        </div>

                        {/* Bottom Decoration */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 opacity-10 pointer-events-none">
                            <span className="text-[10px] font-black uppercase tracking-[0.5em]">Orvyn Labs Archive</span>
                        </div>
                    </motion.div>

                </div>
            )}
        </AnimatePresence>
    )
}
