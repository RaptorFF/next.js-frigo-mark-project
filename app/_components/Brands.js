"use client";

import Image from "next/image";
import { BLUR_DATA_URL } from "@/app/_data/media";
import { useInfiniteMarquee } from "@/app/_hooks/useInfiniteMarquee";

export default function Brendovi() {
  const { isDragging, trackRef, marqueeHandlers } = useInfiniteMarquee({
    desktopDuration: 30000,
    mobileDuration: 40000,
  });

  const brands = [
    { name: "Vox", img: "/brands/vox.png" },
    { name: "Vivax", img: "/brands/vivax.png" },
    { name: "Samsung", img: "/brands/samsung.png" },
    { name: "LG", img: "/brands/lg.png" },
    { name: "Gorenje", img: "/brands/gorenje.png" },
    { name: "Bosch", img: "/brands/bosch.png" },
    { name: "Whirlpool", img: "/brands/whirlpool.png" },
    { name: "Beko", img: "/brands/beko.jpg" },
    { name: "Electrolux", img: "/brands/electrolux.png" },
    { name: "Candy", img: "/brands/candy.png" },
  ];

  // Dupliramo niz za neprekidnu marquee animaciju
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="section-container bg-blue-100 py-8 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 lg:px-10 text-center">
        <h1 className="mb-10 text-3xl font-semibold">
          Brendovi koje održavamo i ugrađujemo
        </h1>
        <div
          className={`relative w-full overflow-hidden marquee-fade touch-pan-y select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          {...marqueeHandlers}
        >
          <div
            ref={trackRef}
            className="flex w-max gap-8 py-2 will-change-transform"
          >
            {marqueeBrands.map((brand, idx) => (
              <div
                key={brand.name + idx}
                className="flex items-center justify-center bg-white rounded-lg shadow-md px-6 py-3 min-w-30 h-20 mx-2"
              >
                <Image
                  src={brand.img}
                  alt={brand.name}
                  width={100}
                  height={48}
                  sizes="100px"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  className="h-12 object-contain max-w-25"
                  style={{ filter: "grayscale(0.2)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
