export const designTokens = {
  motion: {
    duration: {
      fast: 160,
      base: 240,
      slow: 520
    },
    easing: {
      standard: [0.16, 1, 0.3, 1],
      entrance: [0.22, 1, 0.36, 1],
      exit: [0.7, 0, 0.84, 0]
    }
  },
  layout: {
    maxWidth: "1440px",
    shellPadding: "clamp(1rem, 2vw, 2.5rem)"
  },
  glass: {
    border: "1px solid hsl(0 0% 100% / 0.1)",
    background: "linear-gradient(135deg, hsl(0 0% 100% / 0.11), hsl(0 0% 100% / 0.035))",
    blur: "24px"
  }
} as const;
