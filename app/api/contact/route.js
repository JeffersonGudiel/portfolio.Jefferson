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

    // Validación de campos requeridos
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    // Configuración de Nodemailer para iCloud
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.me.com",
      port: 587,
      secure: false, // true si usas el puerto 465
      auth: {
        user: process.env.EMAIL_USER, // Tu correo principal de iCloud
        pass: process.env.EMAIL_PASS, // Contraseña de aplicación generada en Apple ID
      },
    });

    // Verificar la conexión con el servidor SMTP
    await transporter.verify();

    // Enviar el correo electrónico
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "jeffersongudiel@icloud.com",
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Correo enviado exitosamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { error: "Error interno del servidor", details: error.message },
      { status: 500 }
    );
  }
}
