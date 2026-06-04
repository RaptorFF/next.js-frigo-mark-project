"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import HeroBackdrop with SSR disabled to prevent hydration issues
const HeroBackdrop = dynamic(() => import("./HeroBackdrop"), {
  ssr: false,
});

export default function Hero() {
  const frigoClass =
    "bg-linear-to-b from-blue-500 via-blue-700 to-blue-900 md:from-blue-300 md:via-blue-500 md:to-blue-700 bg-clip-text text-transparent";
  const markClass =
    "bg-linear-to-b from-slate-100 via-slate-300 to-slate-500 bg-clip-text text-transparent";

  return (
    <section className="relative isolate z-10 w-full h-screen overflow-hidden bg-transparent">
      <HeroBackdrop />
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left w-full max-w-3xl pl-4 md:pl-12 pr-4 translate-y-16 md:translate-y-24">
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
