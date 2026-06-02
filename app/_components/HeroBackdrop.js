"use client";

import { useState } from "react";

export default function HeroBackdrop() {
  const [isVideoReady, setIsVideoReady] = useState(false);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-100"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/living_room.webp"
        onLoadedData={() => setIsVideoReady(true)}
        className={`absolute inset-0 h-full w-full object-cover object-[38%_center] md:object-center transition-all duration-500 ${
          isVideoReady ? "blur-0 scale-100" : "blur-md scale-105"
        }`}
      >
        <source src="/video/airflow.mp4" type="video/mp4" />
      </video>

      {!isVideoReady && (
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/90 via-blue-900/70 to-slate-900/90" />
      )}
    </div>
  );
}
