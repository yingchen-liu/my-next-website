"use client";

import { useEffect, useState } from "react";
import { Button, Paragraph } from "./Section";

const bannerPhrases = [
  "I build scalable web apps.",
  "I build Android apps with Kotlin and Jetpack.",
  "I build React & Next.js web apps.",
  "I build cloud infrastructure on AWS and GCP.",
  "I manage CI/CD pipelines.",
  "I improve WordPress site performance.",
  "I integrate AI with mobile and web apps.",
];

function Typewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = bannerPhrases[phraseIndex];

    if (!isDeleting && displayedText === currentPhrase) {
      const holdTimer = window.setTimeout(() => setIsDeleting(true), 1000);
      return () => window.clearTimeout(holdTimer);
    }

    if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((currentIndex) => (currentIndex + 1) % bannerPhrases.length);
      return;
    }

    const nextText = isDeleting
      ? currentPhrase.slice(0, displayedText.length - 1)
      : currentPhrase.slice(0, displayedText.length + 1);

    const typingTimer = window.setTimeout(
      () => setDisplayedText(nextText),
      isDeleting ? 30 : 70
    );

    return () => window.clearTimeout(typingTimer);
  }, [displayedText, isDeleting, phraseIndex]);

  return (
    <span
      aria-live="polite"
      className="inline-block h-[190px] overflow-hidden md:h-[160px]"
    >
      {displayedText}
      <span className="ml-1 inline-block animate-pulse">|</span>
    </span>
  );
}

function Banner() {
  return (
    <section className="py-20 pt-48">
      <p className="text-white font-thin font-sfmono mb-6">Hi, my name is</p>
      <h1 className="md:text-7xl text-5xl font-bold mb-2">Yingchen Liu</h1>
      <h2 className="text-blue-200 text-opacity-60 md:text-7xl text-5xl font-bold">
        <Typewriter />
      </h2>

      <Paragraph className="md:w-1/2 mb-6">
        Versatile Senior Software Engineer with over{" "}
        {new Date().getFullYear() - 2016} years of hands-on experience,
        specialising in full-stack web, mobile, and cloud technologies.
      </Paragraph>

      <Button href="/resume">
        My Resume
        <span className="ml-3 inline-block">📝</span>
      </Button>
    </section>
  );
}

export default Banner;
