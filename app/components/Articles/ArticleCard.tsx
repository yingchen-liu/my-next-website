import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { articleProjectLabel, type Article } from "@/lib/articles";
import ArticleThumbnail from "./ArticleThumbnail";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-blue-200/35 hover:bg-white/[0.045]">
      <Link
        href={`/articles/${article.slug}`}
        tabIndex={-1}
        aria-label={`${article.title}: ${article.visual.title}`}
      >
        <div className="transition duration-500 group-hover:scale-[1.02]">
          <ArticleThumbnail article={article} />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-sfmono text-xs text-blue-200/65">
          <span>{articleProjectLabel(article)}</span>
          <span aria-hidden="true">·</span>
          <span>{article.workPeriod}</span>
        </div>
        <h2 className="mt-4 text-2xl font-semibold leading-tight text-white">
          <Link
            href={`/articles/${article.slug}`}
            className="transition-colors hover:text-blue-200"
          >
            {article.title}
          </Link>
        </h2>
        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-blue-100/75">
          {article.summary}
        </p>
        <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
          <span className="font-sfmono text-xs text-blue-100/50">
            {article.readingTime}
          </span>
          <Link
            href={`/articles/${article.slug}`}
            className="inline-flex items-center gap-2 font-sfmono text-sm text-blue-200 transition-colors hover:text-white"
          >
            Read case study <FaArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </article>
  );
}

