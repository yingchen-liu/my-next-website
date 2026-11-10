import ArticleCard from "@/app/components/Articles/ArticleCard";
import { articles } from "@/lib/articles";
import { createPageMetadata } from "@/lib/seo/site";

export const metadata = createPageMetadata({
  title: "Technical Writing",
  description:
    "System-design case studies by Yingchen Liu on problem framing, architectural trade-offs, AI-assisted engineering, cross-platform systems, data migrations and release quality.",
  path: "/articles",
});

export default function ArticlesPage() {
  return (
    <main className="pb-24 pt-28 md:pt-36">
      <header className="max-w-4xl">
        <p className="font-sfmono text-sm tracking-[0.14em] text-blue-200/75">
          Engineering notes
        </p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
          Decisions, trade-offs and lessons from shipped products.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-blue-100/75 md:text-xl">
          Clear, evidence-led case studies from Mapify, Henri, AxIT and Aimi—how
          a vague requirement became a concrete problem, which trade-offs shaped
          the architecture, where AI accelerated the work, what changed in
          production and what I would carry into the next system.
        </p>
        <div className="mt-8 flex flex-wrap gap-2" aria-label="Topics covered">
          {[
            "System design",
            "Problem framing",
            "Architectural trade-offs",
            "AI-assisted engineering",
            "Cross-platform systems",
            "Evidence-led delivery",
          ].map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-blue-200/20 bg-blue-900/30 px-3 py-1.5 font-sfmono text-xs text-blue-100/85"
            >
              {topic}
            </span>
          ))}
        </div>
      </header>

      <section className="mt-16" aria-labelledby="case-studies-heading">
        <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-5">
          <h2 id="case-studies-heading" className="text-2xl font-semibold text-white">
            All case studies
          </h2>
          <p className="font-sfmono text-xs text-blue-200/55">
            {articles.length} articles · newest first
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </main>
  );
}

