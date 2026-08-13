"use client";

import { useState } from "react";
import { GlassCard } from "@/components/glass/GlassCard";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";
import { type Project } from "@/content/types";
import { cn } from "@/lib/cn";

export function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading
          eyebrow={projects.eyebrow}
          title={projects.title}
          lead={projects.lead}
        />
      </Reveal>
      <div className="mt-14 space-y-16">
        {projects.groups.map((group) => {
          const items = group.projectIds
            .map((id) => projects.items.find((item) => item.id === id))
            .filter((item): item is Project => Boolean(item));

          return (
            <div key={group.id} id={group.id} className="scroll-mt-28">
              <Reveal>
                <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <h3 className="font-display text-3xl tracking-tight text-white">
                    {group.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-6 text-muted">{group.description}</p>
                </div>
              </Reveal>
              <div className="grid gap-4">
                {items.map((item, index) => (
                  <ProjectCard key={item.id} project={item} featured={index === 0} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function ProjectCard({ project, featured }: { project: Project; featured: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <GlassCard
      intensity={featured ? "strong" : "medium"}
      tone={project.kind === "b2b" ? "accent" : "warm"}
    >
      <article>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              {project.kind.toUpperCase()}
            </p>
            <h4 className="mt-3 font-display text-2xl tracking-tight text-white sm:text-3xl">
              {project.title}
            </h4>
            <p className="mt-3 text-base leading-7 text-muted">{project.subtitle}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            className={cn(
              "min-h-11 cursor-pointer rounded-full px-4 text-sm text-white",
              "border border-white/10 hover:border-accent/40",
            )}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Свернуть кейс" : "Развернуть кейс"}
          </button>
        </div>
        {open ? (
          <dl className="mt-8 grid gap-5 border-t border-white/10 pt-6 md:grid-cols-2">
            <CaseField label="Контекст" value={project.context} />
            <CaseField label="Проблема" value={project.problem} />
            <CaseField label="Роль" value={project.role} />
            <CaseField label="Техническое решение" value={project.solution} />
            <CaseField label="UI/UX" value={project.ux} />
            <CaseField label="Инженерная сложность" value={project.engineering} />
            <CaseField label="Ценность" value={project.value} className="md:col-span-2" />
          </dl>
        ) : (
          <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">{project.context}</p>
        )}
      </article>
    </GlassCard>
  );
}

function CaseField({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{label}</dt>
      <dd className="mt-2 text-sm leading-6 text-mist">{value}</dd>
    </div>
  );
}
