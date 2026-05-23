import { getPublishedCourses } from "@/features/courses/api";
import { apiOk, handleApiError } from "@/server/api/response";

export async function GET() {
  try {
    const courses = await getPublishedCourses();
    return apiOk({ courses });
  } catch (error) {
    return handleApiError(error);
  }
}
