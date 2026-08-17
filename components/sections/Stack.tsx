"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { StackMap } from "@/components/sections/StackMap";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stack } from "@/content/stack";

export function Stack() {
  return (
    <Section id="stack">
      <Reveal>
        <SectionHeading eyebrow={stack.eyebrow} title={stack.title} lead={stack.lead} />
      </Reveal>
      <Reveal delay={0.08} y={18}>
        <StackMap />
      </Reveal>
    </Section>
  );
}
