import { AppShell } from "@/components/layout/app-shell";

export default function HomePage() {
  return (
    <AppShell>
      <section className="container flex min-h-screen items-center py-20">
        <div className="max-w-3xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.24em] text-neon-cyan">
            Architecture foundation
          </p>
          <h1 className="font-display text-5xl font-semibold leading-tight text-foreground md:text-7xl">
            ekguitarist
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            A cinematic, scalable foundation for immersive guitar learning, live classes,
            subscriptions, community, and future AI practice intelligence.
          </p>
        </div>
      </section>
    </AppShell>
  );
}
