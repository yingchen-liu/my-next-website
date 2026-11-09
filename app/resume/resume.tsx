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

function Testimony({
  children,
  from,
}: {
  children: React.ReactNode;
  from: string;
}) {
  return (
    <div className="text-sm mb-4 p-2 border-l-4 border-l-blue-500 pl-5 bg-slate-200">
      <div>&quot;{children}&quot;</div>
      <div className="text-right">- {from}</div>
    </div>
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
              Mobile
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
            <div className="text-[#af0f00] font-bold text-[22px]">
              Yingchen Liu
            </div>
            <div className="font-[300]">
              Senior{" "}
              {title === "full-stack"
                ? "Full-Stack & AI"
                : title === "back-end"
                ? "Backend"
                : title === "mobile"
                ? "Mobile Full-Stack"
                : "Software"}{" "}
              Engineer
              <div className="inline-block px-2">•</div>
              {yearsOfExperience}+ years
              <div className="inline-block px-2">•</div>
              {title === "full-stack"
                ? "AI Products, Web, Backend, Cloud, Mobile"
                : title === "back-end"
                ? "Web Frontend, Backend, Cloud, Mobile"
                : title === "mobile"
                ? "Mobile, Web Frontend, Backend, Cloud"
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
            <div className="text-[#af0f00] font-bold pb-3 border-b-[1.5px] border-b-gray-200 mb-3">
              EXPERIENCE
            </div>
            <Experience
              title="Senior Full-Stack Engineer"
              type={`Full-Time, Remote, ${
                country === "au" ? "Melbourne" : "Australia"
              }`}
              time="Jan 2025 - Jul 2026"
              company="Xmind"
              href="https://xmind.com/"
            >
              <li>
                Built AI products across discovery, architecture, frontend,
                backend, infrastructure, testing, and production release for{" "}
                <Link href="https://mapify.so/">Mapify</Link> and{" "}
                <Link href="https://hihenri.ai/">Henri</Link>.
              </li>
              {(title === "full-stack" ||
                title === "back-end" ||
                stack === "javascript") && (
                <li>
                  Designed Mapify&apos;s mind-map search and an{" "}
                  <b>S3-to-PostgreSQL</b> index migration with full-text data
                  structures, safe fallback behaviour, and a user-transparent
                  rollout.
                </li>
              )}
              {(title === "full-stack" || title === "back-end") && (
                <li>
                  Reworked speech-to-text around orchestration, retries, local
                  worker and media simulation, and provider fallbacks;
                  diagnosed production memory leaks and added{" "}
                  <b>Prometheus</b> monitoring.
                </li>
              )}
              <li>
                Architected Mapify&apos;s multilingual newsletter and
                transactional-email platform with generated TypeScript
                renderers, dynamic mailing lists, click tracking, unified
                unsubscribe, one-ZIP locale imports, and dashboard sending.
              </li>
              <li>
                Built affiliate operations and settlement for a product
                trusted by <b>5M+ users</b>, covering partner contracts,
                one-step Stripe coupons, 5–15% commission tiers, two-month
                settlement, and refund/downgrade adjustments.
              </li>
              <li>
                Cut Mapify homepage FCP from <b>11.6s to 1.1s</b> and LCP from{" "}
                <b>22.1s to 7.6s</b>.
              </li>
              <li>
                Architected Henri&apos;s personalised learning system across
                knowledge-tree streaming, syllabus generation, conversational
                chapters, adaptive quizzes, generated visuals, engagement
                loops, and production delivery.
              </li>
              <li>
                Improved release safety, automated tests, GitHub security and
                CI, and coordinated <b>AWS</b>, <b>S3</b>,{" "}
                <b>PostgreSQL</b>, TestFlight, and production setup.
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
                    Led the development of a cross-platform music SDK, a core
                    component of Aimi Player and Aimi Studio, in{" "}
                    <b>TypeScript</b>, <b>Node.js</b> and C++, enhancing the
                    dynamic and personalised music experience and{" "}
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
                    Led the development of a cross-platform generative music
                    SDK, in <b>TypeScript</b>, <b>Node.js</b> and C++, enhancing
                    the dynamic and personalised music experience and{" "}
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
                    Led the development of a <b>cross-platform</b> music SDK for{" "}
                    <b>Android and iOS</b>, a core component of Aimi Player and
                    Aimi Studio, built with TypeScript and C++, enhancing the
                    dynamic and personalised music experience and reducing
                    startup time by 52%.
                  </li>
                </>
              )}
              <li className="order-4">
                Achieved <b>96% test coverage</b> by implementing test-driven
                development within the team.
              </li>
            </Experience>

            <Testimony from="J. Curtis (Senior Software Engineer, Aimi.fm)">
              I just want to say that I&apos;ve really appreciated working with
              you. You&apos;ve been incredibly <b>helpful</b>,{" "}
              <b>hardworking</b>, and very <b>easy to get along with</b>.
            </Testimony>

            <Experience
              title="Software Consultant"
              type={`Hybrid, ${country === "au" ? "Melbourne" : "Australia"}`}
              time="May 2021 - Jun 2022"
              company="Cognizant Servian"
              href="https://www.cognizant.com/au/en/servian"
            >
              <li>
                <b>
                  Engagement Lead at{" "}
                  <Link href="https://optus.com.au">Optus</Link>
                </b>
                :
                <ul className="list-disc ml-5 mt-1 mb-2">
                  <li>
                    Led discovery sessions and collaboratively defined project
                    scope with Optus. Negotiated interface contracts with other
                    systems, produced detailed solution design documentation.{" "}
                    <b>Managed stakeholders, budget, risks and timeline</b>.
                  </li>
                  <li>
                    <b>Led an Agile team of 3</b>: organised, facilitated team
                    ceremonies, conducted code reviews, and mentored junior
                    engineers.
                  </li>
                  <li>
                    Designed and developed a <b>highly available and secure</b>{" "}
                    cloud solution for both <b>backend</b> and frontend using{" "}
                    <b>Java</b>, <b>Spring Boot</b>, <b>TypeScript</b>,{" "}
                    <b>React</b> and <b>Redux</b>; deployed on <b>GCP</b>{" "}
                    <b>Kubernetes</b> with <b>API Gateway</b> using{" "}
                    <b>Docker</b> and <b>Terraform</b>.
                  </li>
                  <li>
                    <b>Designed database schema on Cloud Spanner (SQL)</b>,
                    leveraging its horizontal scalability and strong consistency
                    for seamless user experiences.
                  </li>
                </ul>
              </li>
              <li>
                <b>
                  Backend Engineer at{" "}
                  <Link href="https://airtasker.com/au">Airtasker</Link>
                </b>
                :
                <ul className="list-disc ml-5 mt-1 flex flex-col mb-2">
                  <li
                    className={`${title === "mobile" ? "order-2" : "order-1"}`}
                  >
                    Engineered new <b>backend microservices</b> in <b>Kotlin</b>{" "}
                    and <b>Spring Boot</b> on <b>AWS</b>, <b>cutting</b> web and
                    mobile app <b>load time by over 50%</b> while boosting
                    performance, responsiveness, and maintainability.
                  </li>
                  <li
                    className={`${title === "mobile" ? "order-1" : "order-2"}`}
                  >
                    Developed a dynamic <b>Android</b> UI leveraging{" "}
                    <b>Kotlin</b> and JetPack Compose; added a new flow to{" "}
                    <b>boost user retention by 17%</b>.
                  </li>
                </ul>
              </li>

              {title === "mobile" ? (
                <Testimony from="Mitchell Weiss (Tech Lead Manager, Airtasker)">
                  You put in an incredible effort to handle ALL the backend work
                  and push <b>Android</b> across the line with Alex.{" "}
                  <b>
                    You&apos;ve worked tirelessly, right up until the last day
                  </b>
                  , to ensure everything was completed before your departure,
                  and for that, we&apos;re incredibly grateful! Thanks for being
                  a gun engineer and making this project a success.{" "}
                  <b>We couldn&apos;t have done it without you</b>.
                </Testimony>
              ) : (
                <Testimony from="Mitchell Weiss (Tech Lead Manager, Airtasker)">
                  You put in an incredible effort to handle{" "}
                  <b>ALL the backend work</b> and push Android across the line
                  with Alex.{" "}
                  <b>
                    You&apos;ve worked tirelessly, right up until the last day
                  </b>
                  , to ensure everything was completed before your departure,
                  and for that, we&apos;re incredibly grateful! Thanks for being
                  a gun engineer and making this project a success.{" "}
                  <b>We couldn&apos;t have done it without you</b>.
                </Testimony>
              )}
              <li className="mb-2">
                <b>
                  Cloud Engineer at{" "}
                  <Link href="https://lendlease.com">Lendlease</Link>
                </b>
                :
                <ul className="list-disc ml-5 mt-1">
                  <li>
                    Trained a ticket classification model with <b>Python</b> and
                    Pandas on <b>GCP</b> Vertex AI, integrated with
                    Lendlease&apos;s ServiceNow using a <b>Python backend</b>{" "}
                    and Pub/Sub, <b>reducing the need for 30 staff members</b>{" "}
                    for manual classification tasks.
                  </li>
                  <li>
                    Created a chatbot <b>backend</b> using <b>Python</b>, Cloud
                    Functions (<b>Lambda</b>), and Dialogflow.
                  </li>
                </ul>
              </li>
              <Testimony from="John Kelaita (Principal Consultant, Cognizant Servian)">
                Yingchen is one of the <b>best developers</b> I have ever worked
                with.
              </Testimony>
            </Experience>

            <div className="text-[#af0f00] font-bold pb-3 border-b-[1.5px] border-b-gray-200 mb-3">
              CONTRACT WORK
            </div>

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
                assessment, session, sync, reporting, and release workflows to
                iPhone and iPad.
              </li>
              {(title === "full-stack" ||
                title === "back-end" ||
                stack === "javascript") && (
                <li>
                  <b>AxITLib:</b> contribute shared{" "}
                  <b>Kotlin Multiplatform</b> models and metrics that centralise
                  test catalogues, device capabilities, sampling rules, and
                  calculations so iOS and Android behave consistently.
                </li>
              )}
              {(title === "full-stack" ||
                title === "mobile" ||
                stack === "java") && (
                <li>
                  Deliver reliable Bluetooth device and firmware flows,
                  responsive iPhone/iPad layouts, accessibility, diagnostics,
                  security, and App Store/TestFlight release foundations.
                </li>
              )}
              {(title === "full-stack" ||
                title === "back-end" ||
                stack === "javascript") && (
                <li>
                  <b>SBN Testing:</b> build a private exact-build QA workspace
                  for collaborative plans, live progress, evidence, priorities,
                  immutable result history, and Slack-linked discussions.
                </li>
              )}
            </Experience>

            <div className="text-[#af0f00] font-bold pb-3 border-b-[1.5px] border-b-gray-200 mb-3">
              EARLIER EXPERIENCE
            </div>

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
                    supporting over 200 physio/fitness centres.
                  </>
                ) : (
                  <>
                    Built backend microservices using <b>JavaScript</b>,{" "}
                    <b>Node.js</b>, <b>Express.js</b> and <b>MongoDB</b>,
                    deployed on <b>AWS</b>, supporting over 200 physio/fitness
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

          <div className="text-[#af0f00] font-bold mt-5 pb-3 border-b-[1.5px] border-b-gray-200 mb-3">
            EDUCATION
          </div>
          <Experience
            title="Master of Information Technology"
            type="Melbourne, Australia"
            time="2016 - 2017"
            company={`Monash University${country !== "au" ? " (QS: 37)" : ""}`}
            href="https://www.monash.edu/"
          >
            <li>
              Dux of Postgraduate Information Technology Award (
              <b>Top 1 Student</b>).
            </li>
            <li>
              International Merit Scholarship, and Winter Research Scholarship.
            </li>
            <li>
              Achieved the <b>highest grade</b> in 4 subjects: programming,
              distributed systems, mobile and advanced mobile.
            </li>
          </Experience>

          <div className="text-[#af0f00] font-bold mt-5 pb-3 border-b-[1.5px] border-b-gray-200 mb-3">
            CERTIFICATION
          </div>
          <div className="mb-2 text-[0.9rem]">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline">
              <div className="flex-grow font-semibold text-[1.05rem]">
                AWS Certified AI Practitioner
              </div>
              <div className="whitespace-nowrap italic text-sm">Sep 2025</div>
            </div>
            <div>Amazon Web Services · Credential 39dc5a7281c84b11afbe44ba72164274</div>
          </div>

          <div className="text-[#af0f00] font-bold mt-5 pb-3 border-b-[1.5px] border-b-gray-200 mb-3">
            SKILLS
          </div>
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
                <b>Mobile:</b> Android, Jetpack, iOS
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
