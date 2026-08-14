import { thoughts } from "@/data/thoughts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Thoughts = () => {
  return (
    <section id="thoughts" className="space-y-[70px]">
      <div className="grid grid-cols-2">
        <h3 className="text-[150px] tracking-[1%] leading-none font-mono flex items-center">
          Thoughts
        </h3>
        <p className="text-[28px] tracking-[1%] leading-[122%] flex items-center">
          Things I’m thinking about, figuring out, and occasionally getting
          wrong.
        </p>
      </div>
      <div className="flex items-start justify-between gap-[18px]">
        <div className="flex flex-col items-start text-[40px] leading-none font-medium font-mono gap-[20px] px-[32px] py-[12px] border-r border-[#E5CCBD]">
          <Link href={"/?"} className="">
            All
          </Link>
          <Link href={"/?"} className="text-[#B29C8F]">
            Building
          </Link>
          <Link href={"/?"} className="text-[#B29C8F]">
            Design
          </Link>
          <Link href={"/?"} className="text-[#B29C8F]">
            Tech
          </Link>
          <Link href={"/?"} className="text-[#B29C8F]">
            Life
          </Link>
          <Link href={"/?"} className="text-[#B29C8F]">
            Ideas
          </Link>
        </div>
        <div className="space-y-[24px] flex-1">
          {thoughts.map((thought) => (
            <div
              key={thought.id}
              className="flex items-center justify-between border-b border-foreground leading-none px-[24px] py-[18px]"
            >
              <div className="space-y-[24px]">
                <p className="font-medium">{thought.date}</p>
                <div className="space-y-[8px]">
                  <p className="text-[32px] font-medium font-mono">
                    {thought.title}
                  </p>
                  <p className="text-[15px]">
                    {thought.tags} · {thought.readTime} mins read
                  </p>
                </div>
              </div>
              <Image
                src={"/arrow.svg"}
                alt="Read more"
                width={56.1}
                height={56.1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thoughts;
