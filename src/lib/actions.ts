"use server";

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
    const response = await fetch(process.env.CONTACT_WORKER_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, company, email, phone, message }),
    });

    const result = await response.json() as { success: boolean };

    if (!result.success) {
      return { success: false, message: "Error al enviar el mensaje. Intenta de nuevo." };
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Error al enviar el mensaje. Intenta de nuevo." };
  }
}
