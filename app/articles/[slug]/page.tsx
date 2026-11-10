import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ArticleContents, {
  type ArticleContentsItem,
} from "@/app/components/Articles/ArticleContents";
import ArticleDecisions from "@/app/components/Articles/ArticleDecisions";
import ArticleInlineText from "@/app/components/Articles/ArticleInlineText";
import ArticleMediaGallery from "@/app/components/Articles/ArticleMediaGallery";
import ArticlePrimer from "@/app/components/Articles/ArticlePrimer";
import ArticleVisual from "@/app/components/Articles/ArticleVisual";
import {
  articleProjectLabel,
  articles,
  getArticle,
  type ArticleSection,
} from "@/lib/articles";
import {
  absoluteUrl,
  contentLastModified,
  siteLanguage,
  siteName,
  siteUrl,
} from "@/lib/seo/site";

type NarrativeRole =
  | "problem"
  | "discussion"
  | "decision"
  | "outcome"
  | "learning";

function nestSection(
  sections: ArticleContentsItem[],
): ArticleContentsItem | null {
  const [parent, ...children] = sections;
  if (!parent) return null;
  return children.length > 0 ? { ...parent, children } : parent;
}

function sectionRole(title: string): NarrativeRole {
  const name = title.toLowerCase();
  if (name === "the problem" || name === "separate the metrics before ios") {
    return "problem";
  }
  if (name === "the decision") return "decision";
  if (name.startsWith("what improved")) return "outcome";
  if (name === "what i learned") return "learning";
  return "discussion";
}

function SectionCopy({
  id,
  number,
  section,
}: {
  id: string;
  number?: string;
  section: ArticleSection;
}) {
  const Heading = number ? "h2" : "h3";

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={
        number
          ? "mt-16 scroll-mt-28 border-t border-white/10 pt-10"
          : "mt-12 scroll-mt-28"
      }
    >
      {number && (
        <p className="font-sfmono text-xs text-blue-200/45">{number}</p>
      )}
      <Heading
        id={`${id}-heading`}
        className={
          number
            ? "mt-2 max-w-3xl text-2xl font-semibold text-white md:text-3xl"
            : "max-w-3xl text-xl font-semibold text-white"
        }
      >
        {section.title}
      </Heading>
      <div className="mt-5 max-w-3xl space-y-5 text-[17px] leading-8 text-blue-100/80">
        {section.paragraphs.map((paragraph) => {
          const text = typeof paragraph === "string" ? paragraph : paragraph.text;
          const link = typeof paragraph === "string" ? undefined : paragraph.link;

          return (
            <p key={text}>
              <ArticleInlineText text={text} link={link} />
            </p>
          );
        })}
      </div>
      {section.evidence && section.evidence.length > 0 && (
        <ArticleMediaGallery media={section.evidence} />
      )}
      {section.bullets && (
        <ul className="mt-6 grid max-w-3xl gap-3">
          {section.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-[15px] leading-relaxed text-blue-100/80"
            >
              <span aria-hidden="true" className="text-blue-300">
                →
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function ArticlePart({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number?: string;
  title: string;
  children: ReactNode;
}) {
  const Heading = number ? "h2" : "h3";

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={
        number
          ? "mt-16 scroll-mt-28 border-t border-white/10 pt-10"
          : "mt-12 scroll-mt-28"
      }
    >
      {number && (
        <p className="font-sfmono text-xs text-blue-200/45">{number}</p>
      )}
      <Heading
        id={`${id}-heading`}
        className={
          number
            ? "mt-2 text-2xl font-semibold text-white md:text-3xl"
            : "text-xl font-semibold text-white"
        }
      >
        {title}
      </Heading>
      {children}
    </section>
  );
}

function formatWorkDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Intl.DateTimeFormat("en-AU", {
    day: day ? "numeric" : undefined,
    month: "long",
    year: "numeric",
  }).format(new Date(year, (month ?? 1) - 1, day || 1));
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) return {};

  const path = `/articles/${article.slug}`;
  const title = `${article.title} | ${siteName}`;

  return {
    title: { absolute: title },
    description: article.summary,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: "en_AU",
      url: path,
      siteName,
      title,
      description: article.summary,
      publishedTime: article.publishedOn,
      authors: [siteName],
      tags: article.tags,
      images: [
        {
          url: article.image,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: article.summary,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  const articleIndex = articles.findIndex((candidate) => candidate.slug === slug);
  const nextArticle = articles[articleIndex + 1] ?? articles[0];
  const narrative = {
    problem: [] as ArticleSection[],
    discussion: [] as ArticleSection[],
    decision: [] as ArticleSection[],
    outcome: [] as ArticleSection[],
    learning: [] as ArticleSection[],
  };
  for (const section of article.sections) {
    narrative[sectionRole(section.title)].push(section);
  }
  const outline = [
    { id: "intro", label: article.primer.title, kind: "primer" as const },
    ...narrative.problem.map((section, index) => ({
      id: `problem-${index}`,
      label: section.title,
      kind: "section" as const,
      section,
    })),
    {
      id: "article-visual",
      label: article.visual.title,
      kind: "visual" as const,
    },
    ...narrative.discussion.map((section, index) => ({
      id: `discussion-${index}`,
      label: section.title,
      kind: "section" as const,
      section,
    })),
    ...narrative.decision.map((section, index) => ({
      id: `decision-${index}`,
      label: section.title,
      kind: "section" as const,
      section,
    })),
    {
      id: "engineering-decisions",
      label: "The decisions that shaped the system",
      kind: "decisions" as const,
    },
    ...narrative.outcome.map((section, index) => ({
      id: `outcome-${index}`,
      label: section.title,
      kind: "section" as const,
      section,
    })),
    ...(article.media
      ? [
          {
            id: "product-evidence",
            label: "What the architecture enabled",
            kind: "media" as const,
          },
        ]
      : []),
    ...narrative.learning.map((section, index) => ({
      id: `learning-${index}`,
      label: section.title,
      kind: "section" as const,
      section,
    })),
    {
      id: "article-takeaways",
      label: "Takeaways",
      kind: "takeaways" as const,
    },
  ];
  const contents = [
    { id: "intro", label: article.primer.title },
    nestSection(
      narrative.problem.map((section, index) => ({
        id: `problem-${index}`,
        label: section.title,
      })),
    ),
    nestSection([
      { id: "article-visual", label: article.visual.title },
      ...narrative.discussion.map((section, index) => ({
        id: `discussion-${index}`,
        label: section.title,
      })),
    ]),
    nestSection([
      ...narrative.decision.map((section, index) => ({
        id: `decision-${index}`,
        label: section.title,
      })),
      {
        id: "engineering-decisions",
        label: "The decisions that shaped the system",
      },
    ]),
    nestSection([
      ...narrative.outcome.map((section, index) => ({
        id: `outcome-${index}`,
        label: section.title,
      })),
      ...(article.media
        ? [
            {
              id: "product-evidence",
              label: "What the architecture enabled",
            },
          ]
        : []),
    ]),
    nestSection([
      ...narrative.learning.map((section, index) => ({
        id: `learning-${index}`,
        label: section.title,
      })),
      { id: "article-takeaways", label: "Takeaways" },
    ]),
  ].filter((item): item is ArticleContentsItem => item !== null);
  const articleUrl = `${siteUrl}/articles/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.summary,
    url: articleUrl,
    mainEntityOfPage: articleUrl,
    image: absoluteUrl(article.image),
    datePublished: article.publishedOn,
    dateModified: contentLastModified,
    inLanguage: siteLanguage,
    temporalCoverage: article.workPeriod,
    about: [article.project, ...(article.relatedProjects ?? [])],
    keywords: article.tags.join(", "),
    author: {
      "@type": "Person",
      name: siteName,
      url: siteUrl,
      image: absoluteUrl("/images/yingchen-linkedin.jpg"),
    },
    publisher: {
      "@type": "Person",
      name: siteName,
      url: siteUrl,
    },
  };

  return (
    <main className="pb-24 pt-28 md:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Link
        href="/articles"
        className="inline-flex items-center gap-2 font-sfmono text-sm text-blue-200/75 transition-colors hover:text-white"
      >
        <FaArrowLeft className="h-3 w-3" /> All writing
      </Link>

      <article className="mt-10">
        <header>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-sfmono text-xs uppercase tracking-[0.14em] text-blue-200/65">
            <span>{articleProjectLabel(article)}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] text-white md:text-6xl">
            {article.title}
          </h1>
          <div className="mt-6 flex items-center gap-3">
            <Image
              src="/images/yingchen-linkedin.jpg"
              alt=""
              width={88}
              height={88}
              className="h-11 w-11 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-white">{siteName}</p>
              <time
                dateTime={article.publishedOn}
                className="mt-0.5 block font-sfmono text-xs text-blue-200/70"
              >
                {formatWorkDate(article.publishedOn)}
              </time>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-blue-100/75">
            {article.summary}
          </p>
          <ul className="mt-7 flex flex-wrap gap-2" aria-label="Article topics">
            {article.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-blue-200/20 bg-blue-900/30 px-3 py-1.5 font-sfmono text-xs text-blue-100/85"
              >
                {tag}
              </li>
            ))}
          </ul>
        </header>

        <div className="mt-10">
          <ArticleContents items={contents} />
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-white">
          <Image
            src={article.image}
            alt={article.imageAlt}
            width={1600}
            height={900}
            priority
            className="aspect-[16/8] w-full object-cover"
          />
        </div>

        {outline.map((item) => {
          const number = contents
            .map((entry, index) =>
              entry.id === item.id
                ? String(index + 1).padStart(2, "0")
                : undefined,
            )
            .find(Boolean);

          if (item.kind === "primer") {
            return <ArticlePrimer key={item.id} primer={article.primer} />;
          }

          if (item.kind === "section") {
            return (
              <SectionCopy
                key={item.id}
                id={item.id}
                number={number}
                section={item.section}
              />
            );
          }

          if (item.kind === "visual") {
            return (
              <ArticlePart
                key={item.id}
                id={item.id}
                number={number}
                title={item.label}
              >
                <ArticleVisual visual={article.visual} />
              </ArticlePart>
            );
          }

          if (item.kind === "decisions") {
            return (
              <ArticlePart
                key={item.id}
                id={item.id}
                number={number}
                title={item.label}
              >
                <ArticleDecisions decisions={article.decisions} />
              </ArticlePart>
            );
          }

          if (item.kind === "media" && article.media) {
            return (
              <ArticlePart
                key={item.id}
                id={item.id}
                number={number}
                title={item.label}
              >
                <p className="mt-3 max-w-3xl text-[15px] leading-7 text-blue-100/65">
                  Public or de-identified product views, with the engineering
                  relevance made explicit.
                </p>
                <ArticleMediaGallery media={article.media} />
              </ArticlePart>
            );
          }

          return (
            <ArticlePart
              key={item.id}
              id={item.id}
              number={number}
              title={item.label}
            >
              <ul className="mt-6 grid max-w-3xl gap-3 rounded-2xl border border-blue-200/20 bg-blue-900/25 p-6 md:p-8">
                {article.takeaways.map((takeaway) => (
                  <li key={takeaway} className="flex gap-3 text-blue-100/85">
                    <span aria-hidden="true" className="text-cyan-300">
                      ✓
                    </span>
                    {takeaway}
                  </li>
                ))}
              </ul>
            </ArticlePart>
          );
        })}

        <footer className="mt-14 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">
          <Link
            href={article.projectHref}
            className="rounded-xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-blue-200/35 hover:bg-white/[0.045]"
          >
            <span className="font-sfmono text-xs text-blue-200/55">
              {article.relatedProjects ? "Back to featured work" : "Back to project"}
            </span>
            <span className="mt-2 block font-semibold text-white">
              {articleProjectLabel(article)}
            </span>
          </Link>
          <Link
            href={`/articles/${nextArticle.slug}`}
            className="group rounded-xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-blue-200/35 hover:bg-white/[0.045]"
          >
            <span className="font-sfmono text-xs text-blue-200/55">
              Read next
            </span>
            <span className="mt-2 flex items-center justify-between gap-4 font-semibold text-white">
              {nextArticle.title}
              <FaArrowRight className="h-3 w-3 shrink-0 text-blue-200 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </footer>
      </article>
    </main>
  );
}

