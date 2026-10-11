"use client";

import { useReveal } from "@/lib/hooks";
import type { ReactNode, CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Fades/slides content in the first time it scrolls into view. */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;
  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}
