"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

const interestOptions = [
  { value: "", label: "Select a plan" },
  { value: "Foundation Plan", label: "Foundation Plan" },
  { value: "Performance Plan", label: "Performance Plan" },
  { value: "Elite Plan", label: "Elite Plan" },
  { value: "Custom / Other", label: "Custom / Other" },
] as const;

const inputClass =
  "mt-0 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/45 outline-none transition focus:border-emerald-500/50 h-12";

const labelClass =
  "mb-2 block text-xs font-medium uppercase tracking-wider text-emerald-400";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const interest = String(fd.get("interest") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    setStatus("sending");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, interest, message }),
      });
      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="+61 400 000 000"
          />
        </div>
        <div>
          <label htmlFor="interest" className={labelClass}>
            Interested In
          </label>
          <select
            id="interest"
            name="interest"
            className={`${inputClass} bg-white/5`}
            defaultValue=""
          >
            {interestOptions.map((o) => (
              <option
                key={o.value || "placeholder"}
                value={o.value}
                className="bg-[#0a0a0a] text-white"
              >
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="min-h-[160px] w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/45 outline-none transition focus:border-emerald-500/50"
          placeholder="Tell us about your goals, current level, and what you're looking for..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 py-6 text-base font-semibold text-black transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] disabled:opacity-70"
      >
        {status === "sending" ? (
          <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
        ) : (
          <>
            Send Message
            <ArrowRight className="h-4 w-4" aria-hidden />
          </>
        )}
      </button>

      {status === "sent" && (
        <p className="text-sm text-emerald-400" role="status">
          Thanks for your message, we&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && errorMessage && (
        <p className="text-sm text-red-400" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
