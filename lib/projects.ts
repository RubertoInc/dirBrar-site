export type CastMember = {
  character: string;
  actorName: string;
  imdbUrl?: string;
  headshotSrc?: string;
  headshotClassName?: string;
};

export type CrewCredit = {
  role: string;
  name: string;
  url?: string;
};

export type NarrativeProject = {
  slug: string;
  title: string;
  format: string;
  status?: string;
  /** Gated behind the screener code — never linked in plain markup. */
  videoUrl?: string;
  logline: string;
  synopsis: string;
  /** Short pull-quote used on index rows and the project header. */
  hook: string;
  posterSrc?: string;
  posterNote: string;
  heroStillSrc?: string;
  heroStillClassName?: string;
  heroStillNote: string;
  galleryImages: string[];
  cast: CastMember[];
  crew: CrewCredit[];
};

export type ComingSoonProject = {
  title: string;
  format: string;
  note: string;
  heroStillSrc?: string;
  heroStillClassName?: string;
  heroStillNote?: string;
};

export type MusicVideoProject = {
  title: string;
  artistName: string;
  href: string;
  thumbnailSrc: string;
  thumbnailClassName?: string;
};

export const narrativeProjects: NarrativeProject[] = [
  {
    slug: "pegged",
    title: "PEGGED",
    format: "Short Film",
    status: "In Festival Consideration",
    videoUrl: "https://www.youtube.com/watch?v=JeLSpDa7nzU",
    hook: "One take. One apartment. Nowhere left to hide.",
    logline:
      "PEGGED is an original short film written and directed by Damen R. Brar, starring exceptional Canadian talent from the queer creative community in an intimate, sharply observed story about desire, identity, and self-acceptance.",
    synopsis:
      "Chloe comes home early from work armed with a silk slip and a last-ditch plan to revive her dying relationship, only to discover that the reason it unraveled is already in the room with them. Told in a single continuous take, PEGGED argues that it's impossible to truly love someone without first loving yourself.",
    posterSrc: "/POSTER.png",
    posterNote: "PEGGED poster",
    heroStillSrc: "/pegged-gallery/DSCF8473.jpg",
    heroStillClassName: "object-cover object-[50%_42%]",
    heroStillNote: "PEGGED — hero still",
    galleryImages: [
      "/pegged-gallery/DSCF8502.jpg",
      "/pegged-gallery/IMG_5935.jpg",
      "/pegged-gallery/IMG_6121.jpg",
      "/pegged-gallery/DSCF8473.jpg",
      "/pegged-gallery/DSCF8467.jpg",
      "/pegged-gallery/DSCF8471.jpg",
      "/pegged-gallery/DSCF8565.jpg",
      "/pegged-gallery/DSCF8568.jpg",
      "/pegged-gallery/DSCF8583.jpg",
      "/pegged-gallery/DSCF8581.jpg",
      "/pegged-gallery/DSCF8552.jpg",
      "/pegged-gallery/DSCF8545.jpg",
      "/pegged-gallery/DSCF8579.jpg",
      "/pegged-gallery/DSCF8522.jpg",
      "/pegged-gallery/DSCF8531.jpg",
      "/pegged-gallery/DSCF8493.jpg",
    ],
    cast: [
      {
        character: "Chloe",
        actorName: "Cecilia Lee",
        imdbUrl: "https://www.imdb.com/name/nm10673020/",
        headshotSrc: "/cecilia-cropped.jpg",
        // 2:3 source in a 4:5 card — bias the crop up so the hairline clears.
        headshotClassName: "object-cover object-[50%_18%]",
      },
      {
        character: "Brett",
        actorName: "Brennan Clost",
        imdbUrl: "https://www.imdb.com/name/nm5250195/",
        headshotSrc: "/brennanClost-HeadShot.png",
      },
      {
        character: "Adrean",
        actorName: "Kaden Connors",
        imdbUrl: "https://www.imdb.com/name/nm10423248/",
        headshotSrc: "/kaden-profile.png",
        headshotClassName: "scale-110 object-cover object-[50%_18%]",
      },
    ],
    crew: [
      { role: "Writer / Director", name: "Damen R. Brar" },
      {
        role: "Composer",
        name: "AKILA",
        url: "https://linktr.ee/the_wonder_machine",
      },
      { role: "Producer / Prod Design", name: "Vashti Anne" },
      { role: "DOP", name: "Jacob Lea", url: "https://jlea.ca" },
      { role: "1st AC", name: "Sarah Sun", url: "https://saraesun.com/" },
      {
        role: "Gaffer",
        name: "Marco Ciardullo",
        url: "https://www.marcociardullo.ca/",
      },
      { role: "Board Op", name: "Evan Jones" },
      {
        role: "Location Sound",
        name: "Nicolas Field",
        url: "https://nicolasfield.studio/",
      },
      { role: "Colorist", name: "Andrew Lea", url: "https://andrewlea.ca" },
      {
        role: "Sound Design / Mixer",
        name: "Alexandra Huynh Do",
        url: "https://www.huynhdosound.com/",
      },
      {
        role: "Vocals / Lyrics",
        name: "Joelle Rose Peresin",
        url: "https://linktr.ee/JoelleRoseMusic",
      },
      { role: "Bass / Guitar", name: "Kaashif Earle" },
      {
        role: "Saxophone",
        name: "Ridgeclub",
        url: "https://linktr.ee/ridgeclub",
      },
      {
        role: "Featuring “LUCKY” by",
        name: "AKILA and The Wonder Machine",
        url: "https://linktr.ee/the_wonder_machine",
      },
    ],
  },
];

export const comingSoonProjects: ComingSoonProject[] = [
  {
    title: "No Child of God",
    format: "Short Film",
    note: "In development",
    heroStillSrc: "/noChildOfGod-tempHeroImage.webp",
    heroStillClassName: "object-cover object-[50%_45%]",
    heroStillNote: "No Child of God — temp key art",
  },
];

export const musicVideoProjects: MusicVideoProject[] = [
  {
    title: "KEY",
    artistName: "Akila & The Wonder Machine",
    href: "https://www.youtube.com/watch?v=9lj7zQBqVlA",
    thumbnailSrc: "/KEY-thumbnail-5.png",
    thumbnailClassName: "object-cover object-[75%_30%]",
  },
  {
    title: "Sorry Dad",
    artistName: "Angie Khoury",
    href: "https://www.youtube.com/watch?v=UZQCQbN6h9w",
    thumbnailSrc: "/SorryDad-thumbnail.png",
    thumbnailClassName: "object-cover object-[50%_25%]",
  },
  {
    title: "The Devil",
    artistName: "Akila & The Wonder Machine",
    href: "https://www.youtube.com/watch?v=NB4mljuVgts",
    thumbnailSrc: "/TheDevil-thumbnail_v2.png",
  },
  {
    title: "Choose U",
    artistName: "Jacob Hayden",
    href: "https://www.youtube.com/watch?v=RTdYtzv-wwI",
    thumbnailSrc: "/ChooseU-Thumbnail.png",
  },
];

export function getNarrativeProject(slug: string) {
  return narrativeProjects.find((project) => project.slug === slug);
}

export function getFeaturedNarrativeProject() {
  return narrativeProjects[0];
}
