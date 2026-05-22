"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ActionState = {
  success: boolean;
  message?: string;
} | null;

export async function sendContact(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const name = formData.get("name") as string;
  const company = formData.get("company") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, message: "Completa los campos requeridos" };
  }

  try {
    await resend.emails.send({
      from: "Intrepid <onboarding@resend.dev>",
      to: "info@intrepid.com",
      subject: `Contacto de ${name}${company ? ` - ${company}` : ""}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Empresa:</strong> ${company || "No especificada"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No especificado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Error al enviar el mensaje. Intenta de nuevo." };
  }
}
