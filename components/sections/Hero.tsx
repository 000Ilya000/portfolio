"use client";

import { ArrowDownRight, Sparkles } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { GlassButton } from "@/components/glass/GlassButton";
import { LiquidGlass } from "@/components/glass/LiquidGlass";
import { usePointerGlow } from "@/components/glass/usePointerGlow";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { Portrait } from "@/components/ui/Portrait";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { hero } from "@/content/site";

export function Hero() {
  const reduce = useReducedMotion();
  const glow = usePointerGlow();

  return (
    <section
      id="top"
      className="relative px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <AmbientBackground />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-8">
        <div>
          <p className="section-kicker">
            <Sparkles size={14} aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 className="display-title mt-5 text-[clamp(3.4rem,12vw,8.6rem)] text-white">
            <span className="block text-white/92">{hero.lastName}</span>
            <span className="mt-2 block bg-linear-to-r from-accent via-white to-warm bg-clip-text text-transparent">
              {hero.firstName}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-mist sm:text-2xl sm:leading-10">
            {hero.offer}
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">
            {hero.value}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <GlassButton href={hero.primaryCta.href} variant="primary" intensity="strong">
              {hero.primaryCta.label}
            </GlassButton>
            <GlassButton href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
              <ArrowDownRight size={18} aria-hidden="true" />
            </GlassButton>
          </div>
          <div className="mt-6">
            <LiquidGlass intensity="subtle" radius="full" className="inline-flex">
              <div className="px-4 py-2">
                <StatusBadge compact />
              </div>
            </LiquidGlass>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md pb-8 lg:mx-0 lg:justify-self-end">
          <m.div
            className="relative"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <LiquidGlass
              intensity="strong"
              tone="warm"
              radius="3xl"
              interactive
              className="p-2"
              {...glow}
            >
              <Portrait className="rounded-[1.7rem]" />
            </LiquidGlass>
            <HeroSculpture />
          </m.div>
        </div>
      </div>
    </section>
  );
}

function HeroSculpture() {
  const glowA = usePointerGlow();
  const glowB = usePointerGlow();

  return (
    <>
      <LiquidGlass
        intensity="medium"
        tone="accent"
        radius="2xl"
        interactive
        className="absolute -left-4 top-8 hidden w-40 sm:block lg:-left-16"
        {...glowA}
      >
        <div className="px-4 py-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">Focus</p>
          <p className="mt-1 text-sm text-white">Сложные B2C и B2B продукты</p>
        </div>
      </LiquidGlass>
      <LiquidGlass
        intensity="medium"
        tone="neutral"
        radius="2xl"
        interactive
        className="absolute -bottom-6 right-2 w-[min(100%,14rem)] sm:-right-4"
        {...glowB}
      >
        <div className="flex flex-wrap gap-2 px-3 py-3">
          {hero.chips.slice(0, 3).map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-mist"
            >
              {chip}
            </span>
          ))}
        </div>
      </LiquidGlass>
    </>
  );
}
