import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games — Blouds Dispensary | Brampton",
  description: "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at Blouds Dispensary.",
  alternates: {
    canonical: "https://bloudsdispensary.ca/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
