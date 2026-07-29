import Link from "next/link";

type WordmarkProps = {
  className?: string;
  /** Renders as plain text instead of a link — for use inside a hero. */
  asText?: boolean;
};

/**
 * DiR. BRAR — the marker logotype, set in Permanent Marker. The face is
 * caps-only so it renders as DIR. BRAR; the text stays "DiR. BRAR" so that's
 * what gets read and indexed. Slight tilt so it reads as drawn on, not typeset.
 */
export function Wordmark({ className = "", asText = false }: WordmarkProps) {
  const mark = (
    <span
      className={`font-marker inline-block -rotate-[1.5deg] leading-none text-orange ${className}`}
    >
      DiR. BRAR
    </span>
  );

  if (asText) {
    return mark;
  }

  return (
    <Link
      href="/"
      aria-label="DiR. BRAR — home"
      className="inline-block transition-transform duration-200 hover:-translate-y-px"
    >
      {mark}
    </Link>
  );
}
