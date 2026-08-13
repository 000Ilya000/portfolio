import { GlassCard } from "@/components/glass/GlassCard";
import { Section } from "@/components/layout/Section";
import { FloatOnScroll } from "@/components/motion/FloatOnScroll";
import { Reveal } from "@/components/motion/Reveal";
import { ExpertiseIconView } from "@/components/ui/ExpertiseIconView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertise } from "@/content/expertise";

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
      <div className="bento expertise-bento">
        {expertise.items.map((item, index) => (
          <FloatOnScroll
            key={item.id}
            amount={12 + (index % 3) * 5}
            className={`h-full expertise-bento__item expertise-bento__item--${index + 1}`}
          >
            <Reveal delay={Math.min(index, 5) * 0.04} y={14} className="h-full">
              <GlassCard
                intensity={item.featured ? "strong" : "medium"}
                tone={item.featured ? "accent" : "neutral"}
              >
                <div className="flex h-full flex-col">
                  <span className="icon-live inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-black/20 text-accent">
                    <ExpertiseIconView name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg text-white sm:text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-mist">{item.text}</p>
                </div>
              </GlassCard>
            </Reveal>
          </FloatOnScroll>
        ))}
      </div>
    </Section>
  );
}
