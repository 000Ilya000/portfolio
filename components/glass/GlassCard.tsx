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
  /** Pointer highlight only. Cards are never buttons. */
  glow?: boolean;
}

export function GlassCard({
  children,
  className,
  intensity = "medium",
  tone = "neutral",
  glow = false,
}: GlassCardProps) {
  const pointerGlow = usePointerGlow();

  return (
    <LiquidGlass
      intensity={intensity}
      tone={tone}
      radius="3xl"
      interactive={glow}
      pressable={false}
      padded
      className={cn("h-full", className)}
      {...(glow ? pointerGlow : {})}
    >
      {children}
    </LiquidGlass>
  );
}
