import type { Metadata } from "next";

export const siteUrl = "https://yingchenliu.com";
export const siteName = "Yingchen Liu";
export const siteTitle =
  "Yingchen Liu | Senior Full-Stack Engineer & System Designer";
export const siteLocale = "en_AU";
export const siteLanguage = "en-AU";
export const linkedInUrl = "https://www.linkedin.com/in/yingchen-liu/";
export const contentLastModified = "2026-11-10";
export const socialImageAlt =
  "Yingchen Liu - Senior Full-Stack Engineer and System Designer";

export const siteDescription =
  "Yingchen Liu is a senior full-stack engineer who combines system-design judgement with AI-assisted engineering to turn ambiguous requirements into scalable products across web, mobile, backend and cloud.";

export const homeDescription =
  "Senior full-stack engineer specialising in system design, architectural trade-offs and AI-assisted delivery across web, mobile, backend and cloud.";

export const resumeDescription =
  "Résumé of Yingchen Liu, a senior full-stack engineer specialising in system design, AI-assisted engineering and cross-platform delivery across web, mobile, backend and cloud.";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "profile";
}): Metadata {
  const socialTitle = `${title} | ${siteName}`;
  const openGraphBase = {
    locale: siteLocale,
    url: path,
    siteName,
    title: socialTitle,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: socialImageAlt,
      },
    ],
  };

  return {
    title: {
      absolute: socialTitle,
    },
    description,
    alternates: {
      canonical: path,
    },
    openGraph:
      type === "profile"
        ? {
            ...openGraphBase,
            type: "profile",
            firstName: "Yingchen",
            lastName: "Liu",
            username: "yingchen-liu",
          }
        : {
            ...openGraphBase,
            type: "website",
          },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/twitter-image"],
    },
  };
}
