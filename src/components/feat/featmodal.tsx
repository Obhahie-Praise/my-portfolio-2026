"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useCallback } from "react";
import ImageCarousel from "../project/imagecarousel";

export type Feat = {
  id: number;
  title: string;
  position: string;
  description: string;
  tags: string[];
  context: string;
  myRole: string[];
  feat: {
    result: string;
    category: string;
    ownership: string;
    team: string;
    timeline: string;
  };
  work: string;
  images: string[];
};

type FeatModalProps = {
  feat: Feat | null;
  onClose: () => void;
};

export default function FeatModal({ feat, onClose }: FeatModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Stable close reference
  const handleClose = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (!feat) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [feat, handleClose]);

  // Outside-click handler
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
    if (!feat) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [feat]);

  return (
    <AnimatePresence>
      {feat && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-[12px] md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={handleBackdropClick}
          aria-modal="true"
          role="dialog"
          aria-labelledby="feat-title"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[var(--foreground)]/10 backdrop-blur-[20px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            className="relative z-10 w-full max-w-[1400px] max-h-[92vh] overflow-y-auto bg-background text-[var(--foreground)] rounded-[10px]"
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
              aria-label="Close feat details"
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
              {/* LEFT — feat info */}
              <div className="flex flex-col">
                <div>
                  <h2
                    id="feat-title"
                    className="font-medium font-mono text-[clamp(24px,3vw,40px)] leading-none"
                  >
                    {feat.title} <span className="italic opacity-80">{feat.position}</span>
                  </h2>

                  <p className="mt-[12px] opacity-60 text-[clamp(15px,2vw,24px)] leading-none">
                    {feat.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {feat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-text-muted font-medium px-[10px] py-[6px] text-[13px] md:text-[15px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Context / What happened */}
                <FeatSection title="CONTEXT">
                  <p>{feat.context}</p>
                </FeatSection>

                {/* Role */}
                <FeatSection title="MY ROLE">
                  <ul className="space-y-1">
                    {feat.myRole.map((role) => (
                      <li key={role}>{role}</li>
                    ))}
                  </ul>
                </FeatSection>

                {/* Achievement metadata */}
                <FeatSection title="ACHIEVEMENT">
                  <div className="grid grid-cols-[90px_1fr] md:grid-cols-[100px_1fr] gap-y-2">
                    <span>Result</span>
                    <span className="font-semibold">{feat.feat.result}</span>

                    <span>Category</span>
                    <span>{feat.feat.category}</span>

                    <span>Ownership</span>
                    <span>{feat.feat.ownership}</span>

                    <span>Team</span>
                    <span>{feat.feat.team}</span>

                    <span>Timeline</span>
                    <span>{feat.feat.timeline}</span>
                  </div>
                </FeatSection>

                {/* Contribution */}
                <FeatSection title="CONTRIBUTION">
                  <p>{feat.work}</p>
                </FeatSection>
              </div>

              {/* RIGHT — carousel (sticky on desktop, inline on mobile) */}
              <div className="md:sticky md:top-0 h-fit">
                <ImageCarousel key={feat.id} images={feat.images} title={feat.title} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FeatSection({
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
