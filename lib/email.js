import nodemailer from "nodemailer";

const serviceLabels = {
  installation: "Instalacija klima uređaja",
  maintenance: "Održavanje HVAC sistema",
  repair: "Popravka električnih aparata",
  heatPump: "Instalacija i servis toplotnih pumpi",
  cleaning: "Čišćenje kanala",
  thermostat: "Instalacija termostata",
  emergency: "Hitna usluga",
};

function getServiceLabel(serviceType) {
  return serviceLabels[serviceType] ?? serviceType;
}

function isValidEmail(value) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP konfiguracija nije potpuna.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: {
      user,
      pass,
    },
  });
}

export async function sendReservationEmail(reservation) {
  const ownerEmail = process.env.OWNER_EMAIL;

  if (!ownerEmail) {
    throw new Error("OWNER_EMAIL nije postavljen.");
  }

  const transporter = createTransporter();
  const from = process.env.MAIL_FROM ?? process.env.SMTP_USER;

  const serviceType = getServiceLabel(reservation.serviceType);

  const text = [
    "Nova rezervacija",
    "",
    `ID rezervacije: ${reservation.id}`,
    `Tip usluge: ${serviceType}`,
    `Datum: ${reservation.date}`,
    `Vreme: ${reservation.time}`,
    `Ime i prezime: ${reservation.name}`,
    `Email: ${reservation.email}`,
    `Telefon: ${reservation.phone}`,
    `Adresa: ${reservation.address}`,
    `Napomene: ${reservation.notes || "-"}`,
  ].join("\n");

  const html = `
    <h2>Nova rezervacija</h2>
    <p><strong>ID rezervacije:</strong> ${reservation.id}</p>
    <p><strong>Tip usluge:</strong> ${serviceType}</p>
    <p><strong>Datum:</strong> ${reservation.date}</p>
    <p><strong>Vreme:</strong> ${reservation.time}</p>
    <p><strong>Ime i prezime:</strong> ${reservation.name}</p>
    <p><strong>Email:</strong> ${reservation.email}</p>
    <p><strong>Telefon:</strong> ${reservation.phone}</p>
    <p><strong>Adresa:</strong> ${reservation.address}</p>
    <p><strong>Napomene:</strong> ${reservation.notes || "-"}</p>
  `;

  const replyTo = reservation.email?.trim().toLowerCase();

  await transporter.sendMail({
    from,
    to: ownerEmail,
    ...(isValidEmail(replyTo) ? { replyTo } : {}),
    subject: `Nova rezervacija #${reservation.id} - ${serviceType}`,
    text,
    html,
  });
}
