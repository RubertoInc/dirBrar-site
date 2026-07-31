import Link from "next/link";
import { Wordmark } from "./wordmark";

const footerLinks = [
  { href: "/", label: "Index" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

const contactRows = [
  { label: "Email", value: "dirbrar@gmail.com", href: "mailto:dirbrar@gmail.com" },
  { label: "Phone", value: "647 705 8334", href: "tel:6477058334" },
  {
    label: "Instagram",
    value: "@damenrb",
    href: "https://www.instagram.com/damenrb/",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Damen R. Brar",
    href: "https://ca.linkedin.com/in/drubertob",
    external: true,
  },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="relative z-10 scroll-mt-20 bg-olive-deep">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-5 md:px-10">
        {/* Call to action slab */}
        <div className="grid gap-6 border-b border-[var(--rule-dark)] py-8 sm:gap-8 sm:py-12 md:grid-cols-[1.4fr_1fr] md:gap-16 md:py-20">
          <div>
            <p className="label pl-[0.12em] text-paper/60">
              Don&apos;t hesitate to reach out.
            </p>
            <h2 className="font-display mt-3 text-[clamp(2.5rem,12vw,5rem)] text-bone sm:mt-5 md:text-[6.4vw]">
              Available for
              <br />
              <span className="text-orange">directing work.</span>
            </h2>
          </div>

          <div className="footer-contact-grid grid grid-cols-2 justify-end md:flex md:flex-col">
            {contactRows.map((row) => (
              <a
                key={row.label}
                href={row.href}
                target={row.external ? "_blank" : undefined}
                rel={row.external ? "noopener noreferrer" : undefined}
                className="footer-contact-row group flex min-w-0 flex-col items-start justify-center gap-1.5 border-t border-[var(--rule-dark)] py-2.5 transition-[padding,background-color] duration-200 hover:bg-olive md:grid md:grid-cols-[auto_minmax(0,1fr)] md:items-center md:gap-6 md:py-4 md:hover:px-4"
              >
                <span className="label text-paper/60 transition-colors group-hover:text-bone">
                  {row.label}
                </span>
                <span className="font-mono min-w-0 break-words text-left text-[11px] text-bone sm:text-xs md:text-right md:text-base">
                  {row.value}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Colophon */}
        <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-4 py-5 md:flex md:flex-row md:justify-between md:gap-6 md:py-7">
          <div className="flex items-center gap-5">
            <Wordmark className="text-[16px] md:text-[20px]" />
            <span className="label-sm hidden text-paper/55 sm:inline">
              Toronto, Canada
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-end gap-4 md:gap-7">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="label-sm text-paper/70 transition-colors duration-200 hover:text-orange"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <p className="label-sm col-span-2 border-t border-[var(--rule-dark)] pt-3 text-center text-paper/45 [font-variant-emoji:text] md:col-span-1 md:border-0 md:pt-0 md:text-left">
            <span className="copyright-mark">©</span> Ruberto Inc.{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
