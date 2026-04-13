import { NextResponse } from "next/server";
import { getOffers, createOffer } from "@/lib/offer.service";

export async function GET() {
  const offers = await getOffers();
  return NextResponse.json(offers);
}

export async function POST(req: Request) {
  const body = await req.json();
  const offer = await createOffer(body);
  return NextResponse.json(offer);
}