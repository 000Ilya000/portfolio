import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: SectionHeadingProps) {
  return (
    <header className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="section-kicker">
        <span className="h-px w-6 bg-accent" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="display-title mt-4 text-4xl text-white sm:text-5xl lg:text-6xl">{title}</h2>
      {lead ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          {lead}
        </p>
      ) : null}
    </header>
  );
}
