import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function FuturisticInput({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "neon-focus h-12 w-full rounded-md border border-white/10 bg-white/[0.06] px-4 text-sm text-foreground placeholder:text-muted-foreground shadow-inner backdrop-blur-xl transition-colors hover:border-white/20",
        className
      )}
      {...props}
    />
  );
}
