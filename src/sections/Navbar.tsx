"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeImage } from "@/components/ThemeImage";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "@/components/motion/themeprovider";

const NAV_LINKS = [
  { label: "PROJECTS", href: "/#projects" },
  { label: "FEATS", href: "/#feats" },
  { label: "THOUGHTS", href: "/#thoughts" },
  { label: "REACHOUT", href: "/#reachout" },
] as const;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeMenu]);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const renderThemeIcon = () => {
    if (theme === "dark") {
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="flex-shrink-0"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      );
    }
    return (
      <Image
        src="/sun-line.svg"
        alt=""
        height={18}
        width={18}
        className="flex-shrink-0"
        aria-hidden="true"
      />
    );
  };

  return (
    <nav
      aria-label="Main navigation"
      className="flex items-center justify-between py-[30px] md:py-[50px] font-mono font-semibold text-[20px] tracking-[4%] px-[20px] md:px-[50px] relative z-50"
    >
      {/* Logo — always visible */}
      <Link href="/" aria-label="Home" onClick={closeMenu}>
        <ThemeImage
          src="/logo.svg"
          darkSrc="/logo-alt.svg"
          alt="Portfolio logo"
          height={24.3}
          width={238}
          className="h-[18px] md:h-[24px] w-auto"
          priority
        />
      </Link>

      {/* Desktop nav links — hidden on small screens */}
      <div className="hidden md:flex items-center gap-[40px] lg:gap-[0px] lg:contents">
        {NAV_LINKS.map(({ label, href }) => (
          <Link key={label} href={href} className="cursor-link">
            {label}
          </Link>
        ))}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          className="flex items-center gap-[8px] text-[15px] cursor-link focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--foreground)]"
        >
          {renderThemeIcon()}
          <p className="capitalize">{theme}</p>
        </button>
      </div>

      {/* Mobile menu button — visible on small screens only */}
      <button
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav-menu"
        onClick={() => setMenuOpen((prev) => !prev)}
        className="md:hidden flex items-center justify-center w-[44px] h-[44px] -mr-[10px] text-foreground"
      >
        <AnimatePresence mode="wait" initial={false}>
          {menuOpen ? (
            <motion.svg
              key="close"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              <path
                d="M3 3L17 17M17 3L3 17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </motion.svg>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Image
                src="/menu.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Menu panel */}
            <motion.div
              id="mobile-nav-menu"
              role="menu"
              key="panel"
              className="fixed top-0 left-0 right-0 z-50 bg-background px-[20px] pt-[28px] pb-[40px] md:hidden shadow-lg"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Logo row inside panel */}
              <div className="flex items-center justify-between mb-[40px]">
                <Link href="/" onClick={closeMenu} aria-label="Home">
                  <ThemeImage
                    src="/logo.svg"
                    darkSrc="/logo-alt.svg"
                    alt="Portfolio logo"
                    height={24.3}
                    width={238}
                    className="h-[18px] w-auto"
                  />
                </Link>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={closeMenu}
                  className="flex items-center justify-center w-[44px] h-[44px] -mr-[10px]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 3L17 17M17 3L3 17"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <ul className="space-y-[8px]">
                {NAV_LINKS.map(({ label, href }, i) => (
                  <motion.li
                    key={label}
                    role="menuitem"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: i * 0.045,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={href}
                      onClick={closeMenu}
                      className="block py-[14px] text-[28px] font-mono font-semibold leading-none tracking-[2%] border-b border-foreground/10"
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Light toggle at bottom */}
              <motion.button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
                className="flex items-center gap-[8px] text-[15px] mt-[32px] opacity-70 w-full text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: NAV_LINKS.length * 0.045 + 0.05 }}
              >
                {renderThemeIcon()}
                <p className="capitalize">{theme}</p>
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;