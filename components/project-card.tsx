'use client';

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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
    onClick?: () => void;
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
    onClick,
}: ProjectCardProps) {
    return (
        <motion.div
            onClick={onClick}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className={cn("block w-full group cursor-pointer", className)}
        >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl">
                {/* Background Image */}
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay - Stronger for legibility */}
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-end justify-between gap-4">
                    <div className="space-y-1 overflow-hidden">
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-0.5 leading-tight truncate drop-shadow-sm">
                            {title}
                        </h3>
                        <p className="text-[10px] sm:text-sm font-medium text-white/50 tracking-wider uppercase truncate drop-shadow-sm">
                            {tags?.[0] || 'Web System'}
                        </p>
                    </div>

                    <div className="shrink-0">
                        <div className="rounded-full bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 border border-white/20 transition-all hover:bg-white/20">
                            <span className="text-[10px] sm:text-sm font-bold text-white uppercase tracking-wider">
                                View
                            </span>
                        </div>
                    </div>
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-1 rounded-full bg-white/40" />
                </div>


            </div>
        </motion.div>
    );
}

