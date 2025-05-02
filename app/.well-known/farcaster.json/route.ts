import { NextResponse } from "next/server";
import { APP_URL } from "../../../lib/constants";

export async function GET() {
  const farcasterConfig = {
    accountAssociation: {
      header:
        "eyJmaWQiOjU5OTIyMywidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweGJCMjgzNzFCM0IyYjE3NTU1QUVGYTA4ZjAxQjBhNjIzODlmMjQyNzMifQ",
      payload:
        "eyJkb21haW4iOiJmYXJjYXN0ZXItcGRmLXJlYWRlLnZlcmNlbC5hcHAifQ",
      signature:
        "MHg4OGIyOWExMDMzZjg3Zjk2ZmE0MmY3Y2YyNDBjYWY0YTQ5N2Q0MWExMTA1NjE4MTczOTA0MjlhNzc2NTUwZDAzMGJlZGVjNTU4NjU2MzEyNjYwYzJiNzUwNTI0YjBlM2NiZTgxNGJkZTlhN2RhZGIxMDk2ODcyYTA5MGY2NzEzNDFi",
    },
    frame: {
      version: "1",
      name: "PDFReader",
      iconUrl: `${APP_URL}/images/icon.png`,
      homeUrl: `${APP_URL}`,
      imageUrl: `${APP_URL}/images/feed.png`,
      screenshotUrls: [],
      tags: ["monad", "farcaster", "miniapp", "template"],
      primaryCategory: "developer-tools",
      buttonTitle: "Launch Template",
      splashImageUrl: `${APP_URL}/images/splash.png`,
      splashBackgroundColor: "#ffffff",
      webhookUrl: `${APP_URL}/api/webhook`,
    },
  };

  return NextResponse.json(farcasterConfig);
}
