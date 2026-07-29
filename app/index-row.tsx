import Image from "next/image";
import Link from "next/link";

type IndexRowProps = {
  number: number;
  title: string;
  /** Right-hand classification — format, or the artist for a music video. */
  meta: string;
  note?: string;
  href: string;
  external?: boolean;
  muted?: boolean;
  thumbnailSrc?: string;
  thumbnailClassName?: string;
};

/**
 * One line of the index, set like a contact sheet: slate number, the frame
 * itself, then the title and its classification. The still is always visible —
 * no hover required — so the page reads as work rather than as a menu.
 */
export function IndexRow({
  number,
  title,
  meta,
  note,
  href,
  external = false,
  muted = false,
  thumbnailSrc,
  thumbnailClassName,
}: IndexRowProps) {
  const content = (
    <>
      <span className="label-sm w-auto shrink-0 self-center text-orange-deep transition-colors duration-200 md:w-12">
        {String(number).padStart(2, "0")}
      </span>

      <span className="grain relative aspect-[16/10] w-[5.5rem] shrink-0 self-center overflow-hidden border border-[var(--rule)] bg-paper-warm sm:w-32 md:w-48 lg:w-64">
        {thumbnailSrc ? (
          <Image
            src={thumbnailSrc}
            alt=""
            fill
            sizes="(min-width: 1024px) 256px, (min-width: 768px) 192px, 128px"
            className={`${thumbnailClassName ?? "object-cover"} transition-transform duration-700 ease-out group-hover:scale-[1.06]`}
          />
        ) : (
          <span className="label-sm absolute inset-0 flex items-center justify-center text-ink-faint">
            TBD
          </span>
        )}
      </span>

      <span className="flex min-w-0 flex-1 flex-col gap-1.5 self-center md:flex-row md:items-center md:justify-between md:gap-8">
        <span
          className={`font-display text-[clamp(1.55rem,7.5vw,2rem)] leading-[0.95] transition-colors duration-200 group-hover:text-orange-deep sm:text-[5vw] md:text-[3.4vw] ${
            muted ? "text-ink/55" : "text-ink"
          }`}
        >
          {title}
        </span>

        <span className="flex shrink-0 flex-col gap-1.5 md:items-end">
          <span className="label-sm text-ink-soft">{meta}</span>
          {note ? (
            <span className="line-clamp-2 text-[12px] leading-snug text-ink-faint md:text-sm">
              {note}
            </span>
          ) : null}
        </span>
      </span>

      <span
        className="mobile-index-row-arrow shrink-0 self-center text-lg text-ink-faint transition-all duration-200 group-hover:text-orange-deep md:text-xl"
        aria-hidden="true"
      >
        {external ? "↗" : "→"}
      </span>
    </>
  );

  const className =
    "mobile-index-row group flex items-stretch gap-3 border-b border-[var(--rule)] py-4 transition-colors duration-200 hover:bg-paper-warm md:gap-6 md:py-5";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
