"use client";

import { type ReactNode } from "react";
import { LiquidGlass } from "@/components/glass/LiquidGlass";
import { usePointerGlow } from "@/components/glass/usePointerGlow";
import { cn } from "@/lib/cn";

interface GlassNavigationProps {
  children: ReactNode;
  className?: string;
  compact?: boolean;
}

export function GlassNavigation({ children, className, compact = false }: GlassNavigationProps) {
  const glow = usePointerGlow();

  return (
    <LiquidGlass
      intensity="strong"
      tone="neutral"
      radius="full"
      interactive
      pressable={false}
      className={cn(
        "glass-nav w-full max-w-5xl",
        compact ? "glass-nav--compact" : "glass-nav--regular",
        className,
      )}
      {...glow}
    >
      {children}
    </LiquidGlass>
  );
}
