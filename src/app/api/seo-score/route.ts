// app/api/seo-score/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");

    if (!url) {
      return NextResponse.json(
        { error: "URL parameter is required" },
        { status: 400 }
      );
    }

    // Validate the URL
    try {
      new URL(url);
    } catch {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch the website" },
        { status: 500 }
      );
    }

    const html = await res.text();

    // SEO Checks
    const hasTitle = /<title>(.*?)<\/title>/i.test(html);
    const hasMetaDesc =
      /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i.test(
        html
      );
    const hasH1 = /<h1>(.*?)<\/h1>/i.test(html);
    const imgTags = html.match(/<img[^>]*>/gi) || [];
    const imgWithAlt = imgTags.filter((tag) => /alt\s*=/.test(tag)).length;
    const hasAltOnImages = imgWithAlt === imgTags.length;
    const internalLinks = (
      html.match(new RegExp(`href=["']${url}`, "gi")) || []
    ).length;
    const externalLinks = (
      html.match(/href=["']https?:\/\/(?!.*yourdomain.com)/gi) || []
    ).length;

    // Bonus: check if robots.txt exists
    let hasRobots = false;
    try {
      const robotsRes = await fetch(new URL("/robots.txt", url).toString());
      hasRobots = robotsRes.ok;
    } catch {
      hasRobots = false;
    }

    // Scoring system out of 100
    let score = 0;
    if (hasTitle) score += 15;
    if (hasMetaDesc) score += 15;
    if (hasH1) score += 10;
    if (imgTags.length > 0 && hasAltOnImages) score += 15;
    if (internalLinks >= 5) score += 10;
    if (externalLinks >= 3) score += 5;
    if (hasRobots) score += 10;
    if (res.status === 200) score += 20;

    return NextResponse.json({ seoScore: score });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
