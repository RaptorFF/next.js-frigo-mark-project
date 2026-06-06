"use server";

import pool from "@/lib/db";
import { sendReservationEmail } from "@/lib/email";

export async function submitReservation(data) {
  const { serviceType, date, time, name, email, phone, address, notes } = data;
  const emailOnlyMode = process.env.RESERVATIONS_EMAIL_ONLY === "true";

  if (emailOnlyMode) {
    try {
      await sendReservationEmail({
        id: `email-${Date.now()}`,
        serviceType,
        date,
        time,
        name,
        email,
        phone,
        address,
        notes: notes ?? "",
      });

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
      await sendReservationEmail({
        id: reservationId,
        serviceType,
        date,
        time,
        name,
        email,
        phone,
        address,
        notes: notes ?? "",
      });
    } catch (emailError) {
      console.error("Greška pri slanju email obaveštenja:", emailError);
    }

    return { success: true, id: reservationId };
  } catch (error) {
    console.error("Greška pri čuvanju rezervacije:", error);
    return { success: false, error: "Došlo je do greške. Pokušajte ponovo." };
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
