import { ArrowUpRight, FolderGit2, Mail, Phone, Send } from "lucide-react";
import { GlassButton } from "@/components/glass/GlassButton";
import { GlassCard } from "@/components/glass/GlassCard";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { CopyButton } from "@/components/ui/CopyButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { contact } from "@/content/contacts";
import { type SocialLink } from "@/content/types";

const icons = {
  telegram: Send,
  phone: Phone,
  email: Mail,
  github: FolderGit2,
} as const;

export function Contact() {
  const telegram = contact.links.find((link) => link.id === "telegram");

  return (
    <Section id="contact" className="pb-12">
      <Reveal>
        <SectionHeading eyebrow={contact.eyebrow} title={contact.title} lead={contact.lead} />
      </Reveal>
      <Reveal delay={0.1} className="mt-10">
        <GlassCard intensity="strong" tone="accent">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <StatusBadge />
              <p className="mt-5 text-lg leading-8 text-mist">{contact.nextStep}</p>
            </div>
            {telegram ? (
              <GlassButton href={telegram.href} variant="primary" intensity="strong">
                {contact.cta}
                <ArrowUpRight size={18} aria-hidden="true" />
              </GlassButton>
            ) : null}
          </div>
        </GlassCard>
      </Reveal>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {contact.links.map((link) => (
          <ContactCard key={link.id} link={link} />
        ))}
      </div>
    </Section>
  );
}

function ContactCard({ link }: { link: SocialLink }) {
  const Icon = icons[link.id];
  const isExternal = link.href.startsWith("http");

  return (
    <GlassCard intensity="medium" tone="neutral">
      <div className="flex items-center justify-between gap-3">
        <a
          href={link.href}
          className="flex min-w-0 cursor-pointer items-center gap-3 text-white hover:text-accent"
          {...(isExternal ? { target: "_blank", rel: "noreferrer noopener" } : {})}
        >
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10">
            <Icon size={18} aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm text-muted">{link.label}</span>
            <span className="block truncate">{link.value}</span>
          </span>
        </a>
        <CopyButton value={link.copyValue} />
      </div>
    </GlassCard>
  );
}
