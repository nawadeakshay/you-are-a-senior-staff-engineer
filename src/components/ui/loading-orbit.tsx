export function LoadingOrbit() {
  return (
    <div className="relative size-12 rounded-full border border-white/10">
      <div className="absolute inset-1 rounded-full border border-primary/30" />
      <div className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-neon-cyan" />
      <div className="absolute inset-0 animate-spin rounded-full border-t border-neon-cyan" />
    </div>
  );
}
