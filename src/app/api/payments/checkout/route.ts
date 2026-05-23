import { auth } from "@clerk/nextjs/server";
import { z } from "zod";

import { createCheckoutSession } from "@/features/payments/checkout.service";
import { apiError, apiOk, handleApiError } from "@/server/api/response";

const checkoutSchema = z.object({
  provider: z.enum(["stripe", "razorpay"]),
  planId: z.string().optional(),
  courseId: z.string().optional(),
  successUrl: z.string().url(),
  cancelUrl: z.string().url()
});

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session.userId) {
      return apiError("Unauthorized", 401);
    }

    const payload = checkoutSchema.parse(await request.json());
    const checkout = await createCheckoutSession(payload, session.userId);

    return apiOk(checkout);
  } catch (error) {
    return handleApiError(error);
  }
}
