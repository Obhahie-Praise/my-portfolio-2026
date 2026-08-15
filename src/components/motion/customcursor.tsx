"use client";

import { motion } from "motion/react";
import { useCursor } from "./cursorprovider";

export default function CustomCursor() {
  const { x, y } = useCursor();

  return (
    <motion.div
      className="custom-cursor"
      style={{
        x,
        y,
      }}
    />
  );
}