import type { CrewCredit } from "./projects";

const preferredPortfolioLinksByName: Record<string, string> = {
  "Laura King": "https://lauraking.ca",
  "Jacob Lea": "https://jlea.ca",
  "Sarah Sun": "https://saraesun.com/",
  "Marco Ciardullo": "https://www.marcociardullo.ca/",
  "Nicolas Field": "https://nicolasfield.studio/",
  "Andrew Lea": "https://andrewlea.ca",
  "Alexandra Huynh Do": "https://www.huynhdosound.com/",
};

const outboundLinksByName: Record<string, string> = {
  AKILA: "https://linktr.ee/the_wonder_machine",
  "AKILA and The Wonder Machine": "https://linktr.ee/the_wonder_machine",
  "Vashti Anne": "https://www.instagram.com/flower.shop.ink/",
  "Jacob Lea": "https://jlea.ca",
  "Sarah Sun": "https://saraesun.com/",
  "Marco Ciardullo": "https://www.marcociardullo.ca/",
  "Nicolas Field": "https://nicolasfield.studio/",
  "Andrew Lea": "https://andrewlea.ca",
  "Alexandra Huynh Do": "https://www.huynhdosound.com/",
  "Joelle Rose": "https://linktr.ee/JoelleRoseMusic",
  "Joelle Rose Peresin": "https://linktr.ee/JoelleRoseMusic",
  Ridgeclub: "https://linktr.ee/ridgeclub",
  "Cecilia Lee": "https://www.imdb.com/name/nm10673020/",
  "Brennan Clost": "https://www.imdb.com/name/nm5250195/",
  "Kaden Connors": "https://www.imdb.com/name/nm10423248/",
  "Mariana Diaz": "https://www.instagram.com/marianaxdiazzz/",
  "Camille Lortie": "https://www.instagram.com/camille_lorteille/",
  "Ilya Slastnikov": "https://www.instagram.com/spotvpreispodne/",
  "Alec Stephens": "https://www.instagram.com/alec.stephens_/",
  "Lily Chiasson": "https://www.instagram.com/lily_chiasson/",
  "Karsten Dueck": "https://www.instagram.com/dueckkarsten/",
  "Amanda Hacksel": "https://www.instagram.com/amanda.hacksel/",
  "Daniel Zlobin": "https://www.instagram.com/zlobinrebel/",
  "Ashvin Lee": "https://www.instagram.com/ashvinagain/",
  "Josh Ghebru": "https://www.instagram.com/iyasutheory/",
  "Amy Fan": "https://www.instagram.com/amythfan/",
  "Haad Bakshi": "https://www.instagram.com/haadgb/",
  "Ruberto Inc": "https://www.instagram.com/rubertoinc/",
  "InColour Films": "https://www.instagram.com/incolour.media/",
  "Adam Musmar": "https://www.instagram.com/adam.musmar/",
  "Jonalton Jude Hamilton": "https://www.instagram.com/jonalton_/",
  "Kaashif Earle": "https://www.instagram.com/kaashifearle/",
  "Irvin Chenthil": "https://www.instagram.com/irvyiscurvy/",
  "Dondre Morris": "https://www.instagram.com/dondr3_drumm3rboy/",
  "Adrian Crespo": "https://www.instagram.com/adriancrespo.p/",
  "Tarneem Allati": "https://www.instagram.com/tarneem.allati/",
  "Ciaran Campbell": "https://www.instagram.com/cimarancampbell/",
  "Sofia Abud": "https://www.instagram.com/sof_abud/",
  "Lucia Fella Pallegrino": "https://www.instagram.com/luciavfp_/",
  "Angie Khoury": "https://www.instagram.com/angieeekhouryyy/",
  "Humberly Gonzalez": "https://www.instagram.com/humberly/",
  "Rowan Mikolič-O’Rourke": "https://www.instagram.com/squirrelpainter/",
  "Rowan Mikolic O’Rourke": "https://www.instagram.com/squirrelpainter/",
  "Monia Bhutta-Khan": "https://www.instagram.com/moniabk3/",
  "Amaan Khan": "https://www.instagram.com/amaanxkhan/",
  "Tatsu Uehira": "https://www.instagram.com/tatsu_guitarist/",
};

export function getOutboundLink(name: string, directUrl?: string) {
  return (
    preferredPortfolioLinksByName[name] ??
    directUrl ??
    outboundLinksByName[name]
  );
}

export function getCreditNameParts(credit: CrewCredit) {
  const names = credit.name.split(/\s+\/\s+/);

  return names.map((name) => ({
    name,
    url: getOutboundLink(
      name,
      names.length === 1 ? credit.url : undefined,
    ),
  }));
}
