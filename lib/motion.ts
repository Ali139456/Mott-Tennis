export const smoothEase = [0.22, 1, 0.36, 1] as const;

export const duration = {
  sm: 0.35,
  md: 0.55,
  lg: 0.75,
} as const;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.md, ease: smoothEase },
  },
};

/** Use with `whileInView` so motion runs when the user scrolls to the section (once). */
export const scrollViewport = {
  once: true,
  amount: 0.25,
} as const;
