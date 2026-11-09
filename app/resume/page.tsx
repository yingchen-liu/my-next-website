import Resume from "./resume";
import { createPageMetadata, resumeDescription } from "@/lib/seo/site";

export const metadata = createPageMetadata({
  title: "Résumé – Full-Stack, AI, iOS & Android Engineer",
  description: resumeDescription,
  path: "/resume",
});

export default function ResumePage() {
  return (
    <main>
      <Resume />
    </main>
  );
}
