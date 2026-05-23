"use client";

import { motion } from "framer-motion";
import { Flame, Sparkles, Trophy, Users } from "lucide-react";

import { PageTransition } from "@/components/motion/page-transition";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { DashboardCard } from "@/features/dashboard/components/dashboard-card";
import { DashboardSection } from "@/features/dashboard/components/dashboard-section";
import { LessonCard } from "@/features/dashboard/components/lesson-card";
import { ProgressRing } from "@/features/dashboard/components/progress-ring";
import { XpBar } from "@/features/dashboard/components/xp-bar";
import {
  achievements,
  activityFeed,
  continueLessons,
  liveClasses,
  practiceGoals,
  recommendedCourses,
  student
} from "@/features/dashboard/mock-data";
import { CourseCard } from "@/features/dashboard/components/course-card";

const momentumStats = [
  { label: "Quests cleared", value: "27", icon: Trophy },
  { label: "Community assists", value: "14", icon: Users },
  { label: "Perfect practice days", value: "9", icon: Sparkles }
];

export function DashboardHome() {
  const goalProgress = Math.round((student.weeklyPracticeMinutes / student.goalMinutes) * 100);

  return (
    <PageTransition>
      <div className="grid gap-6 xl:grid-cols-[1.5fr_0.82fr]">
        <section className="glass-panel relative overflow-hidden rounded-lg p-6 md:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,hsl(var(--neon-cyan)_/_0.2),transparent_30%),radial-gradient(circle_at_10%_90%,hsl(var(--neon-violet)_/_0.18),transparent_34%)]" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="eyebrow">Student command center</p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                Welcome back, <span className="text-gradient-cinematic">{student.name}</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                {student.message}
              </p>
              <div className="mt-7 max-w-xl">
                <XpBar level={student.level} xp={student.xp} nextLevelXp={student.nextLevelXp} />
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <MagneticButton href="#continue">Continue learning</MagneticButton>
                <MagneticButton href="/dashboard/courses" variant="secondary">
                  Browse courses
                </MagneticButton>
              </div>
            </div>
            <div className="mx-auto">
              <ProgressRing value={goalProgress} label={`${student.streakDays}`} caption="day streak" />
            </div>
          </div>
        </section>

        <DashboardCard className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-neon-rose via-neon-cyan to-neon-lime" />
          <div className="flex items-center gap-3">
            <Flame className="size-8 text-neon-rose" />
            <div>
              <p className="font-display text-2xl font-semibold">{student.weeklyPracticeMinutes} min</p>
              <p className="text-sm text-muted-foreground">practiced this week</p>
            </div>
          </div>
          <div className="mt-7 grid grid-cols-7 gap-2">
            {Array.from({ length: 7 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ height: 18 }}
                animate={{ height: 34 + ((index * 13) % 42) }}
                transition={{ delay: index * 0.06, duration: 0.6 }}
                className="rounded-full bg-gradient-to-t from-neon-rose to-neon-lime shadow-neon-cyan"
              />
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-muted-foreground">
            Hit 54 more minutes to finish your weekly goal and earn a rare consistency badge.
          </p>
        </DashboardCard>
      </div>

      <DashboardSection
        title="Continue Learning"
        description="Pick up exactly where your last practice session faded out."
        action={<a className="text-sm font-semibold text-neon-cyan" href="/dashboard/courses">View all</a>}
      >
        <div id="continue" className="flex snap-x gap-5 overflow-x-auto pb-4">
          {continueLessons.map((lesson) => (
            <LessonCard key={lesson.id} {...lesson} />
          ))}
        </div>
      </DashboardSection>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.86fr]">
        <DashboardSection title="Daily Practice Goals" description="Small wins stacked into musicianship.">
          <div className="grid gap-4 md:grid-cols-2">
            {practiceGoals.map((goal) => (
              <DashboardCard key={goal.label}>
                <div className="mb-4 flex items-center gap-3">
                  <goal.icon className="size-5 text-neon-cyan" />
                  <span className="font-semibold">{goal.label}</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${goal.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.72 }}
                    className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-lime"
                  />
                </div>
                <p className="mt-3 font-mono text-sm text-muted-foreground">{goal.value}% complete</p>
              </DashboardCard>
            ))}
          </div>
        </DashboardSection>

        <DashboardSection title="Achievements" description="Badges that make progress visible.">
          <div className="grid gap-4 sm:grid-cols-2">
            {achievements.map((badge) => (
              <DashboardCard key={badge.title} className={!badge.unlocked ? "opacity-55" : ""}>
                <badge.icon className="size-7 text-neon-lime" />
                <h3 className="mt-4 font-display text-xl font-semibold">{badge.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{badge.detail}</p>
              </DashboardCard>
            ))}
          </div>
        </DashboardSection>
      </div>

      <DashboardSection title="Recommended Courses" description="Personalized paths based on your current momentum.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {recommendedCourses.slice(0, 3).map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </DashboardSection>

      <div className="mt-8 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <DashboardSection title="Upcoming Live Classes" description="Real rooms, real timing, real accountability.">
          <div className="grid gap-4">
            {liveClasses.map((item) => (
              <DashboardCard key={item.title}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/[0.15] text-neon-cyan">
                      <item.icon className="size-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.instructor} - {item.seats} seats
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-xs text-neon-cyan">
                    {item.startsIn}
                  </span>
                </div>
                <button className="neon-focus mt-5 w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-neon-cyan">
                  Join class
                </button>
              </DashboardCard>
            ))}
          </div>
        </DashboardSection>

        <DashboardSection title="Activity Feed" description="The visible trail of your musical momentum.">
          <div className="glass-panel rounded-lg p-2">
            {activityFeed.map((item) => (
              <div key={`${item.event}-${item.subject}`} className="flex items-center gap-4 rounded-md p-4">
                <span className="grid size-10 place-items-center rounded-full bg-white/10 text-neon-cyan">
                  <item.icon className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm">
                    <span className="font-semibold">{item.event}</span>{" "}
                    <span className="text-muted-foreground">{item.subject}</span>
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </DashboardSection>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {momentumStats.map((stat) => (
          <DashboardCard key={stat.label}>
            <stat.icon className="size-6 text-neon-cyan" />
            <p className="mt-5 font-display text-3xl font-semibold">{stat.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </DashboardCard>
        ))}
      </div>
    </PageTransition>
  );
}
