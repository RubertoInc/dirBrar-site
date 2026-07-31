import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { SiteHeader } from "./site-header";
import { Wordmark } from "./wordmark";
import { IndexRow } from "./index-row";
import {
  comingSoonProjects,
  musicVideoProjects,
  narrativeProjects,
} from "@/lib/projects";

const { props: mobileHeroImage } = getImageProps({
  src: "/hero-mobileCrop-2.jpg",
  alt: "Damen R. Brar directing on set",
  width: 2770,
  height: 3546,
  sizes: "100vw",
});

const marqueeItems = [
  "Writer",
  "Director",
  "Narrative",
  "Music Video",
  "Commercial",
  "Toronto",
];

const entryCount =
  narrativeProjects.length +
  comingSoonProjects.length +
  musicVideoProjects.length;

export default function Page() {
  return (
    <>
      <SiteHeader overPhoto />

      <main>
        {/* ---------------------------------------------------------------
            01 — HERO. The photograph does the talking.
        --------------------------------------------------------------- */}
        <section className="relative flex h-[100svh] min-h-[560px] w-full flex-col justify-end overflow-hidden bg-olive-deep">
          <div className="grain absolute inset-0">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={mobileHeroImage.srcSet}
                sizes="100vw"
              />
              <Image
                src="/hero-cropped.jpg"
                alt="Damen R. Brar directing on set"
                fill
                fetchPriority="high"
                loading="eager"
                sizes="100vw"
                className="object-cover object-center md:object-[24%_32%]"
              />
            </picture>
            <div className="grade absolute inset-0" />
          </div>

          {/* Vertical slug down the left edge — call-sheet detail.
              Coordinates are Yonge & Eglinton, not generic downtown. */}
          <div className="pointer-events-none absolute left-10 top-1/2 hidden -translate-y-1/2 xl:block">
            <p className="label-sm origin-left -rotate-90 whitespace-nowrap text-paper/70">
              Tkaronto / Toronto — 43.7064° N, 79.3986° W
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[1600px] px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-5 sm:pb-8 md:px-10 md:pb-12">
            <div className="rise max-w-6xl">
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-orange md:w-16" />
                <p className="label text-orange">Writer / Director</p>
              </div>

              <h1 className="font-display text-[clamp(3.2rem,16vw,7rem)] text-bone md:text-[9.5vw] xl:text-[8.6vw]">
                Damen R. Brar
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-[var(--rule-dark-strong)] pt-4 sm:mt-6 sm:pt-5">
                <p className="label w-full text-paper/75 sm:w-auto">
                  <span className="slash">Narrative</span>
                  <span className="slash">Music Video</span>
                  <span className="slash">Commercial</span>
                </p>

                <div className="hero-btn-group btn-group ml-auto">
                  <Link
                    href="/work"
                    className="btn relative z-10 border-bone bg-bone text-ink transition-colors duration-200 hover:border-orange hover:bg-orange hover:text-bone"
                  >
                    Selected Work
                  </Link>
                  <Link
                    href="/about"
                    className="btn border-[var(--rule-dark-strong)] text-bone transition-colors duration-200 hover:relative hover:z-10 hover:border-orange hover:text-orange"
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            02 — TICKER
        --------------------------------------------------------------- */}
        <section className="overflow-hidden border-b border-[var(--rule)] bg-paper-warm py-3">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
                {marqueeItems.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="label flex items-center whitespace-nowrap px-6 text-ink-soft"
                  >
                    {item}
                    <span className="ml-6 inline-block h-1 w-1 bg-orange" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------
            03 — STATEMENT
        --------------------------------------------------------------- */}
        <section className="bg-olive-deep">
          <div className="mx-auto w-full max-w-[1600px] px-5 py-16 md:px-10 md:py-28">
            <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-20">
              <p className="label whitespace-nowrap text-paper/60 md:pt-4">
                [ 01 ] Statement
              </p>

              <div>
                <h2 className="font-display max-w-5xl text-[clamp(2.6rem,11vw,5rem)] leading-[0.9] tracking-[-0.015em] text-bone md:text-[5.2vw]">
                  <span className="block sm:inline">Stories from the</span>{" "}
                  <span className="block whitespace-nowrap text-orange sm:inline">
                    margins.
                  </span>
                </h2>

                <div className="mt-10 grid max-w-4xl gap-6 border-t border-[var(--rule-dark)] pt-8 md:grid-cols-2 md:gap-12">
                  <p className="text-[15px] leading-relaxed text-paper/85 md:text-lg">
                    My work explores identity and relationships, finding both
                    the absurd and the honest in how we connect. I&apos;m
                    passionate about uplifting Queer and BIPOC voices, and
                    telling stories that hold their nuance and contradiction
                    instead of flattening them.
                  </p>
                  <p className="text-[15px] leading-relaxed text-paper/85 md:text-lg">
                    With a background in post production and digital imaging, I
                    bring a technical understanding and a visual authorship to
                    every project — from the first draft through the final
                    grade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            04 — INDEX OF WORK
        --------------------------------------------------------------- */}
        <section className="bg-paper">
          <div className="mx-auto w-full max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
            <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[var(--rule-strong)] pb-5">
              <div>
                <p className="label-sm text-orange-deep">[ 02 ] Selected</p>
                <h2 className="font-display mt-4 text-[clamp(3rem,13vw,5.5rem)] text-ink md:text-[6vw]">
                  Index
                </h2>
              </div>
              <p className="label pb-2 text-ink-soft">
                {String(entryCount).padStart(2, "0")} Entries
              </p>
            </div>

            <div className="border-t border-[var(--rule)]">
              {narrativeProjects.map((project, i) => (
                <IndexRow
                  key={project.slug}
                  number={i + 1}
                  title={project.title}
                  meta={project.format}
                  note={project.hook}
                  href={`/work/${project.slug}`}
                  thumbnailSrc={project.heroStillSrc}
                  thumbnailClassName={project.heroStillClassName}
                />
              ))}

              {comingSoonProjects.map((project, i) => (
                <IndexRow
                  key={project.title}
                  number={narrativeProjects.length + i + 1}
                  title={project.title}
                  meta={project.format}
                  note={project.note}
                  href="/work#narrative"
                  thumbnailSrc={project.heroStillSrc}
                  thumbnailClassName={project.heroStillClassName}
                  muted
                />
              ))}

              {musicVideoProjects.map((project, i) => (
                <IndexRow
                  key={project.slug}
                  number={
                    narrativeProjects.length + comingSoonProjects.length + i + 1
                  }
                  title={project.title}
                  meta="Music Video"
                  note={project.artistName}
                  href={`/work/${project.slug}`}
                  thumbnailSrc={project.thumbnailSrc}
                  thumbnailClassName={project.thumbnailClassName}
                />
              ))}
            </div>

            <div className="mt-10 flex justify-end">
              <Link
                href="/work"
                className="btn group border-ink text-ink transition-colors duration-200 hover:border-orange hover:bg-orange hover:text-bone"
              >
                All Work
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            05 — SIGN-OFF
        --------------------------------------------------------------- */}
        <section className="border-t border-[var(--rule)] bg-paper-warm">
          <div className="mx-auto w-full max-w-[1600px] px-5 py-14 md:px-10 md:py-20">
            <blockquote className="max-w-6xl">
              <p className="font-display text-[clamp(1.7rem,6.5vw,4.1rem)] leading-[1.02] text-ink">
                <span className="text-orange" aria-hidden="true">
                  “
                </span>
                I truly believe the power of film is its ability to transform
                people&apos;s preconceived notions about life. Through that
                frame they really can walk a mile...
                <span className="text-orange" aria-hidden="true">
                  ”
                </span>
              </p>
              <footer className="mt-8 flex items-center justify-end gap-3 md:mt-10">
                <span
                  className="font-display text-2xl text-ink/60 md:text-3xl"
                  aria-hidden="true"
                >
                  —
                </span>
                <Wordmark
                  asText
                  className="text-[clamp(1.8rem,8vw,3.5rem)]"
                />
              </footer>
            </blockquote>
          </div>
        </section>
      </main>
    </>
  );
}
