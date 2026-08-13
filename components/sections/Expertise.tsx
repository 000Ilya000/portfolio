import { GlassCard } from "@/components/glass/GlassCard";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ExpertiseIconView } from "@/components/ui/ExpertiseIconView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertise } from "@/content/expertise";
import { cn } from "@/lib/cn";

export function Expertise() {
  return (
    <Section id="expertise">
      <Reveal>
        <SectionHeading
          eyebrow={expertise.eyebrow}
          title={expertise.title}
          lead={expertise.lead}
        />
      </Reveal>
      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3" delay={0.06}>
        {expertise.items.map((item) => (
          <StaggerItem
            key={item.id}
            className={cn(item.featured && "sm:col-span-2 xl:col-span-1")}
          >
            <GlassCard
              intensity={item.featured ? "strong" : "medium"}
              tone={item.featured ? "accent" : "neutral"}
            >
              <div className="flex h-full flex-col">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-accent">
                  <ExpertiseIconView name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
