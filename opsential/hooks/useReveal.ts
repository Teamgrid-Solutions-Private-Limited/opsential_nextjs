"use client";

import { useEffect } from "react";

export function useReveal(selector: string = ".reveal, .stagger") {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");

            // Reveal children for stagger containers
            if (entry.target.classList.contains("stagger")) {
              entry.target.querySelectorAll(".reveal").forEach((child) => {
                child.classList.add("active");
              });
            }

            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe all elements matching the selector
    const elements = document.querySelectorAll<HTMLElement>(selector);
    elements.forEach((el) => revealObserver.observe(el));

    // Cleanup
    return () => {
      elements.forEach((el) => revealObserver.unobserve(el));
    };
  }, [selector]);
}