export const glassTokens = {
  blur: {
    subtle: "14px",
    medium: "26px",
    strong: "40px",
  },
  saturate: "165%",
  brightness: "1.08",
  opacity: {
    subtle: 0.045,
    medium: 0.07,
    strong: 0.1,
  },
  highlight: "rgba(255, 255, 255, 0.42)",
  edge: "rgba(255, 255, 255, 0.2)",
  tint: {
    neutral: "rgba(148, 176, 206, 0.16)",
    accent: "rgba(62, 239, 200, 0.18)",
    warm: "rgba(228, 199, 165, 0.16)",
  },
  motion: {
    hoverScale: 1.012,
    activeScale: 0.985,
    spring: { stiffness: 380, damping: 28, mass: 0.6 },
  },
} as const;
