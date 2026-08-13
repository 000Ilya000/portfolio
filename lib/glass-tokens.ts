export const glassTokens = {
  blur: {
    subtle: "16px",
    medium: "28px",
    strong: "40px",
  },
  saturate: "180%",
  brightness: "1.06",
  opacity: {
    subtle: 0.1,
    medium: 0.16,
    strong: 0.22,
  },
  fill: {
    subtle: 0.28,
    medium: 0.42,
    strong: 0.58,
    nav: 0.72,
  },
  highlight: "rgba(255, 255, 255, 0.5)",
  edge: "rgba(255, 255, 255, 0.28)",
  tint: {
    neutral: "rgba(148, 176, 206, 0.22)",
    accent: "rgba(62, 239, 200, 0.22)",
    warm: "rgba(228, 199, 165, 0.2)",
  },
  motion: {
    hoverScale: 1.012,
    activeScale: 0.985,
    spring: { stiffness: 380, damping: 28, mass: 0.6 },
  },
} as const;
