"use client";

import { motion } from "framer-motion";

type ProgressRingProps = {
  value: number;
  label: string;
  caption: string;
};

export function ProgressRing({ value, label, caption }: ProgressRingProps) {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative grid size-36 place-items-center">
      <svg viewBox="0 0 120 120" className="absolute inset-0 -rotate-90">
        <circle
          cx="60"
          cy="60"
          r={radius}
          className="fill-none stroke-white/10"
          strokeWidth="10"
        />
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          className="fill-none stroke-primary drop-shadow-[0_0_18px_hsl(var(--neon-cyan)_/_0.65)]"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <div className="text-center">
        <div className="font-display text-3xl font-semibold">{label}</div>
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{caption}</div>
      </div>
    </div>
  );
}
