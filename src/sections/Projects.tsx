import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="space-y-[70px] pt-[125px]">
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
            <Link href={"/?"} className="">
              All
            </Link>
            <Link href={"/?"} className="text-[#B29C8F]">
              Web
            </Link>
            <Link href={"/?"} className="text-[#B29C8F]">
              Mobile
            </Link>
            <Link href={"/?"} className="text-[#B29C8F]">
              UI/UX
            </Link>
            <Link href={"/?"} className="text-[#B29C8F]">
              Design
            </Link>
            <Link href={"/?"} className="text-[#B29C8F]">
              Branding
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-[24px] gap-y-[48px]">
        {projects.map((project) => (
          <div key={project.id} className="space-y-[32px]">
            <Image
              src={"/"}
              alt={project.title}
              width={694.5}
              height={494}
              className="bg-linear-to-br from-[#0E1318] to-[#4B637E] rounded-[5px]"
            />
            <div className="space-y-[24px]">
              <div className="space-y-[6px]">
                <h4 className="text-[32px] font-mono font-medium leading-none">
                  {project.title}
                </h4>
                <p className="text-[20px] text-[#826859] tracking-[-1%] leading-none font-medium">
                  {project.description}
                </p>
              </div>
              <div className="space-x-[4px]">
                {project.tags.map((tag) => (
                  <span key={tag} className="uppercase text-[12px] font-medium tracking-[-1%] py-[6px] px-[10px] border border-[#B29C8F] rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
