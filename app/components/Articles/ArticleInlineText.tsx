import Link from "next/link";
import { getArticle, type ArticleInlineLink } from "@/lib/articles";

export default function ArticleInlineText({
  text,
  link,
}: {
  text: string;
  link?: ArticleInlineLink;
}) {
  if (!link) {
    return text;
  }

  const article = getArticle(link.slug);
  if (!article) {
    throw new Error(`Article links to a missing article: ${link.slug}`);
  }

  const phraseIndex = text.indexOf(link.phrase);
  if (phraseIndex < 0) {
    throw new Error(`Article link phrase is missing from its sentence: ${link.phrase}`);
  }

  return (
    <>
      {text.slice(0, phraseIndex)}
      <Link
        href={`/articles/${article.slug}`}
        className="text-blue-100 underline decoration-blue-200/40 underline-offset-4 transition hover:text-white hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200"
      >
        {link.phrase}
      </Link>
      {text.slice(phraseIndex + link.phrase.length)}
    </>
  );
}
