import Image from "next/image";
import { BLUR_DATA_URL } from "@/app/_data/media";

export default function ContactPage() {
  return (
    <section className="relative isolate z-10 w-full overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Pozadina - slika */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ac-background.webp"
          alt="Pozadina"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover"
        />
        {/* Overlay za bolje čitanje teksta */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Sadržaj - kartice */}
      <div className="relative z-10 w-full mx-auto px-8 md:px-10 py-8">
        <div className="max-w-450 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight text-center">
            Kontaktirajte nas
          </h1>
          <p className="text-lg text-gray-100 mb-16 text-center">
            Pozovite nas ili pronađite našu lokaciju
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-22 mt-16 pt-10 px-8 md:px-16">
            {/* Leva kartica - Kontakt podaci */}
            <article className="rounded-2xl border border-white/16 bg-white/75 p-6 md:p-8 shadow-2xl backdrop-blur-md transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-3 tracking-tight">
                Kontakt
              </h2>
              <p className="text-gray-900 leading-relaxed text-base md:text-lg mb-6 font-medium">
                Pozovite nas, bilo da vam je potreban servis, instalacija ili
                savet, naš tim je spreman da pomogne.
              </p>
              <div className="text-gray-950 text-base md:text-lg space-y-3 font-medium mb-6">
                <p>
                  <span className="font-bold">Telefon:</span> 064/286-9648
                </p>
                <p>
                  <span className="font-bold">Adresa:</span> Subotička 12, Niš,
                  Србија
                </p>
                <p>
                  <span className="font-bold">Email:</span>{" "}
                  aleksandarm985@gmail.com
                </p>
                <p>
                  <span className="font-bold">Radno vrijeme:</span> Pon-Pet
                  09:00-17:00
                </p>
              </div>
            </article>

            {/* Desna kartica - Mapa */}
            <article className="rounded-2xl border border-white/16 bg-white/35 overflow-hidden shadow-lg backdrop-blur-md transition-all duration-300 flex flex-col min-h-96">
              <div className="relative w-full flex-1">
                <iframe
                  title="Lokacija firme"
                  src="https://maps.google.com/maps?q=Suboti%C4%8Dka%2012%2C%20Ni%C5%A1&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
