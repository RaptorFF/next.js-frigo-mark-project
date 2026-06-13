"use client";

import { useState } from "react";
import { submitContactMessage } from "@/app/_actions/contact";

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm({
  withHeaderOffset = true,
  sectionClassName = "",
  containerClassName = "",
  compact = false,
}) {
  const [formData, setFormData] = useState(EMPTY_FORM);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSubmitted(false);

    const result = await submitContactMessage(formData);

    setLoading(false);

    if (result.success) {
      setSubmitted(true);
      setFormData(EMPTY_FORM);
      setTimeout(() => setSubmitted(false), 9000);
    } else {
      setError(result.error ?? "Neuspešno slanje poruke. Pokušajte ponovo.");
      setTimeout(() => setError(""), 9000);
    }
  };

  return (
    <section
      id="contact"
      className={`bg-white flex flex-col items-center rounded-lg ${
        compact ? "pb-8" : "pb-16"
      } ${
        withHeaderOffset ? "pt-(--header-height)" : "pt-6"
      } ${sectionClassName}`}
    >
      <div
        className={`max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 ${containerClassName}`}
      >
        <div className={`text-center ${compact ? "mb-8" : "mb-16"}`}>
          <h2
            className={`${compact ? "pt-4 text-3xl md:text-4xl" : "pt-10 text-4xl md:text-5xl"} font-bold text-gray-900 mb-6 tracking-tight`}
          >
            Pošaljite nam poruku
          </h2>
        </div>

        {submitted && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            Hvala! Uskoro ćemo vas kontaktirati.
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className={compact ? "space-y-6" : "space-y-8"}
        >
          <div className={`grid md:grid-cols-2 ${compact ? "gap-6" : "gap-8"}`}>
            <div>
              <label className="block text-gray-700 font-semibold mb-3">
                Ime i prezime
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                placeholder="Petar Petrović"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                placeholder="petar@example.com"
              />
            </div>
          </div>
          <div className={`grid md:grid-cols-2 ${compact ? "gap-6" : "gap-8"}`}>
            <div>
              <label className="block text-gray-700 font-semibold mb-3">
                Broj telefona
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                placeholder="060/123-4567"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-3">
                Tema
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
              >
                <option value="">Izaberite uslugu</option>
                <option value="repair">Zahtev za popravku</option>
                <option value="installation">Usluga instalacije</option>
                <option value="maintenance">Plan održavanja</option>
                <option value="emergency">Hitna usluga</option>
                <option value="inquiry">Opšti upit</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-3">
              Poruka
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={compact ? 5 : 6}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition resize-none"
              placeholder="Recite nam nešto o vašim potrebama za HVAC..."
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition text-lg shadow-md hover:shadow-lg disabled:cursor-not-allowed disabled:bg-blue-400"
          >
            {loading ? "Šaljem..." : "Pošaljite poruku"}
          </button>
        </form>
      </div>
    </section>
  );
}
