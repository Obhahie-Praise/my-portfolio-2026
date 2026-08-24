"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useCallback } from "react";
import type { Project } from "../../data/projects";
import Link from "next/link";
import Image from "next/image";
import ImageCarousel from "./imagecarousel";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Stable close reference
  const handleClose = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleClose]);

  // Outside-click handler — only fires when the click target is the backdrop
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (modalRef.current && modalRef.current.contains(e.target as Node)) {
        return;
      }
      handleClose();
    },
    [handleClose],
  );

  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-[12px] md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={handleBackdropClick}
          aria-modal="true"
          role="dialog"
          aria-labelledby="project-title"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            className="relative z-10 w-full max-w-[1400px] h-[92vh] overflow-y-auto bg-background text-[var(--foreground)] rounded-[10px]"
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 30,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button
              type="button"
              onClick={handleClose}
              aria-label="Close project details"
              whileHover={{ scale: 1.08, opacity: 1 }}
              whileTap={{ scale: 0.93 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-4 top-4 md:right-6 md:top-6 z-20 flex items-center justify-center w-[44px] h-[44px] rounded-full border border-[var(--foreground)]/15 bg-[var(--background)] opacity-70 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/30 transition-opacity duration-200"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1L13 13M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </motion.button>

            {/* Content: single column on mobile, two columns on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-4 md:p-8">
              {/* LEFT — project info */}
              <div className="flex flex-col">
                <div>
                  <h2
                    id="project-title"
                    className="font-medium font-mono text-[clamp(24px,3vw,40px)] leading-none"
                  >
                    {project.title}
                  </h2>

                  <p className="mt-[12px] opacity-60 text-[clamp(15px,2vw,24px)] leading-none">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-text-muted font-medium px-[10px] py-[6px] text-[13px] md:text-[15px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Purpose */}
                <ProjectSection title="PURPOSE">
                  <p>{project.purpose}</p>
                </ProjectSection>

                {/* Role */}
                <ProjectSection title="MY ROLE">
                  <ul className="space-y-1">
                    {project.role.map((role) => (
                      <li key={role}>{role}</li>
                    ))}
                  </ul>
                </ProjectSection>

                {/* Project metadata */}
                <ProjectSection title="PROJECT">
                  <div className="grid grid-cols-[90px_1fr] md:grid-cols-[100px_1fr] gap-y-2">
                    <span>Ownership</span>
                    <span>{project.ownership}</span>

                    <span>Team</span>
                    <span>{project.team}</span>

                    <span>Timeline</span>
                    <span>{project.timeline}</span>
                  </div>
                </ProjectSection>

                {/* Tech */}
                <ProjectSection title="TECH STACK">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-text-muted px-3 py-1 text-[13px] md:text-[15px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </ProjectSection>

                {/* Work */}
                <ProjectSection title="THE WORK">
                  <p>{project.work}</p>
                </ProjectSection>
              </div>

              {/* RIGHT — carousel (sticky on desktop, inline on mobile) */}
              <div className="md:sticky md:top-0 h-fit">
                <ImageCarousel key={project.id} images={project.images} title={project.title} />
              </div>
            </div>

            {/* Footer links */}
            <div className="flex flex-wrap justify-end gap-4 md:gap-8 border-t border-current/10 p-4 md:p-8 text-[clamp(14px,1.5vw,20px)] leading-[-1%]">
              {project.links?.live && (
                <Link
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm bg-[var(--foreground)] flex items-center text-white gap-x-[10px] px-[16px] md:px-[20px] py-[10px]"
                >
                  <p>Visit project</p>
                  <Image
                    src="arrow-white.svg"
                    alt="arrow link"
                    width={10.02}
                    height={10.02}
                  />
                </Link>
              )}

              {project.links?.github && (
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-[10px] px-[16px] md:px-[20px] py-[10px]"
                >
                  <p>Github</p>
                  <Image
                    src="arrow.svg"
                    alt="arrow link"
                    width={10.02}
                    height={10.02}
                  />
                </Link>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8 md:mt-10">
      <h3 className="mb-2 text-[16px] md:text-[20px] opacity-50 font-mono font-medium">{title}</h3>

      <div className="border-l border-foreground pl-3 text-sm leading-relaxed text-[16px] md:text-[20px]">
        {children}
      </div>
    </section>
  );
}
