import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe/server";

const tiers = {
  performance: {
    envPrice: "STRIPE_PRICE_PERFORMANCE_REVIEW",
  },
  development: {
    envPrice: "STRIPE_PRICE_DEVELOPMENT_PARTNERSHIP",
  },
} as const;

type Tier = keyof typeof tiers;

function appOrigin(request: NextRequest): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;
  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (!host) return "http://localhost:3000";
  const proto = request.headers.get("x-forwarded-proto") ?? "https";
  return `${proto}://${host}`;
}

export async function POST(request: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe is not configured (missing STRIPE_SECRET_KEY)." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const tier =
    typeof body === "object" &&
    body !== null &&
    "tier" in body &&
    typeof (body as { tier: unknown }).tier === "string"
      ? ((body as { tier: string }).tier as Tier)
      : null;

  if (!tier || !(tier in tiers)) {
    return NextResponse.json(
      { error: "Unknown or missing tier. Use performance or development." },
      { status: 400 },
    );
  }

  const config = tiers[tier];
  const priceId = process.env[config.envPrice];
  if (!priceId?.startsWith("price_")) {
    return NextResponse.json(
      {
        error: `Missing or invalid ${config.envPrice}. Add a Stripe Price ID (price_...) in your environment.`,
      },
      { status: 503 },
    );
  }

  try {
    const stripe = getStripe();
    const price = await stripe.prices.retrieve(priceId);
    const mode =
      price.type === "recurring" ? ("subscription" as const) : ("payment" as const);

    const origin = appOrigin(request);
    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/pricing?checkout=success`,
      cancel_url: `${origin}/pricing?checkout=cancelled`,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe did not return a checkout URL." },
        { status: 502 },
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Stripe request failed.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
