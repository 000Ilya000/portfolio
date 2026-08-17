"use client";

import Image from "next/image";
import { useState } from "react";
import { GlassCard } from "@/components/glass/GlassCard";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";
import { type Project } from "@/content/types";
import { cn } from "@/lib/cn";

const caseLabels = {
  expand: "Развернуть кейс",
  collapse: "Свернуть кейс",
  context: "Контекст",
  problem: "Проблема",
  role: "Роль",
  solution: "Техническое решение",
  ux: "UI/UX",
  engineering: "Инженерная сложность",
  value: "Ценность",
} as const;

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
              <div className="grid gap-5">
                {items.map((item) => (
                  <ProjectCard key={item.id} project={item} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const image = project.image;

  return (
    <GlassCard
      intensity="medium"
      tone={project.kind === "b2b" ? "accent" : "warm"}
      className="project-card"
    >
      <article>
        {image?.fit === "wide" ? (
          <div className="project-card__banner">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              style={{ objectPosition: image.objectPosition ?? "center 18%" }}
            />
          </div>
        ) : null}
        <div className={cn("project-card__body", image?.fit === "phone" && "project-card__body--phone")}>
          {image?.fit === "phone" ? (
            <div className="project-card__phone">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            </div>
          ) : null}
          <div className="project-card__copy">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              {project.kind.toUpperCase()}
            </p>
            <h4 className="mt-3 font-display text-2xl tracking-tight text-white sm:text-3xl">
              {project.title}
            </h4>
            <p className="mt-3 text-base leading-7 text-mist">{project.subtitle}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white"
                >
                  {tag}
                </li>
              ))}
            </ul>
            {open ? (
              <dl className="mt-8 grid gap-5 border-t border-white/10 pt-6 md:grid-cols-2">
                <CaseField label={caseLabels.context} value={project.context} />
                <CaseField label={caseLabels.problem} value={project.problem} />
                <CaseField label={caseLabels.role} value={project.role} />
                <CaseField label={caseLabels.solution} value={project.solution} />
                <CaseField label={caseLabels.ux} value={project.ux} />
                <CaseField label={caseLabels.engineering} value={project.engineering} />
                <CaseField label={caseLabels.value} value={project.value} className="md:col-span-2" />
              </dl>
            ) : (
              <p className="mt-6 text-sm leading-6 text-mist">{project.context}</p>
            )}
            <button
              type="button"
              className={cn(
                "project-card__toggle min-h-11 shrink-0 cursor-pointer rounded-full px-4 text-sm text-white",
                "border border-white/10 hover:border-accent/40",
              )}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? caseLabels.collapse : caseLabels.expand}
            </button>
          </div>
        </div>
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
