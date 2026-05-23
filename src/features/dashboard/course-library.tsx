"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Filter, Search } from "lucide-react";

import { PageTransition } from "@/components/motion/page-transition";
import { FuturisticInput } from "@/components/ui/futuristic-input";
import { CourseCard } from "@/features/dashboard/components/course-card";
import { DashboardCard } from "@/features/dashboard/components/dashboard-card";
import { DashboardSection } from "@/features/dashboard/components/dashboard-section";
import { categories, recommendedCourses } from "@/features/dashboard/mock-data";
import { cn } from "@/lib/utils";
import { useDashboardStore } from "@/stores/dashboard-store";

export function CourseLibrary() {
  const { courseQuery, courseCategory, setCourseQuery, setCourseCategory } = useDashboardStore();

  const filteredCourses = recommendedCourses.filter((course) => {
    const matchesCategory = courseCategory === "All" || course.category === courseCategory;
    const query = courseQuery.toLowerCase();
    const matchesQuery =
      course.title.toLowerCase().includes(query) ||
      course.category.toLowerCase().includes(query) ||
      course.level.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
  });

  return (
    <PageTransition>
      <section className="glass-panel relative overflow-hidden rounded-lg p-6 md:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,hsl(var(--neon-violet)_/_0.18),transparent_28%),radial-gradient(circle_at_80%_20%,hsl(var(--neon-cyan)_/_0.2),transparent_32%)]" />
        <div className="relative max-w-3xl">
          <p className="eyebrow">Course library</p>
          <h1 className="mt-4 font-display text-4xl font-semibold md:text-6xl">
            Your cinematic course universe
          </h1>
          <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
            Search by style, level, mood, or goal. Every course card is designed to feel like a
            world you can step into.
          </p>
        </div>
      </section>

      <DashboardSection title="Discover courses" description="Filter the catalog without losing the Netflix flow.">
        <div className="mb-5 grid gap-4 lg:grid-cols-[1fr_auto]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <FuturisticInput
              value={courseQuery}
              onChange={(event) => setCourseQuery(event.target.value)}
              className="pl-11"
              placeholder="Search Bollywood, fingerstyle, lead guitar..."
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="glass-panel flex shrink-0 items-center gap-2 rounded-full px-4 py-3 text-sm text-muted-foreground">
              <Filter className="size-4" />
              Filters
            </span>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setCourseCategory(category)}
                className={cn(
                  "neon-focus shrink-0 rounded-full border border-white/10 px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground",
                  courseCategory === category &&
                    "border-primary/40 bg-primary text-primary-foreground shadow-neon-cyan"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredCourses.length === 0 ? (
          <DashboardCard className="mt-5 text-center">
            <p className="font-display text-2xl font-semibold">No course signal found</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try another style, artist mood, or skill category.
            </p>
          </DashboardCard>
        ) : null}
      </DashboardSection>
    </PageTransition>
  );
}
