"use client";

import { Project } from "@/data/projects";
import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./projectmodal";

const ProjectCards = ({ project }: { project: Project }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <div
      key={project.id}
      className="space-y-[32px]"
      onClick={() => setSelectedProject(project)}
    >
      <Image
        src={project.images[0]}
        alt={project.title}
        width={694.5}
        height={494}
        className="bg-linear-to-br from-[#0E1318] to-[#4B637E] rounded-[5px] w-full"
      />
      <div className="space-y-[24px]">
        <div className="space-y-[6px]">
          <h4 className="text-[32px] font-mono font-medium leading-none">
            {project.title}
          </h4>
          <p className="text-[20px] text-text-description tracking-[-1%] leading-none font-medium">
            {project.description}
          </p>
        </div>
        <div className="space-x-[4px]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="uppercase text-[12px] font-medium tracking-[-1%] py-[6px] px-[10px] border border-text-muted rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default ProjectCards;
