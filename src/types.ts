export type Site = {
  NAME: string;
  TAGLINE: string;
  EMAIL_DISPLAY: string;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export type ProjectStatus = "live" | "building" | "archived";
