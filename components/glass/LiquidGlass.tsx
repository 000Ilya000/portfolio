import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type GlassIntensity = "subtle" | "medium" | "strong";
export type GlassTone = "neutral" | "accent" | "warm";
export type GlassRadius = "lg" | "xl" | "2xl" | "3xl" | "full";

const intensityClass: Record<GlassIntensity, string> = {
  subtle: "liquid-glass--subtle",
  medium: "liquid-glass--medium",
  strong: "liquid-glass--strong",
};

const toneClass: Record<GlassTone, string> = {
  neutral: "liquid-glass--neutral",
  accent: "liquid-glass--accent",
  warm: "liquid-glass--warm",
};

const radiusClass: Record<GlassRadius, string> = {
  lg: "rounded-[1.15rem]",
  xl: "rounded-[1.5rem]",
  "2xl": "rounded-[1.85rem]",
  "3xl": "rounded-[2.25rem]",
  full: "rounded-full",
};

export interface LiquidGlassProps extends HTMLAttributes<HTMLDivElement> {
  intensity?: GlassIntensity;
  tone?: GlassTone;
  radius?: GlassRadius;
  /** Follows the pointer with a specular highlight. Does not make the surface a button. */
  interactive?: boolean;
  /** Hover lift, active press and pointer cursor. Use only on real controls. */
  pressable?: boolean;
  padded?: boolean;
  solid?: boolean;
  children: ReactNode;
}

export function LiquidGlass({
  intensity = "medium",
  tone = "neutral",
  radius = "2xl",
  interactive = false,
  pressable = false,
  padded = false,
  solid = false,
  className,
  children,
  style,
  ...props
}: LiquidGlassProps) {
  return (
    <div
      className={cn(
        "liquid-glass",
        intensityClass[intensity],
        toneClass[tone],
        radiusClass[radius],
        interactive && "liquid-glass--interactive",
        pressable && "liquid-glass--pressable",
        padded && "liquid-glass--padded",
        solid && "liquid-glass--solid",
        className,
      )}
      style={
        {
          "--glow-x": "50%",
          "--glow-y": "8%",
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      <span className="liquid-glass__fill" aria-hidden="true" />
      <span className="liquid-glass__filter" aria-hidden="true" />
      <span className="liquid-glass__refract" aria-hidden="true" />
      <span className="liquid-glass__tint" aria-hidden="true" />
      <span className="liquid-glass__specular" aria-hidden="true" />
      <span className="liquid-glass__edge" aria-hidden="true" />
      <div className="liquid-glass__content">{children}</div>
    </div>
  );
}
