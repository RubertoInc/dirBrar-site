import Image from "next/image";
import Link from "next/link";
import { MobileHeader } from "../mobile-header";
import { MusicVideoGrid } from "./music-video-grid";
import { musicVideoProjects } from "./music-video-projects";
import { NarrativeProjectCard } from "./narrative-project-card";
import { NarrativeComingSoonCard } from "./narrative-coming-soon-card";
import { getFeaturedNarrativeProject } from "./narrative-projects";

const sectionLinks = [
  { href: "#narrative", label: "Narrative" },
  { href: "#music-videos", label: "Music Videos" },
  { href: "#commercial", label: "Commercial" },
];

const featuredNarrativeProject = getFeaturedNarrativeProject();

export function WorkPage() {
  return (
    <main className="relative overflow-hidden bg-neutral-950 px-6 py-8 text-stone-100 md:px-10">
      <div className="pointer-events-none fixed inset-0 md:absolute">
        <Image
          src="/hero.jpg"
          alt="Cinematic portrait background"
          fill
          priority
          className="object-cover object-[22%_18%] md:object-left md:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.18),_transparent_34%),linear-gradient(115deg,_rgba(10,10,10,0.12),_rgba(10,10,10,0.5)_52%,_rgba(10,10,10,0.64)),linear-gradient(to_top,_rgba(10,10,10,0.62),_rgba(10,10,10,0.08)_48%,_rgba(10,10,10,0.42))]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-neutral-950/70 via-neutral-950/35 to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 pb-10 md:gap-12">
        <MobileHeader className="fixed inset-x-0 top-0 z-30 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 text-sm uppercase tracking-[0.3em] text-stone-300/80 [text-shadow:0_2px_10px_rgba(0,0,0,0.52)] md:left-1/2 md:top-6 md:z-40 md:w-[calc(100%-5rem)] md:-translate-x-1/2 md:px-0 md:py-0">
          <p>Selected Work</p>
          <nav className="flex items-center gap-4 md:gap-6">
            <Link
              href="/about"
              className="font-semibold transition-colors hover:text-stone-100 focus:outline-none focus:text-stone-100"
            >
              About
            </Link>
            <Link
              href="/"
              className="font-semibold transition-colors hover:text-stone-100 focus:outline-none focus:text-stone-100"
            >
              Home
            </Link>
          </nav>
        </MobileHeader>

        <section className="max-w-3xl space-y-2 rounded-2xl border border-white/10 bg-black/35 p-4 mt-16 shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-sm md:mt-0 md:border-0 md:bg-transparent md:p-0 md:pt-14 md:shadow-none md:backdrop-blur-0">
          <h1 className="text-4xl font-semibold tracking-tight text-stone-50 md:text-6xl">
            Directing Work
          </h1>
          <p className="eyebrow text-xs text-amber-200/70">
            damen r. brar
          </p>
          <p className="max-w-2xl text-[15px] leading-6 text-stone-100/88 md:text-lg md:leading-8 md:text-stone-200/80">
            Each project is a special collaboration of beautiful minds. 
            Scroll to see original work directed, produced, or written by me.
          </p>
          <nav className="flex flex-wrap gap-2 pt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-300/75 md:hidden">
            {sectionLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.035))] px-3 py-2 text-stone-200/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.16),0_8px_18px_rgba(0,0,0,0.16)] transition-[background-color,border-color,color,box-shadow] duration-200 hover:border-white/18 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.05))] hover:text-stone-50"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </section>

        <nav className="sticky top-20 z-20 -mt-2 hidden flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-300/75 md:flex md:text-[11px]">
          {sectionLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.035))] px-3 py-2 text-stone-200/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.16),0_8px_18px_rgba(0,0,0,0.16)] transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:border-white/18 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.05))] hover:text-stone-50 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(0,0,0,0.18),0_12px_24px_rgba(0,0,0,0.2)] active:translate-y-px"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <section
          id="narrative"
          className="scroll-mt-24 rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.2)] backdrop-blur-sm md:p-8"
        >
          <div className="max-w-3xl space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-50 md:text-5xl">
              Narrative Work
            </h2>
            <p className="eyebrow text-xs text-amber-200/70">
              Written & Directed by: Damen R. Brar
            </p>
          </div>

          <NarrativeProjectCard project={featuredNarrativeProject} />
          <NarrativeComingSoonCard title="Children of God" />
        </section>

        <section
          id="music-videos"
          className="scroll-mt-24 space-y-7 rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.2)] backdrop-blur-sm md:p-8"
        >
          <div className="max-w-3xl space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-50 md:text-5xl">
              Music Videos
            </h2>
            <p className="eyebrow text-xs text-amber-200/70">
              Produced & Directed by: Damen R. Brar
            </p>
          </div>

          <MusicVideoGrid projects={musicVideoProjects} />
        </section>

        <section
          id="commercial"
          className="scroll-mt-24 rounded-[2rem] border border-dashed border-white/15 bg-black/15 p-6 backdrop-blur-sm md:p-8"
        >
          <div className="max-w-3xl space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-50 md:text-5xl">
              Commercial / Spec
            </h2>
            <p className="eyebrow text-xs text-amber-200/70">
              Coming soon...
            </p>
            <p className="text-[15px] leading-6 text-stone-100/88 md:text-lg md:leading-8 md:text-stone-200/80">
              More to come. Give me a call, this could be your brand!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
