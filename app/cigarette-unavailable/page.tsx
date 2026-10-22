import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CigaretteUnavailable from "../components/CigaretteUnavailable";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Cigarettes",
  robots: { index: false, follow: false },
};

export default function CigaretteUnavailablePage() {
  return (
    <main>
      <Navbar />
      <CigaretteUnavailable />
      <Footer />
    </main>
  );
}
