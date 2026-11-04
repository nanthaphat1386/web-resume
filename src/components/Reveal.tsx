"use client";

import { useEffect, useRef, type ReactNode, type RefObject } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "section" | "li";
};

/**
 * Wraps content in a subtle fade-in / slide-up reveal animation
 * triggered via IntersectionObserver when it enters the viewport.
 * Respects prefers-reduced-motion through the .reveal CSS rules.
 */
export default function Reveal({
  children,
  className = "",
  delayMs = 0,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add("is-visible");
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style = delayMs ? { transitionDelay: `${delayMs}ms` } : undefined;

  if (as === "section") {
    return (
      <section
        ref={ref as RefObject<HTMLElement>}
        className={`reveal ${className}`}
        style={style}
      >
        {children}
      </section>
    );
  }

  if (as === "li") {
    return (
      <li ref={ref as RefObject<HTMLLIElement>} className={`reveal ${className}`} style={style}>
        {children}
      </li>
    );
  }

  return (
    <div ref={ref as RefObject<HTMLDivElement>} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}
