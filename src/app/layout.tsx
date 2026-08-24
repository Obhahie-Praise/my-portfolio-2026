import type { Metadata } from "next";
import { Ancizar_Sans, Ancizar_Serif, Geist } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/motion/customcursor";
import { CursorProvider } from "@/components/motion/cursorprovider";
import { ThemeProvider } from "@/components/motion/themeprovider";
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
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Analytics />
        <ThemeProvider>
          <CursorProvider>
            <CustomCursor />
            {children}
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
