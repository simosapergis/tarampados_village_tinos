import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_d4sKoc8Z_PGZjGFSUZ8tRh5ZiMfUw9REw");
const TO_EMAIL = "tarampados@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "Tarampados Village <onboarding@resend.dev>";

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Απαιτούνται ονοματεπώνυμο, email και μήνυμα." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: subject || "Νέο μήνυμα από την φόρμα επικοινωνίας",
      text: `Όνομα: ${name}\nEmail: ${email}\nΘέμα: ${subject ?? "-"}\n\nΜήνυμα:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Αποτυχία αποστολής email. Ελέγξτε το Resend API key." },
      { status: 500 }
    );
  }
}

