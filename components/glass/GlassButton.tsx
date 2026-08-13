"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { LiquidGlass, type GlassIntensity, type GlassTone } from "@/components/glass/LiquidGlass";
import { Magnetic } from "@/components/motion/Magnetic";
import { usePointerGlow } from "@/components/glass/usePointerGlow";
import { cn } from "@/lib/cn";

type GlassButtonVariant = "primary" | "secondary" | "ghost";

interface SharedProps {
  children: ReactNode;
  className?: string;
  variant?: GlassButtonVariant;
  intensity?: GlassIntensity;
  tone?: GlassTone;
  magnetic?: boolean;
}

type GlassButtonProps = SharedProps &
  (
    | { href: string; onClick?: () => void; type?: never }
    | { href?: never; onClick?: () => void; type?: "button" | "submit" }
  );

const variantClass: Record<GlassButtonVariant, string> = {
  primary: "glass-button glass-button--primary",
  secondary: "glass-button glass-button--secondary",
  ghost: "glass-button glass-button--ghost",
};

export function GlassButton({
  children,
  className,
  variant = "secondary",
  intensity = "medium",
  tone = variant === "primary" ? "accent" : "neutral",
  magnetic = true,
  href,
  onClick,
  type = "button",
}: GlassButtonProps) {
  const glow = usePointerGlow();
  const classes = cn(variantClass[variant], className);

  const inner =
    variant === "ghost" ? (
      <span className={classes}>{children}</span>
    ) : (
      <LiquidGlass
        intensity={intensity}
        tone={tone}
        radius="full"
        interactive
        pressable
        solid={variant === "primary"}
        className={classes}
        {...glow}
      >
        {children}
      </LiquidGlass>
    );

  const node = magnetic ? <Magnetic strength={10}>{inner}</Magnetic> : inner;

  if (href) {
    const isHash = href.startsWith("#");
    const isLocal = isHash || href.startsWith("mailto:") || href.startsWith("tel:");
    return (
      <Link
        href={href}
        onClick={onClick}
        className="inline-flex cursor-pointer"
        {...(isLocal ? {} : { target: "_blank", rel: "noreferrer noopener" })}
      >
        {node}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-flex cursor-pointer">
      {node}
    </button>
  );
}
