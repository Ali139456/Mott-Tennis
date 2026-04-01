"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 border border-zinc-800 bg-zinc-900/30 p-8"
    >
      <div>
        <label htmlFor="name" className="text-sm font-medium text-zinc-300">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="mt-2 w-full border border-zinc-700 bg-black/50 px-4 py-3 text-white outline-none transition focus:border-emerald-400/60"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-zinc-300">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full border border-zinc-700 bg-black/50 px-4 py-3 text-white outline-none transition focus:border-emerald-400/60"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="text-sm font-medium text-zinc-300"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-y border border-zinc-700 bg-black/50 px-4 py-3 text-white outline-none transition focus:border-emerald-400/60"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-emerald-400 px-8 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
      >
        Send message
      </button>
      {status === "sent" && (
        <p className="text-sm text-emerald-400" role="status">
          Thanks — your message is ready to send. Wire this form to Supabase or
          your API route when you&apos;re ready.
        </p>
      )}
    </form>
  );
}
