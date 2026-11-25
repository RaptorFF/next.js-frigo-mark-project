import Image from "next/image";
import Link from "next/link";
import { BLUR_DATA_URL } from "@/app/_data/media";

const products = [
  { name: "Vox", image: "/brands/vox.png" },
  { name: "Vivax", image: "/brands/vivax.png" },
  { name: "Samsung", image: "/brands/samsung.png" },
];

export default function ProductOffer() {
  return (
    <section
      id="ponuda"
      className="section-container scroll-mt-24 bg-white"
      aria-labelledby="product-offer-title"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-14">
          <h2
            id="product-offer-title"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Klima uređaji u ponudi
          </h2>
          <p className="text-lg text-gray-600 mx-auto leading-relaxed py-2">
            Izaberite brend, a mi ćemo vam pomoći da pronađete uređaj koji
            odgovara vašem prostoru i budžetu.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="flex flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-7 flex h-24 items-center justify-center rounded-lg bg-blue-50 px-8">
                <Image
                  src={product.image}
                  alt={`${product.name} logo`}
                  width={160}
                  height={80}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  className="h-14 w-full object-contain"
                />
              </div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
                Klima uređaji
              </p>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                {product.name}
              </h3>
              <p className="mb-8 leading-relaxed text-gray-600">
                Za aktuelne modele, dostupnost i cenu, pošaljite nam upit.
                Pomoći ćemo vam pri izboru i ugradnji.
              </p>
              <Link
                href="/contact"
                className="mt-auto flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:shadow-md"
              >
                Zatražite ponudu
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
