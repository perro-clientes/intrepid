import { EmailMessage } from "cloudflare:email";

interface Env {
  SEND_EMAIL: SendEmail;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    try {
      const body = await request.json() as Record<string, string>;
      const { name, company, email, phone, message } = body;

      if (!name || !email || !message) {
        return Response.json(
          { success: false, message: "Completa los campos requeridos" },
          { status: 400 },
        );
      }

      const emailContent = `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Empresa:</strong> ${company || "No especificada"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No especificado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `;

      const msg = new EmailMessage(
        "Intrepid <info@intrepid-logistics.com>",
        "info@intrepid-logistics.com",
        {
          subject: `Contacto de ${name}${company ? ` - ${company}` : ""}`,
          html: emailContent,
        },
      );

      await env.SEND_EMAIL.send(msg);

      return Response.json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      return Response.json(
        { success: false, message: "Error al enviar el mensaje. Intenta de nuevo." },
        { status: 500 },
      );
    }
  },
};
