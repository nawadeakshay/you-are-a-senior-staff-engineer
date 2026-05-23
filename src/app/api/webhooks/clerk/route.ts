import { apiOk } from "@/server/api/response";

export async function POST() {
  return apiOk({ received: true, provider: "clerk", implemented: false });
}
