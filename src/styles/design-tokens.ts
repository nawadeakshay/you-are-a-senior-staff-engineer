export const designTokens = {
  motion: {
    duration: {
      fast: 160,
      base: 240,
      slow: 520,
      cinematic: 900
    },
    easing: {
      standard: [0.16, 1, 0.3, 1],
      entrance: [0.22, 1, 0.36, 1],
      exit: [0.7, 0, 0.84, 0]
    },
    presets: {
      reveal: {
        y: 24,
        blur: 12,
        duration: 0.72
      },
      hoverLift: {
        y: -8,
        scale: 1.015,
        duration: 0.28
      },
      magnetic: {
        strength: 0.18,
        stiffness: 180,
        damping: 18
      }
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
  },
  glow: {
    cyan: "0 0 32px hsl(184 100% 52% / 0.28)",
    violet: "0 0 44px hsl(270 100% 70% / 0.22)",
    rose: "0 0 44px hsl(342 100% 66% / 0.22)"
  }
} as const;
