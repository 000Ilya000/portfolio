export const glassTokens = {
  blur: {
    subtle: "16px",
    medium: "24px",
    strong: "32px",
  },
  saturate: "1.55",
  fill: "rgba(16, 22, 34, 0.66)",
  line: "rgba(255, 255, 255, 0.28)",
  noise: 0.09,
  highlight: "rgba(255, 255, 255, 0.5)",
  edge: "rgba(255, 255, 255, 0.28)",
  tint: {
    neutral: "rgba(255, 255, 255, 0.16)",
    accent: "rgba(62, 239, 200, 0.16)",
    warm: "rgba(228, 199, 165, 0.16)",
  },
  motion: {
    hoverScale: 1.012,
    activeScale: 0.985,
    spring: { stiffness: 380, damping: 28, mass: 0.6 },
  },
} as const;
