"use client";

import { useEffect, useRef, useState } from "react";
import { FaCheck, FaRegCopy } from "react-icons/fa6";
import { Button, Paragraph, Section } from "./Section";

const EMAIL_ADDRESS = "info@yingchenliu.com";

function Contact() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }
    },
    [],
  );

  const copyEmailAddress = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }

    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
    }
    resetTimer.current = setTimeout(() => setCopyStatus("idle"), 2500);
  };

  return (
    <Section id="contact" title="Let's Build Something Useful">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-950 to-gray-800 px-6 py-12 text-center shadow-2xl shadow-black/10 md:px-16">
        <h2 className="text-3xl font-semibold text-white md:text-5xl">
          Complex product, clear outcome. <span aria-hidden="true">✨</span>
        </h2>
        <Paragraph className="mx-auto mb-8 mt-5 max-w-2xl text-lg">
          Building an ambitious AI, web or connected product? Let&apos;s turn the
          difficult parts into something people can trust.
        </Paragraph>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href={`mailto:${EMAIL_ADDRESS}`}>Email me</Button>
          <button
            type="button"
            onClick={copyEmailAddress}
            className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-lg border border-white/25 bg-white/[0.035] px-6 py-3.5 font-sfmono text-sm font-semibold text-blue-100 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200/60 hover:bg-white/[0.07] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200"
            aria-label="Copy info@yingchenliu.com to clipboard"
          >
            {copyStatus === "copied" ? (
              <FaCheck aria-hidden="true" />
            ) : (
              <FaRegCopy aria-hidden="true" />
            )}
            <span aria-live="polite">
              {copyStatus === "copied"
                ? "Copied!"
                : copyStatus === "error"
                  ? "Copy failed"
                  : "Copy email address"}
            </span>
          </button>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
