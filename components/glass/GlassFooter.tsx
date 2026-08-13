"use client";

import { type ReactNode } from "react";
import { LiquidGlass } from "@/components/glass/LiquidGlass";
import { cn } from "@/lib/cn";

interface GlassFooterProps {
  children: ReactNode;
  className?: string;
}

export function GlassFooter({ children, className }: GlassFooterProps) {
  return (
    <LiquidGlass
      intensity="strong"
      tone="accent"
      radius="3xl"
      interactive={false}
      pressable={false}
      padded
      className={cn("glass-footer", className)}
    >
      {children}
    </LiquidGlass>
  );
}
