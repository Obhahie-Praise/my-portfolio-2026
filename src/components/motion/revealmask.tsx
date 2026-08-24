"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";

import { useCursor } from "./cursorprovider";

type RevealMaskProps = {
  children: React.ReactNode;
};

export default function RevealMask({
  children,
}: RevealMaskProps) {
  const { x, y, size } = useCursor();

  const containerRef = useRef<HTMLDivElement>(null);

  const localX = useMotionValue(0);
  const localY = useMotionValue(0);

  useEffect(() => {
    const updatePosition = () => {
      const element = containerRef.current;

      if (!element) return;

      const rect = element.getBoundingClientRect();

      localX.set(x.get() - rect.left);
      localY.set(y.get() - rect.top);
    };

    const unsubscribeX = x.on("change", updatePosition);
    const unsubscribeY = y.on("change", updatePosition);

    updatePosition();

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [x, y, localX, localY]);

  const clipPath = useMotionTemplate`
    circle(calc(${size}px / 2) at ${localX}px ${localY}px)
  `;

  return (
    <motion.div
      ref={containerRef}
      className="reveal-mask"
      style={{
        clipPath,
      }}
    >
      {children}
    </motion.div>
  );
}