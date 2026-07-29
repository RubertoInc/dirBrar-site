"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";

const SCREENER_PASSWORD = "PEG26";

type ScreenerGateProps = {
  videoUrl: string;
  label?: string;
};

/**
 * Private screener. The link is only handed out after the code checks out,
 * so the URL never sits in the page markup.
 */
export function ScreenerGate({
  videoUrl,
  label = "Watch Screener",
}: ScreenerGateProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    setCode("");
    setError("");
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    inputRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (code.trim().toUpperCase() !== SCREENER_PASSWORD) {
      setError("Wrong code. Try again.");
      return;
    }

    window.location.assign(videoUrl);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="btn border-ink text-ink transition-colors duration-200 hover:border-orange hover:bg-orange hover:text-bone"
      >
        <span
          className="inline-block h-2 w-2 bg-orange transition-colors duration-200 group-hover:bg-bone"
          aria-hidden="true"
        />
        {label}
      </button>

      {isOpen ? (
        <div
          className="modal-shell fixed inset-0 z-[60] flex items-end justify-center bg-ink/90 px-0 pt-5 sm:items-center sm:px-5"
          role="dialog"
          aria-modal="true"
          aria-label="Private screener access"
          onClick={close}
        >
          <form
            onSubmit={handleSubmit}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[calc(100svh-1.25rem)] w-full max-w-md overflow-y-auto border border-[var(--rule-dark)] bg-olive-deep p-5 sm:p-6 md:p-8"
          >
            <p className="label text-orange">Private Screener</p>

            <label
              htmlFor="screener-code"
              className="mt-4 block text-lg leading-snug text-bone md:text-xl"
            >
              Enter the access code to continue.
            </label>

            <input
              id="screener-code"
              ref={inputRef}
              type="text"
              value={code}
              autoComplete="off"
              spellCheck={false}
              onChange={(event) => {
                setCode(event.target.value);
                if (error) setError("");
              }}
              className="font-mono mt-5 w-full border border-[var(--rule-dark)] bg-ink px-4 py-3.5 text-lg uppercase tracking-[0.2em] text-bone outline-none transition-colors placeholder:text-paper/35 focus:border-orange"
              placeholder="••••"
            />

            <p
              className="label-sm mt-3 h-3 text-orange"
              role="status"
              aria-live="polite"
            >
              {error}
            </p>

            <div className="btn-group mt-6 w-full">
              <button
                type="submit"
                className="btn flex-1 border-orange bg-orange text-bone transition-colors duration-200 hover:border-bone hover:bg-bone hover:text-ink"
              >
                Enter
              </button>
              <button
                type="button"
                onClick={close}
                className="btn flex-1 border-[var(--rule-dark)] text-paper/70 transition-colors duration-200 hover:relative hover:z-10 hover:border-orange hover:text-orange"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}
