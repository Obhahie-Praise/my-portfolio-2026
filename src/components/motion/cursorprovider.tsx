"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { useMotionValue, useSpring, type MotionValue } from "motion/react";

export type CursorMode = "default" | "reveal";

type CursorContextValue = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  size: MotionValue<number>;
  mode: CursorMode;
  setMode: (mode: CursorMode) => void;
};

const CursorContext = createContext<CursorContextValue | null>(null);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  /*
   * RAW POINTER POSITION
   *
   * This follows the mouse immediately.
   */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  /*
   * VISUAL CURSOR POSITION
   *
   * This follows the mouse with a little smoothing.
   */
  const x = useSpring(rawX, {
    stiffness: 800,
    damping: 45,
    mass: 0.25,
  });

  const y = useSpring(rawY, {
    stiffness: 800,
    damping: 45,
    mass: 0.25,
  });

  /*
   * CURSOR MODE
   */
  const [mode, setMode] = useState<CursorMode>("default");

  /*
   * CURSOR SIZE
   *
   * This is independent from position.
   */
  const targetSize = useMotionValue(20);

  const size = useSpring(targetSize, {
    stiffness: 700,
    damping: 45,
    mass: 0.25,
  });

  /*
   * Change lens size when the mode changes.
   */
  useEffect(() => {
    targetSize.set(mode === "reveal" ? 300 : 20);
  }, [mode, targetSize]);

  /*
   * TRACK THE POINTER GLOBALLY
   */
  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [rawX, rawY]);

  const value = useMemo(
    () => ({
      x,
      y,
      size,
      mode,
      setMode,
    }),
    [x, y, size, mode],
  );

  return (
    <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);

  if (!context) {
    throw new Error("useCursor must be used inside CursorProvider");
  }

  return context;
}
