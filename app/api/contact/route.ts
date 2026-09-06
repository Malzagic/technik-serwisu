// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, serviceType } = body;

    // Prosta walidacja pól
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Wszystkie wymagane pola muszą być wypełnione." }, { status: 400 });
    }

    // Wysyłka wiadomości na Twój adres e-mail
    const data = await resend.emails.send({
      from: "Technik Serwisu Contact <onboarding@resend.dev>", // Po weryfikacji domeny zmienimy na powiadomienia@technik-serwisu.pl
      to: ["kontakt@technik-serwisu.pl"], // Twój e-mail odbiorczy
      subject: `[Nowe Zgłoszenie] ${serviceType || "Formularz Kontaktowy"} - ${name}`,
      replyTo: email,
      html: `
        <h2>Nowe zgłoszenie ze strony www.technik-serwisu.pl</h2>
        <p><strong>Imię i nazwisko / Firma:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "Nie podano"}</p>
        <p><strong>Usługa:</strong> ${serviceType || "Ogólne zapytanie"}</p>
        <hr />
        <h3>Treść wiadomości:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Błąd podczas wysyłania wiadomości." }, { status: 500 });
  }
}
