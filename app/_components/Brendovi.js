// Brendovi.js
// Prikazuje brendove koje servis održava i ugrađuje

export default function Brendovi() {
  const brands = [
    { name: "Vox", img: "/brands/vox.png" },
    { name: "Samsung", img: "/brands/samsung.png" },
    { name: "LG", img: "/brands/lg.png" },
    { name: "Gorenje", img: "/brands/gorenje.png" },
    { name: "Bosch", img: "/brands/bosch.png" },
    { name: "Whirlpool", img: "/brands/whirlpool.png" },
    { name: "Beko", img: "/brands/beko.png" },
    { name: "Electrolux", img: "/brands/electrolux.png" },
    { name: "Candy", img: "/brands/candy.png" },
    { name: "Indesit", img: "/brands/indesit.png" },
    { name: "Siemens", img: "/brands/siemens.png" },
    { name: "Miele", img: "/brands/miele.png" },
    { name: "Zanussi", img: "/brands/zanussi.png" },
    { name: "Ariston", img: "/brands/ariston.png" },
    { name: "Philips", img: "/brands/philips.png" },
  ];

  // Dupliramo niz za beskonačnu animaciju
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-6 text-2xl font-semibold">
          Brendovi koje održavamo i ugrađujemo
        </h2>
        <div className="overflow-hidden relative">
          <div
            className="flex gap-8 animate-marquee whitespace-nowrap"
            style={{ animationDuration: "30s" }}
          >
            {marqueeBrands.map((brand, idx) => (
              <div
                key={brand.name + idx}
                className="flex items-center justify-center bg-white rounded-lg shadow-md px-6 py-3 min-w-[120px] h-20 mx-2"
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="h-12 object-contain max-w-[100px]"
                  loading="lazy"
                  style={{ filter: "grayscale(0.2)" }}
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
          animation: marquee linear infinite;
        }
      `}</style>
    </section>
  );
}
