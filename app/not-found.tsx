import Link from "next/link";
import { SiteHeader } from "./site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto flex min-h-[80svh] w-full max-w-[1600px] flex-col justify-center px-5 py-24 md:px-10">
        <p className="label text-orange-deep">Error 404</p>
        <h1 className="font-display mt-5 text-[18vw] text-ink md:text-[9vw]">
          Cut. That scene
          <br />
          doesn&apos;t exist.
        </h1>
        <div className="btn-group mt-8 border-t border-[var(--rule-strong)] pt-6">
          <Link
            href="/"
            className="btn border-ink bg-ink text-bone transition-colors duration-200 hover:border-orange hover:bg-orange"
          >
            Back to Top
          </Link>
          <Link
            href="/work"
            className="btn border-[var(--rule-strong)] text-ink transition-colors duration-200 hover:relative hover:z-10 hover:border-orange hover:text-orange-deep"
          >
            Selected Work
          </Link>
        </div>
      </main>
    </>
  );
}
