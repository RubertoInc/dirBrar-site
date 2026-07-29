import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../site-header";
import { TextArrow } from "../../text-arrow";
import { ScreenerGate } from "../screener-gate";
import { StillGallery } from "../still-gallery";
import { getNarrativeProject, narrativeProjects } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return narrativeProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getNarrativeProject(slug);

  if (!project) {
    return { title: "Not found" };
  }

  return {
    title: project.title,
    description: project.logline,
    openGraph: {
      title: `${project.title} — DiR. BRAR`,
      description: project.logline,
      images: project.heroStillSrc ? [project.heroStillSrc] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getNarrativeProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SiteHeader overPhoto />

      <main>
        {/* ---------------------------------------------------------------
            HERO
        --------------------------------------------------------------- */}
        <section className="relative flex h-[86svh] min-h-[520px] w-full flex-col justify-end overflow-hidden bg-olive-deep">
          {project.heroStillSrc ? (
            <div className="grain absolute inset-0">
              <Image
                src={project.heroStillSrc}
                alt={project.heroStillNote}
                fill
                priority
                sizes="100vw"
                className={project.heroStillClassName ?? "object-cover"}
              />
              <div className="grade absolute inset-0" />
            </div>
          ) : null}

          <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-8 md:px-10 md:pb-12">
            <div className="rise">
              <Link
                href="/work"
                className="label inline-flex items-center gap-2 text-paper/75 transition-colors duration-200 hover:text-orange"
              >
                ← All Work
              </Link>

              <h1 className="font-display mt-5 text-[clamp(4.5rem,22vw,8rem)] text-bone md:text-[13vw]">
                {project.title}
              </h1>

              {/* Metadata, not controls — set as a slash line rather than
                  boxes so it doesn't read as three buttons. */}
              <p className="project-meta label mt-5 flex flex-wrap items-center border-t border-[var(--rule-dark-strong)] pt-5 text-paper/75">
                <span className="slash text-bone">{project.format}</span>
                {project.status ? (
                  <span className="slash text-orange">{project.status}</span>
                ) : null}
                <span className="slash">
                  Written &amp; Directed by Damen R. Brar
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            LOGLINE
        --------------------------------------------------------------- */}
        <section className="border-b border-[var(--rule)] bg-paper-warm">
          <div className="mx-auto w-full max-w-[1600px] px-5 py-10 md:px-10 md:py-14">
            <div className="flex items-start gap-5 md:gap-8">
              <span className="mt-3 h-px w-8 shrink-0 bg-orange md:mt-6 md:w-16" />
              <p className="font-display max-w-5xl text-[clamp(2rem,9vw,4rem)] text-ink md:text-[3.6vw]">
                {project.hook}
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            SYNOPSIS + POSTER
        --------------------------------------------------------------- */}
        <section className="border-b border-[var(--rule)] bg-paper">
          <div className="mx-auto grid w-full max-w-[1600px] gap-12 px-5 py-14 md:grid-cols-[1.5fr_1fr] md:gap-20 md:px-10 md:py-20">
            <div>
              <p className="label text-orange-deep">[ Synopsis ]</p>

              <p className="mt-6 text-xl leading-relaxed text-ink md:text-[26px] md:leading-[1.5]">
                {project.synopsis}
              </p>

              <p className="mt-8 border-t border-[var(--rule)] pt-6 text-[15px] leading-relaxed text-ink-soft md:text-base">
                {project.logline}
              </p>

              {project.videoUrl ? (
                <div className="mt-9">
                  <ScreenerGate videoUrl={project.videoUrl} />
                  <p className="label-sm mt-4 text-ink-faint">
                    Access code required — reach out for a link.
                  </p>
                </div>
              ) : null}
            </div>

            {project.posterSrc ? (
              <figure className="mx-auto w-full max-w-[420px] md:max-w-none md:pt-10">
                <div className="relative aspect-[2/3] w-full overflow-hidden border border-[var(--rule-strong)]">
                  <Image
                    src={project.posterSrc}
                    alt={project.posterNote}
                    fill
                    sizes="(min-width: 768px) 34vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="label-sm mt-3 text-ink-faint">
                  One-sheet
                </figcaption>
              </figure>
            ) : null}
          </div>
        </section>

        {/* ---------------------------------------------------------------
            STILLS
        --------------------------------------------------------------- */}
        {project.galleryImages.length ? (
          <section className="bg-olive-deep">
            <div className="mx-auto w-full max-w-[1600px] px-5 py-14 md:px-10 md:py-20">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--rule-dark-strong)] pb-5">
                <h2 className="font-display text-[clamp(2.8rem,11vw,5rem)] text-bone md:text-[4.6vw]">
                  Stills
                </h2>
                <p className="label max-w-[55%] pb-1 text-right text-paper/70 sm:max-w-none sm:pb-2">
                  {String(project.galleryImages.length).padStart(2, "0")} Frames
                  — Click to enlarge
                </p>
              </div>

              <div className="mt-8 md:mt-12">
                <StillGallery
                  images={project.galleryImages}
                  title={project.title}
                />
              </div>
            </div>
          </section>
        ) : null}

        {/* ---------------------------------------------------------------
            CAST
        --------------------------------------------------------------- */}
        {project.cast.length ? (
          <section className="border-b border-[var(--rule)] bg-paper">
            <div className="mx-auto w-full max-w-[1600px] px-5 py-14 md:px-10 md:py-20">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--rule-strong)] pb-5">
                <h2 className="font-display text-[clamp(2.8rem,11vw,5rem)] text-ink md:text-[4.6vw]">
                  Cast
                </h2>
                <p className="label pb-2 text-ink-soft">
                  In order of appearance
                </p>
              </div>

              <div className="mt-8 grid gap-px sm:grid-cols-2 md:mt-12 md:grid-cols-3">
                {project.cast.map((member) => {
                  const card = (
                    <>
                      <div className="grain relative aspect-[4/5] w-full overflow-hidden">
                        {member.headshotSrc ? (
                          <Image
                            src={member.headshotSrc}
                            alt={member.actorName}
                            fill
                            sizes="(min-width: 768px) 31vw, 100vw"
                            className={`${member.headshotClassName ?? "object-cover"} transition-transform duration-700 ease-out group-hover:scale-105`}
                          />
                        ) : (
                          <div className="h-full w-full bg-paper-warm" />
                        )}
                      </div>

                      <div className="flex items-end justify-between gap-3 border-t border-[var(--rule)] p-4">
                        <div className="min-w-0">
                          <p className="label-sm text-orange-deep">
                            {member.character}
                          </p>
                          <p className="mt-2.5 truncate text-lg text-ink transition-colors duration-200 group-hover:text-orange-deep md:text-xl">
                            {member.actorName}
                          </p>
                        </div>
                        {member.imdbUrl ? (
                          <span
                            className="label-sm shrink-0 pb-1 text-ink-faint transition-colors duration-200 group-hover:text-orange-deep"
                            aria-hidden="true"
                          >
                            IMDb <TextArrow />
                          </span>
                        ) : null}
                      </div>
                    </>
                  );

                  return member.imdbUrl ? (
                    <a
                      key={member.actorName}
                      href={member.imdbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group border border-[var(--rule)] transition-colors duration-300 hover:border-orange"
                    >
                      {card}
                    </a>
                  ) : (
                    <div
                      key={member.actorName}
                      className="group border border-[var(--rule)]"
                    >
                      {card}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ) : null}

        {/* ---------------------------------------------------------------
            CREW — end credits
        --------------------------------------------------------------- */}
        {project.crew.length ? (
          <section className="border-b border-[var(--rule)] bg-paper-warm">
            <div className="mx-auto w-full max-w-[1600px] px-5 py-14 md:px-10 md:py-20">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--rule-strong)] pb-5">
                <h2 className="font-display text-[clamp(2.8rem,11vw,5rem)] text-ink md:text-[4.6vw]">
                  Crew
                </h2>
                <p className="label pb-2 text-ink-soft">End credits</p>
              </div>

              <dl className="mt-8 grid gap-x-16 md:mt-12 md:grid-cols-2">
                {project.crew.map((credit, i) => (
                  <div
                    key={`${credit.role}-${credit.name}-${i}`}
                    className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-start gap-4 border-b border-[var(--rule)] py-4 sm:gap-6"
                  >
                    <dt className="label-sm min-w-0 text-ink-faint">
                      {credit.role}
                    </dt>
                    <dd className="min-w-0 break-words text-right text-[15px] leading-snug text-ink md:text-base">
                      {credit.url ? (
                        <a
                          href={credit.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors duration-200 hover:text-orange-deep"
                        >
                          {credit.name}{" "}
                          <TextArrow className="text-orange-deep" />
                        </a>
                      ) : (
                        credit.name
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        ) : null}

        {/* ---------------------------------------------------------------
            NEXT
        --------------------------------------------------------------- */}
        <section className="bg-paper">
          <div className="mx-auto w-full max-w-[1600px] px-5 py-12 md:px-10 md:py-16">
            <Link
              href="/work"
              className="group flex flex-col items-start justify-between gap-5 border border-[var(--rule-strong)] p-5 transition-colors duration-300 hover:border-orange hover:bg-orange sm:flex-row sm:items-center md:p-10"
            >
              <span className="label text-orange-deep transition-colors duration-200 group-hover:text-bone">
                Keep looking
              </span>
              <span className="font-display text-[clamp(2.7rem,12vw,5rem)] text-ink transition-colors duration-200 group-hover:text-bone md:text-[4.4vw]">
                All Work →
              </span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
