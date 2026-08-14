import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="">
      <div className="w-full flex items-start justify-between">
        <div className="pt-[123px]">
          <h2 className="text-[36px] leading-none">I&apos;m Praise</h2>
          <h1 className="text-[140px] tracking-[-4%] leading-[117%]">Building viable solutions since 2024</h1>
        </div>
        <div className="flex flex-col items-center gap-[20px]">
          <Link href={"/"}>
            {" "}
            <Image
              src={"/icons/tiktok.svg"}
              alt="tiktok link"
              height={24}
              width={24}
            />
          </Link>
          <Link href={"/"}>
            {" "}
            <Image
              src={"/icons/linkedin.svg"}
              alt="linkedin link"
              height={24}
              width={24}
            />
          </Link>
          <Link href={"/"}>
            {" "}
            <Image
              src={"/icons/twitter.svg"}
              alt="twitter link"
              height={24}
              width={24}
            />
          </Link>
          <Link href={"/"}>
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
    </div>
  );
};

export default Hero;
