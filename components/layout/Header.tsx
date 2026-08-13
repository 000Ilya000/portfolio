"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { GlassButton } from "@/components/glass/GlassButton";
import { GlassNavigation } from "@/components/glass/GlassNavigation";
import { LiquidGlass } from "@/components/glass/LiquidGlass";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [active, setActive] = useState("");
  const menuId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

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
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        close();
      }
    };

    if (!open) {
      document.documentElement.classList.remove("menu-open");
      document.body.style.paddingRight = "";
      return;
    }

    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.classList.add("menu-open");
    document.body.style.paddingRight = scrollbar > 0 ? `${scrollbar}px` : "";
    closeRef.current?.focus();
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    return () => {
      document.documentElement.classList.remove("menu-open");
      document.body.style.paddingRight = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="pointer-events-auto mx-auto flex max-w-6xl justify-center">
        <GlassNavigation compact={compact}>
          <Link
            href="#top"
            className="cursor-pointer font-display text-sm tracking-tight text-white sm:text-base"
            onClick={() => setOpen(false)}
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
                  "cursor-pointer rounded-full px-3 py-2 text-[0.8125rem] tracking-[0.02em] transition-colors duration-500",
                  active === item.href ? "text-white" : "text-white/72 hover:text-white",
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
              ref={closeRef}
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
        <div className="pointer-events-auto lg:hidden">
          <button
            type="button"
            className="mobile-nav-backdrop"
            aria-label="Закрыть меню"
            onClick={() => setOpen(false)}
          />
          <div className="relative mx-auto mt-3 max-w-6xl px-0">
            <LiquidGlass intensity="strong" tone="accent" radius="3xl" padded id={menuId}>
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
                <GlassButton
                  href="#contact"
                  variant="primary"
                  magnetic={false}
                  onClick={() => setOpen(false)}
                >
                  Обсудить проект
                </GlassButton>
              </div>
            </LiquidGlass>
          </div>
        </div>
      ) : null}
    </header>
  );
}
