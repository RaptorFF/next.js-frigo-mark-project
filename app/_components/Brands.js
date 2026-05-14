import Image from "next/image";

export default function Brendovi() {
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
    { name: "Indesit", img: "/brands/indesit.jpg" },
  ];

  // Dupliramo niz za beskonačnu animaciju
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="section-container bg-blue-50 flex flex-col items-center py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <h1 className="mb-10 text-3xl font-semibold">
          Brendovi koje održavamo i ugrađujemo
        </h1>
        <div className="overflow-hidden relative">
          <div
            className="flex w-max gap-8 animate-marquee"
            style={{ animationDuration: "30s" }}
          >
            {marqueeBrands.map((brand, idx) => (
              <div
                key={brand.name + idx}
                className="flex items-center justify-center bg-white rounded-lg shadow-md px-6 py-3 min-w-[120px] h-20 mx-2"
              >
                <Image
                  src={brand.img}
                  alt={brand.name}
                  width={100}
                  height={48}
                  className="h-12 object-contain max-w-[100px]"
                  style={{ filter: "grayscale(0.2)" }}
                  loading="lazy"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tailwind custom animation: animate-marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
