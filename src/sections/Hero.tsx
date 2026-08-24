"use client";

import RevealMask from "@/components/motion/revealmask";
import { useCursor } from "@/components/motion/cursorprovider";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const { mode, setMode } = useCursor();

  return (
    <section
      id="hero"
      className="relative hero-title overflow-visible px-[50px] "
    >
      <div className="w-full flex items-start justify-between">
        <div className="pt-[123px]">
          <h2 className="text-[36px] leading-none">I&apos;m Praise</h2>

          <h1
            className="text-[140px] tracking-[-4%] leading-[117%] hero-title-base"
            onPointerEnter={() => setMode("reveal")}
            onPointerLeave={() => setMode("default")}
          >
            Building viable solutions <br /> since 2024
          </h1>
        </div>

        {/* Social links */}
        <div className="flex flex-col items-center gap-[20px]">
          <Link
            href={"/"}
            className="cursor-none hover:opacity-80 transition-all hover:scale-110"
            onPointerEnter={() => setMode("link")}
            onPointerLeave={() => setMode("default")}
          >
            {" "}
            <Image
              src={"/icons/tiktok.svg"}
              alt="tiktok link"
              height={24}
              width={24}
            />
          </Link>
          <Link
            href={"/"}
            className="cursor-none hover:opacity-80 transition-all hover:scale-110"
            onPointerEnter={() => setMode("link")}
            onPointerLeave={() => setMode("default")}
          >
            {" "}
            <Image
              src={"/icons/linkedin.svg"}
              alt="linkedin link"
              height={24}
              width={24}
            />
          </Link>
          <Link
            href={"/"}
            className="cursor-none hover:opacity-80 transition-all hover:scale-110"
            onPointerEnter={() => setMode("link")}
            onPointerLeave={() => setMode("default")}
          >
            {" "}
            <Image
              src={"/icons/twitter.svg"}
              alt="twitter link"
              height={24}
              width={24}
            />
          </Link>
          <Link
            href={"/"}
            className="cursor-none hover:opacity-80 transition-all hover:scale-110"
            onPointerEnter={() => setMode("link")}
            onPointerLeave={() => setMode("default")}
          >
            {" "}
            <Image
              src={"/icons/github.svg"}
              alt="github link"
              height={24}
              width={24}
            />
          </Link>
        </div>
      </div>
      <RevealMask>
        <div className="hero-title-reveal">
          Designing cool shiii <br />
          since 2025
        </div>
      </RevealMask>

      {/* Stats row */}
      <div className="font-mono text-[18px] font-medium flex items-center justify-between pt-30">
        <div className="flex flex-col items-start gap-3 py-[20px] px-[28px]">
          <p className="text-[40px]">2+</p>
          <p className="">YEARS BUILDING</p>
        </div>
        <div className="flex flex-col items-start gap-3 py-[20px] px-[28px]">
          <p className="text-[40px]">5+</p>
          <p className="">VIABLE PROJECTS</p>
        </div>
        <div className="flex flex-col items-start gap-3 py-[20px] px-[28px]">
          <p className="text-[40px]">2</p>
          <p className="">NOTABLE MILESTONES</p>
        </div>
        <div className="flex flex-col items-start gap-3 py-[20px] px-[28px]">
          <p className="text-[40px]">0</p>
          <p className="">IDEAS WORTH EXPLORING</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
