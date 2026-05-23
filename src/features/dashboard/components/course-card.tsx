"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

type CourseCardProps = {
  title: string;
  category: string;
  level: string;
  lessons: number;
  progress: number;
  rating: string;
  tone: string;
};

export function CourseCard(props: CourseCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
      className="aurora-border group overflow-hidden rounded-lg border border-white/10 bg-card/80 shadow-premium-xl"
    >
      <div className="relative h-44 overflow-hidden">
        <div className={cn("absolute inset-0 bg-gradient-to-br", props.tone)} />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,hsl(224_58%_4%_/_0.96),transparent_58%)]" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span className="rounded-full bg-black/30 px-3 py-1 text-xs font-semibold backdrop-blur-md">
            {props.category}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-black/30 px-3 py-1 text-xs backdrop-blur-md">
            <Star className="size-3 fill-neon-lime text-neon-lime" />
            {props.rating}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold">{props.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {props.level} - {props.lessons} lessons
        </p>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-lime"
            style={{ width: `${props.progress}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          {props.progress > 0 ? `${props.progress}% complete` : "Ready to start"}
        </p>
      </div>
    </motion.article>
  );
}
