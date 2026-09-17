"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "@/components/Icons";

type State = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to send message.");
      form.reset();
      setState("success");
      setMessage("Message sent. I’ll reply as soon as possible.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Unable to send message.");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-row">
        <label>Name<input name="name" type="text" autoComplete="name" required minLength={2} maxLength={80} placeholder="Your name" /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required maxLength={160} placeholder="you@company.com" /></label>
      </div>
      <label>Company / team<input name="company" type="text" autoComplete="organization" maxLength={120} placeholder="Optional" /></label>
      <label>What do you need help with?<select name="service" defaultValue="Product development">
        <option>Product development</option><option>Automation</option><option>API / integration</option><option>Architecture / consulting</option><option>Code review</option><option>Full-time role</option><option>Other</option>
      </select></label>
      <label>Project context<textarea name="message" required minLength={20} maxLength={3000} rows={6} placeholder="The problem, current setup, desired outcome and any relevant deadline." /></label>
      <label className="hp-field" aria-hidden="true">Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      <button className="button primary submit-button" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send project brief"} <ArrowRight aria-hidden="true" />
      </button>
      <p className={`form-status ${state}`} role="status" aria-live="polite">{message}</p>
    </form>
  );
}
