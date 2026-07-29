import Image from "next/image";

type NarrativeComingSoonCardProps = {
  title: string;
};

export function NarrativeComingSoonCard({
  title,
}: NarrativeComingSoonCardProps) {
  return (
    <article className="mt-7 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20">
      <div className="grid gap-5 p-5 md:grid-cols-[220px_minmax(0,1fr)] md:items-center md:gap-8 md:p-6">
        <div className="overflow-hidden rounded-md border border-white/10 bg-neutral-950 shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
          <div className="relative aspect-[2/3] w-full">
            <Image
              src="/coming-soon-narrative.svg"
              alt={`${title} — coming soon`}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 220px, 100vw"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <p className="eyebrow text-[11px] text-amber-200/80">
              Coming Soon
            </p>
            <h3 className="text-4xl font-semibold tracking-tight text-stone-50 md:text-6xl">
              {title}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-300/72">
            <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5">
              Narrative Short Film
            </span>
            <span className="rounded-xl border border-amber-200/20 bg-amber-200/[0.06] px-3 py-1.5 text-amber-100/80">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
