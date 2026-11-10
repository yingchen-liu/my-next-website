"use client";

import { useEffect, useRef, useState } from "react";

export interface ArticleContentsItem {
  id: string;
  label: string;
  children?: ArticleContentsItem[];
}

type DockPose = {
  top: number;
  left: number;
  width: number;
  maxHeight: number;
  animate: boolean;
};

const MIN_RAIL_WIDTH = 168;
const MAX_RAIL_WIDTH = 240;
const VIEWPORT_GUTTER = 12;
const COLUMN_GAP = 16;
const READING_LINE = 112;

function ContentsLink({
  item,
  current,
  numbered,
}: {
  item: ArticleContentsItem;
  current: boolean;
  numbered?: string;
}) {
  return (
    <a
      href={`#${item.id}`}
      aria-current={current ? "location" : undefined}
      data-current={current ? "true" : "false"}
      className={`group grid grid-cols-[1.5rem_minmax(0,1fr)] items-baseline gap-x-3 rounded-lg border-l-2 py-1.5 pl-2 pr-3 leading-snug transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200 ${
        numbered ? "text-sm" : "text-[13px]"
      } ${
        current
          ? "border-blue-200 bg-white/[0.06] font-medium text-white"
          : "border-transparent text-blue-100/70 hover:text-white"
      }`}
    >
      {numbered ? (
        <span
          className={`font-sfmono text-xs tabular-nums ${
            current ? "text-blue-200" : "text-blue-200/45"
          }`}
        >
          {numbered}
        </span>
      ) : (
        <span aria-hidden="true" />
      )}
      <span
        className={`underline underline-offset-4 transition ${
          current
            ? "decoration-blue-200/70"
            : "decoration-transparent group-hover:decoration-blue-200/50"
        }`}
      >
        {item.label}
      </span>
    </a>
  );
}

function ContentsEntry({
  item,
  number,
  currentId,
}: {
  item: ArticleContentsItem;
  number: string;
  currentId: string | null;
}) {
  return (
    <li>
      <ContentsLink
        item={item}
        numbered={number}
        current={item.id === currentId}
      />
      {item.children && item.children.length > 0 && (
        <ol>
          {item.children.map((child) => (
            <li key={child.id}>
              <ContentsLink item={child} current={child.id === currentId} />
            </li>
          ))}
        </ol>
      )}
    </li>
  );
}

function ContentsColumns({
  items,
  currentId,
  docked,
}: {
  items: ArticleContentsItem[];
  currentId: string | null;
  docked: boolean;
}) {
  const midpoint = Math.ceil(items.length / 2);
  const columns = (
    docked ? [items] : [items.slice(0, midpoint), items.slice(midpoint)]
  ).filter((column) => column.length > 0);

  return (
    <div className={docked ? "mt-3" : "mt-4 grid gap-x-8 sm:grid-cols-2"}>
      {columns.map((column, columnIndex) => (
        <ol key={column[0]?.id ?? columnIndex} className="content-start">
          {column.map((item) => (
            <ContentsEntry
              key={item.id}
              item={item}
              number={String(items.indexOf(item) + 1).padStart(2, "0")}
              currentId={currentId}
            />
          ))}
        </ol>
      ))}
    </div>
  );
}

export default function ArticleContents({
  items,
}: {
  items: ArticleContentsItem[];
}) {
  const slotRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const dockedRef = useRef(false);
  const animatingRef = useRef(false);
  const [slotHeight, setSlotHeight] = useState<number | null>(null);
  const [pose, setPose] = useState<DockPose | null>(null);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const sectionIds = items
    .flatMap((item) => [
      item.id,
      ...(item.children?.map((child) => child.id) ?? []),
    ])
    .join("|");

  useEffect(() => {
    const nav = navRef.current;
    const slot = slotRef.current;
    if (!nav || !slot) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const railPose = (): DockPose | null => {
      const article = nav.closest("article");
      const header = document.querySelector("header");
      if (!article) return null;

      const headerBottom = header?.getBoundingClientRect().bottom ?? 0;
      const clearance = Math.max(16, headerBottom + 12);
      const articleRect = article.getBoundingClientRect();
      const available = articleRect.left - VIEWPORT_GUTTER - COLUMN_GAP;
      if (available < MIN_RAIL_WIDTH) return null;

      if (slot.getBoundingClientRect().top >= clearance) return null;

      const width = Math.min(MAX_RAIL_WIDTH, Math.floor(available));
      const maxHeight = Math.max(160, window.innerHeight - clearance - 16);
      const visibleHeight = Math.min(nav.scrollHeight, maxHeight);
      let top = clearance;
      const bottomLimit = articleRect.bottom - visibleHeight - 8;
      if (bottomLimit < top) top = bottomLimit;

      return {
        top,
        left: articleRect.left - COLUMN_GAP - width,
        width,
        maxHeight,
        animate: false,
      };
    };

    const apply = (next: DockPose | null) => {
      setPose((current) => {
        if (!next) return null;
        if (
          current &&
          current.top === next.top &&
          current.left === next.left &&
          current.width === next.width &&
          current.maxHeight === next.maxHeight &&
          current.animate === next.animate
        ) {
          return current;
        }
        return next;
      });
    };

    let frame = 0;
    let followFrame = 0;
    let followUntil = 0;
    const update = () => {
      if (animatingRef.current) return;
      const next = railPose();

      if (!next) {
        if (dockedRef.current) {
          dockedRef.current = false;
          setSlotHeight(null);
          apply(null);
        }
        return;
      }

      if (!dockedRef.current) {
        dockedRef.current = true;
        const rect = nav.getBoundingClientRect();
        setSlotHeight(rect.height);
        if (reducedMotion) {
          apply(next);
          return;
        }

        animatingRef.current = true;
        apply({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          maxHeight: Math.max(160, window.innerHeight - 16),
          animate: false,
        });
        requestAnimationFrame(() => {
          apply({ ...next, animate: true });
          window.setTimeout(() => {
            animatingRef.current = false;
            const settled = railPose();
            if (!settled) {
              dockedRef.current = false;
              setSlotHeight(null);
              apply(null);
              return;
            }
            apply(settled);
          }, 280);
        });
        return;
      }

      apply(next);
    };

    const followHeader = () => {
      followUntil = performance.now() + 420;
      if (followFrame) return;
      const step = () => {
        update();
        if (performance.now() < followUntil) {
          followFrame = requestAnimationFrame(step);
          return;
        }
        followFrame = 0;
      };
      followFrame = requestAnimationFrame(step);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(followHeader);
    };

    const header = document.querySelector("header");
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    header?.addEventListener("transitionend", followHeader);
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(followFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      header?.removeEventListener("transitionend", followHeader);
    };
  }, []);

  useEffect(() => {
    const ids = sectionIds.split("|").filter(Boolean);
    let frame = 0;

    const updateCurrent = () => {
      const headerBottom =
        document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
      const line = Math.max(READING_LINE, headerBottom + 12);
      let next: string | null = null;

      for (const id of ids) {
        const section = document.getElementById(id);
        if (!section) continue;
        if (section.getBoundingClientRect().top <= line) next = id;
      }

      const atPageEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;
      if (atPageEnd) {
        for (let index = ids.length - 1; index >= 0; index -= 1) {
          const section = document.getElementById(ids[index]);
          if (!section) continue;
          if (section.getBoundingClientRect().top < window.innerHeight - 24) {
            next = ids[index];
            break;
          }
        }
      }

      setCurrentId((current) => (current === next ? current : next));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateCurrent);
    };

    updateCurrent();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onScroll);
    };
  }, [sectionIds]);

  const docked = pose !== null;

  useEffect(() => {
    const nav = navRef.current;
    if (!docked || !currentId || !nav) return;
    const link = nav.querySelector<HTMLAnchorElement>(
      `a[href="#${CSS.escape(currentId)}"]`,
    );
    if (!link || nav.scrollHeight <= nav.clientHeight + 1) return;

    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    if (linkRect.top < navRect.top) {
      nav.scrollTop -= navRect.top - linkRect.top;
    } else if (linkRect.bottom > navRect.bottom) {
      nav.scrollTop += linkRect.bottom - navRect.bottom;
    }
  }, [currentId, docked]);

  return (
    <div ref={slotRef} style={slotHeight ? { height: slotHeight } : undefined}>
      <nav
        ref={navRef}
        aria-label="On this page"
        data-placement={docked ? "left" : "column"}
        className={
          docked
            ? "overflow-y-auto overscroll-contain rounded-2xl border border-white/10 bg-gray-800/95 px-4 py-4 shadow-xl shadow-black/20"
            : "rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 md:px-6"
        }
        style={
          pose
            ? {
                position: "fixed",
                top: pose.top,
                left: pose.left,
                width: pose.width,
                maxHeight: pose.maxHeight,
                zIndex: 30,
                transition: pose.animate
                  ? "top 280ms ease, left 280ms ease, width 280ms ease"
                  : undefined,
              }
            : undefined
        }
      >
        <p className="font-sfmono text-xs uppercase tracking-[0.18em] text-blue-200/60">
          On this page
        </p>
        <ContentsColumns items={items} currentId={currentId} docked={docked} />
      </nav>
    </div>
  );
}
