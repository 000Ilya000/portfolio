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
  sheen?: boolean;
}

export function GlassCard({
  children,
  className,
  intensity = "medium",
  tone = "neutral",
  sheen = false,
}: GlassCardProps) {
  const pointerGlow = usePointerGlow();

  return (
    <LiquidGlass
      intensity={intensity}
      tone={tone}
      radius="3xl"
      interactive={false}
      pressable={false}
      padded
      className={cn("icon-live-host h-full min-w-0", className)}
      {...(sheen ? pointerGlow : {})}
    >
      {children}
    </LiquidGlass>
  );
}
