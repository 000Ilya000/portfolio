"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { type StackLogoId, type StackNode } from "@/content/types";
import { cn } from "@/lib/cn";
import { StackLogo } from "@/components/sections/stack-logos";
import { stack } from "@/content/stack";

interface Trace {
  id: StackLogoId;
  d: string;
  delay: number;
}

function hubPort(
  hub: DOMRect,
  node: DOMRect,
  frame: DOMRect,
): { x: number; y: number; axis: "x" | "y" } {
  const hx = hub.left + hub.width / 2 - frame.left;
  const hy = hub.top + hub.height / 2 - frame.top;
  const nx = node.left + node.width / 2 - frame.left;
  const ny = node.top + node.height / 2 - frame.top;
  const dx = nx - hx;
  const dy = ny - hy;
  const pad = 2;

  if (Math.abs(dx) * hub.height > Math.abs(dy) * hub.width) {
    return {
      x: hx + Math.sign(dx) * (hub.width / 2 + pad),
      y: hy,
      axis: "x",
    };
  }

  return {
    x: hx,
    y: hy + Math.sign(dy) * (hub.height / 2 + pad),
    axis: "y",
  };
}

function nodePort(node: DOMRect, frame: DOMRect, from: { x: number; y: number }) {
  const nx = node.left + node.width / 2 - frame.left;
  const ny = node.top + node.height / 2 - frame.top;
  const dx = nx - from.x;
  const dy = ny - from.y;

  if (Math.abs(dx) > Math.abs(dy)) {
    return {
      x: nx - Math.sign(dx) * (node.width / 2 + 4),
      y: ny,
    };
  }

  return {
    x: nx,
    y: ny - Math.sign(dy) * (node.height / 2 + 4),
  };
}

function orthogonalPath(sx: number, sy: number, ex: number, ey: number, axis: "x" | "y") {
  const x = Math.round(sx * 10) / 10;
  const y = Math.round(sy * 10) / 10;
  const tx = Math.round(ex * 10) / 10;
  const ty = Math.round(ey * 10) / 10;

  if (Math.abs(tx - x) < 6) {
    return `M ${x} ${y} V ${ty}`;
  }
  if (Math.abs(ty - y) < 6) {
    return `M ${x} ${y} H ${tx}`;
  }

  if (axis === "x") {
    const mid = Math.round((x + (tx - x) * 0.42) * 10) / 10;
    return `M ${x} ${y} H ${mid} V ${ty} H ${tx}`;
  }

  const mid = Math.round((y + (ty - y) * 0.38) * 10) / 10;
  return `M ${x} ${y} V ${mid} H ${tx} V ${ty}`;
}

export function StackMap() {
  const frameRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLSpanElement>(null);
  const nodeRefs = useRef<Record<string, HTMLElement | null>>({});
  const [traces, setTraces] = useState<Trace[]>([]);
  const [active, setActive] = useState<StackLogoId | "react" | null>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [showTips, setShowTips] = useState(false);
  const gradientId = useId().replace(/:/g, "");
  const glowId = `${gradientId}-glow`;

  const measure = useCallback(() => {
    const frame = frameRef.current?.getBoundingClientRect();
    const hub = hubRef.current?.getBoundingClientRect();
    if (!frame || !hub || frame.width < 40) {
      return;
    }

    setSize({ w: frame.width, h: frame.height });

    const next = stack.nodes.flatMap((node, index) => {
      const el = nodeRefs.current[node.id];
      const box = el?.getBoundingClientRect();
      if (!box) {
        return [];
      }
      const start = hubPort(hub, box, frame);
      const end = nodePort(box, frame, start);
      return [
        {
          id: node.id,
          d: orthogonalPath(start.x, start.y, end.x, end.y, start.axis),
          delay: index * 0.35,
        },
      ];
    });

    setTraces(next);
  }, [stack.nodes]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px) and (hover: hover)");
    const sync = () => setShowTips(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) {
      return;
    }

    const run = () => measure();
    run();
    const raf = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(run);
    });
    const observer = new ResizeObserver(run);
    observer.observe(frame);
    window.addEventListener("resize", run);

    return () => {
      window.cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", run);
    };
  }, [measure]);

  return (
    <div className="stack-map-shell">
      <div
        ref={frameRef}
        className="stack-map"
        data-active={active ?? undefined}
        onMouseLeave={() => setActive(null)}
      >
        <div className="stack-map__grid" aria-hidden="true" />
        <svg className="stack-map__svg" viewBox={`0 0 ${size.w || 1100} ${size.h || 640}`} aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3eefc8" />
              <stop offset="45%" stopColor="#7aa8ff" />
              <stop offset="100%" stopColor="#e4c7a5" />
            </linearGradient>
            <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {traces.map((trace) => (
            <g
              key={trace.id}
              className={cn("stack-map__run", active && active !== "react" && active !== trace.id && "is-dim")}
            >
              <path className="stack-map__track" d={trace.d} />
              <path
                className="stack-map__pulse"
                d={trace.d}
                pathLength={1}
                style={{ animationDelay: `${trace.delay}s` }}
                stroke={`url(#${gradientId})`}
                filter={`url(#${glowId})`}
              />
            </g>
          ))}
        </svg>

        <div className={cn("stack-map__hub", active === "react" && "is-active")}>
          <button
            type="button"
            className="stack-map__hub-hit"
            onMouseEnter={() => setActive("react")}
            onFocus={() => setActive("react")}
            aria-label="React"
            aria-describedby={showTips && active === "react" ? "stack-tip-react" : undefined}
          >
            <span className="stack-map__hub-ring" aria-hidden="true" />
            <span ref={hubRef} className="stack-map__hub-core">
              <StackLogo id="react" className="stack-map__hub-logo" />
              <span className="stack-map__hub-label">React</span>
            </span>
          </button>
          {showTips && active === "react" ? (
            <span id="stack-tip-react" className="stack-map__tip stack-map__tip--bottom" role="tooltip">
              <strong>React</strong>
              <span>{stack.hubCaption}</span>
            </span>
          ) : null}
        </div>

        {stack.nodes.map((node) => (
          <MapNode
            key={node.id}
            node={node}
            active={active === node.id}
            showTip={showTips}
            onEnter={() => setActive(node.id)}
            nodeRef={(el) => {
              nodeRefs.current[node.id] = el;
            }}
          />
        ))}
      </div>

      <ul className="stack-map__extras">
        {stack.extras.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function MapNode({
  node,
  active,
  showTip,
  onEnter,
  nodeRef,
}: {
  node: StackNode;
  active: boolean;
  showTip: boolean;
  onEnter: () => void;
  nodeRef: (el: HTMLElement | null) => void;
}) {
  const tipId = `stack-tip-${node.id}`;

  return (
    <div
      className={cn("stack-map__pin", active && "is-active")}
      style={{ left: `${node.x}%`, top: `${node.y}%`, color: node.color }}
    >
      <button
        type="button"
        className="stack-map__node"
        onMouseEnter={onEnter}
        onFocus={onEnter}
        aria-label={node.label}
        aria-describedby={showTip && active ? tipId : undefined}
      >
        <span ref={nodeRef} className="stack-map__node-mark">
          <StackLogo id={node.id} />
        </span>
        <span className="stack-map__node-name">{node.label}</span>
      </button>
      {showTip && active ? (
        <span id={tipId} className={cn("stack-map__tip", `stack-map__tip--${node.tip}`)} role="tooltip">
          <strong>{node.label}</strong>
          <span>{node.caption}</span>
        </span>
      ) : null}
    </div>
  );
}
