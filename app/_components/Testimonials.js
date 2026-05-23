"use client";

import { testimonials } from "@/app/_data/testimonials";

export default function Testimonials() {
  const marqueeTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="section-container bg-blue-100 flex flex-col items-center"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Šta naši korisnici kažu
          </h2>
          <p className="text-lg text-gray-600 mx-auto leading-relaxed py-4">
            Pravi komentari zadovoljnih korisnika koji su isprobali naše usluge.
            Njihova iskustva i preporuke su naša najveća nagrada.
          </p>
        </div>

        <div className="overflow-hidden relative w-full marquee-fade">
          <div className="flex w-max gap-6 animate-marquee py-2">
            {marqueeTestimonials.map((testimonial, idx) => (
              <article
                key={`${testimonial.id}-${idx}`}
                className="bg-gray-50 rounded-xl shadow-md p-6 border border-gray-200 w-[20rem] sm:w-88 md:w-[24rem] shrink-0 hover:shadow-lg transition-shadow"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic leading-relaxed line-clamp-4">
                  &quot;{testimonial.text}&quot;
                </p>

                <div className="flex items-center">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
