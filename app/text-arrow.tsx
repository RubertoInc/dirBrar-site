type TextArrowProps = {
  className?: string;
};

/**
 * FE0E explicitly requests text presentation so Apple platforms never swap
 * the outbound-link arrow for its coloured emoji equivalent.
 */
export function TextArrow({ className = "" }: TextArrowProps) {
  return (
    <span
      className={`inline-block font-sans [font-variant-emoji:text] ${className}`}
      aria-hidden="true"
    >
      {"\u2197\uFE0E"}
    </span>
  );
}
