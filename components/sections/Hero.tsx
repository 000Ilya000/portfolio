"use client";

import { ArrowDownRight, Sparkles } from "lucide-react";
import { GlassButton } from "@/components/glass/GlassButton";
import { HeroCollage } from "@/components/sections/HeroCollage";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="section-kicker">
            <Sparkles size={14} aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 className="display-title hero__title">
            <span className="hero__lastname">{hero.lastName}</span>
            <span className="hero__firstname">{hero.firstName}</span>
          </h1>
          <p className="hero__offer">{hero.offer}</p>
          <p className="hero__value">{hero.value}</p>
          <div className="hero__actions">
            <GlassButton href={hero.primaryCta.href} variant="primary" intensity="strong">
              {hero.primaryCta.label}
            </GlassButton>
            <GlassButton href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
              <ArrowDownRight size={18} aria-hidden="true" />
            </GlassButton>
          </div>
          <div className="hero__meta">
            <StatusBadge compact />
            <ul className="hero__chips">
              {hero.chips.slice(0, 3).map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
          </div>
        </div>
        <HeroCollage />
      </div>
    </section>
  );
}
