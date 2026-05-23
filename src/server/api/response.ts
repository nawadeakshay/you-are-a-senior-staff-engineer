import { NextResponse } from "next/server";
import { ZodError } from "zod";

export function apiOk<T>(data: T, init?: ResponseInit) {
  return NextResponse.json({ data }, init);
}

export function apiError(message: string, status = 400, details?: unknown) {
  return NextResponse.json({ error: { message, details } }, { status });
}

export function handleApiError(error: unknown) {
  if (error instanceof ZodError) {
    return apiError("Invalid request payload", 422, error.flatten());
  }

  return apiError("Unexpected server error", 500);
}
