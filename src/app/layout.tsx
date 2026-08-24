import type { Metadata } from "next";
import { Ancizar_Sans, Ancizar_Serif, Geist } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/motion/customcursor";
import { CursorProvider } from "@/components/motion/cursorprovider";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const anzicarSans = Ancizar_Sans({
  variable: "--font-anzicar-sans",
  subsets: ["latin"],
});

const anzicarSerif = Ancizar_Serif({
  variable: "--font-anzicar-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "2026 web portfolio of OBHAHIE PRAISE",
  description:
    "Explore Praise Obhahie’s portfolio — a Nigerian designer and developer building viable digital products, thoughtful interfaces, and creative technical solutions.",
  icons: {
    icon: "/logo1.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${anzicarSans.variable} ${anzicarSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Analytics />
        <CursorProvider>
          <CustomCursor />
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}
