"use client";

import { thoughts } from "@/data/thoughts";
import type { Thought } from "@/data/thoughts";
import Image from "next/image";
import { useState } from "react";
import ThoughtModal from "@/components/thought/thoughtmodal";

const THOUGHT_TABS = ["All", "Building", "Design", "Tech", "Life", "Ideas"] as const;
type ThoughtTab = (typeof THOUGHT_TABS)[number];

const Thoughts = () => {
  const [activeTab, setActiveTab] = useState<ThoughtTab>("All");
  const [selectedThought, setSelectedThought] = useState<Thought | null>(null);

  const filtered =
    activeTab === "All"
      ? thoughts
      : thoughts.filter((t) => t.category === activeTab);

  return (
    <section id="thoughts" className="space-y-[70px] px-[50px] ">
      <div className="grid grid-cols-2">
        <h3 className="text-[150px] tracking-[1%] leading-none font-mono flex items-center">
          Thoughts
        </h3>
        <p className="text-[28px] tracking-[1%] leading-[122%] flex items-center">
          Things I&apos;m thinking about, figuring out, and occasionally getting
          wrong.
        </p>
      </div>
      <div className="flex items-start justify-between gap-[18px]">
        <div className="flex flex-col items-start text-[40px] leading-none font-medium font-mono gap-[20px] px-[32px] py-[12px] border-r border-[#E5CCBD]">
          {THOUGHT_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={[
                "cursor-link transition-colors duration-200 text-left",
                activeTab === tab ? "" : "text-[#B29C8F] hover:text-foreground",
              ].join(" ")}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="space-y-[24px] flex-1">
          {filtered.length > 0 ? (
            filtered.map((thought) => (
              <button
                key={thought.id}
                type="button"
                onClick={() => setSelectedThought(thought)}
                className="w-full text-left cursor-none flex items-center justify-between border-b border-foreground leading-none px-[24px] py-[18px] group"
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
              </button>
            ))
          ) : (
            <p className="text-[20px] font-medium text-[#B29C8F] px-[24px] py-[18px]">
              No thoughts in this category yet.
            </p>
          )}
        </div>
      </div>

      <ThoughtModal
        thought={selectedThought}
        onClose={() => setSelectedThought(null)}
      />
    </section>
  );
};

export default Thoughts;

