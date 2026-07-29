# DiR. BRAR

Editorial site for Damen R. Brar — writer / director.

## Run it

```bash
npm run dev
```

Next 16 has hit a Turbopack native-binding issue on Intel Macs in this
project's sibling repo. If the dev server fails to boot, fall back to webpack:

```bash
npm run dev -- --webpack
```

## Design system

Everything lives in `app/globals.css`. The site reads as **paper stock** —
desert sand ground, warm army green bands, orange as a detail.

| Token | Value | Use |
| --- | --- | --- |
| `paper` / `paper-warm` | `#e7dcc6` / `#dcccae` | Primary + alternating grounds |
| `bone` | `#f9f6f0` | Type on dark bands — lightest value on the site |
| `ink` / `ink-soft` / `ink-faint` | `#1c1a14` / `#4a4335` / `#7a705c` | Type on paper |
| `olive` / `olive-deep` | `#4e5a38` / `#2b331f` | Warm army green bands, footer |
| `clay` / `clay-deep` | `#96754c` / `#5c452b` | Warm sand-brown accents |
| `orange` | `#e85416` | Marks, large type, dark grounds |
| `orange-deep` | `#a83505` | Small type on paper (AA at 4.9:1) |

**Orange is an accent, never a slab.** Rules, index numbers, hover states,
the wordmark. If you find yourself filling a whole band with it, don't.

**No pure white, ever.** `bone` (`#f9f6f0`) is the lightest value on the site
— barely off-white, but never `#fff`.

There are two oranges because one value can't clear AA on both sand and deep
green. Use `orange-deep` for small type on paper, `orange` everywhere else.

**Hard edges only.** `globals.css` zeroes every Tailwind radius token *and*
applies `border-radius: 0 !important` to `*`, so nothing rounds by accident.

### Type

- **Anton** (`.font-display`) — display headlines. Line-height is `0.92`;
  Anton's caps collide below `0.9`, so don't tighten it further.
- **Archivo** — body copy.
- **Space Mono** (`.label`, `.label-sm`) — call-sheet meta labels.
- **Caveat Brush** (`.font-marker`) — the DiR. BRAR wordmark only.

Caveat Brush is the marker face chosen because it has a **true lowercase "i"
with a tittle** — Permanent Marker and most other sharpie faces are caps-only
and render `DiR.` as `DIR.`. It only ships at weight 400, so `.font-marker`
adds `-webkit-text-stroke: 0.06em currentColor` to reach sharpie weight. If
you swap the face, check the lowercase `i` first.

### Photography

`.grade` is the shared warm grade for **full-bleed heroes only**. Don't stack
it under a second scrim — it crushes the image. Cards that need a legible
title use a single bottom-confined scrim instead (see `app/work/page.tsx`), so
the top of the frame stays clean.

### Texture

- `.grain` — 16mm-ish noise over photography.
- `.grade` — the shared warm/olive grade so every photo sits in one world.

## Content

All copy and project data is in [`lib/projects.ts`](lib/projects.ts). Adding a
narrative project there gives you a row on the home index, a card on `/work`,
and a statically generated `/work/<slug>` page automatically.

## Private screener

The PEGGED screener link is gated in `app/work/screener-gate.tsx`. The code is
currently `PEG26`, held client-side — it keeps the URL out of the page markup
and casual view, but it is **not** real access control. If the screener needs
to actually stay private, move the check to a server action or route handler
and keep the video URL out of the client bundle.

## Deploying

Set `NEXT_PUBLIC_SITE_URL` to the live domain so Open Graph image URLs resolve
absolutely:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

```bash
npm run build
```
