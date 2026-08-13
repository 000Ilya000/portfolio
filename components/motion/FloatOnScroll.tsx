"use client";

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
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
  const [enabled, setEnabled] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px) and (hover: hover)");
    const sync = () => setEnabled(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (reduce || !enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div ref={ref} className={cn("will-change-transform", className)} style={{ y }}>
      {children}
    </m.div>
  );
}
