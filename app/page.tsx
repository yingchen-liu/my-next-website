import Banner from "./components/Index/Banner";
import AboutMe from "./components/Index/AboutMe";
import Experiences from "./components/Index/Experiences";
import Projects from "./components/Index/Projects";
import Contact from "./components/Index/Contact";
import Footer from "./components/Index/Footer";
import { Metadata } from "next";
import { siteDescription, siteName, siteUrl } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Senior Full-Stack & AI Engineer in Melbourne",
  description:
    "Portfolio of Yingchen Liu, a Melbourne-based senior full-stack, AI, and mobile engineer who engineered Mapify—trusted by 5M+ users—and Henri at Xmind and now delivers independent contractor work.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}#person`,
        name: siteName,
        url: siteUrl,
        image: `${siteUrl}/images/yingchen-linkedin.jpg`,
        email: "mailto:info@yingchenliu.com",
        jobTitle: "Senior Full-Stack and AI Engineer",
        description: siteDescription,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Melbourne",
          addressCountry: "AU",
        },
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "Kotlin",
          "Kotlin Multiplatform",
          "Swift",
          "SwiftUI",
          "Bluetooth Low Energy",
          "Node.js",
          "AWS",
          "Google Cloud",
          "AI product engineering",
          "PostgreSQL",
          "Product architecture",
          "Observability",
          "Full-stack web development",
          "Mobile development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        inLanguage: "en-AU",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Banner />
      <AboutMe />
      <Experiences />
      <Projects />
      <Contact />

      <Footer />
    </>
  );
}
