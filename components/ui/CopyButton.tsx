"use client";

import { useEffect, useId, useState } from "react";
import { Copy } from "lucide-react";
import { contact } from "@/content/contacts";
import { cn } from "@/lib/cn";

interface CopyButtonProps {
  value: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
}

export function CopyButton({
  value,
  label = contact.copyLabel,
  copiedLabel = contact.copiedLabel,
  className,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const liveId = useId();

  useEffect(() => {
    if (!copied) {
      return;
    }
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  return (
    <>
      <button
        type="button"
        className={cn(
          "inline-flex min-h-11 min-w-11 shrink-0 cursor-pointer items-center justify-center rounded-full px-2 text-sm text-muted transition-colors hover:text-white sm:min-w-0 sm:px-3",
          className,
        )}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
          } catch {
            setCopied(false);
          }
        }}
        aria-label={copied ? copiedLabel : label}
        aria-describedby={liveId}
      >
        <Copy size={16} className="sm:hidden" aria-hidden="true" />
        <span className="hidden sm:inline">{copied ? copiedLabel : label}</span>
      </button>
      <span id={liveId} className="sr-only" aria-live="polite">
        {copied ? `${copiedLabel}: ${value}` : ""}
      </span>
    </>
  );
}
