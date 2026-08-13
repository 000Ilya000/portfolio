"use client";

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface FloatOnScrollProps {
  children: ReactNode;
  className?: string;
  amount?: number;
}

export function FloatOnScroll({
  children,
  className,
  amount = 16,
}: FloatOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div ref={ref} className={cn("will-change-transform", className)} style={{ y }}>
      {children}
    </m.div>
  );
}
