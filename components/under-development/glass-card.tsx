"use client";

import React, { useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { AnimatedHeadline } from "./animated-headline";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const GlassCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Tilt effect
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(y, [-1, 1], [4, -4]);
  const rotateY = useTransform(x, [-1, 1], [-4, 4]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized coordinates from -1 to 1
    const mouseX = (event.clientX - rect.left) / width * 2 - 1;
    const mouseY = (event.clientY - rect.top) / height * 2 - 1;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative z-10 mx-4 max-w-2xl overflow-hidden rounded-[24px]",
        "bg-white/5 backdrop-blur-[16px]",
        "border border-white/10",
        "shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_60px_rgba(255,255,255,0.03)]",
        "p-6 sm:p-12"
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
        </span>
        <span className="font-sans text-[10px] font-bold tracking-widest text-white/70">
          IN DEVELOPMENT
        </span>
      </motion.div>

      <AnimatedHeadline
        text="Something great is being engineered here."
        highlightWord="engineered"
        className="mb-6 text-3xl sm:text-5xl lg:text-6xl text-white"
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-10 font-sans text-base leading-relaxed text-white/60 sm:text-lg"
      >
        This digital experience is currently being designed and developed by ORVYN LABS — a web
        development studio engineering scalable Next.js & MERN products.
      </motion.p>

      {/* Progress Element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mb-10 h-[2px] w-full overflow-hidden rounded-full bg-white/10 relative"
      >
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="flex flex-col gap-4 sm:flex-row flex-wrap"
      >
        <Button
          asChild
          variant="default"
          className="group h-12 rounded-full bg-white px-8 font-sans text-sm font-semibold text-black hover:bg-white/90 hover:shadow-[0_4px_12px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 transition-all"
        >
          <Link href="https://www.orvynlabs.in" target="_blank" rel="noopener noreferrer">
            Visit ORVYN LABS <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className="h-12 rounded-full border border-white/10 px-8 font-sans text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all"
        >
          <Link href="tel:+919072190088">
            <Phone className="mr-2 h-4 w-4" /> +91 9072190088
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};
