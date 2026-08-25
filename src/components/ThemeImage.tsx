"use client";

import Image, { ImageProps } from "next/image";
import { useTheme } from "@/components/motion/themeprovider";

interface ThemeImageProps extends Omit<ImageProps, "src"> {
  src: string;
  darkSrc?: string;
  alt: string;
}

export function ThemeImage({ src, darkSrc, alt, ...props }: ThemeImageProps) {
  const { theme, mounted } = useTheme();

  // Before client mount, always render the light asset to avoid hydration mismatch.
  const resolvedSrc = mounted && theme === "dark" ? (darkSrc ?? src) : src;

  return <Image src={resolvedSrc} alt={alt} {...props} />;
}
