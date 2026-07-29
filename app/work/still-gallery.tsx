"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type StillGalleryProps = {
  images: string[];
  title: string;
};

/**
 * Contact-sheet grid with a full-bleed lightbox. Arrow keys and Escape work.
 */
export function StillGallery({ images, title }: StillGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  const step = useCallback(
    (direction: 1 | -1) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        return (current + direction + images.length) % images.length;
      });
    },
    [images.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  return (
    <>
      <div className="grid grid-cols-2 gap-px md:grid-cols-4">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group grain relative aspect-[3/2] w-full overflow-hidden border border-[var(--rule-dark)] transition-colors duration-200 hover:border-orange"
            aria-label={`${title} — open still ${i + 1} of ${images.length}`}
          >
            <Image
              src={src}
              alt={`${title} still ${i + 1}`}
              fill
              sizes="(min-width: 768px) 24vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <span className="label-sm absolute bottom-0 left-0 bg-olive-deep/85 px-2.5 py-2 text-orange opacity-100 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100">
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      {openIndex !== null ? (
        <div
          className="lightbox-shell fixed inset-0 z-[70] flex flex-col bg-olive-deep/98 pt-[env(safe-area-inset-top)]"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} stills`}
        >
          <div className="flex min-h-14 items-center justify-between gap-4 border-b border-[var(--rule-dark)] px-4 py-2 md:px-8 md:py-4">
            <p className="label min-w-0 truncate text-orange">
              {title} — {String(openIndex + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </p>
            <button
              type="button"
              onClick={close}
              className="label flex min-h-11 shrink-0 items-center px-2 text-bone transition-colors duration-200 hover:text-orange"
            >
              Close ✕
            </button>
          </div>

          <div className="relative min-h-0 flex-1">
            <Image
              src={images[openIndex]}
              alt={`${title} still ${openIndex + 1}`}
              fill
              sizes="100vw"
              priority
              className="object-contain p-4 md:p-10"
            />
          </div>

          <div className="flex justify-center border-t border-[var(--rule-dark)] p-4 md:p-6">
            <div className="btn-group w-full sm:w-auto">
              <button
                type="button"
                onClick={() => step(-1)}
                className="btn flex-1 border-[var(--rule-dark-strong)] text-bone transition-colors duration-200 hover:relative hover:z-10 hover:border-orange hover:bg-orange hover:text-bone sm:flex-none"
                aria-label="Previous still"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="btn flex-1 border-[var(--rule-dark-strong)] text-bone transition-colors duration-200 hover:relative hover:z-10 hover:border-orange hover:bg-orange hover:text-bone sm:flex-none"
                aria-label="Next still"
              >
                →
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
