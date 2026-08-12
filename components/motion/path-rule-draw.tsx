"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { PATH_RULE_D } from "@/components/brand/path-rule";

interface PathRuleDrawProps {
  variant?: 1 | 2;
  delay?: number;
  className?: string;
}

/**
 * The brand's circuit-trace rule, but the stroke draws itself in as it
 * scrolls into view instead of just fading — reused across sections so
 * it reads as one trace resurfacing down the page.
 *
 * Exiting the viewport snaps the stroke back to 0 instantly (duration: 0)
 * rather than reverse-animating it out, so a quick scroll can never strand
 * it mid-draw — the next entry always starts from a clean slate.
 */
export function PathRuleDraw({
  variant = 1,
  delay = 0,
  className,
}: PathRuleDrawProps) {
  const prefersReducedMotion = useReducedMotion();
  const pathRef = useRef<SVGPathElement>(null);
  const isInView = useInView(pathRef, { amount: 0.4, once: false });

  const hiddenState = {
    pathLength: 0,
    opacity: prefersReducedMotion ? 1 : 0.3,
  };
  const visibleState = { pathLength: 1, opacity: 1 };

  return (
    <svg
      viewBox="0 0 120 34"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <motion.path
        ref={pathRef}
        d={PATH_RULE_D[variant]}
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
        initial={hiddenState}
        animate={isInView || prefersReducedMotion ? visibleState : hiddenState}
        transition={
          isInView && !prefersReducedMotion
            ? { duration: 1.1, delay, ease: [0.65, 0, 0.35, 1] }
            : { duration: 0 }
        }
      />
    </svg>
  );
}
