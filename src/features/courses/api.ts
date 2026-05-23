import { prisma } from "@/server/db/prisma";

export async function getPublishedCourses() {
  return prisma.course.findMany({
    where: { status: "PUBLISHED", deletedAt: null },
    include: { instructor: true },
    orderBy: { publishedAt: "desc" },
    take: 24
  });
}
