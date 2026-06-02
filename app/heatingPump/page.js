import Image from "next/image";
import Link from "next/link";
import { BLUR_DATA_URL } from "@/app/_data/media";

export default function HeatingPumpPage() {
  return (
    <section className="mx-auto pt-32 pb-20 px-6 lg:px-8 bg-blue-50">
      <div className="space-y-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 tracking-tight text-left">
            Ugradnja i servis toplotnih pumpi
          </h1>
          <div className="overflow-hidden">
            <Image
              src="/images/heat-pump.jpg"
              alt="Toplotna pumpa u stambenom objektu"
              width={1200}
              height={720}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="float-right ml-0 md:ml-8 mb-6 md:mb-4 w-full md:w-1/2 h-80 md:h-104 object-cover rounded-2xl shadow-lg"
            />
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Toplotne pumpe predstavljaju savremeno, energetski efikasno i
              dugoročno isplativo rešenje za grejanje i hlađenje prostora. Naš
              tim pruža kompletnu uslugu planiranja, ugradnje i servisiranja
              sistema prilagođenih potrebama domaćinstava, poslovnih prostora i
              manjih industrijskih objekata.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Svaki projekat započinjemo procenom objekta, analizom potrošnje i
              izborom odgovarajućeg modela toplotne pumpe. Tokom montaže vodimo
              računa o pravilnom pozicioniranju jedinica, kvalitetnom
              povezivanju instalacija i preciznom puštanju sistema u rad, kako
              bi performanse bile maksimalne od prvog dana.
            </p>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              Pored ugradnje, nudimo redovno održavanje i servisne intervencije
              koje obuhvataju proveru rada kompresora, cirkulacije, upravljačke
              elektronike i celokupne efikasnosti sistema. Redovnim servisom
              produžava se vek trajanja opreme, smanjuje potrošnja energije i
              obezbeđuje stabilan rad tokom cele godine.
            </p>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              Usluge su dostupne u Nišu i okolini, uz stručnu podršku pre i
              nakon ugradnje. Pomažemo vam da odaberete pouzdano i ekonomično
              rešenje za vaš prostor.{" "}
              <Link
                href="/contact"
                className="text-black hover:text-blue-900 font-semibold"
              >
                Kontaktirajte
              </Link>{" "}
              nas kako bismo pripremili ponudu i zakazali izlazak na teren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
