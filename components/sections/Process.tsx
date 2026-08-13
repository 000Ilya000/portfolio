import { GlassCard } from "@/components/glass/GlassCard";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process } from "@/content/process";

export function Process() {
  return (
    <Section id="process">
      <Reveal>
        <SectionHeading eyebrow={process.eyebrow} title={process.title} lead={process.lead} />
      </Reveal>
      <ol className="relative mt-14 grid list-none gap-4 p-0 lg:grid-cols-2">
        {process.steps.map((step, index) => (
          <li key={step.id} className={index % 2 === 1 ? "lg:mt-10" : undefined}>
            <Reveal delay={index * 0.05}>
              <GlassCard intensity={index === 0 ? "strong" : "medium"} tone="neutral">
                <p className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
              </GlassCard>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
