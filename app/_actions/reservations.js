"use server";

import pool from "@/lib/db";
import { sendReservationEmail } from "@/lib/email";

function isEnvTrue(value) {
  const normalized = String(value ?? "")
    .trim()
    .replace(/^['\"]|['\"]$/g, "")
    .toLowerCase();

  return ["true", "1", "yes", "on"].includes(normalized);
}

function shouldUseEmailOnlyMode() {
  if (isEnvTrue(process.env.RESERVATIONS_EMAIL_ONLY)) return true;

  const dbUrl = String(process.env.DATABASE_URL ?? "")
    .trim()
    .toLowerCase();
  if (!dbUrl) return true;

  // In hosted environments localhost DB is unreachable; fallback to email-only.
  return dbUrl.includes("127.0.0.1") || dbUrl.includes("localhost");
}

function buildEmailPayload(id, data) {
  return {
    id,
    serviceType: data.serviceType,
    date: data.date,
    time: data.time,
    name: data.name,
    email: data.email,
    phone: data.phone,
    address: data.address,
    notes: data.notes ?? "",
  };
}

export async function submitReservation(data) {
  const { serviceType, date, time, name, email, phone, address, notes } = data;
  const emailOnlyMode = shouldUseEmailOnlyMode();

  if (emailOnlyMode) {
    try {
      await sendReservationEmail(
        buildEmailPayload(`email-${Date.now()}`, {
          serviceType,
          date,
          time,
          name,
          email,
          phone,
          address,
          notes,
        }),
      );

      return { success: true, id: null };
    } catch (error) {
      console.error("Greška pri slanju rezervacije na email:", error);
      return {
        success: false,
        error: "Neuspešno slanje emaila. Pokušajte ponovo.",
      };
    }
  }

  try {
    const result = await pool.query(
      `INSERT INTO reservations
        (service_type, preferred_date, preferred_time, name, email, phone, address, notes)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING id`,
      [serviceType, date, time, name, email, phone, address, notes ?? ""],
    );

    const reservationId = result.rows[0].id;

    try {
      await sendReservationEmail(
        buildEmailPayload(reservationId, {
          serviceType,
          date,
          time,
          name,
          email,
          phone,
          address,
          notes,
        }),
      );
    } catch (emailError) {
      console.error("Greška pri slanju email obaveštenja:", emailError);
    }

    return { success: true, id: reservationId };
  } catch (error) {
    console.error("Greška pri čuvanju rezervacije:", error);

    // Fallback: even if DB fails, still try to deliver reservation to owner email.
    try {
      await sendReservationEmail(
        buildEmailPayload(`email-fallback-${Date.now()}`, {
          serviceType,
          date,
          time,
          name,
          email,
          phone,
          address,
          notes,
        }),
      );

      return { success: true, id: null };
    } catch (emailError) {
      console.error("Greška pri fallback slanju emaila:", emailError);
      return { success: false, error: "Došlo je do greške. Pokušajte ponovo." };
    }
  }
}

export async function getReservations() {
  const result = await pool.query(
    `SELECT * FROM reservations ORDER BY preferred_date ASC, preferred_time ASC`,
  );
  return result.rows;
}

export async function updateReservationStatus(id, status) {
  await pool.query(`UPDATE reservations SET status = $1 WHERE id = $2`, [
    status,
    id,
  ]);
  return { success: true };
}
