"use client";

import { useEffect, useRef, useState } from "react";
import { useSelectedLayoutSegments } from "next/navigation";
import NextLink from "next/link";

const homeItems = [
  { label: "How I Work", target: "ways-of-working" },
  { label: "Work", target: "projects" },
  { label: "Experience", target: "experiences" },
  { label: "About", target: "about" },
  { label: "Contact", target: "contact" },
];

const HeaderMenu = () => {
  const segments = useSelectedLayoutSegments();
  const isHome = segments.length === 0;
  const [showHeader, setShowHeader] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(
        menuOpen || currentScrollY < lastScrollY.current || currentScrollY < 30,
      );
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const goToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    setMenuOpen(false);
    const section = document.getElementById(sectionId);

    if (section) {
      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItemClass =
    "font-sfmono text-sm text-blue-100/75 transition-colors hover:text-white";

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-gray-800/90 backdrop-blur-xl transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex min-h-16 max-w-5xl items-center justify-between px-6 sm:px-8 md:px-10">
        <NextLink
          href="/"
          aria-label="Yingchen Liu home"
          className="font-sfmono text-sm font-semibold tracking-[0.18em] text-white"
        >
          YL<span className="text-blue-300">.</span>
        </NextLink>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {isHome ? (
            homeItems.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                className={navItemClass}
                onClick={(event) => goToSection(event, item.target)}
              >
                {item.label}
              </a>
            ))
          ) : (
            <NextLink href="/" className={navItemClass}>
              Home
            </NextLink>
          )}
          <NextLink href="/articles" className={navItemClass}>
            Writing
          </NextLink>
          <NextLink href="/resume" className={navItemClass}>
            Résumé
          </NextLink>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xl text-white transition-colors hover:border-blue-200 hover:text-blue-200 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? "×" : "≡"}</span>
        </button>
      </div>

      <nav
        aria-label="Mobile navigation"
        className={`overflow-hidden border-t border-white/10 px-6 transition-[max-height,opacity] duration-300 sm:px-8 md:hidden ${
          menuOpen ? "max-h-96 pb-5 pt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto grid max-w-5xl gap-1">
          {isHome ? (
            homeItems.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                className="rounded-lg px-3 py-3 text-left font-sfmono text-sm text-blue-100 transition-colors hover:bg-white/5 hover:text-white"
                onClick={(event) => goToSection(event, item.target)}
              >
                {item.label}
              </a>
            ))
          ) : (
            <NextLink
              href="/"
              className="rounded-lg px-3 py-3 font-sfmono text-sm text-blue-100 transition-colors hover:bg-white/5 hover:text-white"
            >
              Home
            </NextLink>
          )}
          <NextLink
            href="/articles"
            className="rounded-lg px-3 py-3 font-sfmono text-sm text-blue-100 transition-colors hover:bg-white/5 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Writing
          </NextLink>
          <NextLink
            href="/resume"
            className="rounded-lg px-3 py-3 font-sfmono text-sm text-blue-100 transition-colors hover:bg-white/5 hover:text-white"
          >
            Résumé
          </NextLink>
        </div>
      </nav>
    </header>
  );
};

export default HeaderMenu;
