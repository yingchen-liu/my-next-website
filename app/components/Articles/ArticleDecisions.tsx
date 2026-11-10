import type { ArticleDecision } from "@/lib/articles";
import ArticleInlineText from "./ArticleInlineText";

export default function ArticleDecisions({
  decisions,
}: {
  decisions: ArticleDecision[];
}) {
  return (
      <ol
        className={`mt-6 grid gap-4 ${
          decisions.length > 3 ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}
      >
        {decisions.map((decision, index) => (
          <li
            key={decision.title}
            className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/[0.055]"
          >
            <span className="font-sfmono text-xs text-cyan-200/55">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-lg font-semibold leading-snug text-white">
              {decision.title}
            </h3>
            <p className="mt-3 text-[15px] leading-7 text-blue-100/72">
              <ArticleInlineText text={decision.detail} link={decision.link} />
            </p>
          </li>
        ))}
      </ol>
  );
}
