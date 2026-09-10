import { useEffect, useState } from "react";

export function PageEffects() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const revealItems = [...document.querySelectorAll("[data-reveal]")];
    const parallaxItems = [...document.querySelectorAll("[data-parallax]")];
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

        parallaxItems.forEach((item) => {
          if (reducedMotion) {
            item.style.setProperty("--parallax-offset", "0px");
            return;
          }
          const rect = item.getBoundingClientRect();
          const speed = Number(item.dataset.parallax) || 0;
          const distance =
            window.innerHeight / 2 - (rect.top + rect.height / 2);
          const offset = Math.max(-90, Math.min(90, distance * speed));
          item.style.setProperty("--parallax-offset", `${offset}px`);
        });
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      parallaxItems.forEach((item) =>
        item.style.removeProperty("--parallax-offset"),
      );
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
