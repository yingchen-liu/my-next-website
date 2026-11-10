import type { Metadata } from "next";

export const siteUrl = "https://yingchenliu.com";
export const siteName = "Yingchen Liu";
export const siteTitle = "Yingchen Liu | Senior Full-Stack & AI Engineer";
export const siteLocale = "en_AU";
export const siteLanguage = "en-AU";
export const linkedInUrl = "https://www.linkedin.com/in/yingchen-liu/";
export const contentLastModified = "2026-11-09";
export const socialImageAlt =
  "Yingchen Liu - Senior Full-Stack and AI Engineer";

export const siteDescription =
  "Yingchen Liu is a Melbourne-based senior full-stack and AI engineer who architects end-to-end, cross-platform products and improves the workflows and coordination that help teams deliver them.";

export const homeDescription =
  "Senior full-stack and AI engineer combining broad cross-platform architecture with practical workflow and team-coordination improvements across web, mobile, backend and cloud.";

export const resumeDescription =
  "Résumé of Yingchen Liu, a Melbourne-based senior full-stack, AI and mobile engineer experienced in React, TypeScript, Swift, Kotlin, AWS and GCP.";

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
