import type { Metadata } from "next";

import { LandingPage } from "@/features/landing/landing-page";

export const metadata: Metadata = {
  title: "Learn Guitar In A Whole New Dimension",
  description:
    "Master Bollywood, acoustic, fingerstyle, and western guitar through immersive cinematic learning experiences.",
  openGraph: {
    title: "Learn Guitar In A Whole New Dimension | ekguitarist",
    description:
      "Master Bollywood, acoustic, fingerstyle, and western guitar through immersive cinematic learning experiences."
  }
};

export default function HomePage() {
  return <LandingPage />;
}
