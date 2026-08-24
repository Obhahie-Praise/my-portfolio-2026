import { Project } from "@/data/projects";
import Image from "next/image";

const ProjectCards = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left space-y-[32px] w-full block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/30 rounded-[5px] transition-shadow duration-200"
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
    </button>
  );
};

export default ProjectCards;
