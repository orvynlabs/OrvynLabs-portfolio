"use client";

import React from "react";
import { BackgroundEffect } from "./background-effect";
import { GlassCard } from "./glass-card";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { motion } from "framer-motion";

export const ClientContent = () => {
  return (
    <div className="relative z-0 flex w-full flex-col min-h-[100dvh] overflow-hidden">
      <BackgroundEffect />
      
      {/* Top Bar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-20 mx-auto flex w-full max-w-[90rem] shrink-0 items-center justify-between p-6 lg:px-16 xl:px-24"
      >
        <Link href="https://www.orvynlabs.in" className="flex items-center">
          <Logo className="h-5 sm:h-7 opacity-90" />
        </Link>
        <Link 
          href="https://www.orvynlabs.in"
          className="font-sans text-sm font-medium text-white/50 transition-colors hover:text-white"
        >
          Studio ↗
        </Link>
      </motion.header>

      {/* Center Content */}
      <div className="relative z-20 mx-auto flex w-full max-w-[90rem] flex-1 items-center justify-center px-6 py-8 lg:px-16 xl:px-24">
        <GlassCard />
      </div>

      {/* Footer Strip */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="relative z-20 mx-auto flex w-full max-w-[90rem] shrink-0 justify-center p-6 text-center lg:px-16 xl:px-24"
      >
        <p className="font-sans text-xs font-medium text-white/40 tracking-wide">
          Crafted with precision by ORVYN LABS · Calicut, India · {new Date().getFullYear()}
        </p>
      </motion.footer>
    </div>
  );
};
