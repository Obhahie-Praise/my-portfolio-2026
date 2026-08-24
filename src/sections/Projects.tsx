"use client";

import Projectcards from "@/components/project/projectcards";
import ProjectModal from "@/components/project/projectmodal";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { useState } from "react";

const PROJECT_TABS = ["All", "Web", "Mobile", "UI/UX", "Design", "Branding"] as const;
type ProjectTab = (typeof PROJECT_TABS)[number];

const Projects = () => {
  const [activeTab, setActiveTab] = useState<ProjectTab>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="space-y-[48px] md:space-y-[70px] pt-[60px] md:pt-[125px] px-[20px] md:px-[50px]">
      <div className="space-y-[48px] md:space-y-[100px]">
        {/* Section header */}
        <div className="grid grid-cols-1 gap-[12px] md:grid-cols-2">
          <h3 className="text-[clamp(60px,11vw,150px)] tracking-[1%] leading-none font-mono flex items-center">
            Projects
          </h3>
          <p className="text-[clamp(16px,2vw,28px)] tracking-[1%] leading-[122%] flex items-center">
            A collection of things I&apos;ve built, designed, broken, fixed,
            and learned from.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center text-[clamp(20px,3vw,40px)] font-medium font-mono gap-x-[24px] gap-y-[8px] md:gap-x-[74px] py-[18px] border-b border-border-custom">
          {PROJECT_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={[
                "cursor-link transition-colors duration-200",
                activeTab === tab ? "" : "text-text-muted hover:text-foreground",
              ].join(" ")}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Cards grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[24px] gap-y-[48px]">
          {filtered.map((project) => (
            <Projectcards
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      ) : (
        <p className="text-[20px] font-medium text-text-muted">
          No projects to see here yet.
        </p>
      )}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
