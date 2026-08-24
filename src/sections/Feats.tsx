import { feats } from "@/data/feats";
import Image from "next/image";
import React from "react";

const Feats = () => {
  return (
    <section id="feats" className="space-y-[48px] md:space-y-[70px] px-[20px] md:px-[50px]">
      {/* Section header */}
      <div className="grid grid-cols-1 gap-[12px] md:grid-cols-2">
        <h3 className="text-[clamp(60px,11vw,150px)] tracking-[1%] leading-none font-mono flex items-center">
          Feats
        </h3>
        <p className="text-[clamp(16px,2vw,28px)] tracking-[1%] leading-[122%] flex items-center">
          A few things I&apos;ve managed to pull off along the way — from turning
          ideas into projects to competing, presenting.
        </p>
      </div>

      {/* Cards grid — stacks on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[24px] gap-y-[48px]">
        {feats.map((feat) => (
          <div key={feat.id} className="space-y-[32px]">
            {/* Aspect-ratio container ensures correct proportions at every width */}
            <div className="relative w-full aspect-[694.5/494] rounded-[5px] overflow-hidden bg-linear-to-br from-[#0E1318] to-[#4B637E]">
              <Image
                src={feat.images[0]}
                alt={feat.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-[24px]">
              <div className="space-y-[6px]">
                <h4 className="text-[clamp(20px,2.5vw,32px)] font-mono font-medium leading-none">
                  {feat.title} <span className="italic">{feat.position}</span>
                </h4>
                <p className="text-[clamp(14px,1.5vw,20px)] text-text-description tracking-[-1%] leading-none font-medium">
                  {feat.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-[4px]">
                {feat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="uppercase text-[12px] font-medium tracking-[-1%] py-[6px] px-[10px] border border-text-muted rounded-full"
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
