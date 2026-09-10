import { useEffect, useState } from "react";

export function PageEffects() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const revealItems = [...document.querySelectorAll("[data-reveal]")];
    let observer;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -30px" },
      );
      revealItems.forEach((item) => observer.observe(item));
    }

    let frame;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        setProgress(
          scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0,
        );
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="page-progress" aria-hidden="true">
      <span style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
