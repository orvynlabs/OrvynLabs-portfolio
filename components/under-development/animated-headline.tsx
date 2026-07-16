"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
  highlightWord?: string;
}

export const AnimatedHeadline = ({ text, className, highlightWord }: AnimatedHeadlineProps) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.4 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.h1
      className={cn("flex flex-wrap gap-[0.25em] font-display font-bold leading-tight", className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => {
        const isHighlighted = highlightWord && word.toLowerCase().includes(highlightWord.toLowerCase());
        return (
          <motion.span
            variants={child}
            style={{ display: "inline-block" }}
            key={index}
            className={cn(
              isHighlighted &&
                "bg-gradient-to-r from-[oklch(0.646_0.222_41.116)] via-[oklch(0.6_0.118_184.704)] to-[oklch(0.769_0.188_70.08)] bg-clip-text text-transparent"
            )}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.h1>
  );
};
