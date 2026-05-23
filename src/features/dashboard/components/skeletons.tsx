import { cn } from "@/lib/utils";

export function SkeletonPanel({ className }: { className?: string }) {
  return (
    <div className={cn("glass-panel overflow-hidden rounded-lg p-5", className)}>
      <div className="relative h-full min-h-28">
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="h-4 w-1/2 rounded-full bg-white/10" />
        <div className="mt-4 h-3 w-3/4 rounded-full bg-white/10" />
        <div className="mt-3 h-3 w-2/5 rounded-full bg-white/10" />
      </div>
    </div>
  );
}
