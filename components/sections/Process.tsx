"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { m, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { GlassCard } from "@/components/glass/GlassCard";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process } from "@/content/process";
import { cn } from "@/lib/cn";

function curveThrough(points: { x: number; y: number }[]) {
  if (points.length < 2) {
    return "";
  }

  let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  for (let index = 0; index < points.length - 1; index += 1) {
    const from = points[index];
    const to = points[index + 1];
    const dx = to.x - from.x;
    const c1x = from.x + dx * 0.22;
    const c1y = from.y + (to.y - from.y) * 0.08;
    const c2x = from.x + dx * 0.78;
    const c2y = to.y - (to.y - from.y) * 0.08;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${to.x.toFixed(1)} ${to.y.toFixed(1)}`;
  }
  return d;
}

export function Process() {
  const reduce = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [path, setPath] = useState("");
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [marks, setMarks] = useState<{ start: { x: number; y: number }; finish: { x: number; y: number } } | null>(
    null,
  );
  const [tip, setTip] = useState({ x: 0, y: 0, angle: 0, progress: 0, ready: false });

  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start 0.78", "end 0.58"],
  });
  const drawn = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.6 });

  const measure = useCallback(() => {
    const frame = frameRef.current;
    if (!frame) {
      return;
    }
    const box = frame.getBoundingClientRect();
    const wide = window.matchMedia("(min-width: 900px)").matches;
    const cardPoints = process.steps.flatMap((_, index) => {
      const el = stepRefs.current[index];
      const rect = el?.getBoundingClientRect();
      if (!rect) {
        return [];
      }
      const y = rect.top + rect.height / 2 - box.top;
      const x = wide
        ? index % 2 === 0
          ? rect.right - box.left + 8
          : rect.left - box.left - 8
        : rect.left - box.left + 18;
      return [{ x, y }];
    });
    if (cardPoints.length < 2) {
      return;
    }
    const first = cardPoints[0]!;
    const last = cardPoints[cardPoints.length - 1]!;
    const start = wide
      ? { x: first.x + 36, y: 26 }
      : { x: first.x, y: 18 };
    const finish = wide ? { x: last.x + 70, y: last.y } : { x: last.x + 38, y: last.y };
    setSize({ w: box.width, h: box.height });
    setMarks({ start, finish });
    setPath(curveThrough([start, ...cardPoints, finish]));
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) {
      return;
    }
    measure();
    const observer = new ResizeObserver(() => measure());
    observer.observe(frame);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  useEffect(() => {
    const update = (value: number) => {
      const node = pathRef.current;
      if (!node) {
        return;
      }
      const length = node.getTotalLength();
      if (!length) {
        return;
      }
      const progress = Math.min(Math.max(value, 0), 1);
      const at = progress * length;
      const point = node.getPointAtLength(at);
      const look = Math.min(10, length * 0.012);
      const from = node.getPointAtLength(Math.max(0, at - look));
      const to = node.getPointAtLength(Math.min(length, at + look));
      setTip({
        x: point.x,
        y: point.y,
        angle: (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI,
        progress,
        ready: true,
      });
    };
    update(drawn.get());
    return drawn.on("change", update);
  }, [drawn, path]);

  const showHead = tip.ready && !reduce && tip.progress > 0.04 && tip.progress < 0.97;

  return (
    <Section id="process">
      <Reveal>
        <SectionHeading eyebrow={process.eyebrow} title={process.title} lead={process.lead} />
      </Reveal>
      <div ref={frameRef} className="process-flow">
        <svg
          className="process-flow__svg"
          viewBox={`0 0 ${size.w || 1100} ${size.h || 900}`}
          aria-hidden="true"
        >
          <path className="process-flow__track" d={path} />
          <path ref={pathRef} d={path} fill="none" stroke="transparent" />
          <m.path
            className="process-flow__draw"
            d={path}
            pathLength={1}
            style={reduce ? undefined : { pathLength: drawn }}
          />
          {marks ? (
            <g className="process-flow__mark process-flow__mark--start" transform={`translate(${marks.start.x} ${marks.start.y})`}>
              <circle className="process-flow__mark-halo" r="16" />
              <circle className="process-flow__mark-ring" r="9" />
              <circle className="process-flow__mark-core" r="3.6" />
            </g>
          ) : null}
          {marks ? (
            <g className="process-flow__mark process-flow__mark--finish" transform={`translate(${marks.finish.x} ${marks.finish.y})`}>
              <circle className="process-flow__mark-halo" r="22" />
              <circle className="process-flow__finish-ring process-flow__finish-ring--outer" r="14" />
              <circle className="process-flow__finish-ring process-flow__finish-ring--mid" r="8.5" />
              <circle className="process-flow__mark-core" r="3.2" />
              <path className="process-flow__finish-flag" d="M 16 -11 H 30 L 26 -5.5 H 16 Z" />
              <path className="process-flow__finish-pole" d="M 16 -11 V 6" />
            </g>
          ) : null}
          {showHead ? (
            <polygon
              className="process-flow__head"
              points="0,-3.5 7,0 0,3.5"
              transform={`translate(${tip.x} ${tip.y}) rotate(${tip.angle})`}
            />
          ) : null}
        </svg>
        <ol className="process-flow__list">
          {process.steps.map((step, index) => (
            <li
              key={step.id}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className={cn(
                "process-flow__item",
                index % 2 === 0 ? "process-flow__item--left" : "process-flow__item--right",
              )}
            >
              <span className="process-flow__ghost" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <GlassCard intensity={index === 0 ? "strong" : "medium"} tone={index === 0 ? "accent" : "neutral"}>
                <p className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-lg text-white sm:text-xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-mist">{step.text}</p>
              </GlassCard>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
