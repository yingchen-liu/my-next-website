import { Metadata } from "next";
import Resume from "./resume";

export const metadata: Metadata = {
  title: 'Resume - Yingchen Liu | Senior Full-Stack Engineer',
}

export default function ResumePage() {
  return <Resume />
}
