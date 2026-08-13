"use client";

import { m, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { useMediaQuery } from "@/lib/media";
import { revealEase } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  const reduce = useReducedMotion();
  const allowOffset = useMediaQuery("(min-width: 1024px) and (hover: hover)");
  const offset = allowOffset ? y : 0;

  return (
    <m.div
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ ...revealEase, delay }}
    >
      {children}
    </m.div>
  );
}
