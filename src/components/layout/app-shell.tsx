import type { PropsWithChildren } from "react";

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%_/_0.045)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%_/_0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
