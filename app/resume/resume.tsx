"use client";

import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { getFirebaseAuth, hasFirebaseConfig } from "@/lib/firebase/client";

const PUBLIC_FILTERS = {
  title: "full-stack",
  stack: "javascript",
  country: "au",
} as const;

const FULL_RESUME_DEFAULTS = {
  title: "full-stack",
  stack: "java",
  country: "international",
} as const;

type ResumeTitle = "full-stack" | "back-end" | "mobile";
type ResumeStack = "java" | "javascript";
type ResumeCountry = "international" | "au" | "cn";

function hasFullResumeAccess(email: string | null | undefined) {
  return email?.toLowerCase().endsWith("@yingchenliu.com") ?? false;
}

function Experience({
  title,
  href,
  type,
  time,
  company,
  children,
}: {
  title: string;
  href?: string;
  type: string;
  time: string;
  company?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-2">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline">
        <div className="flex flex-grow flex-wrap items-baseline">
          <div className="font-semibold mr-2 text-[1.05rem]">{title}</div>
          <div className="text-sm mt-[2.5px]"> - {type}</div>
        </div>
        <div className="whitespace-nowrap italic text-sm">{time}</div>
      </div>
      {company &&
        (href ? (
          <Link href={href} className="font-light">
            {company}
          </Link>
        ) : (
          <div className="font-light">{company}</div>
        ))}
      <ul className="list-disc ml-5 mt-1 text-[0.9rem] flex flex-col">
        {children}
      </ul>
    </div>
  );
}

function Link({
  href,
  onClick,
  className,
  children,
  invert = false,
}: {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  invert?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel={href ? "noopener noreferrer" : undefined}
      className={`${
        invert ? "text-white" : "text-blue-700"
      } hover:underline cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default function Resume() {
  const firebaseReady = hasFirebaseConfig();
  const [hasAccess, setHasAccess] = useState(false);
  const [title, setTitle] = useState<ResumeTitle>(PUBLIC_FILTERS.title);
  const [stack, setStack] = useState<ResumeStack>(PUBLIC_FILTERS.stack);
  const [country, setCountry] = useState<ResumeCountry>(PUBLIC_FILTERS.country);
  const yearsOfExperience = new Date().getFullYear() - 2016;

  useEffect(() => {
    if (!firebaseReady) {
      return;
    }

    const auth = getFirebaseAuth();
    if (!auth) {
      return;
    }

    return onAuthStateChanged(auth, (nextUser) => {
      const nextHasAccess = hasFullResumeAccess(nextUser?.email);
      setHasAccess(nextHasAccess);

      if (nextHasAccess) {
        setTitle(FULL_RESUME_DEFAULTS.title);
        setStack(FULL_RESUME_DEFAULTS.stack);
        setCountry(FULL_RESUME_DEFAULTS.country);
        return;
      }

      setTitle(PUBLIC_FILTERS.title);
      setStack(PUBLIC_FILTERS.stack);
      setCountry(PUBLIC_FILTERS.country);
    });
  }, [firebaseReady]);

  return (
    <>
      {hasAccess && (
        <>
          <div className="container md:px-20 md:pt-20 mt-10 pb-2 mx-auto flex gap-x-6">
            <Link
              onClick={() => setTitle("full-stack")}
              className={`${title === "full-stack" && "font-bold"}`}
              invert={true}
            >
              Fullstack
            </Link>
            <Link
              onClick={() => setTitle("back-end")}
              className={`${title === "back-end" && "font-bold"}`}
              invert={true}
            >
              Backend
            </Link>
            <Link
              onClick={() => setTitle("mobile")}
              className={`${title === "mobile" && "font-bold"}`}
              invert={true}
            >
              iOS &amp; Android
            </Link>
          </div>
          <div className="container md:px-20 pb-2 mx-auto flex gap-x-6">
            <Link
              onClick={() => setStack("java")}
              className={`${stack === "java" && "font-bold"}`}
              invert={true}
            >
              Java
            </Link>
            <Link
              onClick={() => setStack("javascript")}
              className={`${stack === "javascript" && "font-bold"}`}
              invert={true}
            >
              JavaScript
            </Link>
          </div>
          <div className="container md:px-20 pb-6 mx-auto flex gap-x-6">
            <Link
              onClick={() => setCountry("international")}
              className={`${country === "international" && "font-bold"}`}
              invert={true}
            >
              International
            </Link>
            <Link
              onClick={() => setCountry("au")}
              className={`${country === "au" && "font-bold"}`}
              invert={true}
            >
              Australia
            </Link>
            <Link
              onClick={() => setCountry("cn")}
              className={`${country === "cn" && "font-bold"}`}
              invert={true}
            >
              China
            </Link>
          </div>
        </>
      )}
      <div
        className={`container mx-auto ${
          hasAccess ? "md:px-20 md:pb-20" : "px-6 pb-20 pt-20 md:px-20 md:pt-24"
        }`}
      >
        <div className="font-extralight text-gray-900 font-sans border-l-4 border-l-[#af0f00] p-8 shadow-md border-[0.5px] border-gray-50 bg-gray-100">
          <div className="mb-8">
            <h1 className="text-[#af0f00] font-bold text-[22px]">
              Yingchen Liu
            </h1>
            <div className="font-[300]">
              Senior{" "}
              {title === "full-stack"
                ? "Full-Stack & AI"
                : title === "back-end"
                ? "Backend"
                : title === "mobile"
                ? "iOS & Android"
                : "Software"}{" "}
              Engineer
              <div className="inline-block px-2">•</div>
              {yearsOfExperience}+ years
              <div className="inline-block px-2">•</div>
              {title === "full-stack"
                ? "AI Products, Web, Backend, Cloud, iOS & Android"
                : title === "back-end"
                ? "Web Frontend, Backend, Cloud, iOS & Android"
                : title === "mobile"
                ? "iOS & Android, Web Frontend, Backend, Cloud"
                : "Software"}
            </div>
            <div>
              <Link href="mailto:info@yingchenliu.com">
                info@yingchenliu.com
              </Link>
              <div className="inline-block px-2">•</div>
              <Link href="https://yingchenliu.com">
                https://yingchenliu.com
              </Link>
              <div className="inline-block px-2">•</div>
              <Link href="https://www.linkedin.com/in/yingchen-liu/">
                LinkedIn
              </Link>
              {country !== "international" && (
                <>
                  <div className="inline-block px-2">•</div>
                  {country === "au" && <>+61 420 630 709</>}
                  {country === "cn" && <>+86 135 2908 0041</>}
                </>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-[#af0f00] font-bold pb-3 border-b-[1.5px] border-b-gray-200 mb-3">
              EXPERIENCE
            </h2>
            <Experience
              title="Senior Full-Stack Engineer"
              type="Remote, Australia"
              time="Jan 2025 - Jul 2026"
              company="Xmind"
              href="https://xmind.com/"
            >
              <li>
                Led development of <Link href="https://mapify.so/">Mapify</Link>,
                including full-text mind-map search and migrating its index from{" "}
                <b>S3 to PostgreSQL</b> with fallback behaviour and a
                user-transparent rollout.
              </li>
              <li>
                Made Mapify&apos;s speech-to-text pipeline more resilient through
                orchestration, retries, media simulation and provider fallbacks.
              </li>
              <li>
                Built Mapify&apos;s multilingual email and affiliate-settlement
                systems, and cut FCP from <b>11.6s to 1.1s</b> and LCP from{" "}
                <b>22.1s to 7.6s</b> for a product trusted by{" "}
                <b>5M+ users</b>.
              </li>
              <li>
                Led development of <Link href="https://hihenri.ai/">Henri</Link>, an
                AI product built using AI, from architecture through testing,
                TestFlight and production release.
              </li>
            </Experience>

            <Experience
              title="Senior Software Engineer"
              type={`Remote, ${country === "au" ? "Melbourne" : "China"}`}
              time="Jun 2022 - May 2024"
              company="Aimi.fm"
              href="https://aimi.fm"
            >
              {title === "full-stack" && (
                <>
                  <li>
                    Led a portable <b>C++ generative-music engine</b> and
                    cross-platform SDK used by Aimi Player and Aimi Studio,
                    spanning <b>TypeScript</b>, <b>Node.js</b>, Android and iOS
                    while{" "}
                    <b>reducing startup time by 52%</b>.
                  </li>
                  <li>
                    Deployed a scalable music streaming backend and maintained{" "}
                    <b>AWS</b> infrastructure using <b>Docker</b>,{" "}
                    <b>Terraform</b>, and <b>GitHub Actions</b>. Improved the
                    build flow, <b>reducing service build time by 30 seconds</b>
                    .
                  </li>
                  <li>
                    Engineered responsive web applications with{" "}
                    <b>TypeScript</b>, <b>React</b>, <b>Next.js</b> with{" "}
                    <b>GraphQL</b> and <b>DynamoDB</b>. Deployed on Vercel.
                  </li>
                </>
              )}
              {title === "back-end" && (
                <>
                  <li>
                    Led a portable <b>C++ generative-music engine</b> and
                    cross-platform SDK spanning <b>TypeScript</b>,{" "}
                    <b>Node.js</b>, Android and iOS, while{" "}
                    <b>reducing startup time by 52%</b>.
                  </li>
                  <li>
                    Deployed a scalable music streaming <b>backend</b> and
                    maintained <b>AWS</b> infrastructure using <b>Docker</b>,{" "}
                    <b>Terraform</b>, and <b>GitHub Actions</b>. Improved the
                    build flow, <b>reducing service build time by 30s</b>.
                  </li>
                  <li>
                    Established the Android team and developed the Aimi Player
                    Android app from scratch using <b>Kotlin</b>, Jetpack
                    Compose, and Media3.
                  </li>
                </>
              )}
              {title === "mobile" && (
                <>
                  <li>
                    <b>Established the Android team</b> and developed the Aimi
                    Player Android app from scratch using <b>Kotlin</b>, Jetpack
                    Compose, and Media3.
                  </li>
                  <li>
                    Led a portable <b>C++ generative-music engine</b> and{" "}
                    <b>cross-platform SDK</b> for Android and iOS, a core
                    component of Aimi Player and Aimi Studio, reducing startup
                    time by 52%.
                  </li>
                </>
              )}
              <li className="order-4">
                Achieved <b>96% test coverage</b> by implementing test-driven
                development within the team.
              </li>
            </Experience>

            <Experience
              title="Software Consultant"
              type={`Hybrid, ${country === "au" ? "Melbourne" : "Australia"}`}
              time="May 2021 - Jun 2022"
              company="Cognizant Servian"
              href="https://www.cognizant.com/au/en/servian"
            >
              <li>
                <b><Link href="https://optus.com.au">Optus:</Link></b> led
                discovery, architecture, stakeholders, budget and an Agile team
                of three to deliver a secure GCP/Kubernetes platform.
              </li>
              <li>
                <b><Link href="https://airtasker.com/au">Airtasker:</Link></b>{" "}
                built Kotlin/Spring services and Android workflows that cut load
                time by over <b>50%</b> and improved retention by <b>17%</b>.
              </li>
              <li>
                <b><Link href="https://lendlease.com">Lendlease:</Link></b>{" "}
                delivered a Python/Vertex AI classification workflow that
                replaced manual work previously handled by <b>30 staff</b>.
              </li>
            </Experience>

            <h2 className="text-[#af0f00] font-bold pb-3 border-b-[1.5px] border-b-gray-200 mb-3">
              CONTRACT WORK
            </h2>

            <Experience
              title="Independent Software Contractor"
              type={`Weekend Contracting, Remote, ${
                country === "au" ? "Melbourne" : "Australia"
              }`}
              time="Jun 2024 - Dec 2024; Aug 2026 - Present"
            >
              <li>
                <b>AxIT iOS:</b> build and modernise{" "}
                <Link href="https://www.strengthbynumbers.com/software/">
                  AxIT
                </Link>{" "}
                with <b>Swift</b> and <b>SwiftUI</b>, bringing its connected
                assessment, Bluetooth, sync, reporting, accessibility and
                release workflows to iPhone and iPad.
              </li>
              {(title === "full-stack" ||
                title === "back-end" ||
                stack === "javascript") && (
                <li>
                  <b>Cross-platform metrics:</b> contribute AxLib&apos;s shared{" "}
                  <b>Kotlin Multiplatform</b> models, capability rules, sampling
                  and metrics as one calculation contract across iOS, Android,
                  Connect web and backend services.
                </li>
              )}
              {(title === "full-stack" ||
                title === "back-end" ||
                stack === "javascript") && (
                <li>
                  <b>Metric review &amp; QA:</b> introduced de-identified trace
                  exploration and SBN Testing&apos;s exact-build workflows for
                  metric-algorithm review, test-case verification and
                  streamlined internal testing with auditable evidence.
                </li>
              )}
            </Experience>

            <h2 className="text-[#af0f00] font-bold pb-3 border-b-[1.5px] border-b-gray-200 mb-3">
              EARLIER EXPERIENCE
            </h2>

            <Experience
              title="Full-Stack Developer"
              type={`Hybrid, ${country === "au" ? "Melbourne" : "Australia"}`}
              time="Jun 2018 - Apr 2021"
              company="Strength By Numbers"
              href="https://www.strengthbynumbers.com/"
            >
              {(title === "full-stack" || title === "mobile") && (
                <li className={`${title === "mobile" ? "order-1" : "order-2"}`}>
                  Designed and developed the original <b>AxIT Android</b> app
                  in <b>Java</b>, managing complex multi-threaded and
                  asynchronous Bluetooth operations using ReactiveX.
                </li>
              )}
              <li className={`${title === "mobile" ? "order-2" : "order-1"}`}>
                {stack === "java" ? (
                  <>
                    Built backend microservices using <b>Java</b>, <b>Spring</b>
                    , <b>Docker</b> and <b>MongoDB</b>, deployed on <b>AWS</b>,
                    supporting over 700 physio/fitness centres.
                  </>
                ) : (
                  <>
                    Built backend microservices using <b>JavaScript</b>,{" "}
                    <b>Node.js</b>, <b>Express.js</b> and <b>MongoDB</b>,
                    deployed on <b>AWS</b>, supporting over 700 physio/fitness
                    centres.
                  </>
                )}
              </li>
              <li className="order-1">
                Developed Single Page Applications with <b>React</b> and{" "}
                <b>Redux</b>.
              </li>
            </Experience>

            <Experience
              title="Full-Stack Developer"
              type={`Part-Time, Hybrid, ${
                country === "au" ? "Melbourne" : "Australia"
              }`}
              time="Sep 2016 - May 2018"
              company="SensiLab"
              href="https://sensilab.monash.edu/"
            >
              <li className={`${title === "mobile" ? "order-2" : "order-1"}`}>
                Designed and developed full-stack web applications using{" "}
                <b>React</b>, <b>Redux</b>, <b>Express.js</b>, <b>MongoDB</b>{" "}
                and Firebase.
              </li>
              {(title === "full-stack" || title === "mobile") && (
                <li className={`${title === "mobile" ? "order-1" : "order-2"}`}>
                  Developed an <b>iOS</b> app using <b>Swift</b>.
                </li>
              )}
              <li className="order-3">
                Optimised SensiLab&apos;s WordPress website and created custom
                themes and plugins.
              </li>
            </Experience>
          </div>

          <h2 className="text-[#af0f00] font-bold mt-5 pb-3 border-b-[1.5px] border-b-gray-200 mb-3">
            EDUCATION
          </h2>
          <Experience
            title="Master of Information Technology"
            type="Melbourne, Australia"
            time="2016 - 2017"
            company={`Monash University${country !== "au" ? " (QS: 37)" : ""}`}
            href="https://www.monash.edu/"
          >
            <li>
              <b>Dux of Postgraduate Information Technology Award</b>.
            </li>
            <li>
              International Merit Scholarship, and Winter Research Scholarship.
            </li>
            <li>
              Achieved the <b>highest grade</b> in 4 subjects: programming,
              distributed systems, mobile and advanced mobile.
            </li>
          </Experience>

          <h2 className="text-[#af0f00] font-bold mt-5 pb-3 border-b-[1.5px] border-b-gray-200 mb-3">
            CERTIFICATION
          </h2>
          <div className="mb-2 text-[0.9rem]">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline">
              <div className="flex-grow font-semibold text-[1.05rem]">
                AWS Certified AI Practitioner
              </div>
              <div className="whitespace-nowrap italic text-sm">Sep 2025</div>
            </div>
            <div>Amazon Web Services · Credential 39dc5a7281c84b11afbe44ba72164274</div>
          </div>

          <h2 className="text-[#af0f00] font-bold mt-5 pb-3 border-b-[1.5px] border-b-gray-200 mb-3">
            SKILLS
          </h2>
          <ul className="list-disc ml-5 mt-1 text-[0.9rem]">
            <li>
              <b>Core strengths:</b> AI product architecture, search and data
              systems, streaming pipelines, connected-device mobile platforms,
              reliability and observability, cloud and release engineering
            </li>
            <li>
              <b>Languages:</b>{" "}
              {stack === "javascript" ? (
                <>
                  JavaScript (ES6), TypeScript, Java, Kotlin, Swift, Python, C,
                  C++
                </>
              ) : (
                <>
                  Java, Kotlin, JavaScript (ES6), TypeScript, Swift, Python, C,
                  C++
                </>
              )}
            </li>
            <li>
              <b>Frameworks:</b>{" "}
              {stack === "javascript" ? (
                <>
                  React, Redux, Node.js, Next.js, Nest.js, Express.js, Vue.js,
                  Spring Boot
                </>
              ) : (
                <>Spring Boot, React, Node.js</>
              )}
            </li>
            <li>
              <b>Databases:</b> MySQL, PostgreSQL, DynamoDB, MongoDB, Neo4j,
              Redis, Firebase
            </li>
            {stack !== "javascript" && (
              <li>
                <b>iOS &amp; Android:</b> Swift, SwiftUI, Kotlin, Jetpack Compose
              </li>
            )}
            <li>
              <b>Cloud:</b> AWS, GCP, Kubernetes, API Gateway, Lambda, Message
              Queue, S3, Vercel
            </li>
            <li>
              <b>AI &amp; observability:</b> AI SDK, LLM APIs, SSE, Prometheus,
              Vertex AI, Dialogflow
            </li>
            <li>
              <b>Tools:</b> Docker, Terraform, GitHub Actions, CI/CD, TestFlight,
              Jira, Bash
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
