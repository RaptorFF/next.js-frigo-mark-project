"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVideoReady, setIsVideoReady] = useState(false);
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setIsVideoReady(true);
    }, 1200);

    return () => clearTimeout(fallbackTimer);
  }, []);

  const frigoClass =
    "bg-linear-to-b from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent";
  const markClass =
    "bg-linear-to-b from-slate-100 via-slate-300 to-slate-500 bg-clip-text text-transparent";

  return (
    <section className="relative isolate w-full h-screen overflow-hidden bg-slate-900">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/living_room.png"
        onLoadedMetadata={() => setIsVideoReady(true)}
        onLoadedData={() => setIsVideoReady(true)}
        onCanPlay={() => setIsVideoReady(true)}
        className={`absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover object-[38%_center] md:object-center z-0 transition-all duration-500 ${
          isVideoReady ? "blur-0 scale-100" : "blur-md scale-105"
        }`}
      >
        <source src="/video/airflow.mp4" type="video/mp4" />
      </video>

      {!isVideoReady && (
        <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-slate-900/90 via-blue-900/70 to-slate-900/90" />
      )}

      <div className="relative z-20 flex flex-col items-start justify-center h-full text-left w-full max-w-3xl pl-4 md:pl-12 pr-4 translate-y-16 md:translate-y-24">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6 fade-in-up [animation-delay:100ms] [animation-fill-mode:both]">
          Budi cool sa{" "}
          <span className="block">
            <span className={frigoClass}>Frigo</span>
            <span className={markClass}>mark</span>
          </span>{" "}
          HVAC uslugama
        </h1>
        <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-2xl fade-in-up [animation-delay:350ms] [animation-fill-mode:both]">
          Profesionalne HVAC usluge za grejanje, hlađenje i kvalitet vazduha.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 fade-in-up [animation-delay:550ms] [animation-fill-mode:both]">
          <Link
            href="/serviceBooking"
            className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Zakažite termin
          </Link>
          <Link
            href="/about"
            className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition"
          >
            Saznaj više
          </Link>
        </div>
      </div>
    </section>
  );
}
