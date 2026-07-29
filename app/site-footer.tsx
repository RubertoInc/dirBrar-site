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
    value: "Damen Brar",
    href: "https://ca.linkedin.com/in/drubertob",
    external: true,
  },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="relative z-10 scroll-mt-20 bg-olive-deep">
      <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
        {/* Call to action slab */}
        <div className="grid gap-8 border-b border-[var(--rule-dark)] py-12 md:grid-cols-[1.4fr_1fr] md:gap-16 md:py-20">
          <div>
            <p className="label pl-[0.12em] text-paper/60">
              Don&apos;t hesitate to reach out.
            </p>
            <h2 className="font-display mt-5 text-[clamp(2.8rem,13vw,5rem)] text-bone md:text-[6.4vw]">
              Available for
              <br />
              <span className="text-orange">directing work.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            {contactRows.map((row) => (
              <a
                key={row.label}
                href={row.href}
                target={row.external ? "_blank" : undefined}
                rel={row.external ? "noopener noreferrer" : undefined}
                className="mobile-contact-row group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 border-t border-[var(--rule-dark)] py-3 transition-[padding,background-color] duration-200 hover:bg-olive hover:px-4 sm:gap-6 sm:py-4"
              >
                <span className="label text-paper/60 transition-colors group-hover:text-bone">
                  {row.label}
                </span>
                <span className="font-mono min-w-0 break-words text-right text-[13px] text-bone sm:text-sm md:text-base">
                  {row.value}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Colophon */}
        <div className="flex flex-col gap-6 py-7 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <Wordmark className="text-[20px]" />
            <span className="label-sm hidden text-paper/55 sm:inline">
              Toronto, CAN
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-5 md:gap-7">
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

          <p className="label-sm text-paper/45">
            © Ruberto Inc. {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
