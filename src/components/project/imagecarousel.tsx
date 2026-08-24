"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useState,
  useRef,
  type TouchEvent,
} from "react";

type ImageCarouselProps = {
  images: string[];
  title: string;
};

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const touchStartX = useRef<number | null>(null);



  const total = images.length;
  const hasPrev = index > 0;
  const hasNext = index < total - 1;

  const go = useCallback(
    (dir: 1 | -1) => {
      const next = index + dir;
      if (next < 0 || next >= total) return;
      setDirection(dir);
      setIndex(next);
    },
    [index, total],
  );

  // Left / right keyboard navigation — only for carousel, not modal
  useEffect(() => {
    if (total <= 1) return;

    const handleKey = (e: KeyboardEvent) => {
      // Only act on arrow keys; Escape is handled by the modal itself
      if (e.key === "ArrowLeft") {
        e.stopPropagation();
        go(-1);
      } else if (e.key === "ArrowRight") {
        e.stopPropagation();
        go(1);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [go, total]);

  // Touch swipe
  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) go(delta > 0 ? 1 : -1);
    touchStartX.current = null;
  };

  // ─── Empty state ───────────────────────────────────────────────────────────
  if (total === 0) {
    return (
      <div className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-black/10 flex items-center justify-center opacity-40 text-[15px] select-none">
        No images
      </div>
    );
  }

  // ─── Single image — no controls ──────────────────────────────────────────
  if (total === 1) {
    return (
      <div className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-black/10 relative">
        <Image
          src={images[0]}
          alt={`${title} — screenshot 1`}
          fill
          className="object-cover"
          priority
        />
      </div>
    );
  }

  // ─── Multi-image carousel ─────────────────────────────────────────────────
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "6%" : "-6%",
      opacity: 0,
    }),
    center: {
      x: "0%",
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-6%" : "6%",
      opacity: 0,
    }),
  };

  return (
    <div
      className="aspect-[4/3] w-full rounded-sm bg-black/10 relative overflow-hidden select-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slide */}
      <AnimatePresence custom={direction} mode="popLayout" initial={false}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={`${title} — screenshot ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Controls overlay — stopPropagation keeps them from bubbling to modal backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Prev button ── */}
        <button
          type="button"
          aria-label="Previous image"
          disabled={!hasPrev}
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
          className={[
            "pointer-events-auto absolute bottom-4 left-4",
            "w-[34px] h-[34px] rounded-full",
            "bg-[var(--background)] text-[var(--foreground)]",
            "flex items-center justify-center",
            "border border-[var(--foreground)]/10",
            "transition-opacity duration-200",
            "cursor-none",
            hasPrev ? "opacity-90 hover:opacity-100" : "opacity-30 cursor-not-allowed",
          ].join(" ")}
        >
          {/* Left chevron */}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* ── Next button ── */}
        <button
          type="button"
          aria-label="Next image"
          disabled={!hasNext}
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
          className={[
            "pointer-events-auto absolute bottom-4 right-4",
            "w-[34px] h-[34px] rounded-full",
            "bg-[var(--background)] text-[var(--foreground)]",
            "flex items-center justify-center",
            "border border-[var(--foreground)]/10",
            "transition-opacity duration-200",
            "cursor-none",
            hasNext ? "opacity-90 hover:opacity-100" : "opacity-30 cursor-not-allowed",
          ].join(" ")}
        >
          {/* Right chevron */}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* ── Pagination dots / pill ── */}
        <div className="pointer-events-auto absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-[5px]">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to image ${i + 1}`}
              onClick={(e) => {
                e.stopPropagation();
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className="cursor-none transition-all duration-300"
            >
              <motion.span
                layout
                className="block rounded-full bg-[var(--background)]"
                animate={{
                  width: i === index ? 18 : 6,
                  height: 6,
                  opacity: i === index ? 0.95 : 0.45,
                }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "block" }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
