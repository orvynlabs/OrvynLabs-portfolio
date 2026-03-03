'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb'
import { MdOutlineRocketLaunch, MdOutlineTrendingUp } from 'react-icons/md'

export default function ServicesBannerSection() {
    return (
        <section className="relative py-32 overflow-hidden flex items-center justify-center min-h-[500px]">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 w-full max-w-5xl px-6 text-center">

                {/* Top Left Badge */}
                <motion.div
                    initial={{ opacity: 0, x: 20, y: 20, rotate: 0 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute -top-12 md:-top-16 left-[5%] md:left-[10%] xl:left-0 flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-xl border border-white/10 bg-[#111] shadow-2xl z-20"
                >
                    <TbBrandNextjs className="text-white text-lg md:text-xl" />
                    <span className="text-white text-sm md:text-base font-medium">Next.js Expert</span>
                </motion.div>

                {/* Top Right Badge */}
                <motion.div
                    initial={{ opacity: 0, x: -20, y: 20, rotate: 0 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, rotate: 4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute -top-8 md:-top-10 right-[5%] md:right-[15%] xl:right-10 flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-xl border border-white/10 bg-[#111] shadow-2xl z-20"
                >
                    <MdOutlineTrendingUp className="text-white text-lg md:text-xl" />
                    <span className="text-white text-sm md:text-base font-medium">Conversion Focused</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-8"
                >
                    Elite Software Engineers Who <br className="hidden md:block" /> Ship Results
                </motion.h2>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-gray-400 font-sans text-base md:text-xl max-w-2xl mx-auto mb-12"
                >
                    Specializing in high-performance digital products that marry cutting-edge technology with measurable business impact.
                </motion.p>

                {/* Bottom Left Badge */}
                <motion.div
                    initial={{ opacity: 0, x: 20, y: -20, rotate: 0 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, rotate: 3 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute -bottom-16 md:-bottom-20 left-[10%] md:left-[20%] xl:left-10 flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-xl border border-white/10 bg-[#111] shadow-2xl z-20"
                >
                    <MdOutlineRocketLaunch className="text-white text-lg md:text-xl" />
                    <span className="text-white text-sm md:text-base font-medium">Fast Execution</span>
                </motion.div>

                {/* Bottom Right Badge */}
                <motion.div
                    initial={{ opacity: 0, x: -20, y: -20, rotate: 0 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, rotate: -4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute -bottom-12 md:-bottom-16 right-[10%] md:right-[25%] xl:right-16 flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-xl border border-white/10 bg-[#111] shadow-2xl z-20"
                >
                    <TbBrandTailwind className="text-white text-lg md:text-xl" />
                    <span className="text-white text-sm md:text-base font-medium">Tool Agnostic</span>
                </motion.div>

            </div>
        </section>
    )
}
