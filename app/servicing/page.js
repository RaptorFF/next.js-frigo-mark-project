import Image from "next/image";
import Link from "next/link";
import { BLUR_DATA_URL } from "@/app/_data/media";

export default function ServicingPage() {
  return (
    <section className="mx-auto pt-32 pb-20 px-6 lg:px-8 bg-blue-50">
      <div className="space-y-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 tracking-tight text-left">
            Servisiranje kućnih aparata
          </h1>
          <div className="overflow-hidden">
            <Image
              src="/images/home-appliances.png"
              alt="Servisiranje kućnih aparata"
              width={1200}
              height={720}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="float-right ml-0 md:ml-8 mb-6 md:mb-4 w-full md:w-1/2 h-80 md:h-104 object-cover rounded-2xl shadow-lg"
            />
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Profesionalno servisiranje i popravka kućnih aparata zahteva
              stručnost, iskustvo i pravu opremu. Naš tim tehničara
              specijalizovan je za dijagnostiku i otklanjanje kvarova na širokom
              spektru uređaja — od šporeta i rerni do veš mašina i frižidera.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Svaki servisni posao počinjemo detaljnom dijagnostikom kako bismo
              tačno utvrdili uzrok kvara. Koristimo originalne rezervne delove i
              savremene alate, čime garantujemo dugotrajan i bezbedan rad
              uređaja nakon popravke. Naši tehničari su obučeni za rad sa svim
              poznatim brendovima.
            </p>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              Pored popravki, nudimo i preventivne preglede koji mogu sprečiti
              skuplje kvarove u budućnosti. Redovnim servisiranjem produžavate
              vek trajanja uređaja, smanjujete potrošnju električne energije i
              doprinosite bezbednosti svog doma. Nakon svake intervencije,
              klijent dobija potvrdu o obavljenom servisu.
            </p>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              <Link
                href="/contact"
                className="text-black hover:text-blue-900 font-semibold"
              >
                Kontaktirajte
              </Link>{" "}
              nas i zakažite servis — brzo, pouzdano i po pristupačnoj ceni.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
