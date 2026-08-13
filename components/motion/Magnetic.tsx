"use client";

import { m, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { type ReactNode } from "react";
import { useMediaQuery } from "@/lib/media";
import { spring } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export function Magnetic({ children, strength = 12, className }: MagneticProps) {
  const reduce = useReducedMotion();
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);
  const classNames = cn("inline-flex max-w-full", className);

  if (reduce || !finePointer) {
    return <div className={classNames}>{children}</div>;
  }

  return (
    <m.div
      className={classNames}
      style={{ x: springX, y: springY }}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") {
          return;
        }
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(((event.clientX - rect.left) / rect.width - 0.5) * strength);
        y.set(((event.clientY - rect.top) / rect.height - 0.5) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </m.div>
  );
}
