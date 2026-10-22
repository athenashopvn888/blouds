import { NextResponse } from "next/server";
import { allFlowers, allItems } from "../../lib/products";
import { getCigaretteSnapshot, snapshotHeaders } from "../../lib/cigaretteFeed";
import { getTvData } from "../../lib/tvStock";

export const runtime = "nodejs";

// Always run the handler. Upstream Apps Script reads are cached for ~300s
// inside getTvData; this response itself is not cached (Cache-Control: no-store).
export const revalidate = 0;

export async function GET(request: Request) {
  const type = new URL(request.url).searchParams.get("type") || "flowers";
  const snap = await getCigaretteSnapshot();
  const cigHeaders = snapshotHeaders(snap);

  if (type === "cig") {
    return NextResponse.json(
      {
        on: snap.tv.show,
        tvOn: snap.tv.show,
        webOn: snap.web.show,
        wording: snap.wording,
        live: snap.live,
      },
      { headers: { ...cigHeaders, "Cache-Control": "no-store" } },
    );
  }

  const { body, headers } = await getTvData({
    type,
    staticFlowers: allFlowers,
    staticItems: allItems,
  });

  return NextResponse.json(body, { headers: { ...headers, ...cigHeaders } });
}
