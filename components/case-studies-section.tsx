'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

interface Project {
    name: string
    tags: string[]
    image: string
}

const projects: Project[] = [
    {
        name: 'F&I Tax',
        tags: ['Tax', 'Agency'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    },
    {
        name: 'Pfeiffer',
        tags: ['Real Estate', 'Properties'],
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop',
    },
    {
        name: 'Puls',
        tags: ['Wellness', 'Fitness'],
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop',
    },
    {
        name: 'EyeCatcher',
        tags: ['Beauty', 'Hairs'],
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=500&fit=crop',
    },
]

function MonitorCard({ project }: { project: Project }) {
    return (
        <div className="cs-card">
            {/* Rounded card background */}
            <div className="cs-card-bg">
                {/* Monitor */}
                <div className="cs-monitor">
                    {/* Screen */}
                    <div className="cs-screen">
                        <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                            unoptimized
                        />
                    </div>
                    {/* Stand chin */}
                    <div className="cs-chin">
                        <div className="cs-chin-dot" />
                    </div>
                </div>
            </div>

            {/* Info row */}
            <div className="cs-info">
                <span className="cs-name">{project.name}</span>
                <div className="cs-tags">
                    {project.tags.map((tag) => (
                        <span key={tag} className="cs-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function CaseStudiesSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const gridRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!sectionRef.current || !gridRef.current) return

        const cards = gridRef.current.querySelectorAll('.cs-card')

        gsap.set(cards, { opacity: 0, y: 50 })

        gsap.to(cards, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: gridRef.current,
                start: 'top 82%',
                toggleActions: 'play none none none',
            },
        })

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])

    return (
        <section id="our-work" ref={sectionRef} className="cs-section">
            {/* Header */}
            <div className="cs-header">
                <div className="cs-subtitle-row">
                    <span className="cs-subtitle-line" />
                    <p className="cs-subtitle">Our Projects</p>
                    <span className="cs-subtitle-line" />
                </div>
                <h2 className="cs-title">Recent Case Studies</h2>
            </div>

            {/* Grid */}
            <div ref={gridRef} className="cs-grid">
                {projects.map((project) => (
                    <MonitorCard key={project.name} project={project} />
                ))}
            </div>
        </section>
    )
}
