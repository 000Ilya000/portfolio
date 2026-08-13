import Image from "next/image";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Portrait({ className }: { className?: string }) {
  return (
    <div className={cn("portrait-frame relative overflow-hidden rounded-[2rem]", className)}>
      <Image
        src={site.portrait.src}
        alt={site.portrait.alt}
        width={site.portrait.width}
        height={site.portrait.height}
        priority
        sizes="(max-width: 768px) 86vw, 420px"
        className="h-full w-full object-cover object-[50%_18%]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-void/70 via-transparent to-white/10"
        aria-hidden="true"
      />
    </div>
  );
}
