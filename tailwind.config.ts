import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "4rem"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        neon: {
          cyan: "hsl(var(--neon-cyan))",
          lime: "hsl(var(--neon-lime))",
          rose: "hsl(var(--neon-rose))",
          violet: "hsl(var(--neon-violet))"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter Tight", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"]
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)"
      },
      boxShadow: {
        "neon-cyan": "0 0 32px hsl(var(--neon-cyan) / 0.28)",
        "premium-xl": "0 24px 90px hsl(220 80% 2% / 0.62)",
        glass: "inset 0 1px 0 hsl(0 0% 100% / 0.12), 0 24px 80px hsl(220 80% 2% / 0.35)"
      },
      backgroundImage: {
        "cinematic-radial":
          "radial-gradient(circle at 20% 10%, hsl(var(--neon-cyan) / 0.18), transparent 28%), radial-gradient(circle at 78% 4%, hsl(var(--neon-violet) / 0.16), transparent 26%), linear-gradient(135deg, hsl(224 58% 4%), hsl(220 52% 7%) 48%, hsl(228 38% 4%))",
        "glass-gradient":
          "linear-gradient(135deg, hsl(0 0% 100% / 0.11), hsl(0 0% 100% / 0.035))"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.58" },
          "50%": { opacity: "1" }
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" }
        }
      },
      animation: {
        "fade-up": "fade-up 520ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-glow": "pulse-glow 2800ms ease-in-out infinite",
        shimmer: "shimmer 1800ms linear infinite"
      }
    }
  },
  plugins: [animate]
};

export default config;
