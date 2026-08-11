"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface HighlightUnderlineProps {
  children: ReactNode;
  delay?: number;
}

export function HighlightUnderline({
  children,
  delay = 0.6,
}: HighlightUnderlineProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <span className="relative inline-block whitespace-nowrap text-primary">
      {children}
      <motion.span
        aria-hidden
        className="absolute inset-x-0 -bottom-1 h-[0.2em] origin-left rounded-full bg-primary/40"
        initial={{ scaleX: prefersReducedMotion ? 1 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.5,
          delay: prefersReducedMotion ? 0 : delay,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      />
    </span>
  );
}
