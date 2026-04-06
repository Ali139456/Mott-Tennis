"use client";

import { useState, type ReactNode } from "react";

type Tier = "foundation" | "performance" | "elite";

type Props = {
  tier: Tier;
  className: string;
  children: ReactNode;
};

export function StripeCheckoutButton({ tier, className, children }: Props) {
  const [pending, setPending] = useState(false);

  async function handleClick() {
    setPending(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok) {
        window.location.href = "/contact";
        return;
      }
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      window.location.href = "/contact";
    } finally {
      setPending(false);
    }
  }

  return (
    <button
      type="button"
      disabled={pending}
      onClick={handleClick}
      className={className}
    >
      {pending ? "Redirecting…" : children}
    </button>
  );
}
