"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Award, BrainCircuit, Gamepad2, Mic2, Radio, Sparkles, Users, Zap } from "lucide-react";

import { LandingNavbar } from "@/components/layout/landing-navbar";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { AnimatedCard } from "@/components/ui/animated-card";
import { LoadingOrbit } from "@/components/ui/loading-orbit";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { FretboardPreview } from "@/features/landing/fretboard-preview";
import { PricingToggle } from "@/features/landing/pricing-toggle";

const GuitarHeroScene = dynamic(
  () => import("@/components/three/guitar-hero-scene").then((mod) => mod.GuitarHeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="grid h-full min-h-[420px] place-items-center">
        <LoadingOrbit />
      </div>
    )
  }
);

const stats = [
  ["50K+", "practice sessions"],
  ["4.9/5", "student love"],
  ["120+", "cinematic lessons"],
  ["24/7", "AI practice lab"]
];

const courses = [
  {
    title: "Bollywood Rhythm Reactor",
    level: "Beginner to Pro",
    accent: "from-cyan-400 to-violet-400"
  },
  {
    title: "Acoustic Moodscapes",
    level: "Fingerstyle",
    accent: "from-lime-300 to-cyan-300"
  },
  {
    title: "Western Lead Orbit",
    level: "Improvisation",
    accent: "from-violet-300 to-rose-300"
  },
  {
    title: "Stage Ready Chords",
    level: "Performance",
    accent: "from-rose-300 to-orange-200"
  }
];

const why = [
  {
    icon: Sparkles,
    title: "Cinematic immersion",
    body: "Lessons feel like guided scenes, with visual rhythm, mood, and pacing built for focus."
  },
  {
    icon: BrainCircuit,
    title: "AI-powered learning",
    body: "The system is ready for practice signals, personalized paths, and feedback loops."
  },
  {
    icon: Mic2,
    title: "Bollywood-first soul",
    body: "Built for the songs, phrasing, and emotional language learners actually want to play."
  },
  {
    icon: Gamepad2,
    title: "Gamified progression",
    body: "Streaks, achievements, quests, and mastery paths keep practice visible and addictive."
  }
];

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Bedroom guitarist",
    quote: "The lessons feel like a concert film and a personal coach had a very polished child."
  },
  {
    name: "Nisha Rao",
    role: "Singer-songwriter",
    quote: "I finally understood rhythm instead of memorizing strumming patterns."
  },
  {
    name: "Kabir S.",
    role: "Live cohort student",
    quote: "The practice flow made me show up every day without feeling pushed."
  }
];

export function LandingPage() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0.25]);

  return (
    <main className="relative overflow-hidden">
      <LandingNavbar />
      <div className="noise-overlay pointer-events-none fixed inset-0 z-0 opacity-[0.035]" />

      <section className="relative min-h-screen overflow-hidden pt-28">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0 opacity-80"
          aria-hidden="true"
        >
          <GuitarHeroScene />
        </motion.div>
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_70%_36%,transparent_0%,hsl(224_58%_4%_/_0.15)_26%,hsl(224_58%_4%_/_0.92)_76%)]" />

        <div className="section-shell relative z-20 flex min-h-[calc(100vh-7rem)] items-center">
          <div className="max-w-4xl">
            <Reveal>
              <p className="eyebrow">Immersive guitar learning platform</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="text-display-hero neon-text mt-5 text-gradient-cinematic">
                Learn Guitar In A Whole New Dimension
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                Master Bollywood, acoustic, fingerstyle, and western guitar through immersive
                cinematic learning experiences.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <MagneticButton href="/dashboard">Start Learning</MagneticButton>
                <MagneticButton href="#demo" variant="secondary" icon="play">
                  Watch Demo
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground md:flex"
          >
            <span>Scroll</span>
            <span className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </div>
      </section>

      <section className="section-shell">
        <Stagger className="grid gap-4 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <StaggerItem key={label}>
              <AnimatedCard className="p-6 text-center">
                <div className="font-display text-4xl font-semibold text-foreground">{value}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  {label}
                </div>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Featured courses"
            title="A Netflix-style learning orbit for every guitarist"
            description="Browse cinematic course worlds built around songs, skills, moods, and outcomes."
          />
        </Reveal>
        <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-5">
          {courses.map((course) => (
            <motion.article
              key={course.title}
              whileHover={{ y: -10, rotateX: 4 }}
              className="aurora-border group relative min-h-[330px] min-w-[280px] snap-start overflow-hidden rounded-lg border border-white/10 bg-slate-950 shadow-premium-xl md:min-w-[360px]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${course.accent} opacity-30`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,transparent,hsl(224_58%_4%_/_0.88)_68%)]" />
              <div className="relative flex h-full flex-col justify-end p-6">
                <Radio className="mb-24 size-9 text-white/70 transition-transform group-hover:scale-110" />
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-neon-cyan">
                  {course.level}
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold">{course.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="demo" className="section-shell grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Practice preview"
            title="The fretboard becomes a living interface"
            description="A tactile practice system for notes, shapes, rhythm, ear training, and future AI feedback."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <FretboardPreview />
        </Reveal>
      </section>

      <section className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Why ekguitarist"
            title="Built for the emotional arc of becoming a guitarist"
            description="The platform combines music, cinematic interfaces, and learning science into one focused practice ecosystem."
          />
        </Reveal>
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {why.map((item) => (
            <StaggerItem key={item.title}>
              <AnimatedCard className="h-full p-6">
                <item.icon className="size-8 text-neon-cyan" />
                <h3 className="mt-6 font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.body}</p>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Student signal"
            title="Real momentum, not passive watching"
            description="Designed to make practice feel clear, cinematic, and worth returning to."
          />
        </Reveal>
        <div className="mt-12 overflow-hidden">
          <motion.div
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-5"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <AnimatedCard key={`${testimonial.name}-${index}`} className="w-[320px] p-6">
                <Award className="size-7 text-neon-lime" />
                <p className="mt-6 text-base leading-7 text-foreground">"{testimonial.quote}"</p>
                <div className="mt-8">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Membership"
            title="Choose your learning velocity"
            description="Start free, unlock the full cinematic library, or work directly with mentors."
          />
        </Reveal>
        <Reveal delay={0.12} className="mt-12">
          <PricingToggle />
        </Reveal>
      </section>

      <section className="section-shell pb-28">
        <div className="glass-panel relative overflow-hidden rounded-lg px-6 py-16 text-center shadow-neon-mix md:px-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--neon-cyan)_/_0.22),transparent_44%),radial-gradient(circle_at_20%_100%,hsl(var(--neon-rose)_/_0.16),transparent_36%)]" />
          <div className="relative mx-auto max-w-3xl">
            <Zap className="mx-auto mb-6 size-10 text-neon-cyan" />
            <h2 className="text-display-section text-gradient-cinematic">
              Your guitar era starts with one cinematic practice session.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Step into a learning world where every chord, riff, and song feels alive.
            </p>
            <div className="mt-9 flex justify-center">
              <MagneticButton href="/dashboard">Enter ekguitarist</MagneticButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-muted-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span>ekguitarist</span>
          <span className="flex items-center gap-2">
            <Users className="size-4" />
            Built for the next generation of guitarists.
          </span>
        </div>
      </footer>
    </main>
  );
}
