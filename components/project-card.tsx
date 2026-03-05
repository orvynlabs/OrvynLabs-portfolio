'use client';

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
    title?: string;
    description?: string;
    tags?: string[];
    image?: string;
    links?: {
        demo?: string;
        github?: string;
    };
    className?: string;
}

const defaultProject = {
    title: "E-Commerce Platform",
    description:
        "Full-stack online store with payment integration and inventory management",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
    links: { demo: "#", github: "#" },
};

export function ProjectCard({
    title = defaultProject.title,
    description = defaultProject.description,
    tags = defaultProject.tags,
    image = defaultProject.image,
    links = defaultProject.links,
    className,
}: ProjectCardProps) {
    return (
        <a
            href={links?.demo || links?.github || '#'}
            className={cn("block w-full group", className)}
        >
            <div className="flex flex-col h-full overflow-hidden rounded-[24px] border border-white/10 bg-[#060606] transition-opacity hover:opacity-80 p-3">
                <div className="relative aspect-video overflow-hidden rounded-[16px]">
                    <Image
                        src={image}
                        alt={`ORVYN LABS project: ${title} - ${description}`}
                        width={800}
                        height={500}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                <div className="p-4 pt-5 pb-2">
                    <h3 className="mb-1 text-[17px] font-medium tracking-tight text-white">
                        {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-400 font-sans">
                        <span className="opacity-70">Using</span>
                        {tags?.map((tag, index) => (
                            <span key={index}>
                                {index > 0 && <span className="mx-1">•</span>}
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </a>
    );
}
