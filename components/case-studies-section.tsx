'use client'
import React from 'react'
import { ProjectCard } from './project-card'

interface Project {
    name: string
    description: string
    tags: string[]
    image: string
    links: {
        demo?: string
        github?: string
    }
}

const projects: Project[] = [
    {
        name: 'F&I Tax',
        description: 'A modern landing page for a tax agency with sleek animations and professional design.',
        tags: ['Tax', 'Agency'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
        links: { demo: "#" }
    },
    {
        name: 'Pfeiffer',
        description: 'Real estate property listing and management platform showcasing premium homes.',
        tags: ['Real Estate', 'Properties'],
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop',
        links: { demo: "#" }
    },
    {
        name: 'Puls',
        description: 'Fitness and wellness tracking application with personalized workout routines.',
        tags: ['Wellness', 'Fitness'],
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop',
        links: { demo: "#" }
    },
    {
        name: 'EyeCatcher',
        description: 'E-commerce store for beauty and hair products featuring elegant UI.',
        tags: ['Beauty', 'Hairs'],
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=500&fit=crop',
        links: { demo: "#" }
    },
]

export default function CaseStudiesSection() {
    return (
        <section id="our-work" className="cs-section py-24">
            {/* Header */}
            <div className="cs-header mb-16 text-center">
                <div className="cs-subtitle-row inline-flex items-center justify-center gap-4 mb-4">
                    <span className="cs-subtitle-line w-12 h-px bg-primary/20" />
                    <p className="cs-subtitle text-sm uppercase tracking-wider text-muted-foreground">Our Projects</p>
                    <span className="cs-subtitle-line w-12 h-px bg-primary/20" />
                </div>
                <h2 className="cs-title text-4xl md:text-5xl font-bold tracking-tight">Recent Case Studies</h2>
            </div>

            {/* Grid */}
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-16 xl:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.name}
                            title={project.name}
                            description={project.description}
                            tags={project.tags}
                            image={project.image}
                            links={project.links}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
