"use client";

import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    title: "Brza intervencija",
    description:
      "Izlazimo na teren u najkracem roku i resavamo kvar bez nepotrebnog cekanja.",
  },
  {
    title: "Iskusan tim",
    description:
      "Nasi tehnicari imaju dugogodisnje iskustvo sa klima uredjajima i belom tehnikom.",
  },
  {
    title: "Transparentne cene",
    description:
      "Pre pocetka rada dobijate jasnu procenu troskova, bez skrivenih dodataka.",
  },
  {
    title: "Garancija na uslugu",
    description:
      "Stojimo iza kvaliteta izvedenih radova i obezbedjujemo podrsku i nakon servisa.",
  },
];

export default function WhyUs() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsVisible(true);
        observer.disconnect();
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="section-container scroll-mt-24 bg-blue-100 flex flex-col items-center"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Zasto izabrati nas
          </h2>
          <p className="text-lg text-gray-600 mx-auto leading-relaxed py-2 max-w-3xl">
            Kombinujemo brzinu, znanje i pouzdanost kako biste dobili uslugu bez
            stresa i bez neizvesnosti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, idx) => (
            <article
              key={reason.title}
              className={`rounded-xl shadow-lg p-8 bg-white border border-gray-200 transform transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 160}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-8 w-8"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 7L10 17L5 12"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
