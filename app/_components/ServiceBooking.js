"use client";

import { useState } from "react";
import { submitReservation } from "@/app/_actions/reservations";

const EMPTY_FORM = {
  serviceType: "",
  date: "",
  time: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  notes: "",
};

const SERVICE_LABELS = {
  installation: "Instalacija klima uređaja",
  maintenance: "Održavanje HVAC sistema",
  repair: "Popravka električnih aparata",
  heatPump: "Instalacija i servis toplotnih pumpi",
  cleaning: "Čišćenje kanala",
  thermostat: "Instalacija termostata",
  emergency: "Hitna usluga",
};

export default function ServiceBooking() {
  const [bookingData, setBookingData] = useState(EMPTY_FORM);
  const [booked, setBooked] = useState(false);
  const [bookingSummary, setBookingSummary] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setBooked(false);
    setBookingSummary(null);

    const payload = { ...bookingData };

    const result = await submitReservation(payload);

    setLoading(false);

    if (result.success) {
      setBookingSummary({
        id: result.id,
        serviceType: SERVICE_LABELS[payload.serviceType] ?? payload.serviceType,
        date: payload.date,
        time: payload.time,
      });
      setBooked(true);
      setBookingData(EMPTY_FORM);
      setTimeout(() => {
        setBooked(false);
        setBookingSummary(null);
      }, 9000);
    } else {
      setBooked(false);
      setBookingSummary(null);
      setError(
        result.error ??
          "Neuspešno slanje rezervacije. Proverite podatke i pokušajte ponovo.",
      );
      setTimeout(() => setError(""), 9000);
    }
  };

  return (
    <section className="section-container bg-blue-100 flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Rezervišite svoju HVAC uslugu danas
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed py-4">
            Rezervišite svoj termin brzo i jednostavno
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-12 space-y-8 border border-gray-100"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 font-semibold mb-3">
                Tip usluge *
              </label>
              <select
                name="serviceType"
                value={bookingData.serviceType}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
              >
                <option value="">Izaberite uslugu</option>
                <option value="installation">Instalacija klima uređaja</option>
                <option value="maintenance">Održavanje HVAC sistema</option>
                <option value="repair">Popravka električnih aparata</option>
                <option value="heatPump">
                  Instalacija i servis toplotnih pumpi
                </option>
                <option value="cleaning">Čišćenje kanala</option>
                <option value="thermostat">Instalacija termostata</option>
                <option value="emergency">Hitna usluga</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-3">
                Preferirani datum *
              </label>
              <input
                type="date"
                name="date"
                value={bookingData.date}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 font-semibold mb-3">
                Preferirano vreme *
              </label>
              <input
                type="time"
                name="time"
                value={bookingData.time}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-3">
                Puno ime *
              </label>
              <input
                type="text"
                name="name"
                value={bookingData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                placeholder="Petar Petrović"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-3">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={bookingData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                placeholder="petar.petrovic@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-3">
                Broj telefona *
              </label>
              <input
                type="tel"
                name="phone"
                value={bookingData.phone}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                placeholder="060/123-4567"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-3">
              Adresa usluge *
            </label>
            <input
              type="text"
              name="address"
              value={bookingData.address}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
              placeholder="Ulica i broj, Grad"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-3">
              Dodatne napomene
            </label>
            <textarea
              name="notes"
              value={bookingData.notes}
              onChange={handleChange}
              rows="5"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition resize-none"
              placeholder="Recite nam nešto o vašem HVAC sistemu ili bilo kojim posebnim zahtevima..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition text-lg shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Slanje rezervacije..." : "Potvrdite rezervaciju"}
          </button>
        </form>
      </div>

      {booked && bookingSummary && (
        <div className="fixed z-50 left-4 right-4 bottom-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-full sm:max-w-md">
          <div
            role="status"
            aria-live="polite"
            className="toast-enter rounded-lg border border-green-400 bg-green-100 text-green-900 shadow-xl p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold">Rezervacija je uspešno poslata.</p>
                <p className="mt-1 text-sm">
                  Uskoro ćemo vas kontaktirati putem emaila ili telefona koji
                  ste uneli.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setBooked(false);
                  setBookingSummary(null);
                }}
                className="text-green-900/80 hover:text-green-900 font-semibold"
                aria-label="Zatvori obaveštenje"
              >
                ✕
              </button>
            </div>
            <p className="mt-2 text-sm">
              Usluga:{" "}
              <span className="font-medium">{bookingSummary.serviceType}</span>
            </p>
            <p className="text-sm">
              Termin: <span className="font-medium">{bookingSummary.date}</span>{" "}
              u <span className="font-medium">{bookingSummary.time}</span>
            </p>
            {bookingSummary.id && (
              <p className="text-sm">Broj rezervacije: #{bookingSummary.id}</p>
            )}
            <p className="mt-2 text-sm">
              Ako ne dobijete odgovor u roku od 24h, pozovite nas na
              064/286-9648.
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="fixed z-50 left-4 right-4 bottom-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-full sm:max-w-md">
          <div
            role="alert"
            aria-live="assertive"
            className="toast-enter rounded-lg border border-red-400 bg-red-100 text-red-900 shadow-xl p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-medium">{error}</p>
              <button
                type="button"
                onClick={() => setError("")}
                className="text-red-900/80 hover:text-red-900 font-semibold"
                aria-label="Zatvori obaveštenje o grešci"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .toast-enter {
          animation: toast-enter 180ms ease-out;
        }

        @keyframes toast-enter {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .toast-enter {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
