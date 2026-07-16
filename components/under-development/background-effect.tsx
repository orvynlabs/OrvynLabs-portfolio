"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { Particles } from "@/components/ui/particles";

const ColorBends = dynamic(() => import("@/components/ColorBends"), {
  ssr: false,
});

export const BackgroundEffect = () => {
  // Removed prefersReducedMotion check to match hero-section.tsx exactly

  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block pointer-events-none -z-30"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 -z-20 size-full pointer-events-none"
      >
        <ColorBends
          className="w-full h-full"
          style={{}}
          rotation={255}
          speed={0.05}
          colors={["#9b3103", "#000000", "#011141"] as any}
          transparent={false}
          autoRotate={0}
          scale={1.2}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
        />
      </motion.div>

      <div className="absolute inset-0 z-0 bg-linear-to-t from-background via-transparent to-transparent pointer-events-none" />

      <div
        aria-hidden
        className="absolute inset-0 -z-10 size-full pointer-events-none [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
      />

      {/* Particles overlay */}
      <Particles
        className="absolute inset-0 z-[1] pointer-events-none"
        quantity={150}
        ease={80}
        color="#ffffff"
        size={0.4}
        staticity={40}
        vy={-0.3}
      />
    </>
  );
};
