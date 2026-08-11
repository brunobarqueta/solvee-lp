"use client";

import { useRef } from "react";
import type { ReactNode, MouseEvent } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }

  return (
    <Card
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative border border-border ring-0 transition-colors duration-300 hover:border-primary/40",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(240px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in oklch, var(--primary), transparent 88%), transparent 70%)",
        }}
      />
      {children}
    </Card>
  );
}
