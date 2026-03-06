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
    <section className="section-container bg-blue-50">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Book Your Service
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Schedule your appointment quickly and easily
          </p>
        </div>

        {booked && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✓ Your appointment has been scheduled! We&apos;ll confirm via email
            shortly.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-12 space-y-8 border border-gray-100"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 font-semibold mb-3">
                Service Type *
              </label>
              <select
                name="serviceType"
                value={bookingData.serviceType}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
              >
                <option value="">Select service</option>
                <option value="installation">AC Installation</option>
                <option value="repair">Heating Repair</option>
                <option value="maintenance">HVAC Maintenance</option>
                <option value="cleaning">Ductwork Cleaning</option>
                <option value="thermostat">Thermostat Installation</option>
                <option value="emergency">Emergency Service</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-3">
                Preferred Date *
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
                Preferred Time *
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
                Full Name *
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
                Phone Number *
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
              Service Address *
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
              Additional Notes
            </label>
            <textarea
              name="notes"
              value={bookingData.notes}
              onChange={handleChange}
              rows="5"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition resize-none"
              placeholder="Tell us about your HVAC system or any special requirements..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition text-lg shadow-md hover:shadow-lg"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
}
