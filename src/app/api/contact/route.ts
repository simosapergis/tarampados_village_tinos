import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

// Email delivery env configuration
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Tarampados <noreply@notifications.tarampados.gr>';
const TO_EMAIL = process.env.RESEND_TO_EMAIL || 'tarampados@gmail.com';    

function misconfiguredResponse() {
  console.error("Contact form misconfigured", {
    hasApiKey: Boolean(resendApiKey),
    hasFrom: Boolean(FROM_EMAIL),
    hasTo: Boolean(TO_EMAIL),
  });

  return NextResponse.json(
    { error: "Η υπηρεσία αποστολής email δεν έχει ρυθμιστεί." },
    { status: 500 }
  );
}

function badRequest(msg: string) {
  return NextResponse.json({ error: msg }, { status: 400 });
}

export async function POST(request: Request) {
  // 1) Ensure server is configured
  if (!resend || !FROM_EMAIL || !TO_EMAIL) return misconfiguredResponse();

  // 2) Basic origin allowlist (prevents random sites from POSTing)
  // Add your preview domain(s) if needed.
  const allowedOrigins = new Set<string>([
    "https://www.tarampados.gr",
    "http://localhost:3000",
  ]);

  const origin = request.headers.get("origin");
  if (!origin || !allowedOrigins.has(origin)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // 3) Parse JSON safely
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return badRequest("Μη έγκυρο αίτημα (JSON).");
  }

  // 4) Extract fields (include a honeypot field like `company` from your form)
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const subject = typeof body?.subject === "string" ? body.subject.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";
  const company = typeof body?.company === "string" ? body.company.trim() : ""; // honeypot

  // 5) Honeypot: bots often fill hidden fields — silently accept
  if (company) return NextResponse.json({ ok: true });

  // 6) Required fields
  if (!name || !email || !message) {
    return badRequest("Απαιτούνται ονοματεπώνυμο, email και μήνυμα.");
  }

  // 7) Simple validation
  if (!email.includes("@") || email.length > 254) {
    return badRequest("Μη έγκυρο email.");
  }

  // 8) Length limits to prevent abuse
  if (name.length > 120) return badRequest("Το ονοματεπώνυμο είναι πολύ μεγάλο.");
  if (subject.length > 200) return badRequest("Το θέμα είναι πολύ μεγάλο.");
  if (message.length > 5000) return badRequest("Το μήνυμα είναι πολύ μεγάλο.");

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: subject || "Νέο μήνυμα από την φόρμα επικοινωνίας",
      text: `Όνομα: ${name}\nEmail: ${email}\nΘέμα: ${subject || "-"}\n\nΜήνυμα:\n${message}`,
      // Prefer snake_case for compatibility with Resend
      replyTo: `${name} <${email}>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend send failed:", error);
    return NextResponse.json(
      { error: "Αποτυχία αποστολής email." },
      { status: 500 }
    );
  }
}