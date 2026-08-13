"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { GlassButton } from "@/components/glass/GlassButton";
import { GlassNavigation } from "@/components/glass/GlassNavigation";
import { LiquidGlass } from "@/components/glass/LiquidGlass";
import { usePointerGlow } from "@/components/glass/usePointerGlow";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [active, setActive] = useState("");
  const menuId = useId();
  const glow = usePointerGlow();

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = site.nav
      .map((item) => document.querySelector(item.href))
      .filter((node): node is HTMLElement => node instanceof HTMLElement);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.id;
        if (id) {
          setActive(`#${id}`);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="pointer-events-auto mx-auto flex max-w-6xl justify-center">
        <GlassNavigation compact={compact}>
          <Link
            href="#top"
            className="font-display text-sm tracking-tight text-white sm:text-base"
          >
            {site.shortName}
            <span className="sr-only">{site.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm transition-colors",
                  active === item.href ? "text-white" : "text-muted hover:text-white",
                )}
                aria-current={active === item.href ? "location" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <GlassButton href="#contact" variant="primary" intensity="strong">
                Обсудить проект
              </GlassButton>
            </div>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-white lg:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
              <span className="sr-only">{open ? "Закрыть меню" : "Открыть меню"}</span>
            </button>
          </div>
        </GlassNavigation>
      </div>

      {open ? (
        <div className="pointer-events-auto mx-auto mt-3 max-w-6xl lg:hidden">
          <LiquidGlass
            intensity="strong"
            tone="accent"
            radius="3xl"
            interactive
            padded
            id={menuId}
            {...glow}
          >
            <nav aria-label="Мобильная навигация" className="flex flex-col gap-1">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-3 text-lg text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3">
              <StatusBadge />
              <GlassButton href="#contact" variant="primary" magnetic={false}>
                Обсудить проект
              </GlassButton>
            </div>
          </LiquidGlass>
        </div>
      ) : null}
    </header>
  );
}
