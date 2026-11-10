import type { MetadataRoute } from "next";
import {
  absoluteUrl,
  contentLastModified,
  siteUrl,
} from "@/lib/seo/site";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: contentLastModified,
      images: [
        absoluteUrl("/images/yingchen-linkedin.jpg"),
        absoluteUrl("/images/mapify.png"),
        absoluteUrl("/images/henri.png"),
        absoluteUrl("/images/axit-results.jpeg"),
      ],
    },
    {
      url: `${siteUrl}/resume`,
      lastModified: contentLastModified,
    },
    {
      url: `${siteUrl}/articles`,
      lastModified: contentLastModified,
    },
    ...articles.map((article) => ({
      url: `${siteUrl}/articles/${article.slug}`,
      lastModified: contentLastModified,
      images: [absoluteUrl(article.image)],
    })),
  ];
}
