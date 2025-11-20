import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_d4sKoc8Z_PGZjGFSUZ8tRh5ZiMfUw9REw");
const TO_EMAIL = "tarampados@gmail.com"; //TODO add to env variables
//TODO add to env variables RESEND_FROM_EMAIL should be contact@tarampados.gr and should be added to resend as the domain tarampados.gr
//To do that there are 2 options
/**
 * Keep using Wix but configure DNS at the registrar level
If your domain’s nameservers are still at the registrar (e.g., GoDaddy/Namecheap/Cloudflare), log in there and add the Resend records (TXT + CNAME DKIM) directly. Wix will keep hosting the site, but DNS changes happen at the registrar. Most registrars allow full DNS control even if a domain points at Wix for web hosting.
Move DNS to a provider that allows full record control
If Wix currently hosts your nameservers, you can migrate your domain’s DNS to a service like Cloudflare, AWS Route 53, or your registrar’s DNS. After you switch nameservers, you can add all required records there (A/CNAME for Wix site + Resend SPF/DKIM + MX if needed). Wix has a support doc titled “Connecting a domain managed outside of Wix,” which shows the A/CNAME records you’ll need to keep the site live.
Short answer: verify tarampados.gr with Resend by adding their DNS records at a DNS host that lets you manage TXT/CNAME entries. Wix unfortunately doesn’t allow that if it’s also the nameserver, so you either manage DNS elsewhere or transfer the domain to a registrar/DNS provider that does.
 */
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

