export type CourseLevel = "beginner" | "intermediate" | "advanced" | "masterclass";

export type CourseCardModel = {
  id: string;
  slug: string;
  title: string;
  level: CourseLevel;
  instructorName: string;
  thumbnailUrl?: string;
};
