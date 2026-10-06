import type { CSSProperties } from "react";

export type TvTheme = {
  headerImage: string;
  backgroundImage: string;
  cornerLeft?: string;
  cornerRight?: string;
  primary: string;
  accent: string;
  glow: string;
  cardBorder: string;
  headerText: string;
  sloganLeft: string;
  sloganRight: string;
  footerLeft: string;
  footerRight: string;
};

export const TV_THEMES: Readonly<Record<string, TvTheme>> = {
  BLS01: {
    headerImage: "/tv-theme/bls01/header.webp",
    backgroundImage: "/tv-theme/bls01/background.webp",
    cornerLeft: "/tv-theme/bls01/corner-left.png",
    cornerRight: "/tv-theme/bls01/corner-right.png",
    primary: "#126B25",
    accent: "#7E22CE",
    glow: "rgba(126, 34, 206, 0.4)",
    cardBorder: "rgba(134, 239, 172, 0.92)",
    headerText: "#FFFFFF",
    sloganLeft: "BRAMPTON'S FORTRESS",
    sloganRight: "PREMIUM CANNABIS · NEW HEIGHTS",
    footerLeft: "BLOUDS DISPENSARY",
    footerRight: "BRAMPTON · OPEN 24 HOURS",
  },
};

export function getTvTheme(storeCode?: string | null): TvTheme | undefined {
  return storeCode ? TV_THEMES[storeCode] : undefined;
}

type TvThemeVariables = CSSProperties & {
  "--tv-theme-header-image": string;
  "--tv-theme-background-image": string;
  "--tv-theme-primary": string;
  "--tv-theme-accent": string;
  "--tv-theme-glow": string;
  "--tv-theme-card-border": string;
  "--tv-theme-header-text": string;
};

export function getTvThemeVariables(theme: TvTheme): TvThemeVariables {
  return {
    "--tv-theme-header-image": `url("${theme.headerImage}")`,
    "--tv-theme-background-image": `url("${theme.backgroundImage}")`,
    "--tv-theme-primary": theme.primary,
    "--tv-theme-accent": theme.accent,
    "--tv-theme-glow": theme.glow,
    "--tv-theme-card-border": theme.cardBorder,
    "--tv-theme-header-text": theme.headerText,
  };
}

