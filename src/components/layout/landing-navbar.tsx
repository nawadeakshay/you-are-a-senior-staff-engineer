"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Music2, X } from "lucide-react";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { navigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function LandingNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="glass-panel mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full px-4">
        <a href="/" className="neon-focus flex items-center gap-3 rounded-full">
          <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-neon-cyan">
            <Music2 className="size-5" />
          </span>
          <span className="font-display text-lg font-semibold tracking-wide">ekguitarist</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.public.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.title}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <MagneticButton href="/dashboard" className="h-11 px-5">
            Start Learning
          </MagneticButton>
        </div>

        <button
          type="button"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="neon-focus grid size-11 place-items-center rounded-full bg-white/10 text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className={cn("glass-panel mx-auto mt-3 max-w-7xl rounded-lg p-4 lg:hidden")}
          >
            <div className="grid gap-2">
              {navigation.public.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
                >
                  {item.title}
                </a>
              ))}
              <a
                href="/dashboard"
                className="mt-2 rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-neon-cyan"
              >
                Start Learning
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
