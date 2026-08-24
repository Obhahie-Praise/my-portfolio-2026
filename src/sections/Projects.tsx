"use client";

import Projectcards from "@/components/project/projectcards";
import { projects } from "@/data/projects";
import { useState } from "react";

const PROJECT_TABS = ["All", "Web", "Mobile", "UI/UX", "Design", "Branding"] as const;
type ProjectTab = (typeof PROJECT_TABS)[number];

const Projects = () => {
  const [activeTab, setActiveTab] = useState<ProjectTab>("All");

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="space-y-[70px] pt-[125px] px-[50px]">
      <div className="">
        <div className="space-y-[100px]">
          <div className="grid grid-cols-2">
            <h3 className="text-[150px] tracking-[1%] leading-none font-mono flex items-center">
              Projects
            </h3>
            <p className="text-[28px] tracking-[1%] leading-[122%] flex items-center">
              A collection of things I&apos;ve built, designed, broken, fixed,
              and learned from.
            </p>
          </div>
          <div className="flex items-center text-[40px] font-medium font-mono gap-[74px] py-[18px] border-b border-[#E5CCBD]">
            {PROJECT_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={[
                  "cursor-link transition-colors duration-200",
                  activeTab === tab ? "" : "text-[#B29C8F] hover:text-foreground",
                ].join(" ")}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[48px]">
          {filtered.map((project) => (
            <Projectcards key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-[20px] font-medium text-[#B29C8F]">
          No projects to see here yet.
        </p>
      )}
    </section>
  );
};

export default Projects;
