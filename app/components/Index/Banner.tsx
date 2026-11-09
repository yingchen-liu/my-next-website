"use client";

import { useEffect, useState } from "react";
import { Button, Paragraph } from "./Section";

const bannerPhrases = [
  "I architect AI products from idea to production.",
  "I design search and data systems at scale.",
  "I build resilient streaming and media platforms.",
  "I engineer connected mobile products.",
  "I lead cloud delivery and production reliability.",
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
        Senior Full-Stack Engineer with {new Date().getFullYear() - 2016}+
        years of experience across web, mobile, cloud, and AI products.
        Most recently, I engineered Mapify—trusted by 5M+ users—and Henri at
        Xmind. I&apos;m now focused on contractor work across AxIT iOS, its shared
        cross-platform library, and a traceable QA platform.
      </Paragraph>

      <Button href="/resume">
        My Resume
        <span className="ml-3 inline-block">📝</span>
      </Button>
    </section>
  );
}

export default Banner;
