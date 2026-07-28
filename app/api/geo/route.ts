// app/api/geo/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Try to get IP from headers (works great on Cloudflare / Vercel)
    const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0] || "";

    // Fetch from ip-api.com (free, 45 requests/min per IP, no CORS issue on server side)
    const res = await fetch(`http://ip-api.com/json/${clientIp}?fields=status,city,lat,lon`);

    if (!res.ok) {
      return NextResponse.json({ status: "fail" }, { status: 400 });
    }

    const data = await res.json();

    if (data.status === "success") {
      return NextResponse.json({
        city: data.city,
        lat: data.lat,
        lng: data.lon,
      });
    }

    return NextResponse.json({ status: "fail" }, { status: 400 });
  } catch (error) {
    // Log error internally for debugging
    console.error("Internal Geo API Error:", error);
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}
