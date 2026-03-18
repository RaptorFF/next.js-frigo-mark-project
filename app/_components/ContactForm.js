"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="section-container bg-white flex flex-col items-center"
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed py-4">
            Have questions? We&apos;d love to hear from you
          </p>
        </div>

        {submitted && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            Thank you! We&apos;ll contact you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 font-semibold mb-3">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                placeholder="John Doe"
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
                placeholder="john@example.com"
              />
            </div>
          </div>
          \n\n{" "}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 font-semibold mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-3">
                Subject
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
              >
                <option value="">Select a service</option>
                <option value="repair">Repair Request</option>
                <option value="installation">Installation Service</option>
                <option value="maintenance">Maintenance Plan</option>
                <option value="emergency">Emergency Service</option>
                <option value="inquiry">General Inquiry</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-3">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition resize-none"
              placeholder="Tell us about your HVAC needs..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition text-lg shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
