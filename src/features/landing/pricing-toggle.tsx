"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { AnimatedCard } from "@/components/ui/animated-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    description: "Start with essential lessons and practice streaks.",
    features: ["Beginner course previews", "Community access", "Basic streak tracking"]
  },
  {
    name: "Pro",
    monthly: 19,
    yearly: 15,
    recommended: true,
    description: "Unlock cinematic courses, AI practice, and weekly live sessions.",
    features: ["Full course library", "AI practice feedback", "Live class replays", "Progress quests"]
  },
  {
    name: "Elite",
    monthly: 99,
    yearly: 79,
    description: "High-touch mentorship for serious guitar transformation.",
    features: ["1:1 mentor reviews", "Private cohorts", "Performance roadmap", "Priority support"]
  }
];

export function PricingToggle() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <div>
      <div className="mx-auto mb-10 flex w-fit rounded-full border border-white/10 bg-white/[0.06] p-1">
        {(["monthly", "yearly"] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setBilling(option)}
            className="neon-focus relative h-10 rounded-full px-5 text-sm font-semibold capitalize text-muted-foreground transition-colors data-[active=true]:text-primary-foreground"
            data-active={billing === option}
          >
            {billing === option ? (
              <motion.span
                layoutId="billing-pill"
                className="absolute inset-0 rounded-full bg-primary shadow-neon-cyan"
              />
            ) : null}
            <span className="relative z-10">{option}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <AnimatedCard
            key={plan.name}
            className={cn(
              "relative p-6",
              plan.recommended && "border-primary/30 bg-primary/[0.08] shadow-neon-mix"
            )}
          >
            {plan.recommended ? (
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                <Sparkles className="size-3.5" />
                Recommended
              </div>
            ) : null}
            <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
            <p className="mt-3 min-h-14 text-sm leading-6 text-muted-foreground">{plan.description}</p>
            <div className="mt-6 flex items-end gap-2">
              <span className="font-display text-5xl font-semibold">
                ${billing === "monthly" ? plan.monthly : plan.yearly}
              </span>
              <span className="pb-2 text-sm text-muted-foreground">/mo</span>
            </div>
            <ul className="mt-7 grid gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check className="size-4 text-neon-lime" />
                  {feature}
                </li>
              ))}
            </ul>
            <MagneticButton
              href="/pricing"
              variant={plan.recommended ? "primary" : "secondary"}
              className="mt-8 w-full"
            >
              Choose {plan.name}
            </MagneticButton>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
}
