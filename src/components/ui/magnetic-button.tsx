"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

import { cn } from "@/lib/utils";

type MagneticButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary";
  icon?: "arrow" | "play";
};

export function MagneticButton({
  className,
  children,
  variant = "primary",
  icon = "arrow",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.5 });
  const Icon = icon === "play" ? Play : ArrowRight;

  return (
    <motion.a
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const bounds = ref.current?.getBoundingClientRect();
        if (!bounds) return;
        x.set((event.clientX - bounds.left - bounds.width / 2) * 0.18);
        y.set((event.clientY - bounds.top - bounds.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "neon-focus group inline-flex h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-semibold transition-all md:h-14 md:px-8",
        variant === "primary" &&
          "bg-primary text-primary-foreground shadow-neon-cyan hover:shadow-neon-mix",
        variant === "secondary" && "glass-panel text-foreground hover:bg-white/15",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <Icon className="size-4 transition-transform group-hover:translate-x-0.5" />
    </motion.a>
  );
}
