import { type Transition } from "framer-motion";
import { glassTokens } from "@/lib/glass-tokens";

export const spring: Transition = {
  type: "spring",
  ...glassTokens.motion.spring,
};

export const revealEase: Transition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};
