"use client";

import RevealMask from "@/components/motion/revealmask";
import { useCursor } from "@/components/motion/cursorprovider";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const { setMode } = useCursor();

  return (
    <section
      id="hero"
      className="relative hero-title overflow-visible px-[20px] md:px-[50px]"
    >
      {/* ── Title + social links row ─────────────────────────────────────── */}
      <div className="w-full flex items-start justify-between gap-[16px]">
        <div className="pt-[60px] md:pt-[123px] min-w-0">
          <h2 className="text-[clamp(18px,2.5vw,36px)] leading-none">
            I&apos;m Praise
          </h2>

          <h1
            className="hero-title-base"
            onPointerEnter={() => setMode("reveal")}
            onPointerLeave={() => setMode("default")}
          >
            Building viable solutions <br /> since 2024
          </h1>
        </div>

        {/* Social links — vertical column on tablet+, row on mobile */}
        <div className="flex md:flex-col items-center gap-[16px] md:gap-[20px] pt-[64px] md:pt-0 flex-shrink-0">
          <Link
            href="/"
            className="md:cursor-none hover:opacity-80 transition-all hover:scale-110"
            onPointerEnter={() => setMode("link")}
            onPointerLeave={() => setMode("default")}
            aria-label="TikTok"
          >
            <Image
              src="/icons/tiktok.svg"
              alt="tiktok link"
              height={24}
              width={24}
              className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            />
          </Link>
          <Link
            href="/"
            className="md:cursor-none hover:opacity-80 transition-all hover:scale-110"
            onPointerEnter={() => setMode("link")}
            onPointerLeave={() => setMode("default")}
            aria-label="LinkedIn"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="linkedin link"
              height={24}
              width={24}
              className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            />
          </Link>
          <Link
            href="/"
            className="md:cursor-none hover:opacity-80 transition-all hover:scale-110"
            onPointerEnter={() => setMode("link")}
            onPointerLeave={() => setMode("default")}
            aria-label="Twitter / X"
          >
            <Image
              src="/icons/twitter.svg"
              alt="twitter link"
              height={24}
              width={24}
              className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            />
          </Link>
          <Link
            href="/"
            className="md:cursor-none hover:opacity-80 transition-all hover:scale-110"
            onPointerEnter={() => setMode("link")}
            onPointerLeave={() => setMode("default")}
            aria-label="GitHub"
          >
            <Image
              src="/icons/github.svg"
              alt="github link"
              height={24}
              width={24}
              className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            />
          </Link>
        </div>
      </div>

      {/* Reveal mask overlay — desktop cursor interaction */}
      <RevealMask>
        <div className="hero-title-reveal">
          Designing cool shiii <br />
          since 2025
        </div>
      </RevealMask>

      {/* ── Stats row ────────────────────────────────────────────────────── */}
      <div className="font-mono font-medium flex flex-wrap items-start justify-start md:justify-between pt-[40px] md:pt-30 gap-y-[8px]">
        <div className="flex flex-col items-start gap-2 py-[16px] px-[16px] md:py-[20px] md:px-[28px] min-w-[140px] md:min-w-0">
          <p className="text-[clamp(28px,4vw,40px)]">2+</p>
          <p className="text-[clamp(11px,1.2vw,18px)]">YEARS BUILDING</p>
        </div>
        <div className="flex flex-col items-start gap-2 py-[16px] px-[16px] md:py-[20px] md:px-[28px] min-w-[140px] md:min-w-0">
          <p className="text-[clamp(28px,4vw,40px)]">5+</p>
          <p className="text-[clamp(11px,1.2vw,18px)]">VIABLE PROJECTS</p>
        </div>
        <div className="flex flex-col items-start gap-2 py-[16px] px-[16px] md:py-[20px] md:px-[28px] min-w-[140px] md:min-w-0">
          <p className="text-[clamp(28px,4vw,40px)]">2</p>
          <p className="text-[clamp(11px,1.2vw,18px)]">NOTABLE MILESTONES</p>
        </div>
        <div className="flex flex-col items-start gap-2 py-[16px] px-[16px] md:py-[20px] md:px-[28px] min-w-[140px] md:min-w-0">
          <p className="text-[clamp(28px,4vw,40px)]">0</p>
          <p className="text-[clamp(11px,1.2vw,18px)]">IDEAS WORTH EXPLORING</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
