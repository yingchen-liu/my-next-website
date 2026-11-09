import { Metadata } from "next";
import Resume from "./resume";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Yingchen Liu, a Melbourne-based senior full-stack, AI, and mobile engineer building products across React, Next.js, TypeScript, Swift, Kotlin, Bluetooth LE, AWS, GCP, and PostgreSQL.",
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return <Resume />
}
