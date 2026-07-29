import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../site-header";
import {
  comingSoonProjects,
  musicVideoProjects,
  narrativeProjects,
} from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected narrative, music video, and commercial work directed by Damen R. Brar.",
};

const sections = [
  { href: "#narrative", label: "Narrative" },
  { href: "#music-video", label: "Music Video" },
  { href: "#commercial", label: "Commercial" },
];

function SectionHeading({
  index,
  title,
  credit,
  onDark = false,
}: {
  index: string;
  title: string;
  credit: string;
  onDark?: boolean;
}) {
  return (
    <div
      className={`flex flex-wrap items-end justify-between gap-4 border-b pb-5 ${
        onDark ? "border-[var(--rule-dark-strong)]" : "border-[var(--rule-strong)]"
      }`}
    >
      <div>
        <span
          className={`label-sm block ${onDark ? "text-orange" : "text-orange-deep"}`}
        >
          {index}
        </span>
        <h2
          className={`font-display mt-4 text-[clamp(2.75rem,11vw,5rem)] md:text-[5vw] ${
            onDark ? "text-bone" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </div>
      <p className={`label max-w-[46%] pb-1 text-right sm:max-w-none sm:pb-2 ${onDark ? "text-paper/70" : "text-ink-soft"}`}>
        {credit}
      </p>
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
      <SiteHeader />

      <main className="pt-24 md:pt-28">
        {/* Masthead */}
        <section className="mx-auto w-full max-w-[1600px] px-5 pb-10 md:px-10 md:pb-14">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-orange md:w-16" />
            <p className="label text-orange-deep">Selected Work</p>
          </div>

          <h1 className="font-display mt-5 text-[clamp(3.8rem,17vw,7rem)] text-ink md:text-[10vw]">
            The Work
          </h1>

          <div className="mt-6 grid gap-6 border-t border-[var(--rule-strong)] pt-5 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-2xl text-base leading-relaxed text-ink-soft md:text-xl md:leading-relaxed">
              Each project is a special collaboration of beautiful minds.
              Scroll to see original work directed, produced, or written by me.
            </p>
            <nav aria-label="Jump to work category" className="section-jump-nav btn-group">
              {sections.map((section) => (
                <a
                  key={section.href}
                  href={section.href}
                  className="btn border-[var(--rule-strong)] text-ink transition-colors duration-200 hover:relative hover:z-10 hover:border-orange hover:bg-orange hover:text-bone"
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            NARRATIVE
        --------------------------------------------------------------- */}
        <section
          id="narrative"
          className="scroll-mt-24 border-t border-[var(--rule)] bg-paper"
        >
          <div className="mx-auto w-full max-w-[1600px] px-5 py-14 md:px-10 md:py-20">
            <SectionHeading
              index="[ 01 ]"
              title="Narrative"
              credit="Written & Directed"
            />

            {narrativeProjects.map((project) => (
              <article key={project.slug} className="pt-10 md:pt-14">
                <Link href={`/work/${project.slug}`} className="group block">
                  <div className="grain relative aspect-[4/5] w-full overflow-hidden border border-[var(--rule)] sm:aspect-[16/10] md:aspect-[21/9]">
                    {project.heroStillSrc ? (
                      <Image
                        src={project.heroStillSrc}
                        alt={project.heroStillNote}
                        fill
                        sizes="(min-width: 768px) 90vw, 100vw"
                        className={`${project.heroStillClassName ?? "object-cover"} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
                      />
                    ) : null}
                    {/* Scrim confined to the type band — the top of the frame
                        stays clean so the photograph still reads as a photograph. */}
                    <div className="absolute inset-x-0 bottom-0 h-[78%] bg-gradient-to-t from-ink/95 via-ink/65 to-transparent sm:h-[60%] md:h-[55%]" />

                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-5 p-4 sm:flex-row sm:items-end sm:justify-between sm:p-5 md:p-8">
                      <div className="min-w-0">
                        <p className="label mb-3 line-clamp-2 text-orange">{project.hook}</p>
                        <h3 className="font-display text-[clamp(3.5rem,18vw,5.5rem)] leading-[0.82] text-bone md:text-[8vw]">
                          {project.title}
                        </h3>
                      </div>
                      <span className="btn w-full border-bone bg-bone text-ink transition-colors duration-200 group-hover:border-orange group-hover:bg-orange group-hover:text-bone sm:w-auto">
                        View Project
                        <span
                          className="transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="grid gap-6 border-t border-[var(--rule)] pt-5 md:grid-cols-[auto_1fr] md:gap-14">
                  <div className="flex flex-wrap gap-x-4 gap-y-2 md:flex-col md:gap-2">
                    <p className="label text-orange-deep">{project.format}</p>
                    {project.status ? (
                      <p className="label text-ink-soft">{project.status}</p>
                    ) : null}
                  </div>
                  <p className="max-w-3xl text-[15px] leading-relaxed text-ink-soft md:text-lg">
                    {project.synopsis}
                  </p>
                </div>
              </article>
            ))}

            {/* In development */}
            {comingSoonProjects.map((project) => (
              <article
                key={project.title}
                className="mt-10 grid gap-6 border border-[var(--rule-strong)] p-5 md:mt-14 md:grid-cols-[minmax(0,340px)_1fr] md:items-center md:gap-10 md:p-8"
              >
                {project.heroStillSrc ? (
                  <div className="grain relative aspect-[3/2] w-full overflow-hidden border border-[var(--rule)]">
                    <Image
                      src={project.heroStillSrc}
                      alt={project.heroStillNote ?? project.title}
                      fill
                      sizes="(min-width: 768px) 340px, 100vw"
                      className={project.heroStillClassName ?? "object-cover"}
                    />
                  </div>
                ) : null}

                <div>
                  <p className="label text-orange-deep">{project.note}</p>
                  <h3 className="font-display mt-4 text-[clamp(2.8rem,11vw,4.5rem)] text-ink md:text-[4.6vw]">
                    {project.title}
                  </h3>
                  <p className="label mt-5 border-t border-[var(--rule)] pt-4 text-ink-soft">
                    {project.format}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------
            MUSIC VIDEO
        --------------------------------------------------------------- */}
        <section
          id="music-video"
          className="scroll-mt-24 bg-olive-deep"
        >
          <div className="mx-auto w-full max-w-[1600px] px-5 py-14 md:px-10 md:py-20">
            <SectionHeading
              index="[ 02 ]"
              title="Music Video"
              credit="Produced & Directed"
              onDark
            />

            <div className="mt-10 grid gap-px md:mt-14 md:grid-cols-2">
              {musicVideoProjects.map((project, i) => (
                <a
                  key={project.href}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-[var(--rule-dark)] transition-colors duration-300 hover:border-orange"
                >
                  <div className="grain relative aspect-video w-full overflow-hidden">
                    <Image
                      src={project.thumbnailSrc}
                      alt={`${project.title} — ${project.artistName}`}
                      fill
                      sizes="(min-width: 768px) 46vw, 100vw"
                      className={`${project.thumbnailClassName ?? "object-cover"} transition-transform duration-700 ease-out group-hover:scale-[1.04]`}
                    />
                    <div className="absolute inset-0 bg-olive-deep/25 transition-opacity duration-300 group-hover:opacity-0" />
                    <span className="label-sm absolute left-4 top-4 bg-olive-deep/85 px-3 py-2 text-orange">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex items-end justify-between gap-4 p-5">
                    <div className="min-w-0">
                      <h3 className="font-display truncate text-[clamp(2rem,9vw,3.5rem)] text-bone transition-colors duration-200 group-hover:text-orange md:text-[2.6vw]">
                        {project.title}
                      </h3>
                      <p className="label-sm mt-2.5 truncate text-paper/70">
                        {project.artistName}
                      </p>
                    </div>
                    <span
                      className="shrink-0 text-2xl text-paper/60 transition-all duration-200 group-hover:translate-x-1 group-hover:text-orange"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            COMMERCIAL
        --------------------------------------------------------------- */}
        <section
          id="commercial"
          className="scroll-mt-24 border-t border-[var(--rule)] bg-paper-warm"
        >
          <div className="mx-auto w-full max-w-[1600px] px-5 py-14 md:px-10 md:py-20">
            <SectionHeading
              index="[ 03 ]"
              title="Commercial"
              credit="Open for booking"
            />

            <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-[1fr_auto] md:items-end">
              <p className="font-display max-w-3xl text-[clamp(2.4rem,10vw,4.4rem)] text-clay-deep md:text-[4vw]">
                More to come. Give me a call — this could be your brand.
              </p>
              <a
                href="mailto:dirbrar@gmail.com"
                className="btn group w-full border-ink text-ink transition-colors duration-200 hover:border-orange hover:bg-orange hover:text-bone sm:w-auto"
              >
                Start a project
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
