import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section id="footer" className="px-[20px] md:px-[50px]">
      {/* Top row — stacks on mobile */}
      <div className="flex flex-col gap-[48px] md:flex-row md:items-end md:justify-between">
        {/* Navigation + Socials columns */}
        <div className="flex items-start gap-x-[48px] md:gap-x-[130px]">
          <div className="flex flex-col gap-[24px] md:gap-[32px] leading-none tracking-[1%]">
            <p className="text-[16px] md:text-[20px] text-[#B29C8F]">NAVIGATION</p>
            <Link href="/#projects" className="cursor-link font-mono font-medium text-[clamp(20px,2.5vw,32px)]">
              Projects
            </Link>
            <Link href="/#feats" className="cursor-link font-mono font-medium text-[clamp(20px,2.5vw,32px)]">
              Feats
            </Link>
            <Link href="/#thoughts" className="cursor-link font-mono font-medium text-[clamp(20px,2.5vw,32px)]">
              Thoughts
            </Link>
            <Link href="/#reachout" className="cursor-link font-mono font-medium text-[clamp(20px,2.5vw,32px)]">
              Reach out
            </Link>
          </div>
          <div className="flex flex-col gap-[24px] md:gap-[32px] leading-none tracking-[1%]">
            <p className="text-[16px] md:text-[20px] text-[#B29C8F]">SOCIALS</p>
            <Link href="/" className="cursor-link font-mono font-medium text-[clamp(20px,2.5vw,32px)]">
              Tiktok
            </Link>
            <Link href="/" className="cursor-link font-mono font-medium text-[clamp(20px,2.5vw,32px)]">
              Linkedin
            </Link>
            <Link href="/" className="cursor-link font-mono font-medium text-[clamp(20px,2.5vw,32px)]">
              X [Twitter]
            </Link>
            <Link href="/" className="cursor-link font-mono font-medium text-[clamp(20px,2.5vw,32px)]">
              Github
            </Link>
          </div>
        </div>

        {/* Copyright — right-aligned on desktop, left on mobile */}
        <p className="text-[clamp(16px,2vw,32px)] leading-none tracking-[1%] md:text-right">
          COPYRIGHTS 2026 <br /> Designed and built by Praise
        </p>
      </div>

      {/* Fluid display name — the most critical overflow fix */}
      <h3 className="text-start font-medium text-[clamp(48px,16.5vw,235px)] tracking-[-1%] leading-none mt-[24px] md:mt-0">
        Obhahie Praise
      </h3>
    </section>
  );
};

export default Footer;
