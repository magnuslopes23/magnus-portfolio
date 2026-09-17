import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max = 3000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = clean(body.name, 80);
    const email = clean(body.email, 160);
    const company = clean(body.company, 120);
    const service = clean(body.service, 120);
    const message = clean(body.message, 3000);
    const honeypot = clean(body.website, 100);

    if (honeypot) return NextResponse.json({ ok: true });
    if (name.length < 2 || !emailPattern.test(email) || message.length < 20) {
      return NextResponse.json({ error: "Please complete the required fields with valid information." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      console.error("Contact form is not configured. Missing RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL.");
      return NextResponse.json({ error: "Contact delivery is not configured yet. Please use the email link instead." }, { status: 503 });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio enquiry — ${service || "General"} — ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company || "Not provided"}`,
          `Service: ${service || "Not provided"}`,
          "",
          message
        ].join("\n")
      })
    });

    if (!response.ok) {
      console.error("Email provider error", response.status, await response.text());
      return NextResponse.json({ error: "The message could not be delivered. Please use the email link instead." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
