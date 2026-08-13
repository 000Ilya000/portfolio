import { GlassCard } from "@/components/glass/GlassCard";
import { Section } from "@/components/layout/Section";
import { FloatOnScroll } from "@/components/motion/FloatOnScroll";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process } from "@/content/process";

export function Process() {
  return (
    <Section id="process">
      <Reveal>
        <SectionHeading eyebrow={process.eyebrow} title={process.title} lead={process.lead} />
      </Reveal>
      <ol className="bento process-bento mt-10 list-none p-0">
        {process.steps.map((step, index) => (
          <li key={step.id} className={`process-bento__item process-bento__item--${index + 1}`}>
            <FloatOnScroll amount={12 + (index % 2) * 6} className="h-full">
              <Reveal delay={index * 0.04} y={14} className="h-full">
                <GlassCard intensity={index === 0 ? "strong" : "medium"} tone="neutral">
                  <p className="font-mono text-xs text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg text-white sm:text-xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-mist">{step.text}</p>
                </GlassCard>
              </Reveal>
            </FloatOnScroll>
          </li>
        ))}
      </ol>
    </Section>
  );
}
