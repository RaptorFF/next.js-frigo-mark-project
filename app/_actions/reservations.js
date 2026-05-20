"use server";

import pool from "@/lib/db";

export async function submitReservation(data) {
  const { serviceType, date, time, name, email, phone, address, notes } = data;

  try {
    const result = await pool.query(
      `INSERT INTO reservations
        (service_type, preferred_date, preferred_time, name, email, phone, address, notes)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING id`,
      [serviceType, date, time, name, email, phone, address, notes ?? ""],
    );

    return { success: true, id: result.rows[0].id };
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
