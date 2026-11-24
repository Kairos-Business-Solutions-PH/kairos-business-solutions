"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-2 w-full rounded-lg border border-line bg-bg px-4 py-3 text-heading placeholder:text-body/60 focus:border-accent focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-card p-7 sm:p-8" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-heading">
          Name
          <input name="name" required maxLength={100} autoComplete="name" className={field} placeholder="Your name" />
        </label>
        <label className="text-sm font-semibold text-heading">
          Email
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} placeholder="you@company.com" />
        </label>
      </div>
      <label className="mt-5 block text-sm font-semibold text-heading">
        Company <span className="font-normal text-body">(optional)</span>
        <input name="company" maxLength={150} autoComplete="organization" className={field} placeholder="Company name" />
      </label>
      <label className="mt-5 block text-sm font-semibold text-heading">
        How can we help?
        <textarea name="message" required minLength={10} maxLength={3000} rows={5} className={field} placeholder="Tell us about your project or challenge" />
      </label>
      {/* Honeypot: hidden from people, tempting to bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button type="submit" disabled={status === "sending"} className="btn btn-primary mt-6 w-full disabled:opacity-60 sm:w-auto">
        {status === "sending" ? "Sending…" : "Discuss your project"}
      </button>
      <p role="status" aria-live="polite" className="mt-4 min-h-6 text-sm">
        {status === "sent" && <span className="font-semibold text-accent">Thank you! We’ll reply within one business day.</span>}
        {status === "error" && <span className="font-semibold text-red-600 dark:text-red-400">{message}</span>}
      </p>
    </form>
  );
}
