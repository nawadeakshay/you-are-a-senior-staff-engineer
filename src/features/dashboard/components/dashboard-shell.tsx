"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Flame, GraduationCap, LayoutDashboard, Menu, Music2, Search, User, X } from "lucide-react";

import { FuturisticInput } from "@/components/ui/futuristic-input";
import { cn } from "@/lib/utils";
import { useDashboardStore } from "@/stores/dashboard-store";

const navItems = [
  { href: "/dashboard", label: "Home", icon: LayoutDashboard },
  { href: "/dashboard/courses", label: "Courses", icon: BookOpen },
  { href: "/dashboard/profile", label: "Profile", icon: User }
];

function SidebarContent() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col p-4">
      <Link href="/" className="mb-8 flex items-center gap-3 px-2">
        <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-neon-cyan">
          <Music2 className="size-5" />
        </span>
        <span className="font-display text-lg font-semibold">ekguitarist</span>
      </Link>

      <nav className="grid gap-2">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "neon-focus group flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground",
                active &&
                  "bg-primary/[0.15] text-foreground shadow-[inset_0_0_0_1px_hsl(var(--primary)/0.28)]"
              )}
            >
              <item.icon className={cn("size-5", active && "text-neon-cyan")} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="glass-panel mt-auto rounded-lg p-4">
        <div className="flex items-center gap-3">
          <Flame className="size-5 text-neon-rose" />
          <div>
            <p className="text-sm font-semibold">18-day streak</p>
            <p className="text-xs text-muted-foreground">Keep the flame alive today.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardShell({ children }: { children: ReactNode }) {
  const { sidebarOpen, setSidebarOpen } = useDashboardStore();

  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay pointer-events-none fixed inset-0 opacity-[0.035]" />
      <aside className="glass-panel fixed bottom-4 left-4 top-4 z-40 hidden w-72 rounded-lg lg:block">
        <SidebarContent />
      </aside>

      <AnimatePresence>
        {sidebarOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel fixed bottom-3 left-3 top-3 z-50 w-[min(19rem,calc(100vw-1.5rem))] rounded-lg lg:hidden"
            >
              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => setSidebarOpen(false)}
                className="neon-focus absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/10"
              >
                <X className="size-5" />
              </button>
              <SidebarContent />
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>

      <div className="relative z-10 lg:pl-80">
        <header className="sticky top-0 z-30 border-b border-white/10 bg-background/70 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center gap-4">
            <button
              type="button"
              aria-label="Open navigation"
              onClick={() => setSidebarOpen(true)}
              className="neon-focus grid size-11 place-items-center rounded-full bg-white/10 lg:hidden"
            >
              <Menu className="size-5" />
            </button>
            <div className="relative hidden flex-1 md:block">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <FuturisticInput className="pl-11" placeholder="Search lessons, artists, quests..." />
            </div>
            <div className="ml-auto flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <p className="text-sm font-semibold">Level 12</p>
                <p className="text-xs text-muted-foreground">8,420 XP</p>
              </div>
              <div className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet font-bold text-background shadow-neon-cyan">
                AM
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-1 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="glass-panel flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground"
              >
                <item.icon className="size-4" />
                {item.label}
              </Link>
            ))}
            <span className="glass-panel flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground">
              <GraduationCap className="size-4" />
              Quests
            </span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
