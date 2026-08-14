import { feats } from "@/data/feats";
import Image from "next/image";
import React from "react";

const Feats = () => {
  return (
    <section id="feats" className="space-y-[70px]">
      <div className="grid grid-cols-2">
        <h3 className="text-[150px] tracking-[1%] leading-none font-mono flex items-center">
          Feats
        </h3>
        <p className="text-[28px] tracking-[1%] leading-[122%] flex items-center">
          A few things I&apos;ve managed to pull off along the way — from turning
          ideas into projects to competing, presenting.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-[24px] gap-y-[48px]">
        {feats.map((feat) => (
          <div key={feat.id} className="space-y-[32px]">
            <Image
              src={"/"}
              alt={feat.title}
              width={694.5}
              height={494}
              className="bg-linear-to-br from-[#0E1318] to-[#4B637E] rounded-[5px]"
            />
            <div className="space-y-[24px]">
              <div className="space-y-[6px]">
                <h4 className="text-[32px] font-mono font-medium leading-none">
                  {feat.title} <span className="italic">{feat.position}</span>
                </h4>
                <p className="text-[20px] text-[#826859] tracking-[-1%] leading-none font-medium">
                  {feat.description}
                </p>
              </div>
              <div className="space-x-[4px]">
                {feat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="uppercase text-[12px] font-medium tracking-[-1%] py-[6px] px-[10px] border border-[#B29C8F] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feats;
