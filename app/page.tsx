import Banner from "./components/Index/Banner";
import WaysOfWorking from "./components/Index/WaysOfWorking";
import AboutMe from "./components/Index/AboutMe";
import Experiences from "./components/Index/Experiences";
import Projects from "./components/Index/Projects";
import Contact from "./components/Index/Contact";
import Footer from "./components/Index/Footer";
import {
  absoluteUrl,
  contentLastModified,
  createPageMetadata,
  homeDescription,
  linkedInUrl,
  siteDescription,
  siteLanguage,
  siteName,
  siteTitle,
  siteUrl,
} from "@/lib/seo/site";

export const metadata = createPageMetadata({
  title: "Senior Full-Stack Engineer & System Designer",
  description: homeDescription,
  path: "/",
  type: "profile",
});

export default function HomePage() {
  const personId = `${siteUrl}/#person`;
  const websiteId = `${siteUrl}/#website`;
  const profilePageId = `${siteUrl}/#profile-page`;
  const profileImageId = `${siteUrl}/#profile-image`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: siteUrl,
        name: siteTitle,
        description: homeDescription,
        dateModified: contentLastModified,
        inLanguage: siteLanguage,
        isPartOf: { "@id": websiteId },
        primaryImageOfPage: { "@id": profileImageId },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: siteName,
        givenName: "Yingchen",
        familyName: "Liu",
        url: siteUrl,
        image: { "@id": profileImageId },
        email: "mailto:info@yingchenliu.com",
        jobTitle: "Senior Full-Stack Engineer and System Designer",
        description: siteDescription,
        sameAs: [linkedInUrl],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Melbourne",
          addressCountry: "AU",
        },
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "C++",
          "Kotlin",
          "Kotlin Multiplatform",
          "Swift",
          "SwiftUI",
          "Bluetooth Low Energy",
          "Node.js",
          "AWS",
          "Google Cloud",
          "AI product engineering",
          "System design",
          "Requirements analysis",
          "Architectural trade-offs",
          "PostgreSQL",
          "Product architecture",
          "Cross-platform architecture",
          "Observability",
          "Release engineering",
          "Quality systems",
          "Engineering workflow design",
          "Cross-functional collaboration",
          "Full-stack web development",
          "Mobile development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: siteName,
        alternateName: "Yingchen Liu Portfolio",
        description: siteDescription,
        inLanguage: siteLanguage,
        publisher: { "@id": personId },
      },
      {
        "@type": "ImageObject",
        "@id": profileImageId,
        url: absoluteUrl("/images/yingchen-linkedin.jpg"),
        contentUrl: absoluteUrl("/images/yingchen-linkedin.jpg"),
        width: 800,
        height: 800,
        caption: "Yingchen Liu",
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
      <main>
        <Banner />
        <WaysOfWorking />
        <Projects />
        <Experiences />
        <AboutMe />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
