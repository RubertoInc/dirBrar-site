import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "../site-header";
import { Wordmark } from "../wordmark";

export const metadata: Metadata = {
  title: "About",
  description:
    "Damen R. Brar is a Punjabi-Italian, Toronto-based writer and director making bold, character-driven work.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* ---------------------------------------------------------------
            PORTRAIT + WORDMARK
        --------------------------------------------------------------- */}
        <section className="border-b border-[var(--rule)] bg-paper">
          <div className="mx-auto grid w-full max-w-[1600px] gap-px px-4 pb-12 pt-20 sm:px-5 sm:pb-14 sm:pt-24 md:grid-cols-2 md:px-10 md:pb-20 md:pt-32">
            <div className="grain relative aspect-[4/5] w-full overflow-hidden border border-[var(--rule)] md:aspect-auto md:min-h-[600px]">
              <Image
                src="/dirBrar-ProfilePic-2.jpg"
                alt="Damen R. Brar"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-[48%_40%]"
              />
              {/* The portrait is already high-key sand — a full grade would
                  only muddy it, so just warm the edges. */}
              <div className="absolute inset-0 bg-gradient-to-tr from-clay-deep/20 via-transparent to-transparent" />
            </div>

            <div className="flex flex-col gap-8 border border-[var(--rule)] p-5 sm:gap-10 sm:p-6 md:p-12">
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-orange md:w-16" />
                  <p className="label text-orange-deep">Profile</p>
                </div>

                <h1 className="mt-6">
                  <Wordmark asText className="text-[clamp(3rem,16vw,6rem)] md:text-[7vw]" />
                </h1>

                <p className="label mt-6 text-ink-soft">
                  <span className="slash">Damen R. Brar</span>
                  <span className="slash">Writer</span>
                  <span className="slash">Director</span>
                  <span className="slash">Producer</span>
                </p>
              </div>

              <div className="space-y-5 border-t border-[var(--rule)] pt-6 text-base leading-relaxed text-ink-soft md:text-lg md:leading-relaxed">
                <p>
                  Damen is a Punjabi-Italian, Toronto-based director seeking to
                  create bold, character-driven stories that strike the balance
                  between technical execution and raw authenticity.
                </p>
                <p>
                  His work often explores identity and relationships, finding
                  both the absurd and the honest in how we connect. He is
                  passionate about uplifting Queer and BIPOC voices, crafting
                  stories that reflect the nuance, contradiction, and richness
                  of those communities without flattening them into
                  stereotypes.
                </p>
                <p>
                  With a background in post production and digital imaging,
                  Damen brings a strong technical understanding and visual
                  authorship to his work, making images that serve both emotion
                  and story.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
