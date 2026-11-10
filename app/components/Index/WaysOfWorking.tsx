import NextLink from "next/link";
import { getArticle } from "@/lib/articles";
import { Section } from "./Section";

const operatingPrinciples = [
  {
    title: "Frame the real problem",
    detail:
      "Turn incomplete requirements into outcomes, constraints, unknowns and acceptance boundaries the whole team can challenge.",
  },
  {
    title: "Design the trade-offs",
    detail:
      "Choose boundaries, ownership and failure behaviour deliberately—and document why one option won over another.",
  },
  {
    title: "Build the delivery system",
    detail:
      "Connect specifications, evidence and repeatable checks so the system and the team can evolve without relying on tribal knowledge.",
  },
];

const aiProgression = [
  {
    tool: "Cursor",
    stage: "Pair programming",
    detail:
      "Used assistant coding to explore and implement Mapify changes faster while keeping system boundaries and review decisions explicit.",
  },
  {
    tool: "Claude Code",
    stage: "Engineered guardrails",
    detail:
      "Added project instructions, behavioural specifications, plans, design rules, reusable skills and verification around Mapify and Henri.",
  },
  {
    tool: "Codex agent teams",
    stage: "Parallel delivery",
    detail:
      "Now coordinate isolated agents and worktrees across AxIT research, implementation and testing without blurring evidence or acceptance.",
  },
];

const examples = [
  {
    context: "AxLib + SBN Testing · Engineering ↔ QA",
    title: "Separate algorithm confidence from app acceptance",
    description:
      "Domain experts have limited time, while app testers should not have to recompute formulas. I designed two review phases: de-identified AxLib comparisons focus expert attention on algorithm differences; SBN Testing then lets the wider team verify observable behaviour against the exact build.",
    outcome: "Less context loss · clearer ownership · auditable decisions",
    articleSlugs: [
      "reviewable-metrics-from-algorithm-to-exact-build-qa",
      "one-metric-contract-across-ios-android-web-and-backend",
    ],
  },
  {
    context: "Mapify · Delivery system",
    title: "Make speed and release confidence reinforce each other",
    description:
      "I reduced CI builds from more than an hour to about 20 minutes, introduced a production-like pre-release environment, and added deployment requests, release templates, checks and confirmations. Parallel uploads and deployments made the path faster without making it less deliberate.",
    outcome: "Faster feedback · fewer late surprises · safer releases",
    articleSlugs: [],
  },
  {
    context: "Mapify + Henri + AxIT · AI-assisted engineering",
    title: "Use AI as an engineering team—not a shortcut",
    description:
      "I treat AI assistants like capable junior engineers: give them context, constraints and reviewable plans; let them accelerate implementation; then apply senior judgement to architecture, security, performance, technical debt and acceptance. I also document and share the practice so the team can reuse it.",
    outcome: "Faster iteration · durable context · human judgement stays in charge",
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
    <Section id="ways-of-working" title="From Ambiguity to Architecture">
      <article className="mb-10 overflow-hidden rounded-2xl border border-blue-200/20 bg-gradient-to-br from-blue-400/[0.11] via-indigo-400/[0.07] to-transparent p-5 md:mb-14 md:p-7">
        <div className="grid gap-7">
          <div className="max-w-3xl">
            <p className="font-sfmono text-xs uppercase tracking-[0.14em] text-cyan-100/70">
              AI-assisted engineering · since late 2025
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-snug text-white md:text-3xl">
              From coding assistant to an engineered AI team.
            </h3>
            <p className="mt-4 text-[15px] leading-7 text-blue-100/72">
              This is engineered vibe coding: my workflow evolved from asking
              AI for code to designing the context, guardrails and verification
              that let several assistants work safely on real products.
            </p>
          </div>

          <ol className="grid gap-3 md:grid-cols-3">
            {aiProgression.map((step, index) => (
              <li
                key={step.tool}
                className="rounded-xl border border-white/10 bg-gray-950/20 p-4"
              >
                <span className="font-sfmono text-xs text-blue-200/45">
                  0{index + 1}
                </span>
                <h4 className="mt-3 font-semibold text-white">{step.tool}</h4>
                <p className="mt-1 font-sfmono text-xs text-cyan-100/65">
                  {step.stage}
                </p>
                <p className="mt-3 text-sm leading-6 text-blue-100/65">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </article>

      <div className="grid w-full gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div>
          <p className="max-w-xl text-2xl font-semibold leading-snug text-white md:text-3xl">
            AI accelerates implementation. Judgement still shapes the system.
          </p>
          <p className="mt-5 max-w-xl text-[17px] leading-8 text-blue-100/78">
            I make the difficult parts concrete before they become expensive:
            what success means, where the boundaries belong, which trade-offs
            are acceptable and how the team will know the result works.
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
