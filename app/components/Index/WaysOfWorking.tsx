import NextLink from "next/link";
import { getArticle } from "@/lib/articles";
import { Section } from "./Section";

const operatingPrinciples = [
  {
    title: "Make decisions explicit",
    detail:
      "Turn requirements, edge cases and acceptance boundaries into specifications, state models and reviewable plans.",
  },
  {
    title: "Make evidence shareable",
    detail:
      "Give engineering, QA and release owners one durable record instead of screenshots and context scattered across chats.",
  },
  {
    title: "Make delivery repeatable",
    detail:
      "Move checks earlier, automate routine work and leave a path the next person can run without tribal knowledge.",
  },
];

const examples = [
  {
    context: "AxLib + SBN Testing · Engineering ↔ QA",
    title: "One review path from algorithm to release",
    description:
      "I connected de-identified AxLib trace exploration with SBN Testing’s exact-build plans, shared evidence, preserved history and discussions. Engineers can explain a calculation, testers can verify observable behaviour, and release owners can see what remains unproven—without treating one green check as every kind of approval.",
    outcome: "Less context loss · clearer ownership · auditable decisions",
    articleSlugs: [
      "reviewable-metrics-from-algorithm-to-exact-build-qa",
      "one-metric-contract-across-ios-android-web-and-backend",
    ],
  },
  {
    context: "Mapify · Delivery system",
    title: "A release path that finds problems before production",
    description:
      "I reduced CI builds from more than an hour to about 20 minutes, introduced a production-like pre-release environment, and added deployment requests, release templates, checks and confirmations. Parallel uploads and deployments made the path faster without making it less deliberate.",
    outcome: "Faster feedback · fewer late surprises · safer releases",
    articleSlugs: [],
  },
  {
    context: "Mapify + Henri · Team enablement",
    title: "Shared context instead of private knowledge",
    description:
      "I established dedicated technical discussions, documented architecture and release decisions, worked with QA on model-call testing, helped onboard engineers, shared AI-assisted development practices, and coordinated product, infrastructure and security work from requirements through release.",
    outcome: "Clearer hand-offs · faster onboarding · decisions that last",
    articleSlugs: [],
  },
];

const examplesWithArticles = examples.map((example) => ({
  ...example,
  articles: example.articleSlugs.map((slug) => {
    const article = getArticle(slug);
    if (!article) {
      throw new Error(`Ways of working links to a missing article: ${slug}`);
    }
    return article;
  }),
}));

export default function WaysOfWorking() {
  return (
    <Section id="ways-of-working" title="How I Improve the Work">
      <div className="grid w-full gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div>
          <p className="max-w-xl text-2xl font-semibold leading-snug text-white md:text-3xl">
            Good software is only part of the outcome.
          </p>
          <p className="mt-5 max-w-xl text-[17px] leading-8 text-blue-100/78">
            I also improve how a team turns an idea into a trusted release:
            how decisions are made, how evidence moves between people and how
            the next change becomes easier than the last.
          </p>

          <ol className="mt-8 grid gap-3">
            {operatingPrinciples.map((principle, index) => (
              <li
                key={principle.title}
                className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4"
              >
                <span className="font-sfmono text-xs text-cyan-200/55">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-blue-100/65">
                    {principle.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid gap-4">
          {examplesWithArticles.map((example, index) => (
            <article
              key={example.title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200/30 md:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="font-sfmono text-xs uppercase tracking-[0.12em] text-blue-200/60">
                  {example.context}
                </p>
                <span className="shrink-0 font-sfmono text-xs text-blue-200/35">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-snug text-white md:text-2xl">
                {example.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-blue-100/72">
                {example.description}
              </p>
              <p className="mt-5 border-t border-white/10 pt-4 font-sfmono text-xs leading-5 text-cyan-100/70">
                {example.outcome}
              </p>
              {example.articles.length > 0 && (
                <div className="mt-4">
                  <p className="font-sfmono text-xs uppercase tracking-[0.14em] text-blue-200/55">
                    Read more
                  </p>
                  <ul className="mt-2 grid gap-1">
                    {example.articles.map((article) => (
                      <li key={article.slug}>
                        <NextLink
                          href={`/articles/${article.slug}`}
                          className="group/article flex items-start justify-between gap-3 rounded-lg py-1.5 text-sm leading-snug text-blue-100/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200"
                        >
                          <span>{article.title}</span>
                          <span
                            aria-hidden="true"
                            className="shrink-0 font-sfmono text-blue-200/50 transition-transform group-hover/article:translate-x-1"
                          >
                            →
                          </span>
                        </NextLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
