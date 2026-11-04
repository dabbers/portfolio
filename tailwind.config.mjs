import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // Body: system stack. Headings and the IRC nick: JetBrains Mono.
        sans: [...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // One accent. Deep crimson in light mode, lighter red in dark mode
        // (see global.css for the values).
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
      maxWidth: {
        // ~65 characters of body text.
        prose: "65ch",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
