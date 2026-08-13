"use client";

import { useCallback, type PointerEventHandler, type RefObject } from "react";

export function setGlowFromEvent(element: HTMLElement, clientX: number, clientY: number) {
  const rect = element.getBoundingClientRect();
  const width = rect.width || 1;
  const height = rect.height || 1;
  const x = ((clientX - rect.left) / width) * 100;
  const y = ((clientY - rect.top) / height) * 100;
  element.style.setProperty("--glow-x", `${x}%`);
  element.style.setProperty("--glow-y", `${y}%`);
}

export function resetGlow(element: HTMLElement) {
  element.style.setProperty("--glow-x", "50%");
  element.style.setProperty("--glow-y", "8%");
}

export function usePointerGlow<T extends HTMLElement>(
  ref?: RefObject<T | null>,
): {
  onPointerMove: PointerEventHandler<T>;
  onPointerLeave: PointerEventHandler<T>;
} {
  const onPointerMove = useCallback<PointerEventHandler<T>>(
    (event) => {
      if (event.pointerType !== "mouse") {
        return;
      }

      const target = ref?.current ?? event.currentTarget;
      setGlowFromEvent(target, event.clientX, event.clientY);
    },
    [ref],
  );

  const onPointerLeave = useCallback<PointerEventHandler<T>>(
    (event) => {
      const target = ref?.current ?? event.currentTarget;
      resetGlow(target);
    },
    [ref],
  );

  return { onPointerMove, onPointerLeave };
}
