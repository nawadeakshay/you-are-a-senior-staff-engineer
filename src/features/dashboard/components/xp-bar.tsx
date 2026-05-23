"use client";

import { motion } from "framer-motion";

type XpBarProps = {
  level: number;
  xp: number;
  nextLevelXp: number;
};

export function XpBar({ level, xp, nextLevelXp }: XpBarProps) {
  const percent = Math.min(100, Math.round((xp / nextLevelXp) * 100));

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-semibold text-foreground">Level {level}</span>
        <span className="font-mono text-muted-foreground">
          {xp.toLocaleString()} / {nextLevelXp.toLocaleString()} XP
        </span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-lime shadow-neon-cyan"
        />
      </div>
    </div>
  );
}
