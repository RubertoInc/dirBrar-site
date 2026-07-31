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
  slug: string;
  title: string;
  artistName: string;
  year: string;
  role: string;
  seoCredit: string;
  summary: string;
  youtubeId: string;
  publishedAt: string;
  href: string;
  thumbnailSrc: string;
  thumbnailClassName?: string;
  creditGroups: {
    title: string;
    credits: CrewCredit[];
  }[];
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
    slug: "key",
    title: "KEY",
    artistName: "Akila & The Wonder Machine",
    year: "2026",
    role: "Director / Producer",
    seoCredit: "Directed & Produced by Damen R. Brar",
    summary:
      "The official music video for “KEY” by AKILA & The Wonder Machine, directed and produced by Damen R. Brar.",
    youtubeId: "9lj7zQBqVlA",
    publishedAt: "2026-03-06T16:00:06-08:00",
    href: "https://www.youtube.com/watch?v=9lj7zQBqVlA",
    thumbnailSrc: "/KEY-thumbnail-5.png",
    thumbnailClassName: "object-cover object-[75%_30%]",
    creditGroups: [
      {
        title: "Crew",
        credits: [
          { role: "Director", name: "Damen R. Brar" },
          {
            role: "Co-Director / Production Design",
            name: "Annie Sinton",
          },
          { role: "Director of Photography", name: "Mariana Diaz" },
          { role: "2nd Assistant Director", name: "Camille Lortie" },
          { role: "1st AC", name: "Ilya Slastnikov" },
          { role: "2nd AC", name: "Alec Stephens" },
          { role: "Gaffer", name: "Lily Chiasson" },
          { role: "Best Electric", name: "Karsten Dueck" },
          { role: "Key Grip", name: "Amanda Hacksel" },
          { role: "Grip", name: "Daniel Zlobin" },
          { role: "Swing", name: "Ashvin Lee" },
          {
            role: "BTS Videographers",
            name: "Alex Kuepfer / Manuel Andrés Villasmil",
          },
          { role: "Production Assistant", name: "Josh Ghebru" },
          { role: "Craft", name: "Amy Fan" },
        ],
      },
      {
        title: "Production",
        credits: [
          { role: "Executive Producer", name: "AKILA" },
          {
            role: "Producers",
            name: "Damen R. Brar / Mariana Diaz",
          },
          { role: "Co-Producer", name: "Haad Bakshi" },
          {
            role: "Production Companies",
            name: "Ruberto Inc / InColour Films",
          },
        ],
      },
    ],
  },
  {
    slug: "sorry-dad",
    title: "Sorry Dad",
    artistName: "Angie Khoury",
    year: "2025",
    role: "Director",
    seoCredit: "Directed by Damen R. Brar",
    summary:
      "A chaotic Toronto speed-dating adventure about choosing yourself and loving freely, directed by Damen R. Brar for Angie Khoury.",
    youtubeId: "UZQCQbN6h9w",
    publishedAt: "2025-11-21T16:06:39-08:00",
    href: "https://www.youtube.com/watch?v=UZQCQbN6h9w",
    thumbnailSrc: "/SorryDad-thumbnail.png",
    thumbnailClassName: "object-cover object-[50%_25%]",
    creditGroups: [
      {
        title: "Crew",
        credits: [
          { role: "Director", name: "Damen R. Brar" },
          { role: "AD / Set Decoration", name: "Vashti Anne" },
          { role: "Director of Photography", name: "Laura King" },
          { role: "B-Camera", name: "Adrian Crespo" },
          { role: "Gaffer", name: "Tarneem Allati" },
          { role: "Key Grip", name: "Ciaran Campbell" },
          { role: "Production Assistant", name: "Sofia Abud" },
          {
            role: "Editors",
            name: "Lucia Fella Pallegrino / Angela Khoury",
          },
          { role: "Colourist", name: "Andrew Lea" },
        ],
      },
      {
        title: "Cast",
        credits: [
          { role: "Herself", name: "Angie Khoury" },
          { role: "Hat Cutie", name: "Kay Podgrocka" },
          { role: "Zen Baddie", name: "Humberly Gonzalez" },
          { role: "Influencer", name: "Morgana Hinds" },
          { role: "The Flexer", name: "David Cobo" },
          { role: "The Ex", name: "Paige Evans" },
          { role: "Margaret Atwood Enthusiast", name: "Josh Grant" },
          { role: "Ms. Business", name: "Natasha Austin" },
          { role: "Rock Star", name: "Tyler Smith" },
          { role: "Barista", name: "Sierra Paterson" },
          { role: "Background", name: "Steven Layzell" },
        ],
      },
    ],
  },
  {
    slug: "the-devil",
    title: "The Devil",
    artistName: "Akila & The Wonder Machine",
    year: "2025",
    role: "Director",
    seoCredit: "Directed by Damen R. Brar",
    summary:
      "The official music video for “The Devil” by AKILA & The Wonder Machine, directed by Damen R. Brar and filmed at Evil Empire Studios.",
    youtubeId: "NB4mljuVgts",
    publishedAt: "2025-09-15T16:32:34-07:00",
    href: "https://www.youtube.com/watch?v=NB4mljuVgts",
    thumbnailSrc: "/TheDevil-thumbnail_v2.png",
    creditGroups: [
      {
        title: "Film Crew",
        credits: [
          { role: "Director", name: "Damen R. Brar" },
          { role: "Director of Photography", name: "Laura King" },
          { role: "Steadicam Operator", name: "Jacob Lea" },
          { role: "Gaffer", name: "Rowan Mikolič-O’Rourke" },
          { role: "Photography", name: "Monia Bhutta-Khan" },
          { role: "BTS", name: "Amaan Khan" },
        ],
      },
      {
        title: "Band",
        credits: [
          { role: "Frontman", name: "AKILA" },
          { role: "Drums", name: "Dondre Morris" },
          { role: "Rhythm Guitar", name: "Jonalton Jude Hamilton" },
          { role: "Lead Guitar", name: "Tatsu Uehira" },
          { role: "Bass", name: "Kaashif Earle" },
          { role: "Keys", name: "Irvin Chenthil" },
        ],
      },
    ],
  },
  {
    slug: "choose-u",
    title: "Choose U",
    artistName: "Jacob Hayden",
    year: "2022",
    role: "Executive Producer / Editor",
    seoCredit: "Executive Produced & Edited by Damen R. Brar",
    summary:
      "The official music video for “Choose U” by Jacob Hayden, executive produced and edited by Damen R. Brar.",
    youtubeId: "RTdYtzv-wwI",
    publishedAt: "2022-03-11T12:50:07-08:00",
    href: "https://www.youtube.com/watch?v=RTdYtzv-wwI",
    thumbnailSrc: "/ChooseU-Thumbnail.png",
    creditGroups: [
      {
        title: "Crew",
        credits: [
          { role: "Director", name: "Hannah Bennett" },
          { role: "1st Assistant Director", name: "Emma Ryan" },
          { role: "Director of Photography", name: "Jacob Lea" },
          {
            role: "1st AC",
            name: "Brayden Smith / Tarneem Allati",
          },
          { role: "Gaffer", name: "Rowan Mikolic O’Rourke" },
          { role: "Grips", name: "Tyrell Carter / Scrim" },
          { role: "Production Designer", name: "Annie Sinton" },
          { role: "Executive Producer / Editor", name: "Damen R. Brar" },
        ],
      },
    ],
  },
];

export function getNarrativeProject(slug: string) {
  return narrativeProjects.find((project) => project.slug === slug);
}

export function getMusicVideoProject(slug: string) {
  return musicVideoProjects.find((project) => project.slug === slug);
}

export function getFeaturedNarrativeProject() {
  return narrativeProjects[0];
}
