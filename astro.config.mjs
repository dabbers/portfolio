import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// Old Ghost URLs → new paths. Astro writes a meta-refresh page at each old
// path so links keep working on any static host. public/_redirects carries the
// same map as real 301s for Cloudflare Pages.
const ghostRedirects = {
  "/about": "/",
  "/dabot": "/projects/dabot",
  "/gamer-galaxy": "/projects/gamer-galaxy",
  "/punatorium": "/projects/punatorium",
  "/dabb-it": "/projects/dabb-it",
  "/referral-roueltte": "/projects/referral-roulette",
  "/sidelines": "/projects/sidelines",
  "/dabberz": "/projects/dabberz",
  "/ko-pulls-kollectibles": "/projects/kollectibles",
  "/mssql-server-tls-1-2": "/writing/mssql-server-tls-1-2",
  "/rss": "/rss.xml",
};

export default defineConfig({
  site: "https://davidbarajas.com",
  output: "static",
  trailingSlash: "ignore",
  integrations: [mdx(), sitemap(), tailwind()],
  redirects: ghostRedirects,
});
