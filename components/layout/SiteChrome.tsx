"use client";

import { useEffect } from "react";

export function SiteChrome() {
  useEffect(() => {
    let frame = 0;
    const root = document.documentElement;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const paint = () => {
      const max = Math.max(root.scrollHeight - window.innerHeight, 1);
      root.style.setProperty("--scroll-progress", (window.scrollY / max).toFixed(4));
      root.style.setProperty("--pointer-x", `${x}px`);
      root.style.setProperty("--pointer-y", `${y}px`);
      root.style.setProperty("--pointer-nx", (x / window.innerWidth).toFixed(4));
      root.style.setProperty("--pointer-ny", (y / window.innerHeight).toFixed(4));
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        return;
      }
      x = event.clientX;
      y = event.clientY;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(paint);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div className="site-atmosphere" aria-hidden="true">
        <div className="site-atmosphere__wash" />
        <div className="site-atmosphere__cursor" />
        <div className="ambient__orb ambient__orb--one" />
        <div className="ambient__orb ambient__orb--two" />
        <div className="ambient__orb ambient__orb--three" />
        <div className="ambient__orb ambient__orb--four" />
      </div>
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] bg-white/5"
        aria-hidden="true"
      >
        <div className="progress-bar h-full bg-linear-to-r from-accent via-warm to-accent" />
      </div>
    </>
  );
}
