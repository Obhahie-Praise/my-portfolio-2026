"use client";

import { thoughts } from "@/data/thoughts";
import type { Thought } from "@/data/thoughts";
import { ThemeImage } from "@/components/ThemeImage";
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
    <section id="thoughts" className="space-y-[48px] md:space-y-[70px] px-[20px] md:px-[50px]">
      {/* Section header */}
      <div className="grid grid-cols-1 gap-[12px] md:grid-cols-2">
        <h3 className="text-[clamp(60px,11vw,150px)] tracking-[1%] leading-none font-mono flex items-center">
          Thoughts
        </h3>
        <p className="text-[clamp(16px,2vw,28px)] tracking-[1%] leading-[122%] flex items-center">
          Things I&apos;m thinking about, figuring out, and occasionally getting
          wrong.
        </p>
      </div>

      {/* Body: sidebar (desktop) / stacked (mobile) */}
      <div className="flex flex-col gap-[32px] md:flex-row md:items-start md:justify-between md:gap-[18px]">
        {/* Filter tabs */}
        <div
          className="
            flex flex-row md:flex-col
            overflow-x-auto md:overflow-x-visible
            items-center md:items-start
            gap-[20px] md:gap-[20px]
            text-[clamp(20px,2.5vw,40px)] leading-none font-medium font-mono
            px-0 md:px-[32px]
            pb-[4px] md:pb-0 md:py-[12px]
            border-b md:border-b-0 md:border-r
            border-border-custom
            flex-shrink-0
            scrollbar-hide
          "
        >
          {THOUGHT_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={[
                "cursor-link transition-colors duration-200 text-left whitespace-nowrap md:py-0 py-[18px]",
                activeTab === tab ? "" : "text-text-muted hover:text-foreground",
              ].join(" ")}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Thought list */}
        <div className="space-y-[24px] flex-1 min-w-0">
          {filtered.length > 0 ? (
            filtered.map((thought) => (
              <button
                key={thought.id}
                type="button"
                onClick={() => setSelectedThought(thought)}
                className="w-full text-left md:cursor-none flex items-center justify-between border-b border-foreground leading-none px-[16px] md:px-[24px] py-[18px] group"
              >
                <div className="space-y-[16px] md:space-y-[24px] min-w-0 pr-[16px]">
                  <p className="font-medium text-[clamp(12px,1.2vw,16px)]">{thought.date}</p>
                  <div className="space-y-[8px]">
                    <p className="text-[clamp(18px,2.5vw,32px)] font-medium font-mono leading-tight">
                      {thought.title}
                    </p>
                    <p className="text-[13px] md:text-[15px] opacity-70">
                      {thought.tags} · {thought.readTime} mins read
                    </p>
                  </div>
                </div>
                <ThemeImage
                  src="/arrow.svg"
                  darkSrc="/arrow-white.svg"
                  alt="Read more"
                  width={56.1}
                  height={56.1}
                  className="w-[36px] h-[36px] md:w-[56px] md:h-[56px] flex-shrink-0"
                />
              </button>
            ))
          ) : (
            <p className="text-[20px] font-medium text-text-muted px-[24px] py-[18px]">
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
