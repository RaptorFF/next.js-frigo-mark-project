"use client";

import { useState } from "react";

export default function ServiceBooking() {
  const [bookingData, setBookingData] = useState({
    serviceType: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  const [booked, setBooked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", bookingData);
    setBooked(true);
    setBookingData({
      serviceType: "",
      date: "",
      time: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      notes: "",
    });
    setTimeout(() => setBooked(false), 3000);
  };

  return (
    <section className="section-container bg-blue-50 flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Rezervišite Svoju Uslugu HVAC Danas
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed py-4">
            Rezervišite svoj termin brzo i jednostavno
          </p>
        </div>

        {booked && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✓ Vaš termin je uspešno zakazan! Potvrdu ćete uskoro dobiti putem
            e-pošte.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-12 space-y-8 border border-gray-100"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 font-semibold mb-3">
                Tip Usluge *
              </label>
              <select
                name="serviceType"
                value={bookingData.serviceType}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
              >
                <option value="">Izaberite uslugu</option>
                <option value="installation">Instalacija Klima Uređaja</option>
                <option value="repair">Popravka Grejanja</option>
                <option value="maintenance">Održavanje HVAC Sistema</option>
                <option value="cleaning">Čišćenje Kanala</option>
                <option value="thermostat">Instalacija Termostata</option>
                <option value="emergency">Hitna Usluga</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-3">
                Preferirani Datum *
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
                Preferirano Vreme *
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
                Puno Ime *
              </label>
              <input
                type="text"
                name="name"
                value={bookingData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                placeholder="John Doe"
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
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-3">
                Broj Telefona *
              </label>
              <input
                type="tel"
                name="phone"
                value={bookingData.phone}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-3">
              Adresa Usluge *
            </label>
            <input
              type="text"
              name="address"
              value={bookingData.address}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
              placeholder="123 Main St, City, State 12345"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-3">
              Dodatne Napomene
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
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition text-lg shadow-md hover:shadow-lg"
          >
            Potvrdite Rezervaciju
          </button>
        </form>
      </div>
    </section>
  );
}
