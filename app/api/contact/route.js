import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Handler GET: Solo para confirmar que la ruta está funcionando.
export async function GET() {
  return NextResponse.json(
    { message: "API funcionando (GET)" },
    { status: 200 }
  );
}

// Handler POST: Procesa la solicitud y envía el correo.
export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, company, subject, message } = body;

    // Configuración de Nodemailer para iCloud (ajusta si usas otro servicio)
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.me.com", // Servidor SMTP de iCloud
      port: 587, // Usa 465 si prefieres SSL
      secure: false, // true si usas el puerto 465
      auth: {
        user: process.env.EMAIL_USER, // Tu correo principal de iCloud (no el alias)
        pass: process.env.EMAIL_PASS, // Contraseña de aplicación generada en Apple ID
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "jeffersongudiel@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
