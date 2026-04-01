import { NextRequest, NextResponse } from "next/server";
import { getResend } from "@/lib/resend/server";
import { SITE } from "@/lib/constants";

const MAX_NAME = 200;
const MAX_MESSAGE = 10_000;

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email is not configured." },
      { status: 503 },
    );
  }

  const from = process.env.RESEND_FROM_EMAIL?.trim();
  if (!from) {
    return NextResponse.json(
      { error: "RESEND_FROM_EMAIL is not set." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid body." }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;
  const nameStr =
    typeof name === "string" ? name.trim().slice(0, MAX_NAME) : "";
  const emailStr =
    typeof email === "string" ? email.trim().slice(0, 320) : "";
  const messageStr =
    typeof message === "string" ? message.trim().slice(0, MAX_MESSAGE) : "";

  if (!nameStr || !emailStr || !messageStr) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(emailStr)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const to =
    process.env.CONTACT_TO_EMAIL?.trim() || SITE.email;

  const text = `From: ${nameStr} <${emailStr}>\n\n${messageStr}`;

  try {
    const resend = getResend();
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: emailStr,
      subject: `Website contact: ${nameStr}`,
      text,
      html: `<p><strong>From:</strong> ${escapeHtml(nameStr)} &lt;${escapeHtml(emailStr)}&gt;</p><p>${escapeHtml(messageStr).replace(/\n/g, "<br/>")}</p>`,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message || "Failed to send email." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Failed to send email.";
    return NextResponse.json({ error: msg }, { status: 502 });
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
