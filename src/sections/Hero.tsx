"use client";

import RevealMask from "@/components/motion/revealmask";
import { useCursor } from "@/components/motion/cursorprovider";
import Link from "next/link";
import { ThemeImage } from "@/components/ThemeImage";

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

        {/* Social links — vertical column on all screen sizes */}
        <div className="flex flex-col items-center gap-[16px] md:gap-[20px] pt-[60px] md:pt-0 flex-shrink-0">
          <Link
            href="https://www.tiktok.com/@praise_d_builder"
            className="md:cursor-none hover:opacity-80 transition-all hover:scale-110"
            onPointerEnter={() => setMode("link")}
            onPointerLeave={() => setMode("default")}
            aria-label="TikTok"
          >
            <ThemeImage
              src="/icons/tiktok.svg"
              darkSrc="/icons/tiktok-alt.svg"
              alt="tiktok link"
              height={24}
              width={24}
              className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/praise-d-builder-743b92426/"
            className="md:cursor-none hover:opacity-80 transition-all hover:scale-110"
            onPointerEnter={() => setMode("link")}
            onPointerLeave={() => setMode("default")}
            aria-label="LinkedIn"
          >
            <ThemeImage
              src="/icons/linkedin.svg"
              darkSrc="/icons/linkedin-alt.svg"
              alt="linkedin link"
              height={24}
              width={24}
              className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            />
          </Link>
          <Link
            href="https://x.com/praizedevx"
            className="md:cursor-none hover:opacity-80 transition-all hover:scale-110"
            onPointerEnter={() => setMode("link")}
            onPointerLeave={() => setMode("default")}
            aria-label="Twitter / X"
          >
            <ThemeImage
              src="/icons/twitter.svg"
              darkSrc="/icons/twitter-alt.svg"
              alt="twitter link"
              height={24}
              width={24}
              className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            />
          </Link>
          <Link
            href="https://github.com/Obhahie-Praise"
            className="md:cursor-none hover:opacity-80 transition-all hover:scale-110"
            onPointerEnter={() => setMode("link")}
            onPointerLeave={() => setMode("default")}
            aria-label="GitHub"
          >
            <ThemeImage
              src="/icons/github.svg"
              darkSrc="/icons/github-alt.svg"
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
      <div className="font-mono font-medium grid grid-cols-2 md:flex md:flex-wrap items-start justify-start md:justify-between pt-[40px] md:pt-30 gap-y-[8px]">
        <div className="flex flex-col items-start gap-2 py-[16px] px-[16px] md:py-[20px] md:px-[28px] min-w-0">
          <p className="text-[clamp(28px,4vw,40px)]">2+</p>
          <p className="text-[clamp(11px,1.2vw,18px)]">YEARS BUILDING</p>
        </div>
        <div className="flex flex-col items-start gap-2 py-[16px] px-[16px] md:py-[20px] md:px-[28px] min-w-0">
          <p className="text-[clamp(28px,4vw,40px)]">5+</p>
          <p className="text-[clamp(11px,1.2vw,18px)]">VIABLE PROJECTS</p>
        </div>
        <div className="flex flex-col items-start gap-2 py-[16px] px-[16px] md:py-[20px] md:px-[28px] min-w-0">
          <p className="text-[clamp(28px,4vw,40px)]">2</p>
          <p className="text-[clamp(11px,1.2vw,18px)]">NOTABLE MILESTONES</p>
        </div>
        <div className="flex flex-col items-start gap-2 py-[16px] px-[16px] md:py-[20px] md:px-[28px] min-w-0">
          <p className="text-[clamp(28px,4vw,40px)]">0</p>
          <p className="text-[clamp(11px,1.2vw,18px)]">IDEAS WORTH EXPLORING</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
