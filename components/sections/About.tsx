"use client";

import { GlassCard } from "@/components/glass/GlassCard";
import { Section } from "@/components/layout/Section";
import { FloatOnScroll } from "@/components/motion/FloatOnScroll";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/content/about";

export function About() {
  const mosaic = [...about.principles, ...about.highlights];
  return (
    <Section id="about">
      <Reveal>
        <SectionHeading eyebrow={about.eyebrow} title={about.title} lead={about.lead} />
        {about.paragraphs.length > 0 ? (
          <div className="about-layout__copy">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}
      </Reveal>
      <div className="bento about-bento">
        {mosaic.map((item, index) => (
          <FloatOnScroll
            key={item.title}
            amount={14 + (index % 3) * 4}
            className="h-full"
          >
            <Reveal delay={index * 0.04} y={14} className="h-full">
              <GlassCard
                intensity={index === 0 ? "strong" : "medium"}
                tone={index === 0 || index === 4 ? "accent" : "neutral"}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg text-white sm:text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mist">{item.text}</p>
              </GlassCard>
            </Reveal>
          </FloatOnScroll>
        ))}
      </div>
    </Section>
  );
}
