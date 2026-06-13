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

const contactSubjectLabels = {
  repair: "Zahtev za popravku",
  installation: "Usluga instalacije",
  maintenance: "Plan održavanja",
  emergency: "Hitna usluga",
  inquiry: "Opšti upit",
};

function getServiceLabel(serviceType) {
  return serviceLabels[serviceType] ?? serviceType;
}

function getContactSubjectLabel(subject) {
  return contactSubjectLabels[subject] ?? subject;
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

export async function sendContactEmail(message) {
  const ownerEmail = process.env.OWNER_EMAIL;

  if (!ownerEmail) {
    throw new Error("OWNER_EMAIL nije postavljen.");
  }

  const transporter = createTransporter();
  const from = process.env.MAIL_FROM ?? process.env.SMTP_USER;

  const subjectLabel = getContactSubjectLabel(message.subject);
  const text = [
    "Nova kontakt poruka",
    "",
    `Tema: ${subjectLabel}`,
    `Ime i prezime: ${message.name}`,
    `Email: ${message.email}`,
    `Telefon: ${message.phone || "-"}`,
    `Poruka: ${message.message}`,
  ].join("\n");

  const html = `
    <h2>Nova kontakt poruka</h2>
    <p><strong>Tema:</strong> ${subjectLabel}</p>
    <p><strong>Ime i prezime:</strong> ${message.name}</p>
    <p><strong>Email:</strong> ${message.email}</p>
    <p><strong>Telefon:</strong> ${message.phone || "-"}</p>
    <p><strong>Poruka:</strong></p>
    <p>${message.message}</p>
  `;

  const replyTo = message.email?.trim().toLowerCase();

  await transporter.sendMail({
    from,
    to: ownerEmail,
    ...(isValidEmail(replyTo) ? { replyTo } : {}),
    subject: `Nova kontakt poruka - ${subjectLabel}`,
    text,
    html,
  });
}
