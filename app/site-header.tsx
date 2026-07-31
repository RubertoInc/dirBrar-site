"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "./wordmark";

const navigation = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

type SiteHeaderProps = {
  /**
   * Pages that open on a full-bleed photo start with light type over the
   * image; pages that open on paper start dark.
   */
  overPhoto?: boolean;
};

/**
 * Fixed masthead. Transparent over a hero until the user scrolls past it,
 * then it drops onto paper so type never fights the photography.
 */
export function SiteHeader({ overPhoto = false }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Light type only while we're still sitting on the photo.
  const onDark = overPhoto && !isScrolled;

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled
          ? "border-[var(--rule)] bg-paper/95 backdrop-blur-[2px]"
          : overPhoto
            ? "border-transparent bg-transparent"
            : "border-[var(--rule)] bg-paper"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-2 px-4 py-2 sm:gap-4 sm:px-5 sm:py-2.5 md:px-10">
        <Wordmark className="text-[22px] md:text-[26px]" />

        <nav aria-label="Primary navigation" className="flex items-center gap-1 sm:gap-5 md:gap-8">
          {navigation.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`header-nav-link label relative flex min-h-11 items-center px-2 transition-colors duration-200 hover:text-orange-deep sm:px-0 ${
                  isActive
                    ? "text-orange-deep"
                    : onDark
                      ? "text-bone"
                      : "text-ink"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-orange transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
          <a
            href="#contact"
            className={`header-nav-link label relative flex min-h-11 items-center px-2 transition-colors duration-200 hover:text-orange-deep sm:px-0 ${
              onDark ? "text-bone" : "text-ink"
            }`}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
