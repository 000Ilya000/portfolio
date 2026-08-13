import { GlassCard } from "@/components/glass/GlassCard";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stack } from "@/content/stack";

export function Stack() {
  return (
    <Section id="stack">
      <Reveal>
        <SectionHeading eyebrow={stack.eyebrow} title={stack.title} lead={stack.lead} />
      </Reveal>
      <Stagger className="mt-12 grid gap-4 md:grid-cols-2" delay={0.07}>
        {stack.groups.map((group) => (
          <StaggerItem key={group.id}>
            <GlassCard intensity="medium" tone={group.id === "core" ? "accent" : "neutral"}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2 sm:max-w-[28rem] sm:justify-end">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-mist"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
