import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { codedOffRedirect, decideCigaretteRequest, isCigaretteRedirectPath } from "./app/lib/cigaretteGate";

const STOCK_URL =
  "https://script.google.com/macros/s/AKfycbx09_sDal1eMVF1r-hUck4e7oq_XBHEWhGvA79JuhZNQ6P4CdhCas0xE3FfexWQ3hq4/exec?store=BLS01";

async function readFeedCig(): Promise<{ errored: boolean; cig: unknown }> {
  try {
    const response = await fetch(STOCK_URL, { signal: AbortSignal.timeout(8000), cache: "no-store" });
    if (!response.ok) return { errored: true, cig: null };
    const data = await response.json();
    return { errored: false, cig: data?.cig ?? null };
  } catch {
    return { errored: true, cig: null };
  }
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  // Same four URLs next.config 302'd while NEXT_PUBLIC_SHOW_CIGARETTES was not "true".
  // The sheet feed must not rewrite them to the unavailable block.
  const showCigarettes = process.env.NEXT_PUBLIC_SHOW_CIGARETTES?.trim().toLowerCase() === "true";
  if (!showCigarettes && codedOffRedirect(pathname)) {
    return NextResponse.redirect(new URL("/items/vapes", request.url), 302);
  }
  if (!isCigaretteRedirectPath(pathname)) return NextResponse.next();

  const envRaw = process.env.SHOW_CIGARETTES ?? process.env.NEXT_PUBLIC_SHOW_CIGARETTES;
  const feed = await readFeedCig();
  const decision = decideCigaretteRequest({ envRaw, cig: feed.cig, feedErrored: feed.errored });

  if (decision === "redirect") {
    return NextResponse.redirect(new URL("/items/vapes", request.url), 302);
  }
  if (decision === "unavailable") {
    const url = request.nextUrl.clone();
    url.pathname = "/cigarette-unavailable";
    return NextResponse.rewrite(url);
  }
  if (pathname === "/cigarettes") {
    return NextResponse.redirect(new URL("/items/cigarettes", request.url), 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/items/cigarettes",
    "/items/cigarettes/:path*",
    "/cigarettes",
    "/cigarettes/:path*",
    "/cigarette",
    "/cigarette/:path*",
    "/items/tobacco",
    "/items/tobacco/:path*",
    "/tobacco",
    "/tobacco/:path*",
    "/native-cigarettes-:slug",
    "/native-cigarette-:slug",
    "/info/native-cigarettes-:slug",
    "/info/native-cigarette-:slug",
    "/resources/native-smokes/native-cigarettes-guide",
    "/resources/native-smokes/backwoods-grabba-guide",
    "/guides/:slug",
    "/item/:slug",
  ],
};
