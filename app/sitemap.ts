import type { MetadataRoute } from "next";
import {
  absoluteUrl,
  contentLastModified,
  siteUrl,
} from "@/lib/seo/site";

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
  ];
}
