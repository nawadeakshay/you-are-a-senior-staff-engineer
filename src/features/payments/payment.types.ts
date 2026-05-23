export type CheckoutProvider = "stripe" | "razorpay";

export type CreateCheckoutInput = {
  provider: CheckoutProvider;
  planId?: string;
  courseId?: string;
  successUrl: string;
  cancelUrl: string;
};
