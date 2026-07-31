import Image from "next/image";
import Link from "next/link";

type WordmarkProps = {
  className?: string;
  /** Renders as plain text instead of a link — for use inside a hero. */
  asText?: boolean;
};

/** The hand-drawn DiR. BRAR wordmark, with its original marker texture. */
export function Wordmark({ className = "", asText = false }: WordmarkProps) {
  const mark = (
    <span
      role={asText ? "img" : undefined}
      aria-label={asText ? "DiR. BRAR" : undefined}
      className={`inline-block -rotate-[1.5deg] leading-none ${className}`}
    >
      <Image
        src="/dirbrar-wordmark-orange.svg"
        alt=""
        aria-hidden="true"
        width={1333}
        height={444}
        unoptimized
        className="block h-[2em] w-auto max-w-none"
      />
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
