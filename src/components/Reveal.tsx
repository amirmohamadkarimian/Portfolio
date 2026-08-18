import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Extra class names, e.g. direction variants like `reveal-left`. */
  className?: string;
  /** Transition delay in ms — useful for staggering sibling blocks. */
  delay?: number;
}

/**
 * Scroll-triggered reveal wrapper.
 *
 * Observes the element with IntersectionObserver and adds an `in-view`
 * class once it enters the viewport, which drives the CSS transition
 * defined in styles.css (`.reveal`). Content is never permanently hidden:
 * if the observer is unavailable, the element is shown immediately.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};
