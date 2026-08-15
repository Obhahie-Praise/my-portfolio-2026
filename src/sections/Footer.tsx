import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section id="footer" className="">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-x-[130px]">
          <div className="flex flex-col gap-[32px] leading-none tracking-[1%]">
            <p className="text-[20px] text-[#B29C8F]">NAVIGATION</p>
            <Link href={"/"} className="font-mono font-medium text-[32px]">
              Projects
            </Link>
            <Link href={"/"} className="font-mono font-medium text-[32px]">
              Feats
            </Link>
            <Link href={"/"} className="font-mono font-medium text-[32px]">
              Thoughts
            </Link>
            <Link href={"/"} className="font-mono font-medium text-[32px]">
              Reach out
            </Link>
          </div>
          <div className="flex flex-col gap-[32px] leading-none tracking-[1%]">
            <p className="text-[20px] text-[#B29C8F]">SOCIALS</p>
            <Link href={"/"} className="font-mono font-medium text-[32px]">
              Tiktok
            </Link>
            <Link href={"/"} className="font-mono font-medium text-[32px]">
              Linkedin
            </Link>
            <Link href={"/"} className="font-mono font-medium text-[32px]">
              X [Twitter]
            </Link>
            <Link href={"/"} className="font-mono font-medium text-[32px]">
              Github
            </Link>
          </div>
        </div>
        <p className="text-[32px] leading-none tracking-[1%]">
          COPYRIGHTS 2026 <br /> Designed and built by Praise
        </p>
      </div>
    <h3 className="text-center font-medium text-[235px] tracking-[-1%] leading-none">Obhahie Praise</h3>
    </section>
  );
};

export default Footer;
