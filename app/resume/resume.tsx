"use client";

import { useState } from "react";

function Experience({
  title,
  href,
  type,
  time,
  company,
  children,
}: {
  title: string;
  href: string;
  type: string;
  time: string;
  company: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-2">
      <div className="flex">
        <div className="flex-grow flex">
          <div className="font-semibold mr-2 text-[1.05rem]">{title}</div>
          <div className="text-sm mt-[2.5px]"> - {type}</div>
        </div>
        <div className="italic text-sm">{time}</div>
      </div>
      <Link href={href} className="font-light">
        {company}
      </Link>
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
      <div>"{children}"</div>
      <div className="text-right">- {from}</div>
    </div>
  );
}

export default function Resume() {
  const [title, setTitle] = useState("full-stack");
  const [stack, setStack] = useState("java");

  return (
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
      <div className="container md:px-20 pb-6 mx-auto flex gap-x-6">
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
      <div className="container md:px-20 md:pb-20 mx-auto">
        <div className="font-extralight text-gray-900 font-sans border-l-4 border-l-[#af0f00] p-8 shadow-md border-[0.5px] border-gray-50 bg-gray-100">
          <div className="mb-8">
            <div className="text-[#af0f00] font-bold text-[22px]">
              Yingchen Liu
            </div>
            <div className="font-[300]">
              Senior{" "}
              {title === "full-stack"
                ? "Full-Stack"
                : title === "back-end"
                ? "Backend"
                : title === "mobile"
                ? "Mobile Fullstack"
                : "Software"}{" "}
              Engineer
              <div className="inline-block px-2">•</div>8 years
              <div className="inline-block px-2">•</div>
              {title === "full-stack"
                ? "Web Frontend, Backend, Cloud, Mobile"
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
            </div>
          </div>

          <div>
            <div className="text-[#af0f00] font-bold pb-3 border-b-[1.5px] border-b-gray-200 mb-3">
              EXPERIENCE
            </div>
            <Experience
              title="Freelance Software Engineer"
              type="Remote, Australia"
              time="2024"
              company="Self-Employed"
              href="#"
            >
              <li>
                Designed and developed a scalable backend system using Nest.js
                with GraphQL and PostgreSQL, deploying to AWS with Docker and
                Terraform.
              </li>
              <li>
                Migrated an Android codebase from Java to Kotlin and upgraded to
                Bluetooth 5, enhancing data transfer range, and connection
                stability for medical hardwares.
              </li>
            </Experience>
            <Experience
              title={
                title === "full-stack"
                  ? "Senior Full-Stack Engineer"
                  : title === "back-end"
                  ? "Senior Backend Engineer"
                  : title === "mobile"
                  ? "Senior Mobile Engineer"
                  : "Senior Software Engineer"
              }
              type="Remote, Australia"
              time="2022 - 2024"
              company="Aimi.fm"
              href="https://aimi.fm"
            >
              {title === "full-stack" && (
                <>
                  <li>
                    Led the development of a cross-platform music SDK, a core
                    component of Aimi Player and Aimi Studio, in TypeScript and
                    C++, enhancing the dynamic and personalised music experience
                    and reducing startup time by 52%.
                  </li>
                  <li>
                    Deployed a scalable music streaming backend and maintained
                    AWS infrastructure using Docker, Terraform, and GitHub
                    Actions. Improved the build flow, reducing service build
                    time by 30 seconds.
                  </li>
                </>
              )}
              {title === "back-end" && (
                <>
                  <li>
                    Led the development of a cross-platform genertive music SDK,
                    in TypeScript and C++, enhancing the dynamic and
                    personalised music experience and reducing startup time by
                    52%.
                  </li>
                  <li>
                    Deployed a scalable music streaming backend and maintained
                    AWS infrastructure using Docker, Terraform, and GitHub
                    Actions. Improved the build flow, reducing service build
                    time by 30s.
                  </li>
                </>
              )}
              {title === "mobile" && (
                <>
                  <li>
                    Founded the Android team and built the Android app using
                    Kotlin and JetPack Compose.
                  </li>
                  <li>
                    Led the development of a cross-platform music SDK for both
                    Android and iOS, a core component of Aimi Player and Aimi
                    Studio, built with TypeScript and C++, enhancing the dynamic
                    and personalised music experience and reducing startup time
                    by 52%.
                  </li>
                </>
              )}
              <li>
                Engineered responsive web applications with TypeScript, React,
                Next.js and GraphQL.
              </li>
              <li>
                Achieved 96% code coverage by implementing test-driven
                development within the team.
              </li>
            </Experience>

            <Testimony from="J. Curtis (Senior Software Engineer, Aimi.fm)">
              I just want to say that I've really appreciated working with you.
              You've been incredibly helpful, hardworking, and very easy to get
              along with.
            </Testimony>

            <Experience
              title="Software Consultant"
              type="Hybrid, Australia"
              time="2021 - 2022"
              company="Cognizant Servian"
              href="https://www.cognizant.com/au/en/servian"
            >
              <li>
                <b>Optus ID Verification System</b> (11 million users):
                <ul className="list-disc ml-5 mt-1 mb-2">
                  <li>
                    Led discovery sessions and collaboratively defined project
                    scope with Optus. Negotiated interface contract with other
                    systems, produced detailed solution design documentation.
                    Managed stakeholders, budget, risks and timeline.
                  </li>
                  <li>
                    Led an Agile team of 3: organised, facilitated team
                    ceremonies, conducted code reviews, and trained junior
                    engineers.
                  </li>
                  <li>
                    Designed and developed a highly available and secure cloud
                    solution for both backend and frontend using Java, Spring
                    Boot, React and Redux; deployed on GCP Kubernetes with
                    Docker and Terraform.
                  </li>
                </ul>
              </li>
              <li>
                <b>Airtasker App</b> (5 million users):
                <ul className="list-disc ml-5 mt-1 flex flex-col mb-2">
                  <li
                    className={`${title === "mobile" ? "order-2" : "order-1"}`}
                  >
                    Engineered a new backend microservices in Kotlin and Spring
                    Boot, dramatically enhancing app performance, responsiveness
                    and flexibility.
                  </li>
                  <li
                    className={`${title === "mobile" ? "order-1" : "order-2"}`}
                  >
                    Developed a dynamic Android UI leveraging Kotlin and JetPack
                    Compose; added a new flow to boost user retention by 17%.
                  </li>
                </ul>
              </li>

              <Testimony from="Mitchell Weiss (Tech Lead Manager, Airtasker)">
                You put in an incredible effort to handle ALL the backend work
                and push Android across the line with Alex. You've worked
                tirelessly, right up until the last day, to ensure everything
                was completed before your departure, and for that, we're
                incredibly grateful! Thanks for being a phenomenal engineer and
                making this project a success. We couldn't have done it without
                you.
              </Testimony>
              <li className="mb-2">
                <b>Lendlease Ticket Classification System</b>:
                <ul className="list-disc ml-5 mt-1">
                  <li>
                    Trained a ticket classification model with Python and Pandas
                    on GCP Vertex AI, integrated with Lendlease&apos;s
                    ServiceNow using a Python backend and GCP Pub/Sub, reducing
                    the need for 30 staff members for manual classification
                    tasks.
                  </li>
                  <li>
                    Created a chatbot backend using Python, GCP Cloud Functions,
                    and Dialogflow.
                  </li>
                </ul>
              </li>
              <Testimony from="John Kelaita (Principal Consultant, Cognizant Servian)">
                Yingchen is one of the best developers I have ever worked with.
              </Testimony>
            </Experience>

            <Experience
              title="Full-Stack Developer"
              type="Hybrid, Australia"
              time="2018 - 2021"
              company="Strength By Numbers"
              href="https://www.strengthbynumbers.com/"
            >
              <li className={`${title === "mobile" ? "order-1" : "order-2"}`}>
                Designed and developed the Android app in Java, managing complex
                multi-threaded and asynchronous Bluetooth operations using
                ReactiveX.
              </li>
              <li className={`${title === "mobile" ? "order-2" : "order-1"}`}>
                Built backend microservices using JavaScript, Node.js,
                Express.js and MongoDB, deployed on AWS, supporting over 200
                physio/fitness centers.
              </li>
              <li className="order-1">
                Developed Single Page Applications with React and Redux.
              </li>
            </Experience>

            <Experience
              title="Full-Stack Developer"
              type="Part Time, Hybrid, Australia"
              time="2016 - 2018"
              company="SensiLab"
              href="https://sensilab.monash.edu/"
            >
              <li className={`${title === "mobile" ? "order-2" : "order-1"}`}>
                Designed and developed full-stack web applications using React,
                Redux, Express.js, MongoDB and Firebase.
              </li>
              <li className={`${title === "mobile" ? "order-1" : "order-2"}`}>
                Developed an iOS app using Swift.
              </li>
              <li className="order-3">
                Optimized SensiLab&apos;s WordPress website and created custom
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
            time=""
            company="Monash University (QS: 37)"
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
            SKILLS
          </div>
          <ul className="list-disc ml-5 mt-1 text-[0.9rem]">
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
              <b>Databases:</b> MySQL, PostgreSQL, MongoDB, Neo4j, Redis, Firebase
            </li>
            <li>
              <b>Mobile:</b> Android, JetPack, iOS
            </li>
            <li>
              <b>Cloud:</b> AWS, GCP, Kubernetes
            </li>
            <li>
              <b>Tools:</b> Docker, Terraform, Git, CI/CD, Jira, Bash
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
