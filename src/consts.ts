import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "David Barajas",
  TAGLINE: "Software engineer in the Seattle area.",
  // Shown as plain text on purpose; no mailto: link, no signup form, no mail.
  EMAIL_DISPLAY: "me [at] davidbarajas (.) com",
};

export const HOME: Metadata = {
  TITLE: "About",
  DESCRIPTION:
    "David Barajas is a software engineer in the Seattle area. Billing infrastructure at Calendly, previously Siri at Apple and SQL Server at Microsoft, plus a small studio of side projects.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Things I'm building, things that are live, and things I've retired.",
};

export const WRITING: Metadata = {
  TITLE: "Writing",
  DESCRIPTION: "A few notes worth keeping around.",
};

// Entries with an empty HREF are not rendered. Fill in LinkedIn before launch.
export const SOCIALS: Socials = [
  { NAME: "LinkedIn", HREF: "" },
  { NAME: "GitHub", HREF: "https://github.com/dabbers" },
];

export const STATUS_LABEL = {
  live: "Live",
  building: "Building",
  archived: "Archived",
} as const;
