"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useCallback, useRef } from "react";
import type { Thought } from "../../data/thoughts";

type ThoughtModalProps = {
  thought: Thought | null;
  onClose: () => void;
};

export default function ThoughtModal({ thought, onClose }: ThoughtModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Stable close reference
  const handleClose = useCallback(() => onClose(), [onClose]);

  // Escape to close
  useEffect(() => {
    if (!thought) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [thought, handleClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (!thought) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [thought]);

  // Outside-click handler — only fires when the click target is the backdrop
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Guard: only close if the click landed directly on the backdrop wrapper,
      // not on anything inside the modal panel.
      if (modalRef.current && modalRef.current.contains(e.target as Node)) {
        return;
      }
      handleClose();
    },
    [handleClose],
  );

  return (
    <AnimatePresence>
      {thought && (
        // Full-viewport wrapper — clicking it closes the modal
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={handleBackdropClick}
          aria-modal="true"
          role="dialog"
          aria-labelledby="thought-modal-title"
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

          {/* Modal panel — clicks inside do NOT propagate to backdrop */}
          <motion.div
            ref={modalRef}
            className="relative z-10 w-full max-w-[1080px] max-h-[90vh] overflow-y-auto bg-background"
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            // Prevent clicks inside from bubbling up to the backdrop wrapper
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[var(--foreground)]/10 px-[40px] py-[32px]">
              <div className="space-y-[10px] pr-10">
                {/* Meta row */}
                <p className="text-[13px] font-medium tracking-[0.06em] uppercase opacity-50">
                  {thought.date}&nbsp;&nbsp;·&nbsp;&nbsp;{thought.tags}&nbsp;&nbsp;·&nbsp;&nbsp;{thought.readTime} min read
                </p>

                {/* Title */}
                <h2
                  id="thought-modal-title"
                  className="font-mono font-medium text-[40px] leading-[118%] tracking-[-0.5px]"
                >
                  {thought.title}
                </h2>
              </div>

              {/* Close button */}
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close thought"
                className="flex-shrink-0 mt-1 w-[36px] h-[36px] flex items-center justify-center border border-[var(--foreground)]/15 rounded-full text-[18px] leading-none opacity-60 hover:opacity-100 transition-opacity duration-200 cursor-none"
              >
                ×
              </button>
            </div>

            {/* Body */}
            <div className="px-[40px] py-[36px]">
              <div className="space-y-[20px]">
                {thought.content.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[24px] leading-[168%] tracking-[-0.1px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
