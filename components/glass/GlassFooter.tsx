"use client";

import { type ReactNode } from "react";
import { LiquidGlass } from "@/components/glass/LiquidGlass";
import { usePointerGlow } from "@/components/glass/usePointerGlow";
import { cn } from "@/lib/cn";

interface GlassFooterProps {
  children: ReactNode;
  className?: string;
}

export function GlassFooter({ children, className }: GlassFooterProps) {
  const glow = usePointerGlow();

  return (
    <LiquidGlass
      intensity="strong"
      tone="accent"
      radius="3xl"
      interactive
      padded
      className={cn("glass-footer", className)}
      {...glow}
    >
      {children}
    </LiquidGlass>
  );
}
