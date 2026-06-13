"use server";

import { sendContactEmail } from "@/lib/email";

function normalizeContactPayload(data) {
  return {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone.trim(),
    subject: data.subject.trim(),
    message: data.message.trim(),
  };
}

export async function submitContactMessage(data) {
  try {
    await sendContactEmail(normalizeContactPayload(data));

    return { success: true };
  } catch (error) {
    console.error("Greška pri slanju kontakt poruke:", error);

    return {
      success: false,
      error: "Neuspešno slanje poruke. Pokušajte ponovo.",
    };
  }
}
