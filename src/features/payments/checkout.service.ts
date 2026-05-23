import type { CreateCheckoutInput } from "@/features/payments/payment.types";

export async function createCheckoutSession(input: CreateCheckoutInput, userId: string) {
  void input;
  void userId;

  throw new Error("Checkout service is intentionally scaffolded. Implement provider flow next.");
}
