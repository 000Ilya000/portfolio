import { GlassCard } from "@/components/glass/GlassCard";
import { Section } from "@/components/layout/Section";
import { FloatOnScroll } from "@/components/motion/FloatOnScroll";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stack } from "@/content/stack";

export function Stack() {
  return (
    <Section id="stack">
      <Reveal>
        <SectionHeading eyebrow={stack.eyebrow} title={stack.title} lead={stack.lead} />
      </Reveal>
      <div className="bento stack-bento mt-10">
        {stack.groups.map((group, index) => (
          <FloatOnScroll key={group.id} amount={12 + (index % 2) * 6} className="h-full">
            <Reveal delay={index * 0.04} y={14} className="h-full">
              <GlassCard intensity="medium" tone={group.id === "core" ? "accent" : "neutral"}>
                <div className="flex h-full flex-col gap-4">
                  <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    {group.title}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-sm text-white"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </Reveal>
          </FloatOnScroll>
        ))}
      </div>
    </Section>
  );
}
