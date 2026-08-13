import { GlassCard } from "@/components/glass/GlassCard";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/content/about";

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionHeading eyebrow={about.eyebrow} title={about.title} lead={about.lead} />
      </Reveal>
      <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
        <Reveal delay={0.08}>
          <div className="space-y-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {about.principles.map((principle, index) => (
            <StaggerItem key={principle.title}>
              <GlassCard intensity={index % 2 === 0 ? "medium" : "subtle"} tone="neutral">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-lg text-white">{principle.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{principle.text}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
