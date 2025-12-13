import { NextResponse } from "next/server";

const apiBaseUrl = 'http://localhost:8080';

export async function GET() {
  const res = await fetch(`${apiBaseUrl}/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Server error" }, { status: 502 });
  }

  const data = await res.json();
  return NextResponse.json(data);
}