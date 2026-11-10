import Image from "next/image";
import type { ArticleSection } from "@/lib/articles";
import ArticleInlineText from "./ArticleInlineText";

export default function ArticlePrimer({
  primer,
}: {
  primer: ArticleSection;
}) {
  return (
    <section
      id="intro"
      className="mt-16 scroll-mt-28 rounded-2xl border border-cyan-200/20 bg-gradient-to-br from-cyan-400/[0.08] to-blue-700/[0.08] p-6 md:p-8"
      aria-labelledby="intro-heading"
    >
      <p className="font-sfmono text-xs text-blue-200/45">01</p>
      <h2
        id="intro-heading"
        className="mt-2 text-2xl font-semibold text-white md:text-3xl"
      >
        {primer.title}
      </h2>
      <div className="mt-5 max-w-3xl space-y-4 text-[17px] leading-8 text-blue-100/85">
        {primer.paragraphs.slice(0, 1).map((paragraph) => {
          const text = typeof paragraph === "string" ? paragraph : paragraph.text;
          const link = typeof paragraph === "string" ? undefined : paragraph.link;

          return (
            <p key={text}>
              <ArticleInlineText text={text} link={link} />
            </p>
          );
        })}
      </div>
      {primer.image && (
        <figure className="mt-5">
          <Image
            src={primer.image.src}
            alt={primer.image.alt}
            width={1600}
            height={1067}
            className="w-full rounded-xl"
          />
          <figcaption className="mt-3 max-w-3xl text-sm leading-6 text-blue-100/65">
            {primer.image.caption}
          </figcaption>
        </figure>
      )}
      {primer.paragraphs.length > 1 && (
        <div className="mt-5 max-w-3xl space-y-4 text-[17px] leading-8 text-blue-100/85">
          {primer.paragraphs.slice(1).map((paragraph) => {
            const text = typeof paragraph === "string" ? paragraph : paragraph.text;
            const link = typeof paragraph === "string" ? undefined : paragraph.link;

            return (
              <p key={text}>
                <ArticleInlineText text={text} link={link} />
              </p>
            );
          })}
        </div>
      )}
    </section>
  );
}
