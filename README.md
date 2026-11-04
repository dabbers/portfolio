# davidbarajas.com

Personal portfolio. A static [Astro](https://astro.build) site, started from the
[Astro Nano](https://github.com/markhorn-dev/astro-nano) template and themed in
deep red. It replaces the old self-hosted Ghost site: no database, no member
signups, no mail, nothing to patch.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # type-checks, then writes the site to dist/
npm run preview    # serves dist/
```

Node 22 or newer.

## Where things live

| Path | What |
|------|------|
| `src/content/home.md` | The About copy. This is the homepage. |
| `src/content/projects/<slug>/index.md` | One project per folder. Screenshots sit next to the Markdown and are optimized at build. |
| `src/content/writing/*.md` | Posts. Only ones worth keeping. |
| `src/consts.ts` | Site name, contact line, social links. |
| `src/styles/global.css` | The two accent values and the type rules. |
| `public/_redirects` | Old Ghost URLs → new paths, as real 301s on Cloudflare Pages. |
| `astro.config.mjs` | The same redirect map as meta-refresh pages for any other static host. |
| `scripts/og-image.mjs` | Regenerates `public/og.png` (social share image) and the touch icon. `npm run og`. |

### Adding a project

Create `src/content/projects/<slug>/index.md`:

```markdown
---
title: Thing
description: One sentence. Shows on the card and as the page description.
status: building        # live | building | archived
years: "2025 –"         # free text, absolute dates only
stack: [Godot, Go]
url: https://thing.example
repo: https://github.com/dabbers/thing
cover: ./cover.png      # optional; put the file in the same folder
coverAlt: What the screenshot shows.
order: 10               # lower sorts first within its status group
---

Body in Markdown. Relative images (`![caption](./shot.png)`) are optimized too.
```

The project index groups by status: Building, Live, Archived.

### Design rules

- Red (`#991B1B` light, `#F87171` dark) is only for links, the name, and hover
  states. Status badges are deliberately not red.
- One column, body text capped at 65 characters.
- Body in the system font stack. Headings in JetBrains Mono.
- Dark mode follows the system setting; the footer buttons override it per browser.
- No hero images. One real screenshot per project.

## Deploy

Cloudflare Pages, direct upload, same as punatorium. The GitHub Action in
`.github/workflows/deploy.yml` builds on every push and PR, and deploys on
pushes to `main` when these repository secrets exist:

- `CLOUDFLARE_API_TOKEN` (Pages: Edit)
- `CLOUDFLARE_ACCOUNT_ID`

One-time setup:

```bash
npx wrangler login
npx wrangler pages project create davidbarajas --production-branch main
```

Manual deploy from a laptop:

```bash
npm run build
npm run deploy
```

Then add `davidbarajas.com` as a custom domain on the Pages project
(Cloudflare dashboard → Workers & Pages → davidbarajas → Custom domains) and let
it rewrite the DNS record.

If you would rather serve it from the home server, `dist/` is plain files;
point nginx or Caddy at it. The meta-refresh redirect pages cover the old URLs
there too, just without real 301 status codes.

## Cut-over checklist

1. Deploy to Pages, preview on the `*.pages.dev` URL in light and dark mode on
   desktop and phone.
2. Point DNS at Pages. Check the old links: `/about/`, `/dabot/`, `/gamer-galaxy/`,
   `/referral-roueltte/`, `/mssql-server-tls-1-2/`, `/rss/`.
3. Retire Ghost: stop the container, remove its database and the
   `noreply@davidbarajas.com` sending config. With nothing sending outside
   Migadu, move DMARC from `p=quarantine` to `p=reject`.
