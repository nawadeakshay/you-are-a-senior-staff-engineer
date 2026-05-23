"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

import { cn } from "@/lib/utils";

type LessonCardProps = {
  title: string;
  course: string;
  progress: number;
  duration: string;
  tone: string;
};

export function LessonCard({ title, course, progress, duration, tone }: LessonCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
      className="group relative min-h-[230px] min-w-[280px] overflow-hidden rounded-lg border border-white/10 bg-slate-950 shadow-premium-xl md:min-w-[340px]"
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40", tone)} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,transparent,hsl(224_58%_4%_/_0.9)_70%)]" />
      <div className="relative flex h-full flex-col justify-between p-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-foreground">
            {duration}
          </span>
          <span className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-neon-cyan transition-transform group-hover:scale-110">
            <Play className="size-4 fill-current" />
          </span>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neon-cyan">{course}</p>
          <h3 className="mt-3 font-display text-2xl font-semibold">{title}</h3>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.12]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-full rounded-full bg-primary shadow-neon-cyan"
            />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">{progress}% complete</p>
        </div>
      </div>
    </motion.article>
  );
}
