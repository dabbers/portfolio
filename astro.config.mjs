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

// A Markdown image with a title, alone in its paragraph, becomes a figure with
// the title as its caption: ![alt text](./chart.png "Caption under the chart")
function rehypeFigureCaptions() {
  const walk = (node) => {
    if (!node.children) return;
    node.children.forEach(walk);
    if (node.tagName !== "p") return;
    const kids = node.children.filter((c) => !(c.type === "text" && !c.value.trim()));
    const img = kids[0];
    if (kids.length !== 1 || img.tagName !== "img" || !img.properties?.title) return;
    const caption = img.properties.title;
    delete img.properties.title;
    node.tagName = "figure";
    node.children = [
      img,
      { type: "element", tagName: "figcaption", properties: {}, children: [{ type: "text", value: caption }] },
    ];
  };
  return walk;
}

export default defineConfig({
  site: "https://davidbarajas.com",
  output: "static",
  trailingSlash: "ignore",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: { rehypePlugins: [rehypeFigureCaptions] },
  redirects: ghostRedirects,
});
