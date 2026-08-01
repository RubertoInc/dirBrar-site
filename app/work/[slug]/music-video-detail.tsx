import Image from "next/image";
import Link from "next/link";
import { CreditName } from "../../credit-name";
import { SiteHeader } from "../../site-header";
import { TextArrow } from "../../text-arrow";
import type { MusicVideoProject } from "@/lib/projects";

export function MusicVideoDetail({
  project,
}: {
  project: MusicVideoProject;
}) {
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://dirbrar.com"
  ).replace(/\/$/, "");
  const projectUrl = `${siteUrl}/work/${project.slug}`;

  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: `${project.title} — ${project.artistName}`,
    description: project.summary,
    thumbnailUrl: `${siteUrl}${project.thumbnailSrc}`,
    uploadDate: project.publishedAt,
    contentUrl: project.href,
    embedUrl: `https://www.youtube-nocookie.com/embed/${project.youtubeId}`,
    url: projectUrl,
    creditText: project.seoCredit,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader overPhoto />

      <main>
        <section className="relative flex min-h-[620px] w-full flex-col justify-end overflow-hidden bg-ink md:min-h-[760px]">
          <div className="grain absolute inset-0">
            <Image
              src={project.thumbnailSrc}
              alt={`${project.title} — ${project.artistName}`}
              fill
              priority
              sizes="100vw"
              className={`${project.heroClassName ?? project.thumbnailClassName ?? "object-cover"} scale-[1.01]`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/15" />
            <div className="absolute inset-0 bg-orange/10 mix-blend-color" />
          </div>

          <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-8 md:px-10 md:pb-12">
            <Link
              href="/work#music-video"
              className="label inline-flex items-center gap-2 text-paper/75 transition-colors duration-200 hover:text-orange"
            >
              ← All Music Videos
            </Link>

            <div className="mt-5 grid gap-5 border-t border-[var(--rule-dark-strong)] pt-5 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="label text-orange">
                  Music Video <span className="slash">{project.year}</span>
                </p>
                <h1 className="font-display mt-4 text-[clamp(4rem,21vw,8rem)] leading-[0.82] text-bone md:text-[12vw]">
                  {project.title}
                </h1>
              </div>
              <div className="md:max-w-sm md:pb-2 md:text-right">
                <p className="text-xl text-bone md:text-2xl">
                  {project.artistName}
                </p>
                <p className="label mt-3 text-paper/65">
                  {project.headerCredit ?? project.seoCredit}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-orange-deep bg-orange text-bone">
          <div className="mx-auto grid w-full max-w-[1600px] gap-8 px-5 py-10 md:grid-cols-[auto_1fr] md:gap-16 md:px-10 md:py-14">
            <p className="label whitespace-nowrap text-ink/65">
              [ {project.role} ]
            </p>
            <p className="font-display max-w-5xl text-[clamp(2rem,8vw,4rem)] leading-[0.95]">
              {project.summary}
            </p>
          </div>
        </section>

        <section className="bg-olive-deep">
          <div className="mx-auto w-full max-w-[1600px] px-5 py-14 md:px-10 md:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--rule-dark-strong)] pb-5">
              <div>
                <p className="label-sm text-orange">[ Watch ]</p>
                <h2 className="font-display mt-4 text-[clamp(2.8rem,11vw,5rem)] text-bone md:text-[4.6vw]">
                  The Film
                </h2>
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="label pb-1 text-paper/70 transition-colors hover:text-orange"
              >
                YouTube <TextArrow />
              </a>
            </div>

            <div className="grain mt-8 aspect-video overflow-hidden border border-[var(--rule-dark-strong)] bg-ink md:mt-12">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}`}
                title={`${project.title} by ${project.artistName}`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--rule)] bg-paper-warm">
          <div className="mx-auto w-full max-w-[1600px] px-5 py-14 md:px-10 md:py-20">
            {project.creditGroups.map((group, groupIndex) => (
              <div
                key={group.title}
                className={groupIndex ? "mt-16 md:mt-24" : undefined}
              >
                <div className="flex items-end justify-between gap-4 border-b border-[var(--rule-strong)] pb-5">
                  <h2 className="font-display text-[clamp(2.8rem,11vw,5rem)] text-ink md:text-[4.6vw]">
                    {group.title}
                  </h2>
                  <p className="label pb-2 text-ink-soft">
                    {String(group.credits.length).padStart(2, "0")} Credits
                  </p>
                </div>

                <dl className="mt-8 grid gap-x-16 md:mt-12 md:grid-cols-2">
                  {group.credits.map((credit, index) => (
                    <div
                      key={`${credit.role}-${credit.name}-${index}`}
                      className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-start gap-4 border-b border-[var(--rule)] py-4 sm:gap-6"
                    >
                      <dt className="label-sm min-w-0 text-ink-faint">
                        {credit.role}
                      </dt>
                      <dd className="min-w-0 break-words text-right text-[15px] leading-snug text-ink md:text-base">
                        <CreditName credit={credit} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-paper">
          <div className="mx-auto w-full max-w-[1600px] px-5 py-12 md:px-10 md:py-16">
            <Link
              href="/work#music-video"
              className="group flex flex-col items-start justify-between gap-5 border border-[var(--rule-strong)] p-5 transition-colors duration-300 hover:border-orange hover:bg-orange sm:flex-row sm:items-center md:p-10"
            >
              <span className="label text-orange-deep transition-colors duration-200 group-hover:text-bone">
                Keep looking
              </span>
              <span className="font-display text-[clamp(2.7rem,12vw,5rem)] text-ink transition-colors duration-200 group-hover:text-bone md:text-[4.4vw]">
                All Music Videos →
              </span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
