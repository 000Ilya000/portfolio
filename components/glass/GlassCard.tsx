"use client";

import { type ReactNode } from "react";
import { LiquidGlass, type GlassIntensity, type GlassTone } from "@/components/glass/LiquidGlass";
import { usePointerGlow } from "@/components/glass/usePointerGlow";
import { cn } from "@/lib/cn";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  intensity?: GlassIntensity;
  tone?: GlassTone;
  interactive?: boolean;
}

export function GlassCard({
  children,
  className,
  intensity = "medium",
  tone = "neutral",
  interactive = true,
}: GlassCardProps) {
  const glow = usePointerGlow();

  return (
    <LiquidGlass
      intensity={intensity}
      tone={tone}
      radius="3xl"
      interactive={interactive}
      padded
      className={cn("h-full", className)}
      {...(interactive ? glow : {})}
    >
      {children}
    </LiquidGlass>
  );
}
