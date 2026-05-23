"use client";

import { Edit3, Flame, Guitar, Medal, Settings, Trophy } from "lucide-react";

import { PageTransition } from "@/components/motion/page-transition";
import { FuturisticInput } from "@/components/ui/futuristic-input";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { DashboardCard } from "@/features/dashboard/components/dashboard-card";
import { DashboardSection } from "@/features/dashboard/components/dashboard-section";
import { XpBar } from "@/features/dashboard/components/xp-bar";
import {
  achievements,
  recommendedCourses,
  streakHistory,
  student
} from "@/features/dashboard/mock-data";

export function StudentProfile() {
  return (
    <PageTransition>
      <section className="glass-panel relative overflow-hidden rounded-lg p-6 md:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,hsl(var(--neon-cyan)_/_0.18),transparent_28%),radial-gradient(circle_at_20%_90%,hsl(var(--neon-rose)_/_0.16),transparent_34%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <div className="grid size-28 place-items-center rounded-full bg-gradient-to-br from-neon-cyan via-neon-violet to-neon-lime font-display text-4xl font-semibold text-background shadow-neon-mix">
            {student.avatarInitials}
          </div>
          <div>
            <p className="eyebrow">Student profile</p>
            <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">{student.name} Mehta</h1>
            <p className="mt-3 text-muted-foreground">{student.handle} - Bollywood rhythm explorer</p>
            <div className="mt-6 max-w-2xl">
              <XpBar level={student.level} xp={student.xp} nextLevelXp={student.nextLevelXp} />
            </div>
          </div>
          <MagneticButton href="#edit" variant="secondary">
            Edit profile
          </MagneticButton>
        </div>
      </section>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Current streak", value: `${student.streakDays} days`, icon: Flame },
          { label: "Courses enrolled", value: "7", icon: Guitar },
          { label: "Badges earned", value: "23", icon: Medal },
          { label: "XP rank", value: "Top 8%", icon: Trophy }
        ].map((stat) => (
          <DashboardCard key={stat.label}>
            <stat.icon className="size-6 text-neon-cyan" />
            <p className="mt-5 font-display text-3xl font-semibold">{stat.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </DashboardCard>
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <DashboardSection title="Streak history" description="A two-week snapshot of practice consistency.">
          <DashboardCard>
            <div className="flex h-48 items-end gap-3">
              {streakHistory.map((value, index) => (
                <div key={`${value}-${index}`} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t-full bg-gradient-to-t from-neon-rose via-neon-cyan to-neon-lime shadow-neon-cyan"
                    style={{ height: `${value}%` }}
                  />
                  <span className="font-mono text-[10px] text-muted-foreground">{index + 1}</span>
                </div>
              ))}
            </div>
          </DashboardCard>
        </DashboardSection>

        <DashboardSection title="Profile settings" description="Frontend-only editable surface for now.">
          <DashboardCard id="edit">
            <div className="mb-5 flex items-center gap-3">
              <Settings className="size-5 text-neon-cyan" />
              <h3 className="font-display text-xl font-semibold">Learning identity</h3>
            </div>
            <div className="grid gap-4">
              <FuturisticInput defaultValue="Aarav Mehta" aria-label="Name" />
              <FuturisticInput defaultValue="Bollywood rhythm explorer" aria-label="Bio" />
              <button className="neon-focus inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-neon-cyan">
                <Edit3 className="size-4" />
                Save changes
              </button>
            </div>
          </DashboardCard>
        </DashboardSection>
      </div>

      <DashboardSection title="Enrolled courses" description="Your active learning worlds.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {recommendedCourses.slice(0, 3).map((course) => (
            <DashboardCard key={course.id}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-neon-cyan">
                {course.category}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold">{course.title}</h3>
              <div className="mt-5 h-2 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-lime"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{course.progress}% complete</p>
            </DashboardCard>
          ))}
        </div>
      </DashboardSection>

      <DashboardSection title="Achievement vault" description="Unlocked and upcoming progression rewards.">
        <div className="grid gap-4 md:grid-cols-4">
          {achievements.map((achievement) => (
            <DashboardCard key={achievement.title} className={!achievement.unlocked ? "opacity-55" : ""}>
              <achievement.icon className="size-7 text-neon-lime" />
              <h3 className="mt-4 font-display text-xl font-semibold">{achievement.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{achievement.detail}</p>
            </DashboardCard>
          ))}
        </div>
      </DashboardSection>
    </PageTransition>
  );
}
