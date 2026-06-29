"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const reasons = [
  {
    title: "Brza intervencija",
    description:
      "Izlazimo na teren u najkraćem roku i rešavamo kvar bez nepotrebnog čekanja.",
  },
  {
    title: "Iskusan tim",
    description:
      "Naši tehničari imaju dugogodišnje iskustvo sa klima uređajima i belom tehnikom.",
  },
  {
    title: "Transparentne cene",
    description:
      "Pre početka rada dobijate jasnu procenu troškova, bez skrivenih dodataka.",
  },
  {
    title: "Garancija na uslugu",
    description:
      "Stojimo iza kvaliteta izvedenih radova i obezbeđujemo podršku i nakon servisa.",
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
            Zašto izabrati nas
          </h2>
          <p className="text-lg text-gray-600 mx-auto leading-relaxed py-2 max-w-3xl">
            Kombinujemo brzinu, znanje i pouzdanost kako biste dobili uslugu bez
            stresa i bez neizvesnosti.
          </p>
        </div>

        <div
          className={`relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-blue-200/80 transform transition-all duration-700 ease-out w-full ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-linear-to-br from-slate-700 via-slate-800 to-slate-950" />
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/workStation.png"
              alt="Frigomark servisni tim na terenu"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 100vw"
              className="object-cover object-center"
              priority={true}
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/56 via-slate-950/24 to-slate-900/12" />
          </div>

          <div className="relative z-10 min-h-96 sm:min-h-96 lg:min-h-112 px-4 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="flex flex-col justify-end pt-16 sm:pt-32 lg:pt-44">
              <div className="mb-8 max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] bg-linear-to-b from-cyan-100 via-sky-200 to-blue-100 bg-clip-text text-transparent">
                  Frigomark servis
                </p>
                <p className="mt-3 text-xl leading-relaxed text-blue-50/95 sm:text-2xl">
                  Pouzdan tim koji brzo izlazi na teren i rešava problem bez
                  nepotrebnog čekanja.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {reasons.map((reason, idx) => (
                  <article
                    key={reason.title}
                    className={`rounded-2xl border border-white/16 bg-white/58 p-8 shadow-lg backdrop-blur-sm transform transition-all duration-700 ease-out ${
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
          </div>
        </div>
      </div>
    </section>
  );
}
