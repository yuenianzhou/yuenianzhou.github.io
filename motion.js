import {
  animate,
  inView,
  scroll,
  stagger,
} from "https://cdn.jsdelivr.net/npm/motion@12.42.2/+esm";

const root = document.documentElement;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
const calmEase = [0.22, 1, 0.36, 1];

root.classList.add("motion-enhanced");

if (prefersReducedMotion.matches) {
  root.classList.add("motion-reduced");
} else {
  const headerItems = document.querySelectorAll(
    ".site-name, .site-meta, .primary-nav a"
  );

  animate(
    headerItems,
    { opacity: [0, 1], y: [-6, 0] },
    {
      duration: 0.56,
      delay: stagger(0.035),
      ease: calmEase,
    }
  );

  const pageIntroItems = document.querySelectorAll(".page-intro > *");

  if (pageIntroItems.length) {
    animate(
      pageIntroItems,
      { opacity: [0, 1], y: [12, 0] },
      {
        duration: 0.68,
        delay: stagger(0.055, { startDelay: 0.06 }),
        ease: calmEase,
      }
    );
  }

  const profileItems = document.querySelectorAll(
    ".page-home .home-hero-copy > .editorial-label, " +
      ".page-home .home-hero-title, " +
      ".page-home .profile-hero-prose > p, " +
      ".page-home .profile-contacts > div, " +
      ".page-home .profile-plate > a, " +
      ".page-home .profile-plate > figcaption"
  );

  if (profileItems.length) {
    animate(
      profileItems,
      { opacity: [0, 1], y: [14, 0] },
      {
        duration: 0.76,
        delay: stagger(0.05, { startDelay: 0.08 }),
        ease: calmEase,
      }
    );
  }

  const revealOnView = (selector, amount = 0.16) => {
    document.querySelectorAll(selector).forEach((element) => {
      inView(
        element,
        (visibleElement) => {
          animate(
            visibleElement,
            { opacity: [0, 1], y: [18, 0] },
            { duration: 0.72, ease: calmEase }
          );
        },
        { amount, margin: "0px 0px -8% 0px" }
      );
    });
  };

  revealOnView(".page-home .research-card", 0.18);
  revealOnView(".page-cv .cv-stack > .card", 0.12);
  revealOnView(".page-links .topic-index", 0.12);
  revealOnView(".page-links .reference-card", 0.1);

  const visualNotes = document.querySelector(".visual-notes");

  if (visualNotes) {
    inView(
      visualNotes,
      () => {
        const noteItems = visualNotes.querySelectorAll(
          ".visual-notes-heading, .figure > a, .figure-caption"
        );

        animate(
          noteItems,
          { opacity: [0, 1], y: [16, 0] },
          {
            duration: 0.72,
            delay: stagger(0.075),
            ease: calmEase,
          }
        );
      },
      { amount: 0.14, margin: "0px 0px -6% 0px" }
    );
  }

  const profileImage = document.querySelector(".profile-plate img");
  const profileHero = document.querySelector(".profile-hero");

  if (profileImage && profileHero && window.innerWidth > 760) {
    const plateDrift = animate(
      profileImage,
      { y: [-5, 9], scale: [1.006, 1.006] },
      { ease: "linear" }
    );

    scroll(plateDrift, {
      target: profileHero,
      offset: ["start end", "end start"],
    });
  }

  if (finePointer.matches) {
    document
      .querySelectorAll(".research-plate > a, .figure > a")
      .forEach((plateLink) => {
        const liftPlate = () => {
          animate(
            plateLink,
            { y: -3, scale: 1.004 },
            { type: "spring", stiffness: 210, damping: 27 }
          );
        };

        const settlePlate = () => {
          animate(
            plateLink,
            { y: 0, scale: 1 },
            { type: "spring", stiffness: 170, damping: 26 }
          );
        };

        plateLink.addEventListener("pointerenter", liftPlate);
        plateLink.addEventListener("pointerleave", settlePlate);
        plateLink.addEventListener("focus", liftPlate);
        plateLink.addEventListener("blur", settlePlate);
      });
  }
}
